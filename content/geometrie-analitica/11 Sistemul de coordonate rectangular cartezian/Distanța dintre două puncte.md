---
curs: geometrie-analitica
title: "Distanța dintre două puncte"
capitol: 11 — Sistemul de coordonate rectangular cartezian
paragraf: §11
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 51–52 (PDF p. 25)
tags:
  - geometrie-analitică
  - coordonate
  - distanță
  - metrică
---

> [!tip] Despre ce este lecția
> Aceasta este **prima formulă din tot cursul care transformă geometria în măsurare**. Până acum știam să spunem *unde* se află un punct; de aici încolo știm să spunem *cât de departe* este de altul — folosind doar patru numere și operații aritmetice. Toate formulele metrice de mai târziu (lungimi de laturi, ecuația cercului, distanța de la punct la dreaptă) se sprijină pe ea.

## 1. Proprietatea 3⁰ — formula distanței

Fie $A(x_1;\ y_1)$ și $B(x_2;\ y_2)$ două puncte date în raport cu sistemul rectangular cartezian $(xOy)$.

După formula (5) din §10 avem $\vec{AB} = \{x_2 - x_1;\ y_2 - y_1\}$, iar după (11):

$$
\lvert\vec{AB}\rvert = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}.
$$

Conform definiției, $\lvert\vec{AB}\rvert = AB = \rho(A, B)$ este lungimea segmentului $AB$, deci **distanța dintre $A$ și $B$**.

> [!check] Distanța dintre două puncte
> $$
> \rho(A, B) = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} \tag{12}
> $$

![figură](/geometrie-analitica/11%20Sistemul%20de%20coordonate%20rectangular%20cartezian/Figuri/fig-distanta-doua-puncte.svg)
*fig. 1 — distanța ca ipotenuză a triunghiului dreptunghic cu catetele $x_2-x_1$ și $y_2-y_1$*

> [!example]- Cum se citește figura — formula (12)
> **Pasul 1 — cele două puncte.** Punctele violet $A(x_1; y_1)$ și $B(x_2; y_2)$ sunt datele problemei. Distanța căutată este lungimea săgeții violet dintre ele.
>
> **Pasul 2 — drumul „în trepte".** În loc să mergeți direct de la $A$ la $B$, mergeți întâi **orizontal** (săgeata albastră) și apoi **vertical** (săgeata portocalie). Cele două drumuri au același capăt — asta e relația lui Chasles, $\vec{AB} = \vec{AC} + \vec{CB}$.
>
> **Pasul 3 — citiți lungimile treptelor.** Deplasarea orizontală schimbă doar abscisa: lungimea ei este $\lvert x_2 - x_1\rvert$. Cea verticală schimbă doar ordonata: lungimea ei este $\lvert y_2 - y_1\rvert$.
>
> **Pasul 4 — unghiul drept.** Marca din colțul $C$ arată că treapta orizontală e perpendiculară pe cea verticală. Aici — și **numai** aici — se folosește faptul că reperul e rectangular.
>
> **Pasul 5 — aplicați Pitagora.** $AB^2 = AC^2 + CB^2 = (x_2-x_1)^2 + (y_2-y_1)^2$. Extragerea radicalului dă (12).
>
> **Pe ce se bazează:** [[Coordonatele punctului. Raza vectoare#5. Coordonatele vectorului determinat de două puncte|formula (5)]] pentru $\vec{AB}$ și formula (11) pentru modul — adică, în fond, tot teorema lui Pitagora.
>
> **Ce să verificați singuri pe figură:** schimbați între ele rolurile lui $A$ și $B$. Săgețile albastră și portocalie își schimbă sensul, dar **lungimile lor nu se schimbă**, fiindcă în formulă diferențele apar **la pătrat**. Deci $\rho(A,B) = \rho(B,A)$, așa cum trebuie să fie o distanță.

> [!warning] Pătratele fac ordinea indiferentă — nu și în formula (5)
> În formula (5), $\vec{AB} = \{x_2-x_1;\ y_2-y_1\}$, ordinea contează: inversând-o obțineți vectorul **opus**.
> În formula (12) ordinea **nu** contează: $(x_2-x_1)^2 = (x_1-x_2)^2$.
>
> Un vector are sens; o distanță, nu.

> [!info]- Completare — trei verificări rapide că (12) e o distanță „cinstită"
> O funcție merită numele de distanță dacă satisface trei condiții. Formula (12) le satisface pe toate:
>
> **1. Pozitivitate.** $\rho(A,B) \geq 0$, fiindcă radicalul aritmetic dintr-o sumă de pătrate e nenegativ. Iar $\rho(A,B) = 0$ doar când ambele pătrate sunt nule, adică $x_1 = x_2$ și $y_1 = y_2$, adică $A = B$.
>
> **2. Simetrie.** $\rho(A,B) = \rho(B,A)$ — vezi mai sus.
>
> **3. Inegalitatea triunghiului.** $\rho(A,C) \leq \rho(A,B) + \rho(B,C)$: drumul direct nu e mai lung decât ocolul. Geometric este evident din regula triunghiului, $\vec{AC} = \vec{AB} + \vec{BC}$, și din $\lvert\vec u + \vec v\rvert \leq \lvert\vec u\rvert + \lvert\vec v\rvert$.
>
> **Caz particular util.** Dacă $A = O$ (originea), atunci $\rho(O, M) = \sqrt{x^2+y^2}$ — adică exact modulul razei vectoare. Formula (12) o conține pe (11) ca situație particulară.

## 2. Exemplul 11.1 — laturile unui triunghi

> [!example] Enunț
> În raport cu sistemul rectangular cartezian de coordonate se dau punctele $A(-2;\ 2)$, $B(2;\ 6)$ și $C(10;\ -2)$. Determinați lungimile laturilor triunghiului $ABC$.

![figură](/geometrie-analitica/11%20Sistemul%20de%20coordonate%20rectangular%20cartezian/Figuri/fig-ex111-triunghi.svg)
*fig. 2 (după fig. 48 din manual) — triunghiul $ABC$ în rețeaua de coordonate, cu lungimile laturilor*

**Rezolvare.** Aplicăm formula (12) pentru fiecare pereche de vârfuri:

$$
\rho(A, B) = \sqrt{(2-(-2))^2 + (6-2)^2} = \sqrt{16+16} = \sqrt{32} = 4\sqrt 2,
$$

$$
\rho(A, C) = \sqrt{(10-(-2))^2 + (-2-2)^2} = \sqrt{144+16} = \sqrt{160} = 4\sqrt{10},
$$

$$
\rho(B, C) = \sqrt{(10-2)^2 + (-2-6)^2} = \sqrt{64+64} = 8\sqrt 2.
$$

Prin urmare, lungimile laturilor triunghiului $ABC$ sunt

$$
AB = 4\sqrt 2, \qquad AC = 4\sqrt{10}, \qquad BC = 8\sqrt 2.
$$

> [!example]- Pas cu pas — cum se face un asemenea calcul fără greșeli
> **Pasul 1 — scrieți diferențele separat, înainte de a le ridica la pătrat.** Pentru $A(-2;2)$ și $B(2;6)$: $\Delta x = 2 - (-2) = 4$, $\Delta y = 6 - 2 = 4$. Aici se pierd cele mai multe puncte la examen — la semnul minus dinaintea unui număr negativ.
>
> **Pasul 2 — abia apoi ridicați la pătrat.** $4^2 + 4^2 = 32$.
>
> **Pasul 3 — simplificați radicalul complet.** $\sqrt{32} = \sqrt{16 \cdot 2} = 4\sqrt 2$. Un răspuns lăsat ca $\sqrt{32}$ nu e greșit, dar nu permite comparația cu celelalte laturi.
>
> **Pasul 4 — verificați plauzibilitatea pe desen.** Din figură se vede că $BC$ e cea mai lungă latură. Numeric: $BC = 8\sqrt2 \approx 11{,}31$, $AC = 4\sqrt{10} \approx 12{,}65$, $AB = 4\sqrt2 \approx 5{,}66$. Deci de fapt **$AC$ este cea mai lungă** — verificați pe figură: $A$ și $C$ sunt într-adevăr cele mai depărtate.
>
> **Pasul 5 — verificarea finală prin inegalitatea triunghiului.** $AB + BC = 5{,}66 + 11{,}31 = 16{,}97 > 12{,}65 = AC$. ✓ Dacă suma a două laturi ieșea mai mică decât a treia, undeva ar fi fost o greșeală de calcul.

> [!info]- Completare — ce fel de triunghi este $ABC$?
> Manualul se oprește la lungimi. Merită continuat, fiindcă răspunsul se citește direct din ele.
>
> Comparăm pătratele: $AB^2 = 32$, $BC^2 = 128$, $AC^2 = 160$. Observăm că
> $$
> AB^2 + BC^2 = 32 + 128 = 160 = AC^2.
> $$
> După **reciproca teoremei lui Pitagora**, triunghiul $ABC$ este **dreptunghic în $B$**, cu ipotenuza $AC$.
>
> Același lucru se va putea verifica în §13 mult mai rapid, cu produsul scalar: $\vec{BA} = \{-4;\ -4\}$, $\vec{BC} = \{8;\ -8\}$, iar $(-4)\cdot 8 + (-4)\cdot(-8) = -32 + 32 = 0$ ⇒ $\vec{BA} \perp \vec{BC}$ (vezi [[Ce nu se transferă de la numere. Aplicații]]).
>
> Aria lui: $S = \frac{1}{2}\cdot AB \cdot BC = \frac{1}{2}\cdot 4\sqrt2 \cdot 8\sqrt2 = 32$.

## Întrebări de control

1. De ce în formula (12) nu contează care punct îl numim $A$ și care $B$?
2. Ce devine formula (12) dacă $A$ coincide cu originea?
3. Punctele $M(a;\ b)$ și $N(b;\ a)$ — cât este $\rho(M,N)$? Ce reprezintă geometric?
4. Scrieți condiția ca punctul $M(x;\ y)$ să se afle la distanța $5$ de originea $O$. Ce figură descriu toate aceste puncte?
5. De ce formula (12) ar da un rezultat greșit într-un sistem afin cu axe oblice? Unde anume cade demonstrația?

## Legături

- Anterior: [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]]
- Continuare: [[Reperul polar. Coordonate polare]]
- Se sprijină pe: [[Coordonatele punctului. Raza vectoare]], [[Modulul vectorului. Vectorul opus]]
- Concepte: [[Distanța dintre două puncte (formulă)]], [[Sistem rectangular cartezian]]
