#!/usr/bin/env node
// Verifică site-ul construit (public/): fiecare link intern și fiecare imagine trebuie
// să ducă la un fișier existent. Rulați după `npx quartz build`.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { dirname, join, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const pub = join(root, "public")

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

// Căile absolute (folosite de pagina 404) încep cu subcalea din baseUrl, ex. /conspecte/…
const baseUrl = (readFileSync(join(root, "quartz.config.yaml"), "utf8").match(/^\s*baseUrl:\s*(\S+)/m) ||
  [])[1]
const basePath = baseUrl && baseUrl.includes("/") ? "/" + baseUrl.split("/").slice(1).join("/") : ""

const htmlFiles = walk(pub).filter((f) => f.endsWith(".html"))
const broken = new Map()
let checked = 0

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8")
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1])
  for (const ref of refs) {
    if (/^(https?:|mailto:|data:|javascript:|#)/.test(ref)) continue
    const clean = decodeURIComponent(ref.split("#")[0].split("?")[0])
    if (clean === "") continue
    let target
    if (clean.startsWith("/")) {
      if (basePath && !(clean === basePath || clean.startsWith(basePath + "/"))) {
        checked++
        const key = clean
        if (!broken.has(key)) broken.set(key, new Set())
        broken.get(key).add(relative(pub, file).split(sep).join("/"))
        continue
      }
      target = join(pub, clean.slice(basePath.length))
    } else {
      target = resolve(dirname(file), clean)
    }
    const candidates = [target, target + ".html", join(target, "index.html")]
    checked++
    if (!candidates.some((c) => existsSync(c))) {
      const key = relative(pub, target).split(sep).join("/")
      if (!broken.has(key)) broken.set(key, new Set())
      broken.get(key).add(relative(pub, file).split(sep).join("/"))
    }
  }
}

console.log(`Pagini HTML: ${htmlFiles.length}, referințe interne verificate: ${checked}`)
// Un public/ gol sau parțial ar trece verificarea fără să găsească nimic de verificat.
if (htmlFiles.length < 10) {
  console.log("✗ Prea puține pagini în public/ — construiți întâi site-ul (`npx quartz build`).")
  process.exit(1)
}
if (broken.size) {
  console.log(`✗ Ținte inexistente: ${broken.size}`)
  for (const [target, pages] of broken) {
    console.log(`  • ${target}   ← ${[...pages].slice(0, 3).join(", ")}${pages.size > 3 ? " …" : ""}`)
  }
  process.exit(1)
}
console.log("✓ Toate linkurile și imaginile interne există.")
