---
curs: geometrie-analitica
title: "Unghiul dintre doi vectori. Perpendicularitate"
capitol: 13 — Produsul scalar a doi vectori
paragraf: §13
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 55–56 (PDF p. 26–27)
tags:
  - geometrie-analitică
  - produs-scalar
  - unghi
  - perpendicularitate
---

> [!tip] Despre ce este lecția
> Vectorii sunt **liberi**: îi putem muta oriunde în plan. Atunci ce înseamnă „unghiul dintre ei", dacă nici măcar nu se ating? Lecția răspunde: îi aducem într-un punct comun și măsurăm acolo — apoi demonstrăm că **răspunsul nu depinde de punctul ales**. Abia după această verificare noțiunea de unghi are sens, iar produsul scalar din lecția următoare se poate defini.

## 1. Definiția unghiului

Fie $\vec a$ și $\vec b$ doi vectori **nenuli**. Dintr-un punct arbitrar $O$ depunem vectorii $\vec{OA} = \vec a$, $\vec{OB} = \vec b$ și considerăm semidreptele $[OA)$ și $[OB)$.

> [!abstract] Unghiul dintre doi vectori
> **Unghi dintre vectorii $\vec a$ și $\vec b$** se numește unghiul dintre semidreptele $[OA)$ și $[OB)$, adică unghiul $AOB$.
>
> Dacă semidreptele $[OA)$ și $[OB)$ coincid, atunci unghiul dintre acești vectori se consideră **nul**.
>
> Unghiul dintre vectorii $\vec a$ și $\vec b$ se notează $\widehat{(\vec a, \vec b)}$.

![figură](/geometrie-analitica/13%20Produsul%20scalar%20a%20doi%20vectori/Figuri/fig-unghi-doi-vectori.svg)
*fig. 1 (după fig. 51 din manual) — cei doi vectori depuși din același punct; unghiul dintre ei este unghiul $AOB$*

> [!example]- Cum se citește figura — definiția unghiului
> **Pasul 1 — punctul comun.** Ambele săgeți pleacă din **același** punct $O$. Acesta e singurul lucru pe care îl adăugăm față de datele problemei; $O$ este ales arbitrar.
>
> **Pasul 2 — de la vectori la semidrepte.** Prelungiți mental fiecare săgeată dincolo de vârf: obțineți semidreptele $[OA)$ și $[OB)$. Unghiul se măsoară între **semidrepte**, nu între segmente — de aceea lungimile vectorilor nu intervin deloc.
>
> **Pasul 3 — citiți unghiul.** Arcul violet dintre cele două semidrepte este $\widehat{(\vec a, \vec b)} = \alpha$.
>
> **Pasul 4 — verificați cazul-limită.** Dacă cele două săgeți ar fi coliniare și de același sens, semidreptele ar coincide și arcul s-ar reduce la un punct: unghiul este $0$. Dacă ar fi de sensuri opuse, semidreptele ar forma o dreaptă întreagă: unghiul este $\pi$.
>
> **Pe ce se bazează:** [[Vectori#4. Existența și unicitatea reprezentantului cu origine dată|teorema reprezentantului unic]] — pentru fiecare vector și fiecare punct $O$ există exact un punct $A$ cu $\vec{OA} = \vec a$, deci construcția e bine definită.
>
> **Ce să verificați singuri pe figură:** scurtați una dintre săgeți la jumătate, fără să-i schimbați direcția. Unghiul rămâne **același** — confirmarea că unghiul depinde doar de direcții și sensuri, nu de module.

> [!note] Domeniul unghiului
> Din definiție, $0 \leq \widehat{(\vec a, \vec b)} \leq \pi$. Unghiul dintre vectori este un unghi **neorientat**: nu are semn, iar $\widehat{(\vec a, \vec b)} = \widehat{(\vec b, \vec a)}$. Unghiul **orientat**, cu semn, apare abia în §14.

## 2. Unghiul nu depinde de punctul $O$

Deoarece două unghiuri ale căror laturi sunt respectiv paralele sunt **congruente**, unghiul dintre vectorii dați **nu depinde de alegerea punctului $O$**.

![figură](/geometrie-analitica/13%20Produsul%20scalar%20a%20doi%20vectori/Figuri/fig-unghi-nu-depinde-de-O.svg)
*fig. 2 (după fig. 52 din manual) — aceiași doi vectori depuși din două puncte diferite; laturile sunt respectiv paralele*

> [!example]- Cum se citește figura — independența de punctul $O$
> **Pasul 1 — două construcții, nu una.** Stânga: vectorii depuși din $O$, cu extremitățile $A$ și $B$. Dreapta: **aceiași** vectori depuși din alt punct $O_1$, cu extremitățile $A_1$ și $B_1$.
>
> **Pasul 2 — de ce săgețile sunt identice.** $\vec{OA} = \vec{O_1A_1} = \vec a$, fiindcă ambele sunt reprezentanți ai aceluiași vector. Deci segmentele orientate $\overline{OA}$ și $\overline{O_1A_1}$ sunt **echipolente**: aceeași direcție, același sens, aceeași lungime.
>
> **Pasul 3 — urmăriți liniile punctate.** Ele leagă $A$ cu $A_1$ și $B$ cu $B_1$. Fiecare pereche de laturi ($OA$ cu $O_1A_1$, $OB$ cu $O_1B_1$) este formată din drepte **paralele și la fel orientate** — exact ipoteza teoremei despre unghiuri cu laturi respectiv paralele.
>
> **Pasul 4 — trageți concluzia.** Unghiurile $AOB$ și $A_1O_1B_1$ sunt congruente. Deci $\widehat{(\vec a, \vec b)}$ este **același**, indiferent de unde am depus vectorii.
>
> **Pasul 5 — de ce contează.** Fără acest pas, definiția din secțiunea 1 ar fi fost defectuoasă: fiecare ar fi putut alege alt $O$ și obține alt răspuns. Aceasta este o verificare de tip *„definiția este corectă"*, nu un rezultat nou — dar fără ea, tot §13 ar sta în aer.
>
> **Pe ce se bazează:** [[Segmente orientate. Segmente echipolente|echipolența]] (ce înseamnă că $\vec{OA}$ și $\vec{O_1A_1}$ reprezintă același vector) și teorema din geometria elementară despre unghiuri cu laturi respectiv paralele și la fel orientate.
>
> **Ce să verificați singuri pe figură:** patrulaterul $OAA_1O_1$ trebuie să fie un **paralelogram** ($\vec{OA} = \vec{O_1A_1}$ ⇒ $\vec{OO_1} = \vec{AA_1}$). Verificați că laturile opuse sunt într-adevăr egale și paralele.

> [!warning] „Laturi paralele" nu e suficient — trebuie și „la fel orientate"
> Două unghiuri cu laturile respectiv paralele sunt **fie congruente, fie suplementare**. Ele sunt congruente doar când laturile corespunzătoare sunt și **la fel orientate**.
>
> Aici condiția e îndeplinită automat: reprezentanții aceluiași vector au același **sens**, nu doar aceeași direcție. Dacă am lucra cu drepte în loc de vectori, argumentul nu ar mai funcționa.

## 3. Vectori reciproc perpendiculari

> [!abstract] Definiție
> Vectorii nenuli $\vec a$ și $\vec b$ se numesc **reciproc perpendiculari** dacă
> $$
> \widehat{(\vec a, \vec b)} = \frac{\pi}{2},
> $$
> și se notează $\vec a \perp \vec b$.

> [!note] Convenția pentru vectorul nul
> Convenim să considerăm că dacă măcar unul din vectorii $\vec a$ sau $\vec b$ este nul, atunci de asemenea $\widehat{(\vec a, \vec b)} = \dfrac{\pi}{2}$.
>
> **Așadar, vectorul nul este perpendicular pe orice vector.**

> [!warning] De ce e nevoie de convenție — și ce se plătește pentru ea
> Vectorul nul **nu are direcție** ([[Vectori]]), deci unghiul dintre $\vec 0$ și orice vector nu se poate defini prin construcția din secțiunea 1: semidreapta $[OA)$ nu există când $A = O$.
>
> **De ce tocmai $\pi/2$?** Pentru ca enunțurile să rămână simple. În lecția următoare se va arăta că $(\vec a, \vec b) = 0 \iff \vec a \perp \vec b$. Cum $(\vec 0, \vec b) = 0$ întotdeauna, fără convenție ar fi trebuit scris de fiecare dată „…sau unul dintre vectori este nul". Convenția înghite acest caz.
>
> **Ce se strică.** Perpendicularitatea nu mai are nicio proprietate de „tranzitivitate slabă": $\vec 0 \perp \vec a$ și $\vec 0 \perp \vec b$ pentru orice $\vec a, \vec b$, inclusiv paraleli. La fel ca la convenția $\vec 0 \uparrow\uparrow \vec a$ din [[Coliniaritatea și orientarea vectorilor|§3]], este o convenție de **comoditate de scriere**, nu o afirmație geometrică. Reținem: convenția servește formulele, nu intuiția.

> [!check] Rezumatul lecției
> | Situație | $\widehat{(\vec a, \vec b)}$ |
> |---|---|
> | $\vec a \uparrow\uparrow \vec b$ (coliniari, același sens) | $0$ |
> | $\vec a \perp \vec b$ | $\pi/2$ |
> | $\vec a \uparrow\downarrow \vec b$ (coliniari, sensuri opuse) | $\pi$ |
> | unul dintre vectori este $\vec 0$ | $\pi/2$ (prin convenție) |

## Întrebări de control

1. De ce definiția unghiului cere verificarea din secțiunea 2? Ce s-ar întâmpla fără ea?
2. Doi vectori au unghiul $0$. Ce relație există între ei? Dar dacă unghiul este $\pi$?
3. De ce unghiul dintre vectori nu poate depăși $\pi$, deși un unghi în plan poate ajunge la $2\pi$?
4. Cât este $\widehat{(\vec a, -\vec a)}$? Dar $\widehat{(\vec a, 2\vec a)}$?
5. Găsiți trei vectori $\vec u, \vec v, \vec w$ cu $\vec u \perp \vec v$ și $\vec v \perp \vec w$, dar $\vec u$ **nu** e perpendicular pe $\vec w$. E acest lucru posibil în plan fără a folosi vectorul nul?

## Legături

- Anterior: [[Trecerea între coordonate polare și carteziene]]
- Continuare: [[Produsul scalar — definiție și interpretare]]
- Se sprijină pe: [[Vectori]], [[Segmente orientate. Segmente echipolente]], [[Coliniaritatea și orientarea vectorilor]]
- Concepte: [[Unghiul dintre doi vectori]], [[Vectori perpendiculari]]
