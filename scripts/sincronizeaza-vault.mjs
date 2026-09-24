#!/usr/bin/env node
// Copiază vault-urile Obsidian (unul per curs, vezi cursuri.json) în content/<slug>/,
// excluzând tot ce NU trebuie publicat, adaptează sintaxa pentru Quartz și suprapune
// paginile scrise pentru site (site/comun/ la rădăcină, site/cursuri/<slug>/ în curs).
//
// Utilizare:  npm run sincronizeaza
//
// Vault-urile NU sunt modificate; toate transformările se aplică doar copiei din content/.

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs"
import { dirname, join, posix, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { citesteCursuri } from "./cursuri.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const content = join(root, "content")
const paginiComune = join(root, "site", "comun")
const paginiCursuri = join(root, "site", "cursuri")

const cursuri = citesteCursuri(root)

// Foldere de la rădăcina unui vault care nu se publică NICIODATĂ.
const EXCLUDED_TOP_DIRS = new Set([".obsidian", ".trash", "Surse", "Șabloane"])
// Extensii care nu se publică, oriunde s-ar afla.
const EXCLUDED_EXT = [".pdf", ".jpg", ".jpeg", ".docx", ".zip"]

for (const curs of cursuri) {
  if (!existsSync(curs.vaultAbs)) {
    console.error(`✗ Nu găsesc vault-ul cursului „${curs.nume}” la: ${curs.vaultAbs}`)
    process.exit(1)
  }
}

// ------------------------------------------------------------------ 1. copiere
rmSync(content, { recursive: true, force: true })
mkdirSync(content, { recursive: true })

/** Suprapune peste `dest` fiecare intrare din `sursa`, dacă folderul există. */
function suprapune(sursa, dest) {
  if (!existsSync(sursa)) return 0
  let n = 0
  for (const name of readdirSync(sursa)) {
    cpSync(join(sursa, name), join(dest, name), { recursive: true })
    n++
  }
  return n
}

const rezumat = []
for (const curs of cursuri) {
  const dest = join(content, curs.slug)
  // Excluderi suplimentare, declarate în cursuri.json: materiale-sursă și șabloane
  // care poartă alt nume în vault-ul acestui curs (de ex. „input”, „99 Șabloane”).
  const folodereExcluse = new Set([...EXCLUDED_TOP_DIRS, ...curs.excludeFoldere])
  const fisiereExcluse = new Set(curs.excludeFisiere)
  let copiate = 0
  let excluse = 0
  cpSync(curs.vaultAbs, dest, {
    recursive: true,
    filter: (src) => {
      const rel = relative(curs.vaultAbs, src)
      if (rel === "") return true
      const segmente = rel.split(sep)
      if (segmente.some((s) => folodereExcluse.has(s)) || fisiereExcluse.has(segmente.at(-1))) {
        excluse++
        return false
      }
      if (EXCLUDED_EXT.some((ext) => src.toLowerCase().endsWith(ext))) {
        excluse++
        return false
      }
      // O notă goală ar deveni o pagină goală pe site.
      if (src.toLowerCase().endsWith(".md") && statSync(src).size > 0) {
        if (readFileSync(src, "utf8").trim() === "") {
          excluse++
          return false
        }
      } else if (src.toLowerCase().endsWith(".md")) {
        excluse++
        return false
      }
      if (statSync(src).isFile()) copiate++
      return true
    },
  })
  const pagini = suprapune(join(paginiCursuri, curs.slug), dest)
  rezumat.push({ curs, copiate, excluse, pagini })
}

const paginiRadacina = suprapune(paginiComune, content)

// ------------------------------------------------------------------ 2. transformări
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

// Indexul figurilor se construiește SEPARAT pentru fiecare curs: două cursuri pot avea
// figuri cu același nume, iar un embed trebuie rezolvat în interiorul cursului său.
const indexFiguri = new Map() // slug -> Map<numeFișier, cale>
for (const curs of cursuri) {
  const perCurs = new Map()
  const dir = join(content, curs.slug)
  if (existsSync(dir)) {
    for (const f of walk(dir)) {
      const name = f.split(sep).pop()
      if (!perCurs.has(name)) perCurs.set(name, f)
    }
  }
  indexFiguri.set(curs.slug, perCurs)
}

/** Cursul în care se află un fișier din content/ (sau null pentru paginile comune). */
function cursulFisierului(filePath) {
  const primulSegment = relative(content, filePath).split(sep)[0]
  return indexFiguri.has(primulSegment) ? primulSegment : null
}

/**
 * Obsidian acceptă `$$ … $$` pe un singur rând ca formulă afișată; Quartz (remark-math)
 * o tratează ca formulă inline. Mutăm delimitatorii `$$` pe rânduri proprii,
 * păstrând prefixul de citat/callout (`> `).
 */
function fixDisplayMath(text) {
  const lines = text.split(/\r?\n/)
  const out = []
  let inFence = false
  let inMath = false
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
    if (inFence) {
      out.push(line)
      continue
    }
    const m = line.match(/^((?:\s*>)*\s*)(.*)$/s)
    const prefix = m[1]
    const body = m[2]
    const trimmed = body.trim()

    if (trimmed === "$$") {
      inMath = !inMath
      out.push(line)
      continue
    }
    const starts = trimmed.startsWith("$$")
    const ends = trimmed.endsWith("$$") && trimmed.length > 2
    if (!inMath && starts && ends && trimmed.length > 4) {
      const inner = trimmed.slice(2, -2)
      if (!inner.includes("$$")) {
        out.push(prefix + "$$", prefix + inner.trim(), prefix + "$$")
        continue
      }
    }
    if (!inMath && starts && !ends) {
      out.push(prefix + "$$", prefix + trimmed.slice(2))
      inMath = true
      continue
    }
    if (inMath && ends && !starts) {
      out.push(prefix + trimmed.slice(0, -2), prefix + "$$")
      inMath = false
      continue
    }
    out.push(line)
  }
  return out.join("\n")
}

/**
 * `![[fig-x.svg]]` devine în Quartz un <object>, care nu se micșorează pe ecrane mici.
 * Îl înlocuim cu o imagine Markdown obișnuită (<img>).
 *
 * Calea este ABSOLUTĂ față de rădăcina conținutului („/curs/folder/Figuri/fig.svg"), nu
 * relativă: Quartz rezolvă greșit un „../" atunci când nota se află la mai mult de un nivel
 * sub rădăcină (ajunge să ignore folderul cursului). Căile absolute sunt rezolvate corect,
 * inclusiv adăugarea prefixului de bază al site-ului.
 */
let svgEmbeds = 0
let svgNerezolvate = 0
function fixSvgEmbeds(text, filePath) {
  const slug = cursulFisierului(filePath)
  const perCurs = slug ? indexFiguri.get(slug) : null
  return text.replace(/!\[\[([^\]|#]+\.svg)(?:\|[^\]]*)?\]\]/g, (whole, name) => {
    const target = perCurs?.get(name.trim())
    if (!target) {
      svgNerezolvate++
      console.warn(`  ! figură negăsită: ${name.trim()} (în ${relative(content, filePath)})`)
      return whole
    }
    const url = relative(content, target)
      .split(sep)
      .map((seg) => encodeURIComponent(seg))
      .join(posix.sep)
    svgEmbeds++
    return `![figură](/${url})`
  })
}

/**
 * Notele Obsidian încep cu un titlu `# …`, iar Quartz afișează deja titlul paginii.
 * Mutăm primul `# …` în frontmatter (`title`) și îl scoatem din corp, ca să nu apară de două ori.
 * Titlul din nota originală se păstrează (de ex. „V₂” cu indice, nu „V2” din numele fișierului).
 */
let titlesMoved = 0
function hoistTitle(text) {
  const normalized = text.replace(/\r\n/g, "\n")
  const fm = normalized.match(/^---\n([\s\S]*?)\n---\n/)
  const frontmatter = fm ? fm[1] : null
  const body = fm ? normalized.slice(fm[0].length) : normalized
  if (frontmatter !== null && /^title:/m.test(frontmatter)) return normalized

  const h1 = body.match(/^\s*# (.+)\n?/)
  if (!h1) return normalized
  const title = h1[1].trim().replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  const newBody = body.slice(h1[0].length)
  titlesMoved++
  const newFrontmatter =
    frontmatter !== null ? `title: "${title}"\n${frontmatter}` : `title: "${title}"`
  return `---\n${newFrontmatter}\n---\n${newBody}`
}

/**
 * Notele unui curs primesc automat `curs: <slug>` în frontmatter, ca subsolul să poată
 * afișa sursa cursului corect atunci când site-ul găzduiește mai multe cursuri.
 */
function marcheazaCursul(text, filePath) {
  const slug = cursulFisierului(filePath)
  if (!slug) return text
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fm) return `---\ncurs: ${slug}\n---\n${text}`
  if (/^curs:/m.test(fm[1])) return text
  return `---\ncurs: ${slug}\n${fm[1]}\n---\n` + text.slice(fm[0].length)
}

/** Parcurge textul linie cu linie, sărind peste blocurile de cod. */
function inAfaraCodului(text, transformaLinie) {
  let inFence = false
  return text
    .split("\n")
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence
        return line
      }
      return inFence ? line : transformaLinie(line)
    })
    .join("\n")
}

/**
 * Etichetele scrise în corpul notei (`#flashcards/psihologie/c01`) primesc de la Quartz un
 * link cu prea multe „../" atunci când nota stă la două sau mai multe niveluri sub rădăcină,
 * deci duc în afara site-ului. Pe site eticheta nu aduce nimic — o lăsăm ca text îngroșat.
 * Etichetele din frontmatter (paginile de etichete, căutarea) rămân neatinse.
 */
let etichete = 0
function scoateEtichetele(text) {
  const fm = text.match(/^---\n[\s\S]*?\n---\n/)
  const cap = fm ? fm[0] : ""
  const corp = fm ? text.slice(fm[0].length) : text
  const nou = inAfaraCodului(corp, (line) =>
    // Doar la început de rând sau după spațiu: `](#ancora)` este un link intern, nu o etichetă.
    line.replace(/(^|\s)#([\p{L}][\p{L}\d/_-]*)/gu, (whole, inainte, eticheta, pozitie) => {
      // în interiorul unui `cod inline` nu se atinge nimic
      if ((line.slice(0, pozitie).match(/`/g) ?? []).length % 2 === 1) return whole
      etichete++
      return `${inainte}**${eticheta.replace(/\//g, " / ")}**`
    }),
  )
  return cap + nou
}

/**
 * Wikilink-urile spre note care nu există (planuri de lucru, „de scris mai târziu") ar
 * deveni pe site legături rupte. În vault sunt utile — Obsidian oferă „creează nota" —
 * deci nu se ating acolo: aici doar li se scot parantezele, păstrând textul.
 */
let linkuriNerezolvate = 0
function neutralizeazaLinkuriMoarte(text, filePath, tinte) {
  const fm = text.match(/^---\n[\s\S]*?\n---\n/)
  const cap = fm ? fm[0] : ""
  const corp = fm ? text.slice(fm[0].length) : text
  // Ținta se oprește la „|" (alias), „#"/„^" (ancoră) sau „\" (separatorul escapat „\|”,
  // folosit în tabele, unde „|" brut ar rupe coloanele).
  const RE_WIKILINK = /(!?)\[\[([^\]|#^\\]+)((?:[#^][^\]|\\]*)?)(?:\\?\|([^\]]*))?\]\]/g
  const nou = corp.replace(RE_WIKILINK, (whole, bang, tinta, ancora, alias) => {
    if (bang) return whole
    const nume = tinta.trim()
    if (nume === "" || tinte.has(nume.toLowerCase()) || nume.includes("/")) return whole
    linkuriNerezolvate++
    console.warn(`  ! legătură fără țintă: [[${nume}]] (în ${relative(content, filePath)})`)
    return alias ?? nume
  })
  return cap + nou
}

// Numele notelor existente, per curs — pentru verificarea wikilink-urilor.
const noteExistente = new Map()
for (const curs of cursuri) {
  const set = new Set()
  const dir = join(content, curs.slug)
  if (existsSync(dir)) {
    for (const f of walk(dir)) {
      if (f.endsWith(".md")) set.add(f.split(sep).pop().slice(0, -3).toLowerCase())
    }
  }
  noteExistente.set(curs.slug, set)
}
// Paginile comune de la rădăcină sunt vizibile din orice curs.
const noteComune = new Set()
for (const f of readdirSync(content)) {
  if (f.endsWith(".md")) noteComune.add(f.slice(0, -3).toLowerCase())
}
// Invers, o pagină comună (catalogul, pagina de licență) poate trimite spre orice curs.
const toateNotele = new Set(noteComune)
for (const set of noteExistente.values()) for (const n of set) toateNotele.add(n)

let mdCount = 0
for (const f of walk(content)) {
  if (!f.endsWith(".md")) continue
  const slug = cursulFisierului(f)
  const tinte = slug ? new Set([...noteExistente.get(slug), ...noteComune]) : toateNotele
  const original = readFileSync(f, "utf8")
  let t = hoistTitle(original)
  t = fixDisplayMath(t)
  t = fixSvgEmbeds(t, f)
  t = scoateEtichetele(t)
  t = neutralizeazaLinkuriMoarte(t, f, tinte)
  t = marcheazaCursul(t, f)
  if (t !== original) writeFileSync(f, t, "utf8")
  mdCount++
}

// ------------------------------------------------------------------ 3. raport
for (const { curs, copiate, excluse, pagini } of rezumat) {
  console.log(
    `✓ ${curs.nume} → content/${curs.slug}/ : ${copiate} fișiere, ${excluse} intrări excluse, ${pagini} pagini de site suprapuse.`,
  )
}
console.log(`✓ ${paginiRadacina} pagini comune la rădăcina site-ului.`)
console.log(
  `✓ Adaptate ${mdCount} note pentru Quartz: ${titlesMoved} titluri mutate în frontmatter, ` +
    `${svgEmbeds} figuri SVG convertite în imagini, ${etichete} etichete din corp trecute în text, ` +
    `${linkuriNerezolvate} legături fără țintă neutralizate.`,
)
if (svgNerezolvate > 0) {
  console.error(`✗ ${svgNerezolvate} embed-uri de figuri nu au putut fi rezolvate.`)
  process.exit(1)
}
