# Conspecte — notițe de curs

Site cu notițe de facultate, **sistematizate, explicate pas cu pas și ilustrate**. Fiecare curs are secțiunea lui; lecțiile urmează paragrafele manualului și sunt însoțite de figuri, întrebări de control și recapitulări.

🌐 **Site:** https://nudoarmetudor.github.io/conspecte

| Curs | Sursa principală |
|---|---|
| [Geometrie analitică în plan](https://nudoarmetudor.github.io/conspecte/geometrie-analitica/) | L. Calmuțchi, D. Afanas, M. Cioban, *Geometrie analitică în plan*, Universitatea de Stat din Tiraspol, Chișinău, 2014 (ISBN 978-9975-76-119-2) |

> Material de studiu **neoficial**. Nu înlocuiește manualul și nu este aprobat de autorii lui, de titularii de curs sau de universitate.

## Licențe

Depozitul conține două tipuri de materiale, cu licențe diferite:

| Ce | Licență | Fișier |
|---|---|---|
| Conținutul original din `content/` — explicații, figuri, recapitulări, întrebări, probleme | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ro) | [`LICENSE`](LICENSE) |
| Codul site-ului — [Quartz](https://github.com/jackyzha0/quartz) și modificările proprii din `quartz/`, `scripts/` | MIT | [`LICENSE-QUARTZ.txt`](LICENSE-QUARTZ.txt) |

Fragmentele citate din manuale (definiții, enunțuri, demonstrații, numerotare) **nu** intră sub licența CC: drepturile aparțin autorilor lor. Detalii pe pagina *Despre, surse și licență* a site-ului.

## Structură

```
cursuri.json             lista cursurilor — SINGURUL loc unde se adaugă un curs
content/                 notele publicate — GENERAT, nu se editează manual
  <slug-curs>/           un folder per curs
site/
  comun/                 paginile de la rădăcina site-ului (catalogul, licența)
  cursuri/<slug>/        paginile proprii ale fiecărui curs (prezentare, surse)
quartz/components/site/  subsolul și fereastra „Cumpără-mi o cafea"
  siteInfo.ts            autor, link de plată, sumă — aici se editează
quartz/static/           codul QR
scripts/
  cursuri.mjs              citește și validează cursuri.json
  sincronizeaza-vault.mjs  copiază vault-urile în content/<slug>/ (fără Surse/, Șabloane/)
  verifica-publicare.mjs   blochează publicarea dacă ceva nu e în regulă
  verifica-linkuri-site.mjs verifică toate legăturile și imaginile din public/
```

Notele se scriu în vault-urile Obsidian, **nu** în `content/`.

## Cum se adaugă un curs nou

1. Creați un **vault Obsidian separat** pentru curs, alături de acest depozit.
   > Un vault per curs, nu unul comun: wikilink-urile Obsidian sunt globale pe vault, deci două cursuri în același vault ar produce legături ambigue (de exemplu două note „Bază").
2. Adăugați o intrare în [`cursuri.json`](cursuri.json): `slug` (litere mici, fără diacritice), `nume`, `vault` (calea relativă), `sursaScurta`.
3. Creați pagina de prezentare a cursului: `site/cursuri/<slug>/index.md`.
4. Adăugați cursul în tabelul din `site/comun/index.md`.
5. `npm run publica`.

## Comenzi

```bash
npm run sincronizeaza    # vault-uri → content/
npm run previzualizare   # sincronizează și pornește site-ul local pe http://localhost:8080
npm run verifica         # verificările de dinainte de publicare
npm run publica          # sincronizează, verifică, face commit și push → site actualizat
```

La fiecare push pe `main`, GitHub Actions reconstruiește și publică site-ul (`.github/workflows/deploy.yml`).

## Credite

Construit cu [Quartz](https://quartz.jzhao.xyz/) © jackyzha0 (MIT). Notițele au fost sistematizate cu ajutorul unui asistent AI (Claude, Anthropic).
