---
curs: geometrie-analitica
title: "Baza ortonormată în V₃. Lungimea vectorului"
capitol: 16 — Spațiul V3 și baza lui
paragraf: §16
tip: lecție
nr: 3
status: complet
sursa: manual „Geometrie analitică în plan", p. 74–75 (PDF p. 36)
tags:
  - geometrie-analitică
  - spațiu-vectorial
  - bază-ortonormată
  - modul
  - teoremă
---

> [!tip] Despre ce este lecția
> Ca în plan ([[Sistemul rectangular cartezian. Coordonatele și modulul unui vector|§11]]), o bază oarecare permite calcule cu vectori, dar **nu** lungimi. Pentru probleme metrice — lungimi de segmente, mărimi de unghiuri — se folosesc bazele ortonormate. În ele lungimea unui vector se calculează din coordonate cu o formulă care e teorema lui Pitagora aplicată de **două** ori.

## 1. Baza ortonormată

La rezolvarea problemelor cu caracter metric, adică a problemelor legate de lungimile segmentelor sau mărimilor unghiurilor, se folosesc bazele ortonormate.

> [!abstract] Definiția 16.7
> Baza $\vec e_1$, $\vec e_2$, $\vec e_3$ se numește **ortonormată**, dacă acești vectori sunt **unitari** și **reciproc perpendiculari**.

De obicei vectorii bazei ortonormate se notează corespunzător prin $\vec i$, $\vec j$, $\vec k$.

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-baza-ortonormata-v3.svg)
*fig. 1 (după fig. 61–62 din manual) — baza ortonormată: trei vectori de lungime 1, perpendiculari doi câte doi*

> [!example]- Cum se citește figura — baza ortonormată
> **Pasul 1 — trei direcții.** $\vec i$ spre privitor, $\vec j$ la dreapta, $\vec k$ în sus — ca muchiile unui colț de cameră.
>
> **Pasul 2 — perpendicularitatea.** Marcajele din $O$ arată cele trei unghiuri drepte: $\vec i \perp \vec j$, $\vec j \perp \vec k$, $\vec i \perp \vec k$. Pe hârtie unghiul dintre $\vec i$ și $\vec j$ nu pare drept: figura e o **proiecție** a spațiului pe plan, care deformează unghiurile din „adâncime".
>
> **Pasul 3 — lungimile egale.** Toate trei sunt unitari. Din același motiv al proiecției, $\vec i$ apare mai scurt — e „micșorat de perspectivă".
>
> **Pe ce se bazează:** definiția 16.7.
>
> **Ce să verificați singuri pe figură:** câte perechi de vectori perpendiculari trebuie verificate pentru o bază din trei vectori? (Răspuns: trei — $\{\vec i, \vec j\}$, $\{\vec j, \vec k\}$, $\{\vec i, \vec k\}$.)

> [!note] Cele două figuri ale manualului desenează baza diferit
> Fig. 61 așază $\vec i$ la dreapta și $\vec j$ spre privitor; fig. 62 face invers ($\vec i$ spre privitor, $\vec j$ la dreapta). În paragraful acesta orientarea bazei nu intervine, deci ambele sunt corecte. Pentru orientarea în spațiu, convenția obișnuită e cea din fig. 62 (regula mâinii drepte), folosită și în figurile de aici.

## 2. Teorema 16.8 — lungimea vectorului

> [!tip] Teorema 16.8
> Lungimea vectorului $\vec a(a_1, a_2, a_3)$, determinat într-o bază ortonormată $\vec i$, $\vec j$, $\vec k$ se calculează după formula:
> $$
> \lvert\vec a\rvert = \sqrt{a_1^2 + a_2^2 + a_3^2}. \tag{5}
> $$

**Demonstrație.** Să demonstrăm teorema la început pentru $a_1 \neq 0$, $a_2 \neq 0$ și $a_3 \neq 0$. Dintr-un punct arbitrar $O$ al spațiului depunem următorii vectori $\vec{OA} = \vec a$, $\vec{OE_1} = \vec i$, $\vec{OE_2} = \vec j$, $\vec{OE_3} = \vec k$ și construim paralelipipedul așa cum este indicat în figura 62.

După regula poligonului

$$
\vec{OA} = \vec{OA_1} + \vec{A_1A'} + \vec{A'A} = \vec{OA_1} + \vec{OA_2} + \vec{OA_3}.
$$

Însă $\vec{OA_1} \parallel \vec i$ și deci $\vec{OA_1} = \alpha\vec i$. Analogic $\vec{OA_2} = \beta\vec j$, $\vec{OA_3} = \gamma\vec k$ și prin urmare $\vec{OA} = \alpha\vec i + \beta\vec j + \gamma\vec k$ sau $\vec a = \alpha\vec i + \beta\vec j + \gamma\vec k$. Așadar, $\alpha$, $\beta$, $\gamma$ sunt coordonatele vectorului $\vec a$ și deci $\alpha = a_1$, $\beta = a_2$, $\gamma = a_3$. Prin urmare,

$$
\vec{OA_1} = a_1\vec i, \qquad \vec{OA_2} = a_2\vec j, \qquad \vec{OA_3} = a_3\vec k.
$$

Dar atunci $OA_1 = \lvert a_1\rvert$, $OA_2 = \lvert a_2\rvert$, $OA_3 = \lvert a_3\rvert$.

După cum se știe, pătratul diagonalei paralelipipedului dreptunghic este egal cu suma pătratelor dimensiunilor lui: $OA^2 = OA_1^2 + OA_2^2 + OA_3^2$. Din ultima egalitate obținem:

$$
\lvert\vec a\rvert^2 = a_1^2 + a_2^2 + a_3^2,
$$

adică formula (5).

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-t-16-8.svg)
*fig. 2 (după fig. 62 din manual) — diagonala paralelipipedului dreptunghic, calculată în doi pași de Pitagora*

> [!example]- Cum se citește figura — de ce „pătratul diagonalei e suma pătratelor dimensiunilor"
> Manualul citează această proprietate ca „se știe". Figura arată de unde vine.
>
> **Pasul 1 — paralelipipedul.** Muchiile din $O$ sunt $\vec{OA_1} = a_1\vec i$ (albastru), $\vec{OA_2} = a_2\vec j$ (portocaliu), $\vec{OA_3} = a_3\vec k$ (verde). Fiind pe direcții perpendiculare, paralelipipedul e **dreptunghic**.
>
> **Pasul 2 — primul triunghi (verde, pe fundul cutiei).** $O$, $A_1$ și $A'$ — colțul de jos de sub $A$. Unghiul din $A_1$ e drept (muchiile fundului sunt perpendiculare). Pitagora: $OA'^2 = OA_1^2 + A_1A'^2 = a_1^2 + a_2^2$.
>
> **Pasul 3 — al doilea triunghi (violet, vertical).** $O$, $A'$ și $A$. Muchia $A'A$ e verticală, deci perpendiculară pe tot fundul, în particular pe $OA'$: unghiul din $A'$ e drept. Pitagora: $OA^2 = OA'^2 + A'A^2 = (a_1^2 + a_2^2) + a_3^2$.
>
> **Pasul 4 — concluzia.** $\lvert\vec a\rvert^2 = OA^2 = a_1^2 + a_2^2 + a_3^2$. Pătratele fac semnele coordonatelor indiferente.
>
> **Pe ce se bazează:** definiția 16.7 (unghiurile drepte), teorema 16.1 (coordonatele) și teorema lui Pitagora, aplicată de două ori.
>
> **Ce să verificați singuri pe figură:** pentru $\vec a = \{1;\ 2;\ 2\}$, $OA' = \sqrt5$, iar $OA = \sqrt{5 + 4} = 3$. Un vector cu coordonate întregi și lungime întreagă.

> [!warning] O scăpare în demonstrația din manual: $OA_1 = a_1$
> Manualul scrie „Dar atunci $OA_1 = a_1$, $OA_2 = a_2$, $OA_3 = a_3$". Lungimile sunt pozitive, coordonatele pot fi negative: corect este $OA_1 = \lvert a_1\rvert$ (fiindcă $\lvert\vec{OA_1}\rvert = \lvert a_1\rvert\cdot\lvert\vec i\rvert$). Concluzia nu e afectată — în formulă apar doar pătratele, iar $\lvert a_1\rvert^2 = a_1^2$.

### Cazul în care unele coordonate sunt nule

Formula (5) rămâne în vigoare și în cazul când unele coordonate ale vectorului $\vec a$ sunt egale cu zero. Fie, de exemplu, $a_2 = 0$ și $a_3 = 0$. Atunci $\vec a = a_1\vec i$, de unde $\lvert\vec a\rvert = \lvert a_1\rvert\cdot\lvert\vec i\rvert = \lvert a_1\rvert$ sau $\lvert\vec a\rvert = \sqrt{a_1^2 + 0 + 0}$.

Dacă însă o coordonată a vectorului este egală cu zero, iar celelalte două sunt diferite de zero, de exemplu: $a_3 = 0$, $a_1 \neq 0$, $a_2 \neq 0$, atunci în construcția precedentă punctele $A$ și $A'$ coincid. Patrulaterul $OA_1AA_2$ este un dreptunghi și prin urmare, $OA^2 = OA_1^2 + OA_2^2$. Din ultima egalitate, avem: $\lvert\vec a\rvert^2 = a_1^2 + a_2^2$ sau $\lvert\vec a\rvert = \sqrt{a_1^2 + a_2^2 + 0}$. Teorema 16.8 este demonstrată. $\blacksquare$

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-t-16-8-caz-plan.svg)
*fig. 3 (după fig. 63 din manual) — cazul $a_3 = 0$: paralelipipedul se turtește într-un dreptunghi*

> [!example]- Cum se citește figura — cazul $a_3 = 0$
> **Pasul 1 — ce dispare.** Fără componentă pe $\vec k$, punctul $A$ nu mai urcă: el coincide cu $A'$, colțul fundului.
>
> **Pasul 2 — ce rămâne.** Dreptunghiul $OA_1AA_2$ în planul lui $\vec i$ și $\vec j$. E exact situația din plan, §11.
>
> **Pasul 3 — un singur Pitagora.** $OA^2 = a_1^2 + a_2^2$ — formula (11) din §11 e un caz particular al formulei (5).
>
> **Pe ce se bazează:** aceleași argumente, cu un pas mai puțin.
>
> **Ce să verificați singuri pe figură:** de ce manualul tratează separat cazurile cu zerouri? (Răspuns: construcția cu paralelipipedul „degenerează" — unele muchii au lungime 0 și triunghiurile din demonstrație nu mai există. Formula rămâne adevărată, dar argumentul trebuie adaptat.)

> [!info]- Completare — distanța dintre două puncte în spațiu
> Manualul nu o enunță în §16, dar rezultă imediat, ca în §11: pentru $A(x_1; y_1; z_1)$ și $B(x_2; y_2; z_2)$ într-un reper ortonormat, $\vec{AB} = \{x_2 - x_1;\ y_2 - y_1;\ z_2 - z_1\}$ și
> $$
> \rho(A, B) = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}.
> $$
> *Exemplu:* $A(1; 0; 2)$, $B(3; 2; 1)$: $\rho = \sqrt{4 + 4 + 1} = 3$.

> [!check] Rezumat
> | Formulă | Condiție |
> |---|---|
> | $\vec a = a_1\vec e_1 + a_2\vec e_2 + a_3\vec e_3$ | orice bază |
> | operații coordonată cu coordonată | orice bază |
> | $\lvert\vec a\rvert = \sqrt{a_1^2 + a_2^2 + a_3^2}$ | **numai bază ortonormată** |

## Întrebări de control

1. De ce formula (5) e falsă într-o bază oarecare din $V_3$? Construiți un contraexemplu cu $\vec e_1 = 2\vec i$.
2. Calculați lungimea vectorului $\{2;\ -3;\ 6\}$.
3. Arătați că $\{\tfrac13;\ \tfrac23;\ \tfrac23\}$ este un vector unitar.
4. Care sunt cele două triunghiuri dreptunghice folosite în demonstrație? Unde e unghiul drept în fiecare?
5. Cum se obține formula (11) din §11 ca un caz particular al formulei (5)?

## Legături

- Anterior: [[Coordonatele vectorului în spațiul V3]]
- Continuare: [[Ecuația canonică și ecuația dreptei prin două puncte]] (§17–§19 — probleme — nu sunt conspectate)
- Se sprijină pe: [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]], [[Modulul vectorului. Vectorul opus]]
- Concepte: [[Spațiul V3]], [[Bază ortonormată]], [[Modulul vectorului]]
