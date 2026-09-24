---
curs: geometrie-analitica
title: "Spațiul V₂. Vectori coplanari și dimensiunea planului"
capitol: 09 — Spațiul V₂
paragraf: §9
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 40–41 (PDF p. 20)
tags:
  - geometrie-analitică
  - vectori
  - coplanaritate
  - dimensiune
---

> [!tip] Despre ce este paragraful
> Până acum am lucrat cu **toți** vectorii spațiului ($V$). De aici înainte ne restrângem la vectorii **unui singur plan** — mulțimea $V_2$. Paragraful arată două lucruri: ce înseamnă că un vector „aparține" unui plan și de ce acest spațiu are **dimensiunea 2**. Pe acest fundament se construiesc, în §10, coordonatele.

## 1. Vector paralel cu un plan

> [!abstract] Definiție
> Fie un vector **nenul** $\vec{a}$ și un plan $\pi$. Vectorul $\vec{a}$ este **paralel planului** $\pi$ dacă vectorul $\vec{a}$ este paralel unei drepte oarecare din planul $\pi$.

> [!note] Convenție
> **Orice vector nul se consideră paralel cu planul $\pi$.**

Este aceeași definiție ca în [[Vectori coplanari#1. Vector paralel cu un plan|§6]], acum completată explicit cu cazul vectorului nul.

## 2. Sistemul de vectori coplanari

> [!abstract] Definiție
> **Mulțimea vectorilor paraleli aceluiași plan $\pi$** se numește **sistem de vectori coplanari**.

![figură](/geometrie-analitica/09%20Spa%C8%9Biul%20V2/Figuri/fig-vectori-paraleli-plan.svg)
*fig. 1 — $\vec{a}$, $\vec{b}$, $\vec{c}$ sunt desenați în $\pi$; $\vec{d}$ e desenat în afara lui $\pi$, dar e paralel cu $\pi$, deci face parte din același sistem*

Putem considera că **toți vectorii sistemului de vectori coplanari sunt situați în același plan $\pi$**. Astfel, orice plan din spațiu ne determină un sistem de vectori coplanari.

> [!example]- Pas cu pas — de ce „putem considera" că toți sunt chiar în $\pi$
> **Pasul 1 — ce spune definiția.** Un vector din sistem e doar *paralel* cu $\pi$; desenul lui poate fi oriunde în spațiu (ca $\vec{d}$ din fig. 1).
>
> **Pasul 2 — ce știm despre vectori.** Vectorii sunt [[Vector liber|liberi]]: după [[Vectori#4. Existența și unicitatea reprezentantului cu origine dată|teorema reprezentantului unic]], orice vector poate fi depus din **orice punct** ales.
>
> **Pasul 3 — alegem un punct din $\pi$.** Depunem $\vec{d}$ dintr-un punct $M \in \pi$: $\vec{MN} = \vec{d}$. Cum $\vec{d}$ e paralel cu o dreaptă $\ell \subset \pi$, segmentul $[MN]$ e paralel cu $\ell$ și pornește dintr-un punct al lui $\pi$ ⇒ $[MN]$ **stă în întregime în $\pi$**.
>
> **Pasul 4 — concluzia.** Orice vector al sistemului are un reprezentant situat în $\pi$. Deci nu pierdem nimic dacă ne imaginăm toți vectorii sistemului desenați direct în plan — exact asta face fig. 1 cu săgeata punctată.

> [!warning] Diferența față de §6
> În [[Vectori coplanari|§6]], „coplanari" era o proprietate a **trei** vectori dați. Aici, „sistem de vectori coplanari" este **întreaga mulțime** (infinită) a vectorilor paraleli cu un plan. Trei vectori oarecare aleși din acest sistem sunt, evident, coplanari în sensul din §6.

## 3. De ce planul are dimensiunea doi

Raționamentul are două jumătăți: **cel puțin doi** vectori independenți există, dar **nu trei**.

### Jumătatea 1 — în plan există doi vectori liniar independenți

Să considerăm doi vectori $\vec{a}$ și $\vec{b}$ din planul $\pi$.

- Dacă acești vectori sunt **coliniari**, atunci ei sunt liniar **dependenți**;
- dacă **nu** sunt coliniari, atunci ei formează un sistem liniar **independent**

(ambele variante: [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.10 — doi vectori|teorema 6.10]]). Deci **în plan există cel puțin doi vectori liniar independenți**. Așa, de exemplu, sunt vectorii $\vec{AB}$ și $\vec{AD}$ orientați după laturile unui paralelogram $ABCD$.

### Jumătatea 2 — orice trei vectori din plan sunt liniar dependenți

Am demonstrat că **orice trei vectori coplanari sunt liniar dependenți**.

> [!note] Despre trimiterea din manual
> Manualul trimite aici la „teorema 6.9". Enunțul complet „trei vectori coplanari ⇒ liniar dependenți" este direcția (⇐) a [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.11 — trei vectori|teoremei 6.11]]; demonstrația ei folosește, într-adevăr, [[Descompunerea unui vector după doi vectori necoliniari|teorema 6.9]] ($\vec{c} = \alpha\vec{a} + \beta\vec{b}$). Ambele trimiteri duc la același rezultat.

### Concluzia

> [!tip] Dimensiunea spațiului $V_2$
> Aceasta este **proprietatea de dimensiune** a spațiului vectorial format de vectorii din plan: numărul maxim de vectori liniar independenți este $2$. Se spune că acest spațiu are **dimensiunea doi** și se notează prin $V_2$.

> [!example]- Pas cu pas — ce înseamnă, concret, „dimensiune"
> **Pasul 1 — definiția intuitivă.** Dimensiunea = **câte direcții independente** există. Adică: numărul maxim de vectori pe care îi poți alege astfel încât niciunul să nu se poată obține din ceilalți.
>
> **Pasul 2 — pe o dreaptă ($V_1$).** Un vector nenul e independent. Dar oricare doi vectori ai dreptei sunt coliniari ⇒ dependenți. Maximul este $1$ ⇒ **dimensiunea 1**.
>
> **Pasul 3 — în plan ($V_2$).** Doi vectori necoliniari sunt independenți (jumătatea 1). Orice al treilea se scrie prin ei (jumătatea 2). Maximul este $2$ ⇒ **dimensiunea 2**.
>
> **Pasul 4 — în spațiu ($V$).** Trei vectori necoplanari sunt independenți ([[Coliniaritate, coplanaritate și dependență liniară#Tabloul complet|tabloul din §6]]), iar oricare patru sunt dependenți ⇒ **dimensiunea 3**.
>
> **Pasul 5 — legătura cu subspațiile.** Lanțul $\{\vec{0}\} \subset V_1 \subset V_2 \subset V$ din [[Spațiul vectorial al vectorilor liberi#3. Exemple|§7]] are dimensiunile $0 \subset 1 \subset 2 \subset 3$. Indicele din notația $V_2$ este chiar dimensiunea.

| Spațiu | Ce conține | Dimensiune | Maxim de vectori independenți |
|---|---|---|---|
| $\{\vec{0}\}$ | doar vectorul nul | 0 | 0 |
| $V_1$ | vectorii unei drepte | 1 | 1 |
| $V_2$ | vectorii unui plan | **2** | **2** |
| $V$ | toți vectorii spațiului | 3 | 3 |

## 4. Exemplul 9.3 — coplanaritatea în paralelipiped

> [!example] Enunț (manual, ex. 9.3)
> Se dă paralelipipedul $ABCDA_1B_1C_1D_1$. Cercetați coplanaritatea vectorilor:
> a) $\vec{AD}$, $\vec{BD}$ și $\vec{CD}$;
> b) $\vec{AB}$, $\vec{A_1C}$ și $\vec{B_1D}$.

### a) $\vec{AD}$, $\vec{BD}$, $\vec{CD}$

![figură](/geometrie-analitica/09%20Spa%C8%9Biul%20V2/Figuri/fig-paralelipiped-ex93a.svg)
*fig. 2 — toți trei vectorii stau în planul bazei $ABCD$*

> [!example]- Cum se citește figura — cazul a)
> **Pasul 1 — planul verde** este baza $ABCD$ a paralelipipedului.
>
> **Pasul 2 — cele trei săgeți** pornesc din $A$, $B$, $C$ și ajung toate în $D$ — toate patru puncte sunt vârfuri ale bazei.
>
> **Pasul 3 — concluzia.** Un segment cu ambele capete într-un plan stă în întregime în acel plan ⇒ toți trei vectorii sunt în planul $ABCD$ ⇒ coplanari.
>
> **Pe ce se bazează:** axioma „dacă două puncte ale unei drepte aparțin unui plan, toată dreapta aparține planului" și definiția coplanarității.

**Rezolvare (manual).** Vectorii $\vec{AD}$, $\vec{BD}$ și $\vec{CD}$ sunt paraleli la unul și același plan $(ABCD)$. Prin urmare, vectorii dați **sunt coplanari**. ✔

### b) $\vec{AB}$, $\vec{A_1C}$, $\vec{B_1D}$

> [!warning] Răspunsul din manual este greșit
> Manualul afirmă: „Vectorii $\vec{AB}$, $\vec{A_1C}$ și $\vec{B_1D}$ nu sunt paraleli la unul și același plan. Deci, acești vectori nu sunt coplanari."
>
> **Corect: acești vectori SUNT coplanari.** Ei sunt toți paraleli cu planul diagonal $(A_1B_1CD)$ și satisfac relația $\vec{A_1C} - \vec{B_1D} = 2\vec{AB}$.

![figură](/geometrie-analitica/09%20Spa%C8%9Biul%20V2/Figuri/fig-paralelipiped-ex93b.svg)
*fig. 3 — $\vec{A_1C}$ și $\vec{B_1D}$ sunt diagonalele dreptunghiului $A_1B_1CD$ (planul colorat), iar $\vec{AB} \parallel \vec{A_1B_1}$ e paralel cu același plan*

> [!example]- Cum se citește figura — de ce cei trei vectori sunt coplanari
> **Pasul 1 — găsiți planul colorat.** Patrulaterul violet $A_1B_1CD$ taie paralelipipedul **în diagonală**: pornește de la muchia de sus-față $[A_1B_1]$ și coboară la muchia de jos-spate $[DC]$.
>
> **Pasul 2 — verificați că e un paralelogram.** $[A_1B_1]$ și $[DC]$ sunt muchii paralele și egale ale paralelipipedului ⇒ $A_1B_1CD$ e paralelogram, deci chiar un plan.
>
> **Pasul 3 — cei doi vectori portocaliu și verde.** $\vec{A_1C}$ și $\vec{B_1D}$ sunt **diagonalele** acestui paralelogram — stau în întregime în planul colorat.
>
> **Pasul 4 — vectorul albastru.** $\vec{AB}$ nu stă în planul colorat, dar e egal cu $\vec{A_1B_1}$, care este **o latură** a paralelogramului. Deci $\vec{AB}$ e paralel cu planul.
>
> **Pasul 5 — concluzia.** Toți trei sunt paraleli cu același plan ⇒ coplanari, prin [[Vectori coplanari#2. Definiția coplanarității|definiția coplanarității]].
>
> **Pe ce se bazează:** proprietățile paralelipipedului (muchii paralele egale), [[Vectori#3. Egalitatea vectorilor|egalitatea vectorilor]] ($\vec{AB} = \vec{A_1B_1}$) și definiția vectorului paralel cu un plan (secțiunea 1).
>
> **Ce să verificați singuri pe figură:** urmăriți pe desen că diagonalele $\vec{A_1C}$ și $\vec{B_1D}$ se intersectează — două drepte care se intersectează sunt întotdeauna în același plan.

> [!example]- Pas cu pas — demonstrația că sunt coplanari
> Notăm muchiile care pleacă din $A$: $\vec{AB} = \vec{u}$, $\vec{AD} = \vec{v}$, $\vec{AA_1} = \vec{w}$. Într-un paralelipiped, muchiile paralele sunt vectori egali: $\vec{DC} = \vec{A_1B_1} = \vec{u}$, $\vec{BC} = \vec{v}$, $\vec{BB_1} = \vec{w}$ etc.
>
> **Pasul 1 — scriem $\vec{A_1C}$ prin muchii** (relația lui Chasles, pe drumul $A_1 \to A \to B \to C$):
> $$
> \vec{A_1C} = \vec{A_1A} + \vec{AB} + \vec{BC} = -\vec{w} + \vec{u} + \vec{v}
> $$
>
> **Pasul 2 — scriem $\vec{B_1D}$ prin muchii** (drumul $B_1 \to B \to A \to D$):
> $$
> \vec{B_1D} = \vec{B_1B} + \vec{BA} + \vec{AD} = -\vec{w} - \vec{u} + \vec{v}
> $$
>
> **Pasul 3 — scădem.**
> $$
> \vec{A_1C} - \vec{B_1D} = (-\vec{w} + \vec{u} + \vec{v}) - (-\vec{w} - \vec{u} + \vec{v}) = 2\vec{u} = 2\vec{AB}
> $$
>
> **Pasul 4 — citim o combinație liniară nulă.**
> $$
> 2\vec{AB} - \vec{A_1C} + \vec{B_1D} = \vec{0}, \qquad \text{coeficienți } 2,\ -1,\ 1 \text{ — nu toți nuli}
> $$
> Deci sistemul $\{\vec{AB}, \vec{A_1C}, \vec{B_1D}\}$ este [[Dependență liniară|liniar dependent]].
>
> **Pasul 5 — concluzia.** Prin [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.11 — trei vectori|teorema 6.11]], trei vectori liniar dependenți sunt **coplanari**. $\blacksquare$
>
> **Verificare geometrică.** Muchiile $[A_1B_1]$ și $[DC]$ sunt paralele și egale ⇒ $A_1B_1CD$ este un paralelogram (un „plan diagonal" al paralelipipedului). $\vec{A_1C}$ și $\vec{B_1D}$ sunt diagonalele lui, iar $\vec{AB} = \vec{A_1B_1}$ este o latură a lui. Toți trei sunt paraleli cu planul $(A_1B_1CD)$.
>
> **Observație.** Calculul nu a folosit nicăieri unghiuri drepte sau lungimi egale — rezultatul e valabil pentru **orice** paralelipiped.

> [!tip] Ce lecție metodică oferă greșeala
> „Nu văd un plan comun pe desen" **nu** este o demonstrație că vectorii sunt necoplanari. Un plan poate trece oblic prin corp (aici — planul diagonal). Metoda sigură este cea algebrică: se exprimă vectorii prin trei muchii necoplanare și se caută o combinație liniară nulă netrivială.

## Întrebări de control

1. De ce vectorul nul se consideră paralel cu orice plan?
2. Care e diferența dintre „trei vectori coplanari" (§6) și „sistem de vectori coplanari" (§9)?
3. Explicați, în două fraze, de ce $V_2$ are dimensiunea 2 și nu 1 sau 3.
4. În paralelipipedul din fig. 3, sunt coplanari vectorii $\vec{AB}$, $\vec{AD}$, $\vec{AC_1}$? Justificați prin descompunere după $\vec{u}$, $\vec{v}$, $\vec{w}$.
5. Găsiți în paralelipiped trei vectori care, la prima vedere, par necoplanari, dar sunt coplanari.

## Legături

- Anterior: [[Spațiul vectorial al vectorilor liberi]] (§7) · §8 încă neconspectat
- Continuare: [[Baza spațiului V2. Coordonatele vectorului]]
- Se sprijină pe: [[Vectori coplanari]], [[Coliniaritate, coplanaritate și dependență liniară]]
- Concepte: [[Coplanaritate]], [[Dependență liniară]], [[Bază]]
