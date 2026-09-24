// Citește și validează lista de cursuri din cursuri.json.
// Folosit de scripturile de sincronizare și de verificare.

import { readFileSync } from "node:fs"
import { join, resolve } from "node:path"

const CAMPURI_OBLIGATORII = ["slug", "nume", "vault"]
const STARI = ["complet", "în lucru", "notițe brute", "planificat"]

/** Întoarce lista cursurilor, cu `vaultAbs` rezolvat față de rădăcina proiectului. */
export function citesteCursuri(root) {
  const cale = join(root, "cursuri.json")
  let date
  try {
    date = JSON.parse(readFileSync(cale, "utf8"))
  } catch (e) {
    console.error(`✗ Nu pot citi cursuri.json: ${e.message}`)
    process.exit(1)
  }

  const cursuri = date.cursuri
  if (!Array.isArray(cursuri) || cursuri.length === 0) {
    console.error("✗ cursuri.json: lista „cursuri” este goală.")
    process.exit(1)
  }

  const slugsVazute = new Set()
  for (const curs of cursuri) {
    for (const camp of CAMPURI_OBLIGATORII) {
      if (typeof curs[camp] !== "string" || curs[camp].trim() === "") {
        console.error(`✗ cursuri.json: cursului îi lipsește câmpul „${camp}”.`)
        process.exit(1)
      }
    }
    if (!/^[a-z0-9-]+$/.test(curs.slug)) {
      console.error(
        `✗ cursuri.json: slug-ul „${curs.slug}” trebuie să conțină doar litere mici fără diacritice, cifre și „-”.`,
      )
      process.exit(1)
    }
    if (slugsVazute.has(curs.slug)) {
      console.error(`✗ cursuri.json: slug-ul „${curs.slug}” apare de două ori.`)
      process.exit(1)
    }
    slugsVazute.add(curs.slug)
    if (curs.stare !== undefined && !STARI.includes(curs.stare)) {
      console.error(
        `✗ cursuri.json: starea „${curs.stare}” a cursului „${curs.nume}” nu e cunoscută (${STARI.join(", ")}).`,
      )
      process.exit(1)
    }
    for (const camp of ["excludeFoldere", "excludeFisiere"]) {
      if (curs[camp] !== undefined && !Array.isArray(curs[camp])) {
        console.error(`✗ cursuri.json: „${camp}” trebuie să fie o listă (cursul „${curs.nume}”).`)
        process.exit(1)
      }
      curs[camp] = curs[camp] ?? []
    }
    curs.vaultAbs = resolve(root, curs.vault)
  }
  return cursuri
}
