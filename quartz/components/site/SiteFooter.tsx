import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { FullSlug, joinSegments, resolveRelative } from "../../util/path"
import { siteInfo } from "./siteInfo"
import cursuriJson from "../../../cursuri.json"

/** Sursa cursului căruia îi aparține pagina; paginile comune primesc sursa implicită. */
function sursaPaginii(fileData: QuartzComponentProps["fileData"]): string {
  const slugCurs =
    (typeof fileData.frontmatter?.curs === "string" ? fileData.frontmatter.curs : undefined) ??
    (fileData.slug ?? "").split("/")[0]
  const curs = cursuriJson.cursuri.find((c) => c.slug === slugCurs)
  return curs?.sursaScurta ?? siteInfo.sursaImplicita
}

/** Subsol: susținere, drepturi de autor, licență, sursa principală, credite tehnice. */
const SiteFooter: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
  const despre = allFiles.find((f) =>
    (f.filePath ?? "").replace(/\\/g, "/").endsWith(`/${siteInfo.paginaDespre}.md`),
  )
  // Pagina 404 poate fi servită la orice adresă, deci are nevoie de o cale absolută.
  const basePath = "/" + (cfg.baseUrl ?? "").split("/").slice(1).join("/")
  const despreHref = !despre?.slug
    ? undefined
    : fileData.slug === "404"
      ? joinSegments(basePath, encodeURI(despre.slug))
      : resolveRelative(fileData.slug as FullSlug, despre.slug as FullSlug)

  return (
    <footer class="site-subsol">
      <button type="button" class="subsol-sustine" data-sustine-deschide>
        ☕ Cumpără-mi o cafea
      </button>
      <p>
        © {siteInfo.an} {siteInfo.autor} · conținutul original este publicat sub licența{" "}
        <a href={siteInfo.licenta.url} rel="license noopener" target="_blank">
          {siteInfo.licenta.nume}
        </a>
        {despreHref && (
          <>
            {" "}
            · <a href={despreHref}>Despre, surse și licență</a>
          </>
        )}
      </p>
      <p class="subsol-sursa">
        Material de studiu neoficial, bazat pe {sursaPaginii(fileData)}. Fragmentele citate din
        manual aparțin autorilor lor.
      </p>
      <p class="subsol-tehnic">
        Construit cu{" "}
        <a href="https://quartz.jzhao.xyz/" target="_blank" rel="noopener">
          Quartz
        </a>{" "}
        · fără reclame și fără cookie-uri de urmărire
      </p>
    </footer>
  )
}

SiteFooter.css = `
.site-subsol {
  margin: 3rem 0 2rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--lightgray);
  text-align: left;
  font-size: 0.85rem;
  color: var(--gray);
}
.site-subsol p {
  margin: 0.4rem 0;
  line-height: 1.5;
}
.site-subsol a {
  color: var(--secondary);
}
.subsol-sustine {
  margin-bottom: 0.6rem;
  min-height: 44px;
  padding: 0.5rem 1rem;
  border: 1px solid var(--lightgray);
  border-radius: 999px;
  background: var(--light);
  color: var(--dark);
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
}
.subsol-sustine:hover,
.subsol-sustine:focus-visible {
  border-color: var(--secondary);
  color: var(--secondary);
}
`

export default (() => SiteFooter) satisfies QuartzComponentConstructor
