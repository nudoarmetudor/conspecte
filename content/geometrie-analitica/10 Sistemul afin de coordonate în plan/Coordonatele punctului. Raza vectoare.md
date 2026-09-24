---
curs: geometrie-analitica
title: "Coordonatele punctului. Raza vectoare"
capitol: 10 — Sistemul afin de coordonate în plan
paragraf: §10
tip: lecție
nr: 5
status: complet
sursa: manual „Geometrie analitică în plan", p. 47–48 (PDF p. 23–24)
tags:
  - geometrie-analitică
  - coordonate
  - rază-vectoare
---

Fie acum $M \in P$ un punct arbitrar din planul de coordonate. Se mai spune că $M$ este **dat în raport cu $R$**, sau în raport cu sistemul afin de coordonate $(xOy)$.

## 1. Raza vectoare

> [!abstract] Definiția 10.6
> Vectorul $\vec{OM}$ se numește **rază vectoare** a punctului $M$.

Fie $\vec{OM} = \{x;\ y\}$, adică $\vec{OM} = x\,\vec{e}_1 + y\,\vec{e}_2$.

## 2. Coordonatele punctului

> [!abstract] Definiția 10.7
> Coordonatele razei vectoare $\vec{OM}$ se numesc **coordonate ale punctului $M$** în raport cu sistemul dat de coordonate. Se notează $M(x;\ y)$, unde $x$ este **abscisa** punctului $M$, iar $y$ este **ordonata** punctului $M$.

> [!tip] Ideea-cheie
> Coordonatele unui **punct** sunt, prin definiție, coordonatele unui **vector** — cel care pleacă din origine și ajunge în punct. Toată teoria vectorilor din §3–§9 devine astfel aplicabilă punctelor.

![figură](/geometrie-analitica/10%20Sistemul%20afin%20de%20coordonate%20%C3%AEn%20plan/Figuri/fig-raze-vectoare.svg)
*fig. 1 — patru puncte, câte unul în fiecare cadran, cu razele lor vectoare; pentru $M$ sunt trasate și paralelele la axe*

> [!example]- Cum se citește figura — coordonatele unui punct
> **Pasul 1 — alegeți un punct**, de exemplu $M$, și urmăriți săgeata care vine spre el **din origine**: aceasta este raza vectoare $\vec{OM}$.
>
> **Pasul 2 — duceți paralele la axe.** Liniile punctate din $M$ sunt paralele cu $(Oy)$ (coboară spre $Ox$) și cu $(Ox)$ (merg spre $Oy$).
>
> **Pasul 3 — citiți abscisa** acolo unde paralela la $(Oy)$ întâlnește $(Ox)$: la **2** unități $\vec{e}_1$ în sensul pozitiv ⇒ $x = 2$.
>
> **Pasul 4 — citiți ordonata** acolo unde paralela la $(Ox)$ întâlnește $(Oy)$: la **2** unități $\vec{e}_2$ în sensul pozitiv ⇒ $y = 2$. Deci $M(2;\ 2)$.
>
> **Pasul 5 — comparați cu celelalte puncte.** $N$ e la stânga lui $Oy$ ⇒ $x < 0$; $P$ e și la stânga, și sub $Ox$ ⇒ ambele negative; $Q$ e la dreapta, dar sub $Ox$ ⇒ $y < 0$. Semnele se potrivesc cu cadranele.
>
> **Pe ce se bazează:** definiția 10.7 (coordonatele punctului = coordonatele razei vectoare) și [[Coordonatele vectorului. Proiecții geometrice și algebrice#1. Descompunerea vectorului după axe|descompunerea după axe]].
>
> **Ce să verificați singuri pe figură:** duceți paralelele la axe din $P$ — ar trebui să cadă la $-1$ pe $Ox$ și la $-2$ pe $Oy$.

## 3. Semnele coordonatelor în cadrane

În dependență de cadranul în care se află punctul $M$, coordonatele lui au anumite semne:

| cadran | I | II | III | IV |
|---|---|---|---|---|
| $x$ | $+$ | $-$ | $-$ | $+$ |
| $y$ | $+$ | $+$ | $-$ | $-$ |

(vezi și [[Sistemul afin de coordonate. Axe și cadrane#2. Cadranele|fig. 1 din lecția despre cadrane]])

## 4. Corespondența biunivocă puncte ↔ perechi de numere

Invers, dacă se dă o pereche de numere reale $(x;\ y)$, atunci ele ne determină, în raport cu sistemul de coordonate dat, **un punct unic** $M$, astfel încât $x$ este abscisa lui, iar $y$ — ordonata.

> [!tip] Concluzie
> Între mulțimea **perechilor ordonate** $(x;\ y)$ de numere reale și mulțimea **punctelor din plan** (planul de coordonate) se stabilește o **corespondență biunivocă**.

> [!example]- Pas cu pas — de ce corespondența e biunivocă
> Trebuie arătate două lucruri: *fiecare punct are o singură pereche* și *fiecare pereche are un singur punct*.
>
> **Pasul 1 — punct → pereche.** Unui punct $M$ îi corespunde un singur vector $\vec{OM}$ (segmentul orientat $\overline{OM}$ e fixat). Vectorul are coordonate **unice** în baza $\{\vec{e}_1, \vec{e}_2\}$ ([[Descompunerea unui vector după doi vectori necoliniari|teorema 6.9]]). Deci $M$ are o singură pereche $(x; y)$.
>
> **Pasul 2 — pereche → vector.** Perechii $(x; y)$ îi corespunde un singur vector $\vec{v} = x\vec{e}_1 + y\vec{e}_2$ (operațiile au rezultat unic).
>
> **Pasul 3 — vector → punct.** După [[Vectori#4. Existența și unicitatea reprezentantului cu origine dată|teorema reprezentantului unic]], există **un singur** punct $M$ cu $\vec{OM} = \vec{v}$.
>
> **Pasul 4 — concluzia.** Drumurile punct → pereche și pereche → punct sunt inverse unul altuia. Aceasta este exact o corespondență biunivocă.
>
> **Ce rol are originea.** Pasul 3 este locul unde intervine punctul $O$ al reperului. Fără origine, o pereche de numere ar determina un vector (liber), dar **nu** un punct.

## 5. Coordonatele vectorului determinat de două puncte

Fie $M_1(x_1;\ y_1)$ și $M_2(x_2;\ y_2)$ două puncte din plan. Deoarece

$$
\vec{M_1M_2} = \vec{OM_2} - \vec{OM_1},
$$

după proprietatea [[Operații cu vectori în coordonate#2⁰. Suma și diferența|2⁰]] avem:

$$
\vec{M_1M_2} = \{x_2 - x_1;\ \ y_2 - y_1\} \tag{5}
$$

În acest fel se determină **coordonatele vectorului după coordonatele originii și extremității lui**.

![figură](/geometrie-analitica/10%20Sistemul%20afin%20de%20coordonate%20%C3%AEn%20plan/Figuri/fig-vector-doua-puncte.svg)
*fig. 2 — $\vec{M_1M_2}$ închide triunghiul format de cele două raze vectoare*

> [!example]- Cum se citește figura — formula (5)
> **Pasul 1 — cele două raze vectoare.** Albastru: $\vec{OM_1}$; portocaliu: $\vec{OM_2}$. Ambele pleacă din origine.
>
> **Pasul 2 — vectorul căutat.** Violet: $\vec{M_1M_2}$, de la **vârful albastru** la **vârful portocaliu**.
>
> **Pasul 3 — recunoașteți construcția diferenței.** Doi vectori din origine comună, iar săgeata care unește vârfurile, mergând *spre* descăzut: aceasta e exact [[Scăderea vectorilor#2. Construcția diferenței|construcția diferenței]], deci $\vec{M_1M_2} = \vec{OM_2} - \vec{OM_1}$.
>
> **Pasul 4 — treceți la coordonate.** Diferența vectorilor se face coordonată cu coordonată: $\{x_2 - x_1;\ y_2 - y_1\}$.
>
> **Pe ce se bazează:** [[Adunarea vectorilor. Regula triunghiului și a poligonului#3. Relația lui Chasles|relația lui Chasles]] $\vec{OM_1} + \vec{M_1M_2} = \vec{OM_2}$ și proprietatea 2⁰.
>
> **Ce să verificați singuri pe figură:** parcurgeți drumul $O \to M_1 \to M_2$ (albastru, apoi violet). Ajungeți în același loc ca pe drumul direct $O \to M_2$ (portocaliu).

> [!warning] Ordinea în formula (5): „extremitate minus origine"
> $\vec{M_1M_2} = \{x_2 - x_1;\ y_2 - y_1\}$ — din coordonatele **punctului de sosire** se scad cele ale **punctului de plecare**. Scăderea inversă dă vectorul opus $\vec{M_2M_1}$.
>
> **Exemplu.** $M_1(4; -1)$, $M_2(1; 3)$: $\vec{M_1M_2} = \{1 - 4;\ 3 - (-1)\} = \{-3;\ 4\}$, iar $\vec{M_2M_1} = \{3;\ -4\}$.

> [!note] Precizare față de manual
> Manualul scrie „după **(2)** avem". Formula (2) a paragrafului este cea a proiecțiilor algebrice; trimiterea corectă este la **proprietatea 2⁰** (diferența vectorilor în coordonate).

> [!warning] Punct vs. vector — notația
> | Obiect | Notare | Exemplu |
> |---|---|---|
> | punct | paranteze **rotunde** | $M(2;\ 3)$ |
> | vector | acolade | $\vec{a} = \{2;\ 3\}$ |
>
> Punctul $M(2; 3)$ și vectorul $\{2; 3\}$ au aceleași numere, dar sunt obiecte diferite: vectorul $\{2; 3\}$ poate fi desenat oriunde, punctul $M$ — doar într-un singur loc. Ele coincid numai prin intermediul razei vectoare: $\vec{OM} = \{2; 3\}$.

## Întrebări de control

1. Ce coordonate are originea $O$? Ce rază vectoare are?
2. Punctul $M(x; y)$ se află pe axa $(Oy)$. Ce puteți spune despre $x$?
3. Calculați $\vec{AB}$ și $\vec{BA}$ pentru $A(-2; 5)$, $B(3; -1)$.
4. Arătați că $\vec{AB} = \vec{CD}$ dacă și numai dacă $x_B - x_A = x_D - x_C$ și $y_B - y_A = y_D - y_C$.
5. De ce, fără originea $O$, o pereche de numere nu determină un punct?

## Legături

- Anterior: [[Operații cu vectori în coordonate]]
- Continuare: [[Împărțirea segmentului în raportul dat]]
- Concepte: [[Rază vectoare]], [[Sistem afin de coordonate]]
