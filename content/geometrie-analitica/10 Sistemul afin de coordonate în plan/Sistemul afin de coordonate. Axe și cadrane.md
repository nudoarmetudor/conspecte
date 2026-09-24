---
curs: geometrie-analitica
title: "Sistemul afin de coordonate. Axe și cadrane"
capitol: 10 — Sistemul afin de coordonate în plan
paragraf: §10
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 43–44 (PDF p. 21–22)
tags:
  - geometrie-analitică
  - sistem-de-coordonate
  - reper
---

> [!tip] Despre ce este paragraful
> §9 a dat coordonate **vectorilor**. §10 face pasul decisiv al geometriei analitice: dă coordonate **punctelor**, astfel încât fiecare punct al planului să devină o pereche de numere $(x; y)$. Titlul complet din manual: *„Sistemul afin de coordonate în plan. Împărțirea segmentului în raportul dat"*.

## 1. Construcția sistemului

Să considerăm mulțimea $P$ a **tuturor punctelor** și mulțimea $V_2$ a **tuturor vectorilor** din plan. Introducem în plan un [[Reperul afin în plan. Tipuri de repere|reper afin]] $R = \{O, \vec{e}_1, \vec{e}_2\}$.

Fie $\vec{e}_1 = \vec{OE_1}$ și $\vec{e}_2 = \vec{OE_2}$. Reperul $R$ se poate nota și sub forma $R = \{O, E_1, E_2\}$ — trei **puncte** în loc de un punct și doi vectori.

| Obiect | Denumire | Notare |
|---|---|---|
| dreapta $(OE_1)$ | **axa absciselor** | $(Ox)$ |
| dreapta $(OE_2)$ | **axa ordonatelor** | $(Oy)$ |
| punctul $O$ | **originea** sistemului afin de coordonate | $O$ |
| sistemul întreg | **sistem afin de coordonate**, stabilit de reperul $R$ | $(xOy)$, $R = \{O, \vec{e}_1, \vec{e}_2\}$ sau $O\vec{e}_1\vec{e}_2$ |

Dreptele $(OE_1)$ și $(OE_2)$ sunt **axe de coordonate** și determină în plan așa-numitul sistem afin de coordonate.

> [!abstract] Definiția 10.1
> Planul în care este introdus un sistem de coordonate se numește **plan de coordonate**.

## 2. Cadranele

Axele de coordonate $(Ox)$ și $(Oy)$ împart planul în **patru cadrane**, dintre care **primul** se află între direcțiile vectorilor $\vec{e}_1$ și $\vec{e}_2$, deci între **direcțiile pozitive** ale axelor $(Ox)$ și $(Oy)$.

![figură](/geometrie-analitica/10%20Sistemul%20afin%20de%20coordonate%20%C3%AEn%20plan/Figuri/fig-sistem-afin-cadrane.svg)
*fig. 1 (după fig. 40 din manual) — axe oblice, vectorii de bază, cele patru cadrane și semnele coordonatelor punctelor din fiecare*

> [!example]- Cum se citește figura — sistemul afin și cadranele
> **Pasul 1 — găsiți originea $O$.** Este singurul punct comun al celor două axe gri. Totul se măsoară de aici.
>
> **Pasul 2 — identificați direcțiile pozitive.** Săgeata albastră $\vec{e}_1 = \vec{OE_1}$ arată sensul pozitiv pe $(Ox)$; săgeata portocalie $\vec{e}_2 = \vec{OE_2}$ — sensul pozitiv pe $(Oy)$. Observați că axa $(Oy)$ e **oblică**: sistemul afin nu cere unghi drept.
>
> **Pasul 3 — localizați cadranul I.** E regiunea „prinsă" între cele două săgeți — între semiaxa pozitivă $Ox$ și semiaxa pozitivă $Oy$.
>
> **Pasul 4 — parcurgeți celelalte cadrane.** Rotiți-vă în jurul lui $O$ de la cadranul I, trecând peste semiaxa pozitivă $Oy$: urmează II, apoi III, apoi IV.
>
> **Pasul 5 — citiți semnele.** În fiecare cadran, perechea violetă $(\pm, \pm)$ spune semnul abscisei și al ordonatei punctelor de acolo. Regula: *de partea pozitivă a lui $Oy$ față de $Ox$* → $y > 0$; *de partea pozitivă a lui $Ox$ față de $Oy$* → $x > 0$.
>
> **Pe ce se bazează:** [[Reperul afin în plan. Tipuri de repere|definiția 9.2 a reperului afin]]; semnele vin din [[Coordonatele punctului. Raza vectoare|definiția coordonatelor punctului]] — $x$ și $y$ sunt coeficienții lui $\vec{e}_1$ și $\vec{e}_2$ în descompunerea razei vectoare.
>
> **Ce să verificați singuri pe figură:** alegeți un punct din cadranul III și duceți prin el paralele la axe — ambele intersecții cad pe semiaxele **negative**.

> [!warning] Sistem afin ≠ caroiaj pătratic
> Într-un sistem afin: axele pot face orice unghi, iar unitățile de pe cele două axe ($\lvert\vec{e}_1\rvert$ și $\lvert\vec{e}_2\rvert$) pot fi diferite. De aceea, în figurile acestui paragraf, coordonatele se citesc **ducând paralele la axe**, nu perpendiculare. Caroiajul pătratic de pe caietul de matematică este doar cazul particular al reperului [[Reperul afin în plan. Tipuri de repere#2. Tipuri de repere|rectangular cartezian]].

> [!info]- Completare — punctele de pe axe
> Punctele situate **pe axe** nu aparțin niciunui cadran: pe $(Ox)$ au $y = 0$, pe $(Oy)$ au $x = 0$, iar originea are $O(0; 0)$. Semnele din fig. 1 sunt deci **stricte** ($>0$ sau $<0$).

## Întrebări de control

1. Ce diferență există între notațiile $R = \{O, \vec{e}_1, \vec{e}_2\}$ și $R = \{O, E_1, E_2\}$?
2. De ce cadranul I este cel dintre direcțiile **pozitive** ale axelor și nu oricare dintre cele patru?
3. Într-un sistem afin cu axele formând un unghi de $30^\circ$, ce formă au „pătratele" caroiajului unitar?
4. În ce cadran se află punctele cu $x < 0$ și $y > 0$? Dar cele cu $x > 0$ și $y < 0$?

## Legături

- Anterior: [[Reperul afin în plan. Tipuri de repere]] (§9)
- Continuare: [[Orientarea planului, a poligoanelor și a unghiurilor]]
- Concepte: [[Sistem afin de coordonate]], [[Reper afin]]
