import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { FullSlug, resolveRelative } from "../../util/path"

/** `[[Nota|alias]]` → { tinta, text }; restul textului rămâne neatins. */
const RE_WIKILINK = /\[\[([^\]|#^\\]+)(?:[#^][^\]|\\]*)?(?:\\?\|([^\]]*))?\]\]/g

/** Afișează sub titlu sursa lecției (câmpul `sursa` din frontmatter), dacă există. */
const SursaNotei: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const raw = fileData.frontmatter?.sursa
  if (typeof raw !== "string" || raw.trim() === "") return null

  // Referințele interne (pagini din scanarea PDF, numele fișierelor) nu au sens pentru cititori.
  const text = raw
    .replace(/\s*\(PDF p\.[^)]*\)/g, "")
    .replace(/PDF curs \(AP_\d{2}_\d{2}_\d{4}\)/g, "material de curs")
    .replace(/^completare\b/i, "material redactat pentru acest site")
    .trim()

  // Unele note indică sursa printr-un wikilink spre nota despre manual. Îl transformăm
  // într-o legătură reală; dacă nota-țintă nu se publică, rămâne doar textul.
  const bucati: (string | { tinta: string; text: string })[] = []
  let ultim = 0
  for (const m of text.matchAll(RE_WIKILINK)) {
    if (m.index! > ultim) bucati.push(text.slice(ultim, m.index))
    bucati.push({ tinta: m[1].trim(), text: (m[2] ?? m[1]).trim() })
    ultim = m.index! + m[0].length
  }
  if (ultim < text.length) bucati.push(text.slice(ultim))

  const gasesteSlug = (nume: string) =>
    allFiles.find((f) => (f.filePath ?? "").replace(/\\/g, "/").endsWith(`/${nume}.md`))?.slug

  return (
    <p class="sursa-notei">
      <span class="sursa-eticheta">Sursa:</span>{" "}
      {bucati.map((bucata) => {
        if (typeof bucata === "string") return bucata
        const slug = gasesteSlug(bucata.tinta)
        if (!slug || !fileData.slug) return bucata.text
        return (
          <a href={resolveRelative(fileData.slug as FullSlug, slug as FullSlug)} class="internal">
            {bucata.text}
          </a>
        )
      })}
    </p>
  )
}

SursaNotei.css = `
.sursa-notei {
  margin: 0.2rem 0 1rem;
  padding: 0.45rem 0.75rem;
  border-left: 3px solid var(--secondary);
  border-radius: 0 6px 6px 0;
  background: var(--highlight);
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--darkgray);
}
.sursa-eticheta {
  font-weight: 700;
  color: var(--dark);
}
`

export default (() => SursaNotei) satisfies QuartzComponentConstructor
