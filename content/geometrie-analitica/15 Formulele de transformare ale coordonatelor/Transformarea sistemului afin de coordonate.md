---
curs: geometrie-analitica
title: "Transformarea sistemului afin de coordonate"
capitol: 15 — Formulele de transformare ale coordonatelor
paragraf: §15
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 65–67 (PDF p. 31–32)
tags:
  - geometrie-analitică
  - transformarea-coordonatelor
  - matrice-de-trecere
---

> [!tip] Despre ce este paragraful
> Coordonatele unui punct nu sunt o proprietate a punctului: depind de **reperul ales** ([[Baza spațiului V2. Coordonatele vectorului#3. Coordonatele depind de bază|§9]]). Un același punct $M$ are o pereche de numere într-un sistem și alta în alt sistem.
>
> §15 răspunde la întrebarea practică: **dacă știu coordonatele în sistemul nou, cum le aflu în cel vechi?** Răspunsul e o pereche de formule liniare. Ele sunt instrumentul prin care, mai târziu, o ecuație complicată de curbă se aduce la o formă simplă, alegând un sistem potrivit.

## 1. Datele problemei

Să cercetăm în plan două sisteme afine de coordonate: $O\vec e_1\vec e_2$, numit **sistem vechi**, și $O'\vec e_1{}'\vec e_2{}'$, numit **sistem nou**. Fie $M$ un punct arbitrar al planului, care are coordonatele $x$, $y$ în sistemul vechi și coordonatele $x'$, $y'$ în sistemul nou.

> [!abstract] Problema transformării coordonatelor
> Știind (fiind date) coordonatele originii sistemului nou și coordonatele vectorilor de coordonate noi **în sistemul vechi**:
> $$
> O'(x_0;\ y_0), \qquad \vec e_1{}' = \{c_{11};\ c_{21}\}, \qquad \vec e_2{}' = \{c_{12};\ c_{22}\} \tag{1}
> $$
> să se exprime coordonatele $x$, $y$ ale punctului $M$ din sistemul vechi prin coordonatele $x'$, $y'$ ale aceluiași punct $M$ în raport cu noul sistem.

> [!warning] Atenție la indici: $c_{21}$, nu $c_{12}$
> Coordonatele lui $\vec e_1{}'$ sunt $\{c_{11};\ c_{21}\}$ — **primul** indice variază, al doilea rămâne $1$. Convenția: $c_{ij}$ = coordonata $i$ a vectorului nou $j$. Indicele al doilea spune **al cui** vector este; primul spune **care** coordonată.
>
> Așa, vectorii noi devin **coloanele** matricei de trecere (vezi secțiunea 3). Cine scrie coordonatele pe rânduri obține matricea transpusă și formule greșite.

## 2. Deducerea formulelor

Conform definiției coordonatelor vectorilor și punctelor, din (1) obținem:

$$
\vec e_1{}' = c_{11}\vec e_1 + c_{21}\vec e_2, \qquad \vec e_2{}' = c_{12}\vec e_1 + c_{22}\vec e_2, \qquad \vec{OO'} = x_0\vec e_1 + y_0\vec e_2 \tag{2}
$$

Întotdeauna

$$
\vec{OM} = \vec{OO'} + \vec{O'M} \tag{3}
$$

Având în vedere că

$$
\vec{OM} = x\vec e_1 + y\vec e_2, \qquad \vec{OO'} = x_0\vec e_1 + y_0\vec e_2, \qquad \vec{O'M} = x'\vec e_1{}' + y'\vec e_2{}'
$$

și formulele (2), din (3) obținem:

$$
x\vec e_1 + y\vec e_2 = x_0\vec e_1 + y_0\vec e_2 + (c_{11}x' + c_{12}y')\vec e_1 + (c_{21}x' + c_{22}y')\vec e_2
$$

sau

$$
\big(x - (c_{11}x' + c_{12}y' + x_0)\big)\vec e_1 + \big(y - (c_{21}x' + c_{22}y' + y_0)\big)\vec e_2 = \vec 0 \tag{4}
$$

Deoarece vectorii $\vec e_1$ și $\vec e_2$ sunt necoliniari, ei sunt liniar independenți; atunci egalitatea (4) are loc atunci și numai atunci, când

$$
\begin{cases} x = c_{11}x' + c_{12}y' + x_0, \\ y = c_{21}x' + c_{22}y' + y_0. \end{cases} \tag{5}
$$

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-doua-sisteme-afine.svg)
*fig. 1 (după fig. 56 din manual) — două sisteme afine oarecare; drumul $O \to O' \to M$ și drumul direct $O \to M$ dau același vector*

> [!example]- Cum se citește figura — deducerea formulelor (5)
> **Pasul 1 — cele două sisteme.** Albastru: sistemul vechi, cu originea $O$ și vectorii $\vec e_1$, $\vec e_2$ (oblici — e un sistem afin, nu neapărat rectangular). Portocaliu: sistemul nou, cu originea $O'$ și vectorii $\vec e_1{}'$, $\vec e_2{}'$, alt unghi și alte lungimi.
>
> **Pasul 2 — punctul $M$.** Săgeata violet $\vec{OM}$ îl descrie în sistemul vechi: $x\vec e_1 + y\vec e_2$. Necunoscutele sunt $x$ și $y$.
>
> **Pasul 3 — drumul ocolit.** Săgețile verzi: întâi $\vec{OO'}$ (cunoscut, prin $x_0$, $y_0$), apoi $\vec{O'M}$ (cunoscut în baza **nouă**, prin $x'$, $y'$; liniile punctate arată descompunerea după $\vec e_1{}'$ și $\vec e_2{}'$).
>
> **Pasul 4 — relația lui Chasles.** Cele două drumuri duc în același loc: $\vec{OM} = \vec{OO'} + \vec{O'M}$. Este singura idee geometrică a deducerii.
>
> **Pasul 5 — totul în baza veche.** Problema e că $\vec{O'M}$ e scris în baza nouă. Dar fiecare vector nou se exprimă prin cei vechi (formula 2). După înlocuire, ambii membri sunt în baza $\{\vec e_1, \vec e_2\}$ și se pot compara coeficienții.
>
> **Pe ce se bazează:** [[Adunarea vectorilor. Regula triunghiului și a poligonului#3. Relația lui Chasles|relația lui Chasles]], [[Coordonatele punctului. Raza vectoare|definiția coordonatelor punctului]] și [[Descompunerea unui vector după doi vectori necoliniari|unicitatea descompunerii]] după doi vectori necoliniari.
>
> **Ce să verificați singuri pe figură:** luați $M = O'$. Atunci $x' = y' = 0$, iar (5) dă $x = x_0$, $y = y_0$ — exact coordonatele originii noi. ✓

> [!example]- Pas cu pas — de la (3) la (5)
> **Pasul 1 — înlocuiți fiecare vector din (3).** Stânga: $x\vec e_1 + y\vec e_2$. Dreapta: $x_0\vec e_1 + y_0\vec e_2$ plus $x'\vec e_1{}' + y'\vec e_2{}'$.
>
> **Pasul 2 — scrieți vectorii noi prin cei vechi.**
> $$
> x'\vec e_1{}' + y'\vec e_2{}' = x'(c_{11}\vec e_1 + c_{21}\vec e_2) + y'(c_{12}\vec e_1 + c_{22}\vec e_2).
> $$
>
> **Pasul 3 — grupați după $\vec e_1$ și $\vec e_2$.** Coeficientul lui $\vec e_1$: $c_{11}x' + c_{12}y'$. Coeficientul lui $\vec e_2$: $c_{21}x' + c_{22}y'$.
>
> **Pasul 4 — aduceți totul în stânga.** Se obține (4): o combinație liniară a lui $\vec e_1$ și $\vec e_2$, egală cu vectorul nul.
>
> **Pasul 5 — folosiți independența liniară.** O combinație liniară a doi vectori **necoliniari** dă $\vec 0$ doar dacă ambii coeficienți sunt nuli ([[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.10 — doi vectori|teorema 6.10]]). Fiecare paranteză din (4) e deci zero — asta înseamnă (5).
>
> **Exemplu numeric.** $O'(1;\ 2)$, $\vec e_1{}' = \{1;\ 1\}$, $\vec e_2{}' = \{-1;\ 1\}$, iar $M$ are în sistemul nou coordonatele $(2;\ 1)$. Atunci
> $$
> x = 1\cdot 2 + (-1)\cdot 1 + 1 = 2, \qquad y = 1\cdot 2 + 1\cdot 1 + 2 = 5.
> $$
> Verificare directă: $\vec{OM} = \vec{OO'} + 2\vec e_1{}' + \vec e_2{}' = \{1;2\} + \{2;2\} + \{-1;1\} = \{2;\ 5\}$. ✓

## 3. Matricea de trecere

În așa fel se exprimă coordonatele $x$, $y$ ale punctului $M$ în sistemul vechi de coordonate $O\vec e_1\vec e_2$ prin coordonatele $x'$, $y'$ din sistemul $O'\vec e_1{}'\vec e_2{}'$.

> [!abstract] Formulele de transformare
> Formulele (5) se numesc **formulele de transformare a sistemului afin de coordonate**. În aceste formule matricea
> $$
> C = \begin{pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{pmatrix}
> $$
> formată din coeficienții de pe lângă $x'$, $y'$ este întocmai **matricea de trecere** de la baza $\{\vec e_1;\ \vec e_2\}$ la baza $\{\vec e_1{}';\ \vec e_2{}'\}$, iar ca termeni liberi servesc coordonatele $x_0$, $y_0$ ale noii origini $O'$ în sistemul vechi $O\vec e_1\vec e_2$.

> [!tip] Forma matriceală
> $$
> \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{pmatrix}\begin{pmatrix} x' \\ y' \end{pmatrix} + \begin{pmatrix} x_0 \\ y_0 \end{pmatrix}
> $$
> Coloanele matricei sunt **vectorii noi, scriși în baza veche**. Termenul liber e **originea nouă, scrisă în sistemul vechi**. Toată informația despre sistemul nou stă în aceste șase numere.

Deoarece vectorii $\vec e_1{}'$ și $\vec e_2{}'$ sunt necoliniari, atunci

$$
\begin{vmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{vmatrix} \neq 0
$$

și, prin urmare, sistemul (5) întotdeauna este compatibil în raport cu $x'$ și $y'$. Acest fapt permite de a exprima coordonatele punctului $M$ în sistemul nou $O'\vec e_1{}'\vec e_2{}'$ prin coordonatele aceluiași punct în sistemul vechi $O\vec e_1\vec e_2$.

> [!warning] Eroare în manual: „$\vec e_1$ și $\vec e_2$" în loc de „$\vec e_1{}'$ și $\vec e_2{}'$"
> La p. 66 manualul scrie: *„Deoarece vectorii $\vec e_1$ și $\vec e_2$ sunt necoliniari, atunci $\det C \neq 0$"*. Argumentul e cu vectorii **greșiți**.
>
> Coloanele lui $C$ sunt coordonatele vectorilor **noi** $\vec e_1{}'$, $\vec e_2{}'$. Determinantul e nenul pentru că aceștia sunt necoliniari ([[Operații cu vectori în coordonate#5⁰. Condiția de coliniaritate|condiția de coliniaritate]] din §10). Necoliniaritatea vectorilor **vechi** nu spune nimic despre $C$: dacă vectorii noi ar fi coliniari, $\det C = 0$ chiar dacă $\vec e_1$, $\vec e_2$ formează o bază.
>
> Probabil primele au fost pierdute la tipar. Același paragraf folosește corect necoliniaritatea lui $\vec e_1$, $\vec e_2$ cu câteva rânduri mai sus, pentru trecerea de la (4) la (5).

> [!note] „Compatibil" — mai exact, compatibil **determinat**
> Un sistem liniar cu determinantul nenul are **o singură** soluție. Asta contează: fiecare punct are o singură pereche $(x'; y')$, așa cum se cuvine unor coordonate.

> [!info]- Completare — formulele inverse, explicit
> Manualul afirmă că se poate exprima $(x'; y')$ prin $(x; y)$, dar nu scrie formulele. Rezolvând (5) cu regula lui Cramer, cu $\Delta = c_{11}c_{22} - c_{12}c_{21} \ne 0$:
> $$
> x' = \frac{c_{22}(x - x_0) - c_{12}(y - y_0)}{\Delta}, \qquad y' = \frac{-c_{21}(x - x_0) + c_{11}(y - y_0)}{\Delta}.
> $$
> *Verificare pe exemplul numeric de mai sus:* $\Delta = 1\cdot 1 - (-1)\cdot 1 = 2$; pentru $M(2; 5)$: $x' = \frac{1\cdot 1 - (-1)\cdot 3}{2} = 2$, $y' = \frac{-1\cdot 1 + 1\cdot 3}{2} = 1$. ✓
>
> Matriceal: $\begin{pmatrix} x' \\ y' \end{pmatrix} = C^{-1}\left[\begin{pmatrix} x \\ y \end{pmatrix} - \begin{pmatrix} x_0 \\ y_0 \end{pmatrix}\right]$.

## 4. Două cazuri particulare

### A. Translația originii

În acest caz sistemele de coordonate $O\vec e_1\vec e_2$ și $O'\vec e_1{}'\vec e_2{}'$ au unii și aceiași vectori de coordonate, dar diferite origini. Atunci $\vec e_1 = \vec e_1{}'$, $\vec e_2 = \vec e_2{}'$, matricea de trecere este matricea unitate
$$
\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix},
$$
iar formulele (5) au forma:

$$
\begin{cases} x = x' + x_0, \\ y = y' + y_0. \end{cases} \tag{6}
$$

> [!warning] Greșeală de tipar: matricea translației
> Manualul tipărește matricea de trecere ca $\begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$. Aceasta este **singulară** (determinant $0$) și ar da $y = x' + y_0$ — fals.
>
> Corect: $\vec e_1{}' = \vec e_1 = \{1;\ 0\}$ și $\vec e_2{}' = \vec e_2 = \{0;\ 1\}$, deci coloanele sunt $\binom{1}{0}$ și $\binom{0}{1}$: **matricea unitate**. Formulele (6) tipărite imediat după sunt corecte și corespund matricei unitate.

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-translatie-origine.svg)
*fig. 2 — translația: axele noi sunt paralele cu cele vechi și la fel orientate; s-a mutat doar originea*

> [!example]- Cum se citește figura — formulele (6)
> **Pasul 1 — comparați vectorii de bază.** Săgețile groase din $O$ (albastre) și din $O'$ (portocalii) sunt **identice** — aceeași direcție, același sens, aceeași lungime. S-a schimbat doar punctul din care pleacă.
>
> **Pasul 2 — măsurați $M$ în sistemul nou.** De la $O'$: $x'$ pe orizontală, $y'$ pe verticală.
>
> **Pasul 3 — măsurați $M$ în sistemul vechi.** De la $O$, pe orizontală, întâi ajungeți la $O'$ (distanța $x_0$), apoi continuați cu $x'$. Total: $x = x_0 + x'$. La fel pe verticală.
>
> **Pe ce se bazează:** formula (5) cu $c_{11} = c_{22} = 1$, $c_{12} = c_{21} = 0$.
>
> **Ce să verificați singuri pe figură:** ce coordonate are vechea origine $O$ în sistemul nou? (Răspuns: din (6), $x' = -x_0$, $y' = -y_0$ — originea veche e „în spatele" celei noi.)

> [!example]- Pas cu pas — un exemplu numeric
> Mutăm originea în $O'(2;\ 3)$, fără să rotim axele. Punctul $M$ are în sistemul nou coordonatele $(1;\ 1)$.
>
> **Pasul 1 — aplicați (6).** $x = 1 + 2 = 3$, $y = 1 + 3 = 4$. În sistemul vechi, $M(3;\ 4)$.
>
> **Pasul 2 — invers.** Punctul $P(0;\ 0)$ din sistemul vechi (adică vechea origine) are în sistemul nou $x' = 0 - 2 = -2$, $y' = 0 - 3 = -3$.
>
> **Pasul 3 — ce nu se schimbă.** Vectorul $\vec{PM}$ are aceleași coordonate în ambele sisteme: $\{3;\ 4\}$ în cel vechi, $\{1 - (-2);\ 1 - (-3)\} = \{3;\ 4\}$ în cel nou. Translația schimbă coordonatele **punctelor**, dar nu pe ale **vectorilor** — pentru că vectorii nu depind de origine, ci doar de bază.

### B. Schimbarea bazei, cu aceeași origine

În acest caz sistemele de coordonate $O\vec e_1\vec e_2$ și $O'\vec e_1{}'\vec e_2{}'$ au aceeași origine, dar se deosebesc prin vectorii de coordonate. Atunci $x_0 = 0$ și $y_0 = 0$ (deoarece punctele $O$ și $O'$ coincid). Formulele (5) au forma:

$$
\begin{cases} x = c_{11}x' + c_{12}y', \\ y = c_{21}x' + c_{22}y'. \end{cases} \tag{7}
$$

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-schimbare-baza.svg)
*fig. 3 — aceeași origine, două baze afine: același punct $M$ se descompune altfel după fiecare*

> [!example]- Cum se citește figura — formulele (7)
> **Pasul 1 — o singură origine.** Toate săgețile pleacă din $O$. Nu există termen liber în formule: $x_0 = y_0 = 0$.
>
> **Pasul 2 — descompunerea veche (albastru punctat).** Paralelele la $\vec e_1$ și $\vec e_2$ duse prin $M$ dau coordonatele vechi $x$, $y$.
>
> **Pasul 3 — descompunerea nouă (portocaliu punctat).** Paralelele la $\vec e_1{}'$ și $\vec e_2{}'$ dau coordonatele noi $x'$, $y'$. Aceleași punct, alte numere.
>
> **Pasul 4 — de ce sunt legate liniar.** Fiecare vector nou e o combinație a celor vechi (formula 2), deci și $x'\vec e_1{}' + y'\vec e_2{}'$ e o combinație a celor vechi, cu coeficienți liniari în $x'$, $y'$.
>
> **Pe ce se bazează:** formulele (5) cu $x_0 = y_0 = 0$ și [[Descompunerea unui vector după doi vectori necoliniari|unicitatea descompunerii]].
>
> **Ce să verificați singuri pe figură:** luați $M$ chiar în vârful lui $\vec e_1{}'$. Atunci $x' = 1$, $y' = 0$, iar (7) dă $x = c_{11}$, $y = c_{21}$ — exact coordonatele lui $\vec e_1{}'$ din (1). ✓

> [!note] Manualul numește acest caz „rotația axelor"
> Titlul din manual, „B. Rotația axelor în jurul originii", e prea îngust pentru un sistem **afin**: formulele (7) acoperă orice schimbare de bază — vectori întinși, comprimați, înclinați unul față de altul (ca în figura de mai sus). O **rotație** propriu-zisă e doar cazul particular în care ambele baze sunt ortonormate și la fel orientate — tratat în [[Rotația sistemului rectangular cartezian|lecția următoare]].

> [!check] Rezumat
> | Caz | Ce se schimbă | Formulele | Matricea $C$ |
> |---|---|---|---|
> | general | originea **și** baza | (5): $x = c_{11}x' + c_{12}y' + x_0$, … | oarecare, $\det C \ne 0$ |
> | A. translație | doar originea | (6): $x = x' + x_0$, $y = y' + y_0$ | matricea unitate |
> | B. aceeași origine | doar baza | (7): $x = c_{11}x' + c_{12}y'$, … | oarecare, $\det C \ne 0$ |

## Întrebări de control

1. De ce coloanele matricei de trecere sunt coordonatele vectorilor **noi**, și nu ale celor vechi?
2. Ce s-ar întâmpla cu formulele (5) dacă $\vec e_1{}'$ și $\vec e_2{}'$ ar fi coliniari? De ce un asemenea „sistem nou" nu e un sistem de coordonate?
3. Sistemul nou are originea $O'(-1;\ 4)$ și aceleași axe. Ce coordonate noi are punctul $A(2;\ 2)$?
4. La translația originii, coordonatele unui **vector** se schimbă? Argumentați.
5. Fie $\vec e_1{}' = 2\vec e_1$ și $\vec e_2{}' = \vec e_2$, cu aceeași origine. Scrieți formulele (7). Ce se întâmplă geometric cu unitatea de pe axa $Ox$?

## Legături

- Anterior: [[Aria triunghiului în coordonate]]
- Continuare: [[Rotația sistemului rectangular cartezian]]
- Se sprijină pe: [[Coordonatele punctului. Raza vectoare]], [[Descompunerea unui vector după doi vectori necoliniari]], [[Baza spațiului V2. Coordonatele vectorului]]
- Concepte: [[Matrice de trecere]], [[Sistem afin de coordonate]], [[Bază]]
