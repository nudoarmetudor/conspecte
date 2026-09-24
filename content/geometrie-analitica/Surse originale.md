---
curs: geometrie-analitica
title: Surse originale
---

Materialele pe baza cărora au fost redactate notele acestui curs. Licența, drepturile și modul de citare sunt descrise în [[Despre, surse și licență]].

## Manualul

**Calmuțchi, L., Afanas, D., Cioban, M.** *Geometrie analitică în plan*. Chișinău: Universitatea de Stat din Tiraspol, 2014. 182 p. ISBN 978-9975-76-119-2.

| Paragraf în manual | Pagini | Note pe acest site |
|---|---|---|
| §1 Paralelismul dreptelor, semidreptelor și planelor | 6–7 | [[Figuri geometrice simple. Definiții și notare]], [[Paralelismul dreptelor, semidreptelor și planelor]], [[Orientarea semidreptelor. Direcție]] |
| §2 Segmente orientate. Segmente echipolente | 7–12 | [[Segmente orientate. Segmente echipolente]] |
| §3 Vectori | 12–17 | [[Vectori]], [[Coliniaritatea și orientarea vectorilor]], [[Modulul vectorului. Vectorul opus]], [[Vectori aplicați, alunecători și liberi]] |
| §4 Adunarea și scăderea vectorilor | 17–23 | [[Adunarea vectorilor. Regula triunghiului și a poligonului]], [[Regula paralelogramului]], [[Proprietățile adunării vectorilor]], [[Scăderea vectorilor]] |
| §5 Produsul vectorului la un număr | 23–26 | [[Produsul vectorului la un număr]], [[Proprietățile înmulțirii vectorului cu un număr]], [[Raportul a doi vectori coliniari]] |
| §6 Dependența și independența liniară a vectorilor | 26–33 | [[Combinație liniară. Dependență și independență liniară]], [[Teoremele fundamentale ale dependenței liniare]], [[Vectori coplanari]], [[Descompunerea unui vector după doi vectori necoliniari]], [[Coliniaritate, coplanaritate și dependență liniară]] |
| §7 Spații vectoriale | 33–35 | [[Spațiul vectorial al vectorilor liberi]] |
| §8 Sisteme de vectori coliniari. Axa numerică | 35–40 | *încă neconspectat* (folosit doar pentru explicația $\lambda \ne -1$) |
| §9 Spațiul $V_2$ | 40–43 | [[Spațiul V2. Vectori coplanari și dimensiunea planului]], [[Baza spațiului V2. Coordonatele vectorului]], [[Reperul afin în plan. Tipuri de repere]] |
| §10 Sistemul afin de coordonate în plan | 43–50 | [[Sistemul afin de coordonate. Axe și cadrane]], [[Orientarea planului, a poligoanelor și a unghiurilor]], [[Coordonatele vectorului. Proiecții geometrice și algebrice]], [[Operații cu vectori în coordonate]], [[Coordonatele punctului. Raza vectoare]], [[Împărțirea segmentului în raportul dat]] |
| §11 Sistemul de coordonate rectangular cartezian | 50–52 | [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]], [[Distanța dintre două puncte]] |
| §12 Sistemul polar de coordonate | 53–55 | [[Reperul polar. Coordonate polare]], [[Trecerea între coordonate polare și carteziene]] |
| §13 Produsul scalar a doi vectori | 55–60 | [[Unghiul dintre doi vectori. Perpendicularitate]], [[Produsul scalar — definiție și interpretare]], [[Proprietățile produsului scalar. Expresia în coordonate]], [[Ce nu se transferă de la numere. Aplicații]] |

Exemplele 9.4, 9.5, 10.9 și 10.10 din manual **nu** au fost incluse.

## Alte surse

- **Materialul distribuit la curs** pentru §5–§7, care reproduce textul manualului pentru aceste paragrafe.
- **Notițele proprii** de la curs, pentru §1–§4.

## Erori identificate în surse

Fiecare eroare este explicată în nota corespunzătoare. Cele marcate **calcul** nu sunt greșeli de tipar, ci rezultate greșite.

| Unde | Ce scrie | Ce este corect |
|---|---|---|
| §5, proprietatea 4 (material de curs) | $\vec{OC} = \beta b \beta(\alpha\vec{a})$ | $\vec{OC} = \beta\vec{b} = \beta(\alpha\vec{a})$ |
| §6, teorema 6.9 (material de curs) | „regula triunghiului: $\vec{OC_1} = \vec{OC} + \vec{CC_1}$" | $\vec{OC} = \vec{OC_1} + \vec{C_1C}$ |
| p. 40 | „pentru orice vector $\vec{c} \in V$" | $\vec{c} \in V_2$ |
| p. 41, exemplul 9.3 b) — **calcul** | $\vec{AB}$, $\vec{A_1C}$, $\vec{B_1D}$ „nu sunt coplanari" | **sunt** coplanari: $\vec{A_1C} - \vec{B_1D} = 2\vec{AB}$ |
| p. 46, relațiile (3)–(4) | notația $\operatorname{pr}_u$ pentru proiecția vectorială | proiecția geometrică $P_u$ |
| p. 48, sistemul din (7) | $x_0 - x_1 = \lambda(x_2 - x_1)$ | $x_0 - x_1 = \lambda(x_2 - x_0)$ |
| p. 48 | „după (2) avem" | după proprietatea 2⁰ |
| p. 49 | „Cu ajutorul (4)…" | formula (8) |
| p. 50–51 | „sistemul rectangular cartezian **cartezian**" | cuvântul „cartezian" este repetat |
| p. 53 față de p. 54 | $0 \le r < \infty$, dar imediat $r = \lvert\vec{OM}\rvert > 0$ | $r \ge 0$ în general; $r > 0$ doar pentru punctele diferite de pol |
| p. 55, exemplul 12.1 — **calcul** | termenul $\left(4\sqrt3 - \frac{5\sqrt2}{2}\right)^2$ este calculat ca și cum ar fi $\left(4\sqrt3 - \frac{5\sqrt3}{2}\right)^2 = \frac{27}{4}$; rezultat publicat $\sqrt{\frac{141}{4} - 20\sqrt2} \approx 2{,}64$ | $\lvert AB\rvert = \sqrt{89 - 20\sqrt2 - 20\sqrt6} \approx 3{,}42$. Rezultatul publicat este imposibil: ar fi mai mic decât diferența razelor polare, $8 - 5 = 3$ |
| p. 57, teorema 13.3 | demonstrată prin formula (3), enunțată abia în teorema 13.5 | referință înainte; nu e cerc vicios, dar ordinea logică este 13.5 → 13.3 |
| p. 59, punctul 3) | $\big((\vec a, \vec b), \vec c\big) \ne \big(\vec a, (\vec b, \vec c)\big)$ | paranteza interioară este un **număr**, deci exteriorul nu e produs scalar; sensul corect: $(\vec a,\vec b)\vec c \ne (\vec b,\vec c)\vec a$ |
| p. 60, exemplul 13.8 | „$\beta = m(\angle BCA) = 45°$" | $\beta = m(\angle ABC)$; $\angle BCA$ este $\gamma$, folosit trei rânduri mai jos |
