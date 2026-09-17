import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { FullSlug, joinSegments, pathToRoot } from "../../util/path"
import { siteInfo } from "./siteInfo"

/**
 * Fereastră „Susține-mă / Cumpără-mi o cafea", cu cod QR (pentru cine citește de pe
 * calculator) și buton-link (pentru cine citește deja de pe telefon).
 *
 * Se deschide:
 *  - la cerere: orice element cu atributul `data-sustine-deschide` sau orice link spre `#sustine`;
 *  - automat, discret: abia după ce cititorul a văzut cel puțin 3 pagini și a stat
 *    cel puțin 40 de secunde, o singură dată pe sesiune; după „închide" nu mai apare
 *    14 zile, după „plătește" nu mai apare 60 de zile.
 *
 * Se închide: ✕, „Nu acum", tasta Esc, clic în afara ferestrei.
 */
const SustinePopup: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  // Pagina 404 poate fi servită la orice adresă, deci are nevoie de o cale absolută.
  const root =
    fileData.slug === "404"
      ? "/" + (cfg.baseUrl ?? "").split("/").slice(1).join("/")
      : pathToRoot(fileData.slug as FullSlug)
  const qrSrc = joinSegments(root, siteInfo.plataQr)
  return (
    <dialog
      class="sustine-dialog"
      id="sustine-dialog"
      aria-labelledby="sustine-titlu"
      aria-describedby="sustine-text"
    >
      <div class="sustine-continut">
        <button type="button" class="sustine-inchide" aria-label="Închide" data-sustine-inchide>
          ×
        </button>

        <p class="sustine-emoji" aria-hidden="true">
          ☕
        </p>
        <h2 class="sustine-titlu" id="sustine-titlu">
          Îți sunt utile notițele?
        </h2>
        <p class="sustine-text" id="sustine-text">
          Conținutul rămâne gratuit. Dacă vrei să mă susții, îmi poți cumpăra o cafea —{" "}
          <strong>{siteInfo.plataSuma}</strong>, prin MIA.
        </p>

        <div class="sustine-actiuni">
          <a
            class="sustine-plateste"
            href={siteInfo.plataUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-sustine-plateste
          >
            Plătește {siteInfo.plataSuma}
          </a>
          <button type="button" class="sustine-mai-tarziu" data-sustine-inchide>
            Nu acum
          </button>
        </div>

        <figure class="sustine-qr">
          <img
            src={qrSrc}
            width={210}
            height={210}
            alt={`Cod QR MIA pentru o donație de ${siteInfo.plataSuma}`}
            loading="lazy"
          />
          <figcaption>Scanează cu aplicația băncii tale</figcaption>
        </figure>
      </div>
    </dialog>
  )
}

SustinePopup.css = `
.sustine-dialog {
  border: none;
  padding: 0;
  width: 100%;
  max-width: min(400px, calc(100vw - 2rem));
  border-radius: 16px;
  background: var(--light);
  color: var(--darkgray);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
}
.sustine-dialog::backdrop {
  background: rgba(10, 10, 15, 0.55);
}
.sustine-continut {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.7rem;
  padding: 1.6rem 1.5rem 1.2rem;
}
.sustine-inchide {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--darkgray);
  font-size: 1.9rem;
  line-height: 1;
  cursor: pointer;
}
.sustine-inchide:hover,
.sustine-inchide:focus-visible {
  background: var(--highlight);
}
.sustine-emoji {
  margin: 0;
  font-size: 2rem;
  line-height: 1;
}
.sustine-titlu {
  margin: 0 2.2rem;
  font-size: 1.25rem;
  color: var(--dark);
}
.sustine-text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.45;
}
.sustine-actiuni {
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
}
.sustine-plateste {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  background: var(--secondary);
  color: var(--light) !important;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
}
.sustine-plateste:hover,
.sustine-plateste:focus-visible {
  filter: brightness(1.1);
}
.sustine-mai-tarziu {
  min-height: 44px;
  border: none;
  background: transparent;
  color: var(--gray);
  font-size: 0.95rem;
  cursor: pointer;
  font-family: inherit;
}
.sustine-mai-tarziu:hover,
.sustine-mai-tarziu:focus-visible {
  color: var(--dark);
  text-decoration: underline;
}
.sustine-qr {
  order: 1;
  margin: 0.2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}
.sustine-qr img {
  display: block;
  width: 210px;
  height: 210px;
  max-width: 60vw;
  max-height: 60vw;
  padding: 10px;
  box-sizing: content-box;
  border-radius: 12px;
  background: #ffffff;
}
.sustine-qr figcaption {
  font-size: 0.8rem;
  color: var(--gray);
}
html.sustine-deschis {
  overflow: hidden;
}

/* Telefon / tabletă tactilă: butonul primul, codul QR mai mic dedesubt */
@media (pointer: coarse) {
  .sustine-actiuni { order: 1; }
  .sustine-qr { order: 2; }
  .sustine-qr img { width: 140px; height: 140px; }
  .sustine-qr figcaption::after { content: " de pe alt dispozitiv"; }
}

/* Ecran jos (laptop mic, telefon în landscape): butonul primul, QR mic, fără emoji */
@media (max-height: 640px) {
  .sustine-actiuni { order: 1; }
  .sustine-qr { order: 2; }
  .sustine-qr img { width: 120px; height: 120px; }
  .sustine-emoji { display: none; }
  .sustine-continut { gap: 0.5rem; padding-top: 1rem; }
}

/* Ecran îngust: fereastra devine un panou care urcă de jos */
@media (max-width: 600px) {
  .sustine-dialog {
    margin: auto 0 0;
    width: 100vw;
    max-width: 100vw;
    max-height: 92vh;
    border-radius: 18px 18px 0 0;
  }
  .sustine-continut {
    padding-bottom: calc(1.2rem + env(safe-area-inset-bottom, 0px));
  }
}

@media (prefers-reduced-motion: no-preference) {
  .sustine-dialog[open] { animation: sustine-intra 0.22s ease-out; }
}
@keyframes sustine-intra {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}
`

SustinePopup.afterDOMLoaded = `
const CHEIE = "ga-sustine-v1"
const CHEIE_SESIUNE = "ga-sustine-sesiune"
const PAGINI_MINIME = 3
const SECUNDE_MINIME = 40
const ZILE_DUPA_INCHIDERE = 14
const ZILE_DUPA_PLATA = 60
const ZI = 24 * 60 * 60 * 1000

function citeste(stocare, cheie) {
  try { return JSON.parse(stocare.getItem(cheie) || "{}") } catch (e) { return {} }
}
function scrie(stocare, cheie, valoare) {
  try { stocare.setItem(cheie, JSON.stringify(valoare)) } catch (e) {}
}
function stare() { return citeste(localStorage, CHEIE) }
function salveaza(s) { scrie(localStorage, CHEIE, s) }
function sesiune() { return citeste(sessionStorage, CHEIE_SESIUNE) }
function salveazaSesiune(s) { scrie(sessionStorage, CHEIE_SESIUNE, s) }

let focusAnterior = null

function deschide(dialog) {
  if (!dialog || dialog.open) return
  focusAnterior = document.activeElement
  if (typeof dialog.showModal === "function") dialog.showModal()
  else dialog.setAttribute("open", "")
  document.documentElement.classList.add("sustine-deschis")
  const s = sesiune()
  s.afisat = true
  salveazaSesiune(s)
  const buton = dialog.querySelector(".sustine-inchide")
  if (buton) buton.focus()
}

function inchide(dialog, motiv) {
  if (!dialog || !dialog.open) return
  dialog.dataset.motiv = motiv
  if (typeof dialog.close === "function") dialog.close()
  else { dialog.removeAttribute("open"); dialog.dispatchEvent(new Event("close")) }
}

function laInchidere(dialog) {
  document.documentElement.classList.remove("sustine-deschis")
  const s = stare()
  if (dialog.dataset.motiv === "plata") s.plataLa = Date.now()
  else s.inchisLa = Date.now()
  salveaza(s)
  dialog.dataset.motiv = ""
  if (location.hash === "#sustine") {
    history.replaceState(history.state, "", location.pathname + location.search)
  }
  if (focusAnterior && typeof focusAnterior.focus === "function") focusAnterior.focus()
}

function poateAparaAutomat() {
  const s = stare()
  const acum = Date.now()
  if (sesiune().afisat) return false
  if (s.plataLa && acum - s.plataLa < ZILE_DUPA_PLATA * ZI) return false
  if (s.inchisLa && acum - s.inchisLa < ZILE_DUPA_INCHIDERE * ZI) return false
  if ((s.pagini || 0) < PAGINI_MINIME) return false
  if (document.visibilityState !== "visible") return false
  if (document.querySelector(".search-container.active")) return false
  return true
}

function initializeaza() {
  const dialog = document.getElementById("sustine-dialog")
  if (!dialog) return

  // numărăm paginile văzute și momentul începerii sesiunii
  const s = stare()
  s.pagini = (s.pagini || 0) + 1
  salveaza(s)
  const ses = sesiune()
  if (!ses.inceput) { ses.inceput = Date.now(); salveazaSesiune(ses) }

  const laClic = (e) => {
    const tinta = e.target instanceof Element ? e.target : null
    if (!tinta) return
    if (tinta === dialog) { inchide(dialog, "inchis"); return }          // clic pe fundal
    if (tinta.closest("[data-sustine-inchide]")) { inchide(dialog, "inchis"); return }
    if (tinta.closest("[data-sustine-plateste]")) { inchide(dialog, "plata"); return }
  }
  const laDeschidereCeruta = (e) => {
    const tinta = e.target instanceof Element ? e.target : null
    if (!tinta) return
    const declansator = tinta.closest('[data-sustine-deschide], a[href$="#sustine"]')
    if (!declansator) return
    e.preventDefault()
    deschide(dialog)
  }
  const laClose = () => laInchidere(dialog)
  // Esc închide fereastra indiferent unde se află focusul
  const laTasta = (e) => {
    if ((e.key === "Escape" || e.key === "Esc") && dialog.open) {
      e.preventDefault()
      inchide(dialog, "inchis")
    }
  }

  dialog.addEventListener("click", laClic)
  dialog.addEventListener("close", laClose)
  document.addEventListener("click", laDeschidereCeruta)
  document.addEventListener("keydown", laTasta)
  window.addCleanup(() => {
    dialog.removeEventListener("click", laClic)
    dialog.removeEventListener("close", laClose)
    document.removeEventListener("click", laDeschidereCeruta)
    document.removeEventListener("keydown", laTasta)
  })

  if (location.hash === "#sustine") { deschide(dialog); return }

  const trecut = Date.now() - (sesiune().inceput || Date.now())
  const asteptare = Math.max(1500, SECUNDE_MINIME * 1000 - trecut)
  const temporizator = setTimeout(() => {
    if (poateAparaAutomat()) deschide(dialog)
  }, asteptare)
  window.addCleanup(() => clearTimeout(temporizator))
}

document.addEventListener("nav", initializeaza)
`

export default (() => SustinePopup) satisfies QuartzComponentConstructor
