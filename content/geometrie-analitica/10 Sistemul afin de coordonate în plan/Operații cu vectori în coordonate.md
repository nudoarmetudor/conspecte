---
curs: geometrie-analitica
title: "Operații cu vectori în coordonate"
capitol: 10 — Sistemul afin de coordonate în plan
paragraf: §10
tip: lecție
nr: 4
status: complet
sursa: manual „Geometrie analitică în plan", p. 46–47 (PDF p. 23)
tags:
  - geometrie-analitică
  - coordonate
  - operații-vectori
  - coliniaritate
---

Fie $\vec{a} = \{x_1;\ y_1\}$ și $\vec{b} = \{x_2;\ y_2\}$ doi vectori dați în raport cu sistemul afin de coordonate $(xOy)$, adică

$$
\vec{a} = x_1\vec{e}_1 + y_1\vec{e}_2, \qquad \vec{b} = x_2\vec{e}_1 + y_2\vec{e}_2.
$$

> [!tip] Ideea întregii lecții
> Odată fixat reperul, **fiecare operație geometrică cu vectori devine o operație cu numere, coordonată cu coordonată**. De aici încolo nu mai e nevoie de desene pentru a aduna vectori sau a verifica coliniaritatea — se calculează.

## 1⁰. Egalitatea vectorilor

> [!tip] Proprietatea 1⁰
> $$
> \vec{a} = \vec{b} \iff x_1 = x_2 \ \text{și}\ y_1 = y_2
> $$

**Demonstrație.** Dacă $\vec{a} = \vec{b}$, atunci $x_1\vec{e}_1 + y_1\vec{e}_2 = x_2\vec{e}_1 + y_2\vec{e}_2$, adică

$$
(x_1 - x_2)\,\vec{e}_1 + (y_1 - y_2)\,\vec{e}_2 = \vec{0}.
$$

Deoarece $\vec{e}_1$ și $\vec{e}_2$ sunt necoliniari și deci liniar independenți, rezultă că

$$
\begin{cases} x_1 - x_2 = 0 \\ y_1 - y_2 = 0 \end{cases} \iff \begin{cases} x_1 = x_2 \\ y_1 = y_2 \end{cases} \qquad \blacksquare
$$

> [!example]- Pas cu pas — unde se folosește independența bazei
> **Pasul 1 — traducem egalitatea vectorilor** în egalitatea descompunerilor lor după bază.
>
> **Pasul 2 — mutăm totul într-o parte.** Obținem o combinație liniară a lui $\vec{e}_1$ și $\vec{e}_2$ egală cu $\vec{0}$, cu coeficienții $(x_1 - x_2)$ și $(y_1 - y_2)$.
>
> **Pasul 3 — aplicăm definiția independenței.** $\{\vec{e}_1, \vec{e}_2\}$ e [[Combinație liniară. Dependență și independență liniară#3. Sistem liniar independent|liniar independent]]: singura combinație care dă $\vec{0}$ este cea cu **toți coeficienții nuli**. Deci ambii coeficienți sunt $0$.
>
> **Pasul 4 — reciproca** e imediată: coordonate egale ⇒ aceeași combinație ⇒ același vector.
>
> **De ce contează.** Proprietatea 1⁰ este, de fapt, **unicitatea coordonatelor** din [[Baza spațiului V2. Coordonatele vectorului|§9]] scrisă altfel. Fără ea, n-am putea „compara coordonatele" ca să decidem dacă doi vectori sunt egali.

## 2⁰. Suma și diferența

> [!tip] Proprietatea 2⁰
> $$
> \vec{a} \pm \vec{b} = \{x_1 \pm x_2;\ y_1 \pm y_2\}
> $$

![figură](/geometrie-analitica/10%20Sistemul%20afin%20de%20coordonate%20%C3%AEn%20plan/Figuri/fig-suma-coordonate.svg)
*fig. 1 — pe o rețea oblică: $\{1; 2\} + \{3; 1\} = \{4; 3\}$*

> [!example]- Cum se citește figura — suma în coordonate
> **Pasul 1 — rețeaua.** Liniile punctate sunt paralele cu axele, la distanța de câte un $\vec{e}_1$ (pe orizontală) și câte un $\vec{e}_2$ (pe oblică). Numerele $1 \dots 5$ și $1 \dots 3$ marchează pașii.
>
> **Pasul 2 — vectorul $\vec{a}$ (albastru).** Pornește din $O$ și ajunge la nodul aflat la **1 pas** pe direcția $x$ și **2 pași** pe direcția $y$: $\vec{a} = \{1; 2\}$.
>
> **Pasul 3 — vectorul $\vec{b}$ (portocaliu), cap la cap.** Pornește din vârful lui $\vec{a}$ și face încă **3 pași** pe $x$ și **1 pas** pe $y$: $\vec{b} = \{3; 1\}$.
>
> **Pasul 4 — suma (violet).** Din $O$ până la vârful lui $\vec{b}$: în total $1 + 3 = 4$ pași pe $x$ și $2 + 1 = 3$ pași pe $y$. Deci $\vec{a} + \vec{b} = \{4; 3\}$.
>
> **Pe ce se bazează:** [[Adunarea vectorilor. Regula triunghiului și a poligonului#2. Regula triunghiului|regula triunghiului]] (pașii 3–4) și [[Proprietățile adunării vectorilor|comutativitatea și asociativitatea adunării]] (permit regruparea $x$-urilor cu $x$-urile și a $y$-urilor cu $y$-urile).
>
> **Ce să verificați singuri pe figură:** desenați întâi $\vec{b}$ din $O$, apoi $\vec{a}$ din vârful lui $\vec{b}$. Ajungeți în același nod $(4; 3)$ — comutativitatea, văzută pe rețea.

> [!info]- Completare — demonstrația lui 2⁰ (manualul spune „în mod analogic")
> $$
> \vec{a} \pm \vec{b} = (x_1\vec{e}_1 + y_1\vec{e}_2) \pm (x_2\vec{e}_1 + y_2\vec{e}_2) = (x_1 \pm x_2)\,\vec{e}_1 + (y_1 \pm y_2)\,\vec{e}_2
> $$
> Regruparea folosește comutativitatea și asociativitatea adunării ([[Proprietățile adunării vectorilor]]) și distributivitatea față de scalari $(\alpha \pm \beta)\vec{e} = \alpha\vec{e} \pm \beta\vec{e}$ ([[Proprietățile înmulțirii vectorului cu un număr#5. Distributivitatea față de scalari|proprietatea 5]]).

## 3⁰. Înmulțirea cu un număr

> [!tip] Proprietatea 3⁰
> $$
> \alpha\vec{a} = \{\alpha x_1;\ \alpha y_1\}
> $$

> [!info]- Completare — demonstrația lui 3⁰
> $$
> \alpha\vec{a} = \alpha(x_1\vec{e}_1 + y_1\vec{e}_2) = (\alpha x_1)\,\vec{e}_1 + (\alpha y_1)\,\vec{e}_2
> $$
> folosind [[Proprietățile înmulțirii vectorului cu un număr#6. Distributivitatea față de suma de vectori|distributivitatea față de vectori]] și [[Proprietățile înmulțirii vectorului cu un număr#4. Asociativitatea față de scalari|asociativitatea față de scalari]].

## 4⁰. Consecință

> [!tip] Proprietatea 4⁰
> Dacă $\vec{b} = \alpha\vec{a}$, atunci $x_2 = \alpha x_1$ și $y_2 = \alpha y_1$.

Este 3⁰ combinată cu 1⁰: $\vec{b}$ și $\alpha\vec{a}$ sunt egali, deci au coordonate egale.

## 5⁰. Condiția de coliniaritate

> [!tip] Proprietatea 5⁰
> $$
> \vec{a} \parallel \vec{b} \iff \begin{vmatrix} x_1 & y_1 \\ x_2 & y_2 \end{vmatrix} = 0 \iff x_1y_2 - x_2y_1 = 0
> $$

Pentru $x_2 \ne 0$ și $y_2 \ne 0$ această condiție poate fi scrisă sub forma

$$
\vec{a} \parallel \vec{b} \iff \frac{x_1}{x_2} = \frac{y_1}{y_2},
$$

cu alte cuvinte, **doi vectori sunt coliniari dacă și numai dacă coordonatele lor sunt proporționale**.

![figură](/geometrie-analitica/10%20Sistemul%20afin%20de%20coordonate%20%C3%AEn%20plan/Figuri/fig-coliniare-coordonate.svg)
*fig. 2 — „treptele" lui $\vec{a}$ și $\vec{b}$ sunt triunghiuri asemenea: $\vec{b}$ face de 2 ori mai mulți pași în fiecare direcție*

> [!example]- Cum se citește figura — coliniaritatea prin coordonate
> **Pasul 1 — descompuneți fiecare vector în „trepte".** Liniile punctate de sub fiecare săgeată arată câți pași face vectorul pe orizontală și pe verticală: $\vec{a}$ — $2$ și $1$; $\vec{b}$ — $4$ și $2$.
>
> **Pasul 2 — comparați raportul pașilor.** Pentru $\vec{a}$: $\tfrac{1}{2}$ pas vertical per pas orizontal. Pentru $\vec{b}$: $\tfrac{2}{4} = \tfrac{1}{2}$. **Aceeași „pantă"** ⇒ aceeași direcție.
>
> **Pasul 3 — observați triunghiurile.** Treapta lui $\vec{b}$ e treapta lui $\vec{a}$ mărită de 2 ori — triunghiuri asemenea. Ipotenuzele lor ($\vec{a}$ și $\vec{b}$) sunt deci paralele.
>
> **Pasul 4 — traduceți în formulă.** „Aceeași pantă" înseamnă $\tfrac{y_1}{x_1} = \tfrac{y_2}{x_2}$, adică, după înmulțirea în cruce, $x_1y_2 - x_2y_1 = 0$: $\;2 \cdot 2 - 4 \cdot 1 = 0$. ✔
>
> **Pe ce se bazează:** [[Raportul a doi vectori coliniari#3. Teorema 5.3 — criteriul de coliniaritate|teorema 5.3]] ($\vec{a} \parallel \vec{b} \iff \vec{b} = \alpha\vec{a}$) și proprietatea 4⁰ (coordonatele se înmulțesc cu același $\alpha$).
>
> **Ce să verificați singuri pe figură:** desenați $\vec{c} = \{4; 3\}$ din același punct ca $\vec{b}$. Treapta lui are alt raport ($\tfrac{3}{4} \ne \tfrac{1}{2}$), iar $4 \cdot 1 - 2 \cdot 3 \ne 0$ — nu e coliniar cu $\vec{a}$.

> [!info]- Completare — demonstrația lui 5⁰ (nu figurează în manual)
> **Cazul $\vec{a} = \vec{0}$.** Atunci $x_1 = y_1 = 0$, deci $x_1y_2 - x_2y_1 = 0$; iar $\vec{0}$ e coliniar cu orice vector. Echivalența e adevărată.
>
> **Cazul $\vec{a} \ne \vec{0}$.**
>
> **(⇒)** Dacă $\vec{a} \parallel \vec{b}$, prin [[Raportul a doi vectori coliniari#3. Teorema 5.3 — criteriul de coliniaritate|teorema 5.3]] (sau banal, dacă $\vec{b} = \vec{0}$) există $\alpha$ cu $\vec{b} = \alpha\vec{a}$. După 4⁰: $x_2 = \alpha x_1$, $y_2 = \alpha y_1$. Atunci
> $$
> x_1y_2 - x_2y_1 = x_1(\alpha y_1) - (\alpha x_1)y_1 = 0.
> $$
>
> **(⇐)** Fie $x_1y_2 - x_2y_1 = 0$. Cum $\vec{a} \ne \vec{0}$, măcar o coordonată e nenulă; fie $x_1 \ne 0$. Punem $\alpha = \dfrac{x_2}{x_1}$. Atunci $x_2 = \alpha x_1$, iar din ipoteză $y_2 = \dfrac{x_2 y_1}{x_1} = \alpha y_1$. Deci $\vec{b} = \{\alpha x_1; \alpha y_1\} = \alpha\vec{a}$ ⇒ $\vec{b} \parallel \vec{a}$. (Cazul $y_1 \ne 0$ e analog.) $\blacksquare$

> [!warning] Când forma cu proporții nu se poate folosi
> Forma $\dfrac{x_1}{x_2} = \dfrac{y_1}{y_2}$ cere $x_2 \ne 0$ și $y_2 \ne 0$. Exemplu: $\vec{a} = \{3; 0\}$ și $\vec{b} = \{5; 0\}$ sunt coliniari (ambii pe $Ox$), dar $\dfrac{0}{0}$ nu are sens.
> **Forma cu determinant $x_1y_2 - x_2y_1 = 0$ funcționează întotdeauna**: $3 \cdot 0 - 5 \cdot 0 = 0$. ✔ Folosiți-o pe aceasta când aveți coordonate nule.

## Concluzia 10.5

> [!check] Concluzia 10.5
> Din 1⁰–4⁰ rezultă că, dacă un vector este o **combinație liniară** a câtorva vectori, atunci **coordonatele lui sunt combinații liniare ale coordonatelor corespunzătoare** ale acestor vectori, cu aceiași coeficienți.

$$
\vec{c} = \alpha\vec{a} + \beta\vec{b} \quad \Longrightarrow \quad \vec{c} = \{\alpha x_1 + \beta x_2;\ \ \alpha y_1 + \beta y_2\}
$$

> [!example]- Pas cu pas — de ce Concluzia 10.5 rezultă din 2⁰ și 3⁰
> **Pasul 1.** După 3⁰: $\alpha\vec{a} = \{\alpha x_1; \alpha y_1\}$ și $\beta\vec{b} = \{\beta x_2; \beta y_2\}$.
>
> **Pasul 2.** După 2⁰, adunăm coordonată cu coordonată: $\alpha\vec{a} + \beta\vec{b} = \{\alpha x_1 + \beta x_2;\ \alpha y_1 + \beta y_2\}$.
>
> **Pasul 3.** Pentru mai mulți vectori se repetă pasul 2 (asociativitatea adunării).
>
> **Exemplu numeric.** $\vec{a} = \{2; -1\}$, $\vec{b} = \{0; 3\}$: $\;3\vec{a} - 2\vec{b} = \{3\cdot 2 - 2 \cdot 0;\ 3 \cdot (-1) - 2 \cdot 3\} = \{6; -9\}$.

## Rezumat

| Operație geometrică | În coordonate |
|---|---|
| $\vec{a} = \vec{b}$ | $x_1 = x_2$, $y_1 = y_2$ |
| $\vec{a} \pm \vec{b}$ | $\{x_1 \pm x_2;\ y_1 \pm y_2\}$ |
| $\alpha\vec{a}$ | $\{\alpha x_1;\ \alpha y_1\}$ |
| $\vec{a} \parallel \vec{b}$ | $x_1y_2 - x_2y_1 = 0$ |
| $\alpha\vec{a} + \beta\vec{b}$ | $\{\alpha x_1 + \beta x_2;\ \alpha y_1 + \beta y_2\}$ |

> [!note] Nicio formulă de aici nu depinde de tipul reperului
> Toate relațiile de mai sus sunt valabile în **orice** reper afin — axe oblice, unități diferite. Nu apar nici lungimi, nici unghiuri.

## Întrebări de control

1. De ce demonstrația lui 1⁰ are nevoie ca $\vec{e}_1$ și $\vec{e}_2$ să fie necoliniari?
2. Calculați $2\vec{a} - 3\vec{b}$ pentru $\vec{a} = \{1; 4\}$, $\vec{b} = \{-2; 1\}$.
3. Sunt coliniari $\vec{a} = \{6; -4\}$ și $\vec{b} = \{-9; 6\}$? Dar $\vec{a} = \{0; 5\}$ și $\vec{b} = \{0; -2\}$? Folosiți forma potrivită.
4. Pentru ce valoare a lui $m$ sunt coliniari $\{m; 2\}$ și $\{8; m\}$?
5. De ce Concluzia 10.5 nu ar fi adevărată dacă coordonatele n-ar fi unice?

## Legături

- Anterior: [[Coordonatele vectorului. Proiecții geometrice și algebrice]]
- Continuare: [[Coordonatele punctului. Raza vectoare]]
- Se sprijină pe: [[Raportul a doi vectori coliniari]], [[Proprietățile adunării vectorilor]], [[Proprietățile înmulțirii vectorului cu un număr]]
