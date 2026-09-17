#!/usr/bin/env node
// Copiază vault-ul Obsidian în content/, excluzând tot ce NU trebuie publicat,
// adaptează sintaxa pentru Quartz și suprascrie cu paginile site-ului din site/pagini/.
//
// Utilizare:  npm run sincronizeaza
// Vault-ul implicit: ../Geometrie_analitică  (se poate schimba cu VAULT=<cale>)
//
// Vault-ul NU este modificat; toate transformările se aplică doar copiei din content/.

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

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const vault = resolve(process.env.VAULT ?? join(root, "..", "Geometrie_analitică"))
const content = join(root, "content")
const sitePages = join(root, "site", "pagini")

// Foldere de la rădăcina vault-ului care nu se publică NICIODATĂ.
const EXCLUDED_TOP_DIRS = new Set([".obsidian", ".trash", "Surse", "Șabloane"])
// Extensii care nu se publică, oriunde s-ar afla.
const EXCLUDED_EXT = [".pdf", ".jpg", ".jpeg", ".docx", ".zip"]

if (!existsSync(vault)) {
  console.error(`✗ Nu găsesc vault-ul la: ${vault}`)
  process.exit(1)
}

// ------------------------------------------------------------------ 1. copiere
rmSync(content, { recursive: true, force: true })
mkdirSync(content, { recursive: true })

let copied = 0
let skipped = 0
cpSync(vault, content, {
  recursive: true,
  filter: (src) => {
    const rel = relative(vault, src)
    if (rel === "") return true
    if (EXCLUDED_TOP_DIRS.has(rel.split(sep)[0])) {
      skipped++
      return false
    }
    if (EXCLUDED_EXT.some((ext) => src.toLowerCase().endsWith(ext))) {
      skipped++
      return false
    }
    if (statSync(src).isFile()) copied++
    return true
  },
})

let pages = 0
if (existsSync(sitePages)) {
  for (const name of readdirSync(sitePages)) {
    cpSync(join(sitePages, name), join(content, name), { recursive: true })
    pages++
  }
}

// ------------------------------------------------------------------ 2. transformări
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const allFiles = walk(content)
const byName = new Map()
for (const f of allFiles) {
  const name = f.split(sep).pop()
  if (!byName.has(name)) byName.set(name, [])
  byName.get(name).push(f)
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
 * Îl înlocuim cu o imagine Markdown obișnuită (<img>), cu calea relativă reală.
 */
let svgEmbeds = 0
function fixSvgEmbeds(text, filePath) {
  return text.replace(/!\[\[([^\]|#]+\.svg)(?:\|[^\]]*)?\]\]/g, (whole, name) => {
    const targets = byName.get(name.trim())
    if (!targets) return whole
    const rel = relative(dirname(filePath), targets[0]).split(sep).join(posix.sep)
    const url = rel
      .split("/")
      .map((seg) => encodeURIComponent(seg))
      .join("/")
    svgEmbeds++
    return `![figură](${url.startsWith(".") ? url : "./" + url})`
  })
}

/**
 * Notele Obsidian încep cu un titlu `# …`, iar Quartz afișează deja titlul paginii.
 * Mutăm primul `# …` în frontmatter (`title`) și îl scoatem din corp, ca să nu apară de două ori.
 * Titlul din nota originală se păstrează (de ex. „V₂" cu indice, nu „V2" din numele fișierului).
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
  const newFrontmatter = frontmatter !== null ? `title: "${title}"\n${frontmatter}` : `title: "${title}"`
  return `---\n${newFrontmatter}\n---\n${newBody}`
}

let mdCount = 0
for (const f of allFiles) {
  if (!f.endsWith(".md")) continue
  const original = readFileSync(f, "utf8")
  const transformed = fixSvgEmbeds(fixDisplayMath(hoistTitle(original)), f)
  if (transformed !== original) writeFileSync(f, transformed, "utf8")
  mdCount++
}

console.log(`✓ Vault: ${vault}`)
console.log(`✓ Copiate ${copied} fișiere, excluse ${skipped} intrări, ${pages} pagini de site suprapuse.`)
console.log(
  `✓ Adaptate ${mdCount} note pentru Quartz: ${titlesMoved} titluri mutate în frontmatter, ` +
    `${svgEmbeds} figuri SVG convertite în imagini.`,
)
