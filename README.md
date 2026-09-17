# Geometrie analitică în plan — notițe de curs

Site cu notițe de curs pentru **geometria analitică în plan**: vectori, operații cu vectori, dependență liniară, baze, repere și coordonate. Notele sunt explicate pas cu pas, ilustrate cu figuri și însoțite de întrebări de control și recapitulări.

🌐 **Site:** https://nudoarmetudor.github.io/conspecte

> Material de studiu **neoficial**, bazat pe manualul L. Calmuțchi, D. Afanas, M. Cioban, *Geometrie analitică în plan*, Universitatea de Stat din Tiraspol, Chișinău, 2014 (ISBN 978-9975-76-119-2). Nu înlocuiește manualul.

## Licențe

Depozitul conține două tipuri de materiale, cu licențe diferite:

| Ce | Licență | Fișier |
|---|---|---|
| Conținutul original din `content/` — explicații, figuri, recapitulări, întrebări, probleme | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ro) | [`LICENSE`](LICENSE) |
| Codul site-ului — [Quartz](https://github.com/jackyzha0/quartz) și modificările proprii din `quartz/`, `scripts/` | MIT | [`LICENSE-QUARTZ.txt`](LICENSE-QUARTZ.txt) |

Fragmentele citate din manual (definiții, enunțuri, demonstrații, numerotare) **nu** intră sub licența CC: drepturile aparțin autorilor manualului. Detalii pe pagina *Despre, surse și licență* a site-ului.

## Structură

```
content/                 notele publicate — GENERAT, nu se editează manual
site/pagini/             paginile proprii ale site-ului (prima pagină, licență, surse)
quartz/components/site/  subsolul și fereastra „Cumpără-mi o cafea"
  siteInfo.ts            autor, link de plată, sumă — aici se editează
quartz/static/           codul QR
scripts/
  sincronizeaza-vault.mjs  copiază vault-ul Obsidian în content/ (fără Surse/, Șabloane/)
  verifica-publicare.mjs   blochează publicarea dacă ceva nu e în regulă
```

Notele se scriu în vault-ul Obsidian (`../Geometrie_analitică`), **nu** în `content/`.

## Comenzi

```bash
npm run sincronizeaza    # vault → content/
npm run previzualizare   # sincronizează și pornește site-ul local pe http://localhost:8080
npm run verifica         # verificările de dinainte de publicare
npm run publica          # sincronizează, verifică, face commit și push → site actualizat
```

La fiecare push pe `main`, GitHub Actions reconstruiește și publică site-ul (`.github/workflows/deploy.yml`).

## Credite

Construit cu [Quartz](https://quartz.jzhao.xyz/) © jackyzha0 (MIT). Notițele au fost sistematizate cu ajutorul unui asistent AI (Claude, Anthropic).
