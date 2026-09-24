#!/usr/bin/env node
// Verificări obligatorii înainte de publicare. Rulează local (`npm run verifica`)
// și în GitHub Actions; orice problemă oprește publicarea.

import { execSync } from "node:child_process"
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { dirname, join, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { citesteCursuri } from "./cursuri.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const content = join(root, "content")
const errors = []
const MAX_BYTES = 3 * 1024 * 1024
const FORBIDDEN_DIRS = ["Surse", "Șabloane", ".obsidian"]
const FORBIDDEN_EXT = [".pdf", ".jpg", ".jpeg", ".docx", ".zip"]
const PLACEHOLDERS = ["[NUMELE TĂU]", "UTILIZATOR.github.io", "/DEPOZIT", "[LINK DEPOZIT]"]

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

// 1. conținutul există: catalogul de la rădăcină și câte o pagină pentru fiecare curs
if (!existsSync(join(content, "index.md"))) {
  errors.push("content/index.md lipsește — rulați întâi `npm run sincronizeaza`.")
}
const cursuri = citesteCursuri(root)
for (const curs of cursuri) {
  if (!existsSync(join(content, curs.slug))) {
    errors.push(`content/${curs.slug}/ lipsește — rulați întâi \`npm run sincronizeaza\`.`)
  } else if (!existsSync(join(content, curs.slug, "index.md"))) {
    errors.push(
      `cursul „${curs.nume}” nu are pagină de prezentare: site/cursuri/${curs.slug}/index.md.`,
    )
  }
}

// 2. nimic din materialele-sursă nu ajunge în content/
if (existsSync(content)) {
  for (const file of walk(content)) {
    const rel = relative(content, file)
    const parts = rel.split(sep)
    if (parts.some((p) => FORBIDDEN_DIRS.includes(p))) {
      errors.push(`fișier dintr-un folder interzis: content/${rel}`)
    }
    if (FORBIDDEN_EXT.some((ext) => file.toLowerCase().endsWith(ext))) {
      errors.push(`tip de fișier interzis: content/${rel}`)
    }
    if (statSync(file).size > MAX_BYTES) {
      errors.push(`fișier prea mare (> 3 MB): content/${rel}`)
    }
  }
}

// 3. datele personale au fost completate
const toCheck = [
  "quartz.config.yaml",
  "quartz/components/site/siteInfo.ts",
  "cursuri.json",
  "README.md",
  ...(existsSync(content)
    ? walk(content)
        .filter((f) => f.endsWith(".md"))
        .map((f) => relative(root, f))
    : []),
]
for (const rel of toCheck) {
  const path = join(root, rel)
  if (!existsSync(path)) continue
  const text = readFileSync(path, "utf8")
  for (const ph of PLACEHOLDERS) {
    if (text.includes(ph)) errors.push(`valoare necompletată „${ph}" în ${rel}`)
  }
}

// 3b. fiecare curs conține note, nu doar pagina de prezentare
// (un curs marcat „planificat” are voie să nu aibă încă note)
for (const curs of cursuri) {
  const dir = join(content, curs.slug)
  if (!existsSync(dir) || curs.stare === "planificat") continue
  const note = walk(dir).filter((f) => f.endsWith(".md")).length
  if (note < 2) {
    errors.push(`cursul „${curs.nume}” nu conține note — verificați calea vault-ului: ${curs.vault}`)
  }
}

// 4. licențele sunt la locul lor
for (const f of ["LICENSE", "LICENSE-QUARTZ.txt"]) {
  if (!existsSync(join(root, f))) errors.push(`lipsește fișierul de licență ${f}`)
}

// 5. în git nu e urmărit niciun material-sursă (dacă proiectul e deja depozit git)
try {
  const tracked = execSync("git ls-files", { cwd: root, encoding: "utf8" }).split("\n")
  for (const f of tracked) {
    const lower = f.toLowerCase()
    if (f === "quartz/static/sustine-qr.jpg") continue
    if (FORBIDDEN_EXT.some((ext) => lower.endsWith(ext)) || /(^|\/)surse\//i.test(f)) {
      errors.push(`git urmărește un fișier care nu trebuie publicat: ${f}`)
    }
  }
} catch {
  // nu e depozit git — se sare peste
}

if (errors.length) {
  console.error("✗ Publicarea este blocată:\n")
  for (const e of errors) console.error("  • " + e)
  console.error("")
  process.exit(1)
}
console.log("✓ Toate verificările de publicare au trecut.")
