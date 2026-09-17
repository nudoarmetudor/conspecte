import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

/** Afișează sub titlu sursa lecției (câmpul `sursa` din frontmatter), dacă există. */
const SursaNotei: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const raw = fileData.frontmatter?.sursa
  if (typeof raw !== "string" || raw.trim() === "") return null

  // Referințele interne (pagini din scanarea PDF, numele fișierelor) nu au sens pentru cititori.
  const text = raw
    .replace(/\s*\(PDF p\.[^)]*\)/g, "")
    .replace(/PDF curs \(AP_\d{2}_\d{2}_\d{4}\)/g, "material de curs")
    .replace(/^completare\b/i, "material redactat pentru acest site")
    .trim()

  return (
    <p class="sursa-notei">
      <span class="sursa-eticheta">Sursa:</span> {text}
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
