---
curs: geometrie-analitica
title: "Produsul vectorului la un număr"
capitol: 05 — Produsul vectorului la un număr
paragraf: §5
tip: lecție
nr: 1
status: complet
sursa: PDF curs (AP_10_09_2026), §5
tags:
  - geometrie-analitică
  - vectori
  - înmulțire-cu-scalar
---

## 1. Definiția

> [!abstract] Definiția 5.1
> Prin **produsul unui vector $\vec{a}$ la un număr real $\alpha$** vom înțelege așa un vector $\vec{b} = \alpha\vec{a}$, încât:
>
> 1. $\lvert \vec{b} \rvert = \lvert \alpha \rvert \cdot \lvert \vec{a} \rvert$, unde $\lvert \alpha \rvert$ este valoarea absolută a numărului;
> 2. $\vec{b} \uparrow\uparrow \vec{a} \iff \alpha \ge 0$  și  $\vec{b} \uparrow\downarrow \vec{a} \iff \alpha < 0$.

Astfel, pentru orice vector $\vec{a}$ și orice număr real $\alpha$, vectorul $\vec{b} = \alpha\vec{a}$ **se determină univoc**.

> [!warning] Precizare — cazul $\vec{a} = \vec{0}$
> Condiția 2 a definiției are sens pentru $\vec{a} \ne \vec{0}$. Aplicată literal la $\vec{a} = \vec{0}$ și $\alpha < 0$, ar cere simultan $\vec{0} \uparrow\downarrow \vec{0}$ și (prin convenția „$\vec{0}$ e la fel orientat cu orice vector") $\vec{0} \uparrow\uparrow \vec{0}$. Nu e nicio problemă practică: din condiția 1, $\lvert\vec{b}\rvert = \lvert\alpha\rvert \cdot 0 = 0$, deci $\vec{b} = \vec{0}$ indiferent de orientare — exact rezultatul $\alpha \cdot \vec{0} = \vec{0}$ de mai jos. Sursa nu formulează explicit această excepție.

![figură](/geometrie-analitica/05%20Produsul%20vectorului%20la%20un%20num%C4%83r/Figuri/fig-produs-cu-numar.svg)
*fig. 1 — înmulțirea cu un număr schimbă lungimea, și eventual sensul, dar nu direcția*

> [!tip] Cum se citește definiția
> Numărul $\alpha$ face exact două lucruri:
> - **$\lvert \alpha \rvert$** decide *cât de lung* devine vectorul (dilatare dacă $\lvert\alpha\rvert>1$, contractare dacă $\lvert\alpha\rvert<1$);
> - **semnul lui $\alpha$** decide *dacă se păstrează sau se inversează sensul*.
>
> **Direcția rămâne aceeași** — de aceea $\alpha\vec{a}$ este întotdeauna coliniar cu $\vec{a}$.

## 2. Cazuri particulare evidente

$$
\text{1)} \quad 0 \cdot \vec{a} = \vec{0} \qquad \text{și} \qquad \alpha \cdot \vec{0} = \vec{0}
$$
$$
\text{2)} \quad 1 \cdot \vec{a} = \vec{a} \qquad \text{și} \qquad (-1) \cdot \vec{a} = -\vec{a}
$$

> [!note] Legătura cu vectorul opus
> Proprietatea 2 arată că noțiunea de [[Vector opus|vector opus]], introdusă geometric în §3, coincide cu înmulțirea cu $-1$. Cele două definiții nu se contrazic — se completează.

## 3. Legătura cu omotetia

> [!tip] Proprietatea 3
> Dacă la omotetia $H_O^k$ vectorul $\vec{AB}$ se transformă în $\vec{A'B'}$, atunci
> $$
> \vec{A'B'} = k\,\vec{AB}.
> $$
> De asemenea $\vec{OA'} = k\,\vec{OA}$ și $\vec{OB'} = k\,\vec{OB}$.

![figură](/geometrie-analitica/05%20Produsul%20vectorului%20la%20un%20num%C4%83r/Figuri/fig-t-omotetie-vector.svg)
*fig. T1 — omotetia înmulțește cu $k$ fiecare vector: $k = 2$ și $k = -1{,}5$*

> [!example]- Cum se citește figura — proprietatea 3 (omotetia și vectorii)
> **Pasul 1 — stânga, datele.** Centrul $O$ (gri) și segmentul orientat $\overline{AB}$ (albastru).
>
> **Pasul 2 — razele (gri punctat).** Fiecare vârf pleacă pe raza lui din $O$: $A'$ pe raza $[OA)$ cu $OA' = 2 \cdot OA$, $B'$ pe raza $[OB)$ cu $OB' = 2 \cdot OB$.
>
> **Pasul 3 — imaginea (violet).** $\overline{A'B'}$ este paralel cu $\overline{AB}$, la fel orientat și de două ori mai lung: triunghiurile $OAB$ și $OA'B'$ sunt asemenea, cu raportul $2$. Deci $\vec{A'B'} = 2\vec{AB}$.
>
> **Pasul 4 — dreapta, $k < 0$.** Pentru $k = -1{,}5$ punctele trec **de cealaltă parte** a lui $O$, pe prelungirile razelor. Segmentul violet are lungimea $1{,}5 \cdot AB$, iar săgeata e întoarsă: semnul lui $k$ inversează sensul.
>
> **Pe ce se bazează:** [[Omotetie|definiția omotetiei]] ($\vec{OM'} = k\,\vec{OM}$, pasul 2); teorema lui Thales și asemănarea triunghiurilor $OAB$, $OA'B'$ (pasul 3); [[#1. Definiția|definiția 5.1]] — modul $\lvert k \rvert$ ori mai mare, sens după semnul lui $k$ (pașii 3–4).
>
> **Ce să verificați singuri pe figură:** (1) în stânga, raportul $OA'/OA$ este $2$, la fel $A'B'/AB$; (2) în dreapta, $A$ și $A'$ sunt de o parte și de alta a lui $O$, iar săgeata violet are sensul opus celei albastre.

> [!info]- Ce este omotetia $H_O^k$
> [[Omotetie|Omotetia]] de centru $O$ și coeficient $k \ne 0$ este transformarea care duce fiecare punct $M$ în punctul $M'$ de pe dreapta $(OM)$ cu $\vec{OM'} = k\,\vec{OM}$. Ea „umflă" sau „dezumflă" figura de $\lvert k \rvert$ ori față de $O$, inversând poziția dacă $k < 0$. Proprietatea 3 spune că **omotetia și înmulțirea cu un scalar sunt aceeași operație**, privită o dată asupra punctelor și o dată asupra vectorilor. Acesta este instrumentul cu care se demonstrează [[Proprietățile înmulțirii vectorului cu un număr#6. Distributivitatea față de suma de vectori|distributivitatea față de suma de vectori]].

## 4. Consecință: coliniaritatea

Definiția 5.1 garantează $\alpha\vec{a} \parallel \vec{a}$ pentru orice $\alpha$. Reciproca — orice vector coliniar cu $\vec{a}$ se obține așa — este conținutul [[Raportul a doi vectori coliniari#3. Teorema 5.3 — criteriul de coliniaritate|teoremei 5.3]].

## Întrebări de control

1. De ce în punctul 2 al definiției apare $\alpha \ge 0$ (cu egal), și nu $\alpha > 0$?
2. Ce vector este $\alpha\vec{a}$ dacă $\alpha = 0$? Ce orientare are el?
3. Comparați $\lvert 3\vec{a} \rvert$, $\lvert -3\vec{a} \rvert$ și $3\lvert \vec{a} \rvert$.
4. Construiți grafic $-\tfrac{1}{2}\vec{a}$ pentru un $\vec{a}$ dat.
5. De ce $\alpha\vec{a}$ nu poate fi niciodată necoliniar cu $\vec{a}$?

## Legături

- Anterior: [[Scăderea vectorilor]]
- Continuare: [[Proprietățile înmulțirii vectorului cu un număr]]
- Concepte: [[Omotetie]], [[Vectori coliniari]]
