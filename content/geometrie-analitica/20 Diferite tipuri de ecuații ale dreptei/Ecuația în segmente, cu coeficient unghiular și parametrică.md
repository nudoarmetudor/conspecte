---
curs: geometrie-analitica
title: "Ecuația în segmente, cu coeficient unghiular și parametrică"
capitol: 20 — Diferite tipuri de ecuații ale dreptei
paragraf: §20
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 95–97 (PDF p. 47–48)
tags:
  - geometrie-analitică
  - dreapta
  - ecuația-dreptei
  - coeficient-unghiular
---

> [!tip] Despre ce este lecția
> Aceeași dreaptă se poate scrie în mai multe feluri. Fiecare formă pune în evidență altă informație: **unde taie axele** (ecuația în segmente), **cât de înclinată e** (coeficientul unghiular), **cum se parcurge** (ecuațiile parametrice). Nu sunt ecuații diferite ale unor drepte diferite — sunt *limbaje* diferite pentru același obiect, alese după ce vrem să citim din ele.

## 1. 3⁰. Ecuația dreptei în segmente

Fie în plan este introdus un sistem afin de coordonate $O\vec e_1\vec e_2$, iar dreapta $d$ intersectează axele de coordonate în punctele $A(a;\ 0)$ și $B(0;\ b)$, unde $a \neq 0$ și $b \neq 0$. Să deducem ecuația dreptei $AB$:

$$
\frac{x - a}{0 - a} = \frac{y}{b} \qquad\text{sau}\qquad \frac{x}{a} + \frac{y}{b} = 1. \tag{3}
$$

> [!abstract] Ecuația în segmente
> Ecuația (3) se numește **ecuația dreptei în segmente**.

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-ecuatia-segmente.svg)
*fig. 1 (după fig. 77 din manual) — $a$ și $b$ sunt „segmentele" pe care dreapta le taie pe axe, de la origine*

> [!example]- Cum se citește figura — ecuația în segmente
> **Pasul 1 — cele două puncte de intersecție.** $A$ pe axa $(Ox)$: a doua coordonată e $0$. $B$ pe axa $(Oy)$: prima coordonată e $0$.
>
> **Pasul 2 — segmentele.** $a$ (portocaliu) e distanța *cu semn* de la $O$ la $A$, măsurată în unități $\vec e_1$; $b$ (verde) — de la $O$ la $B$, în unități $\vec e_2$. Dacă $A$ ar fi la stânga lui $O$, $a$ ar fi negativ.
>
> **Pasul 3 — ecuația prin două puncte.** Aplicând (2′) lui $A(a; 0)$ și $B(0; b)$ se obține $\frac{x - a}{-a} = \frac{y}{b}$.
>
> **Pasul 4 — simplificați.** $\frac{x - a}{-a} = -\frac{x}{a} + 1$, deci $-\frac{x}{a} + 1 = \frac{y}{b}$, adică $\frac{x}{a} + \frac{y}{b} = 1$.
>
> **Pe ce se bazează:** ecuația (2′) a dreptei prin două puncte.
>
> **Ce să verificați singuri pe figură:** puneți $y = 0$ în (3): rezultă $x = a$ — punctul $A$. Puneți $x = 0$: rezultă $y = b$ — punctul $B$. Ecuația „se citește" direct de pe desen.

> [!warning] Ecuația în segmente nu există pentru orice dreaptă
> Condițiile $a \ne 0$, $b \ne 0$ exclud trei feluri de drepte:
> - dreptele prin **origine** ($A = B = O$, segmentele sunt nule);
> - dreptele **paralele cu $(Ox)$** (nu taie axa $Ox$, $a$ nu există);
> - dreptele **paralele cu $(Oy)$** (nu taie axa $Oy$, $b$ nu există).
>
> *Exemplu.* Dreapta din exemplul 20.2, $7x + 5y + 11 = 0$, se scrie $7x + 5y = -11$, adică $\dfrac{x}{-11/7} + \dfrac{y}{-11/5} = 1$: taie axele în $\left(-\tfrac{11}{7};\ 0\right)$ și $\left(0;\ -\tfrac{11}{5}\right)$. Dar $x + y = 0$ nu are formă în segmente.

## 2. 4. Ecuația dreptei cu coeficient unghiular

Fie în plan este introdus un sistem afin de coordonate $O\vec e_1\vec e_2$ și o dreaptă $d$ intersectează axa ordonatelor. Dacă $\vec a\{a_1;\ a_2\}$ este un vector director al dreptei $d$, atunci vectorii $\vec a$ și $\vec e_2$ nu-s coliniari și prin urmare, $a_1 \neq 0$.

> [!abstract] Coeficientul unghiular
> Numărul $k = \dfrac{a_2}{a_1}$ se numește **coeficient unghiular** al dreptei $d$.

Acest coeficient nu depinde de vectorul director ales. Într-adevăr, dacă $\vec b\{b_1;\ b_2\}$ este un alt vector director al dreptei $d$, atunci $\vec a \parallel \vec b$ și prin urmare coordonatele acestor vectori sunt proporționale: $a_1 = \lambda b_1$, $a_2 = \lambda b_2$. Deoarece $a_1 \ne 0$, $b_1 \ne 0$, obținem

$$
\frac{a_2}{a_1} = \frac{\lambda b_2}{\lambda b_1} = \frac{b_2}{b_1}.
$$

> [!example]- Pas cu pas — de ce dreapta trebuie să taie axa $(Oy)$
> **Pasul 1 — ce cere definiția.** $k = a_2/a_1$ are nevoie de $a_1 \ne 0$.
>
> **Pasul 2 — când e $a_1 = 0$.** Atunci $\vec a = \{0;\ a_2\} = a_2\vec e_2$, adică $\vec a$ e coliniar cu $\vec e_2$: dreapta e **paralelă cu axa $(Oy)$**.
>
> **Pasul 3 — legătura cu enunțul.** O dreaptă paralelă cu $(Oy)$ (și diferită de ea) **nu** taie axa $(Oy)$. Deci „$d$ intersectează axa ordonatelor" e exact condiția $a_1 \ne 0$ — cu o singură excepție: axa $(Oy)$ însăși, care și ea are $a_1 = 0$.
>
> **Concluzie.** Dreptele **verticale** (paralele cu $Oy$) nu au coeficient unghiular. Toate celelalte au.

### Sensul geometric al lui $k$

Coeficientul unghiular $k$ al dreptei are un sens geometric bine determinat, dacă dreapta $d$ este dată într-un **sistem rectangular cartezian** de coordonate. În acest caz coeficientul unghiular $k$ ne reprezintă **tangenta unghiului dintre axa $(Ox)$ și dreapta dată**.

Într-adevăr, fie $\vec a\{a_1;\ a_2\}$ un vector director al dreptei $d$. Atunci $a_1 = \lvert\vec a\rvert\cos\varphi$ și $a_2 = \lvert\vec a\rvert\sin\varphi$, unde $\varphi = \widehat{(\vec i, \vec a)}$. Atunci

$$
k = \frac{a_2}{a_1} = \frac{\lvert\vec a\rvert\sin\varphi}{\lvert\vec a\rvert\cos\varphi} = \operatorname{tg}\varphi.
$$

Prin urmare, numărul $k$ permite de aflat unghiul orientat $\varphi = \widehat{(\vec i, \vec a)}$. Din această cauză numărul $k$ se numește coeficientul unghiular al dreptei.

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-coeficient-unghiular.svg)
*fig. 2 (după fig. 78 din manual) — $k$ e raportul dintre „cât urcă" și „cât înaintează" vectorul director: tangenta unghiului cu $(Ox)$*

> [!example]- Cum se citește figura — $k = \operatorname{tg}\varphi$
> **Pasul 1 — vectorul director** $\vec a$ (portocaliu), pe dreaptă.
>
> **Pasul 2 — descompuneți-l** într-o deplasare orizontală (albastru, $a_1$) și una verticală (verde, $a_2$). Unghiul drept arată că axele sunt perpendiculare — aici e nevoie de sistem **rectangular**.
>
> **Pasul 3 — citiți raportul.** În triunghiul dreptunghic, $a_2/a_1$ = cateta opusă / cateta alăturată unghiului $\varphi$ = $\operatorname{tg}\varphi$.
>
> **Pasul 4 — schimbați vectorul director.** $-\vec a$ (roșu, punctat) face cu $(Ox)$ unghiul $\varphi + 180°$. Dar $\operatorname{tg}(\varphi + 180°) = \operatorname{tg}\varphi$: același $k$. De aceea $k$ e o proprietate a **dreptei**, nu a vectorului ales.
>
> **Pe ce se bazează:** [[Coordonatele vectorului prin unghiul orientat#1. Teorema 14.1|teorema 14.1]] ($a_1 = \lvert\vec a\rvert\cos\varphi$, $a_2 = \lvert\vec a\rvert\sin\varphi$).
>
> **Ce să verificați singuri pe figură:** o dreaptă care coboară spre dreapta are $k < 0$; una orizontală are $k = 0$.

> [!warning] $k$ dă direcția dreptei, nu unghiul orientat al unui vector anume
> Manualul spune că „$k$ permite de aflat unghiul orientat $\varphi = \widehat{(\vec i, \vec a)}$". Nu chiar: tangenta are perioada $\pi$, deci $k$ determină $\varphi$ doar **până la $180°$** — exact ambiguitatea dintre $\vec a$ și $-\vec a$, ambii vectori directori ai aceleiași drepte (vezi aceeași capcană la [[Coordonatele vectorului prin unghiul orientat#2. Exemplul 14.3 — unghiul orientat în coordonate|§14, formula (6)]]).
>
> Ce determină $k$ fără ambiguitate este **unghiul dreptei cu axa $(Ox)$**, ales de obicei în $\left(-\tfrac{\pi}{2};\ \tfrac{\pi}{2}\right)$: $\varphi = \operatorname{arctg} k$.

> [!warning] Într-un sistem afin oblic, $k$ nu e o tangentă
> Definiția $k = a_2/a_1$ are sens în orice sistem afin, dar interpretarea $k = \operatorname{tg}\varphi$ cere $\vec i \perp \vec j$ și $\lvert\vec i\rvert = \lvert\vec j\rvert$. Cu axe oblice, $k$ rămâne un număr care caracterizează direcția, dar nu mai e tangenta unui unghi vizibil pe desen.

### Ecuația cu coeficient unghiular

Să deducem ecuația dreptei, determinată într-un sistem afin de coordonate de punctul $M_0(x_0;\ y_0)$ și coeficientul unghiular $k$.

Fie $\vec a\{a_1;\ a_2\}$ un vector director al acestei drepte. Atunci, conform formulei (1″), ecuația dreptei are forma $a_2(x - x_0) - a_1(y - y_0) = 0$. Deoarece $a_1 \ne 0$, atunci împărțind la $a_1$ ambele părți, obținem:

$$
y - y_0 = k(x - x_0). \tag{4}
$$

Dacă în calitate de punctul $M_0(x_0;\ y_0)$ se ia punctul de intersecție al dreptei $d$ cu axa $(Oy)$, adică punctul $M(0;\ b)$, atunci obținem:

$$
y = kx + b. \tag{5}
$$

> [!abstract] Ecuația cu coeficient unghiular
> Ecuația (5) se numește **ecuația dreptei cu coeficient unghiular**.

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-y-kx-b.svg)
*fig. 3 — stânga: același $k$, $b$ diferit — drepte paralele; dreapta: același $b$, $k$ diferit — drepte prin același punct al axei $(Oy)$*

> [!example]- Cum se citește figura — rolul lui $k$ și al lui $b$
> **Pasul 1 — panoul stâng.** Trei drepte cu $k = \tfrac12$ și $b \in \{-1{,}5;\ 0;\ 1{,}5\}$. Aceeași înclinare ⇒ **paralele**. Fiecare taie axa $(Oy)$ în $(0;\ b)$ (punctele colorate).
>
> **Pasul 2 — panoul drept.** Trei drepte cu $b = 1$ și $k \in \{2;\ 0{,}3;\ -1\}$. Toate trec prin $(0;\ 1)$, cu înclinări diferite — un „evantai".
>
> **Pasul 3 — trageți concluzia.** $k$ fixează **direcția**, $b$ fixează **locul** pe axa $(Oy)$. Două numere ⇒ o dreaptă.
>
> **Pe ce se bazează:** ecuația (5).
>
> **Ce să verificați singuri pe figură:** ce semn are $k$ la dreapta verde din panoul drept? Coboară spre dreapta ⇒ $k < 0$ ✓ ($k = -1$).

> [!example]- Pas cu pas — trecerea între forme pe exemplul 20.2
> Dreapta: $7x + 5y + 11 = 0$.
>
> **Pasul 1 — izolați $y$.** $5y = -7x - 11$, deci $y = -\tfrac75x - \tfrac{11}{5}$.
>
> **Pasul 2 — citiți.** $k = -\tfrac75$, $b = -\tfrac{11}{5}$.
>
> **Pasul 3 — verificați cu vectorul director.** $\vec{AB} = \{-5;\ 7\}$ dă $k = \tfrac{7}{-5} = -\tfrac75$ ✓.
>
> **Pasul 4 — unghiul cu $(Ox)$** (sistem rectangular): $\operatorname{tg}\varphi = -1{,}4$, $\varphi \approx -54{,}5°$ — dreapta coboară.

## 3. 5⁰. Ecuațiile parametrice ale dreptei

Fie într-un sistem afin de coordonate $O\vec e_1\vec e_2$ dreapta $d$ este determinată de punctul $M_0(x_0;\ y_0)$ și vectorul director $\vec a(a_1;\ a_2)$. Punctul $M(x;\ y)$ aparține dreptei $d$ atunci și numai atunci, când $\vec{M_0M} \parallel \vec a$, adică dacă și numai dacă există așa număr real $t$, încât $\vec{M_0M} = t\vec a$. Deoarece $\vec{M_0M} = \{x - x_0;\ y - y_0\}$ și $t\vec a = \{ta_1;\ ta_2\}$, obținem:

$$
\begin{cases} x = x_0 + a_1 t, \\ y = y_0 + a_2 t. \end{cases} \tag{6}
$$

> [!abstract] Ecuațiile parametrice
> Egalitățile (6) se numesc **ecuațiile parametrice ale dreptei**. Ele au următorul sens: pentru orice număr real $t$, punctul cu coordonatele $x$, $y$, care satisfac condițiilor (6), aparține dreptei $d$ și invers, dacă punctul $(x;\ y)$ aparține dreptei $d$, atunci există $t \in \mathbb R$, încât $x$ și $y$ se exprimă prin $x_0$, $y_0$, $a_1$, $a_2$ cu ajutorul egalităților (6).

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-ecuatii-parametrice.svg)
*fig. 4 — fiecare valoare a parametrului $t$ dă un punct al dreptei: $t$ măsoară câți vectori $\vec a$ te-ai deplasat de la $M_0$*

> [!example]- Cum se citește figura — ecuațiile parametrice
> **Pasul 1 — punctul de plecare.** $M_0$ corespunde lui $t = 0$.
>
> **Pasul 2 — pașii întregi.** $t = 1$: un vector $\vec a$ mai departe. $t = 2$, $t = 3$: doi, trei vectori. $t = -1$: un vector în sens **opus**.
>
> **Pasul 3 — valori neîntregi.** $t = 1{,}6$ (verde): punctul aflat la $1{,}6$ vectori de $M_0$. Orice număr real dă un punct, iar punctele umplu toată dreapta, fără goluri.
>
> **Pasul 4 — interpretarea fizică.** Dacă $t$ e timpul, (6) descrie un punct care pleacă din $M_0$ și se mișcă rectiliniu uniform cu viteza $\vec a$.
>
> **Pe ce se bazează:** [[Raportul a doi vectori coliniari#3. Teorema 5.3 — criteriul de coliniaritate|criteriul de coliniaritate]]: $\vec{M_0M} \parallel \vec a \iff \vec{M_0M} = t\vec a$ (cu $\vec a \ne \vec 0$).
>
> **Ce să verificați singuri pe figură:** eliminați $t$ din (6): din prima ecuație $t = \frac{x - x_0}{a_1}$, din a doua $t = \frac{y - y_0}{a_2}$. Egalându-le, obțineți ecuația canonică (1′).

> [!example]- Pas cu pas — un exemplu numeric
> Dreapta prin $M_0(1;\ 2)$ cu $\vec a = \{2;\ 1\}$: $x = 1 + 2t$, $y = 2 + t$.
>
> | $t$ | $-1$ | $0$ | $1$ | $2$ | $\tfrac12$ |
> |---|---|---|---|---|---|
> | punctul | $(-1;\ 1)$ | $(1;\ 2)$ | $(3;\ 3)$ | $(5;\ 4)$ | $(2;\ 2{,}5)$ |
>
> **Invers — e punctul $(7;\ 5)$ pe dreaptă?** Din $x$: $7 = 1 + 2t$ ⇒ $t = 3$. Din $y$: $5 = 2 + t$ ⇒ $t = 3$. Același $t$ ⇒ **da**. Pentru $(7;\ 6)$ s-ar obține $t = 3$ și $t = 4$ — valori diferite ⇒ punctul **nu** e pe dreaptă.

> [!check] Cele cinci forme ale ecuației dreptei (§20)
> | Forma | Ecuația | Ce trebuie cunoscut | Când nu există |
> |---|---|---|---|
> | canonică (1″) | $a_2(x - x_0) - a_1(y - y_0) = 0$ | un punct, un vector director | — |
> | prin două puncte (2) | determinantul $= 0$ | două puncte | — |
> | în segmente (3) | $\dfrac{x}{a} + \dfrac{y}{b} = 1$ | intersecțiile cu axele | prin $O$; paralelă cu o axă |
> | cu coeficient unghiular (5) | $y = kx + b$ | $k$ și intersecția cu $Oy$ | paralelă cu $(Oy)$ |
> | parametrică (6) | $x = x_0 + a_1t,\ y = y_0 + a_2t$ | un punct, un vector director | — |

> [!note] Numerotarea din manual
> Subsecțiunile din §20 sunt numerotate neuniform: 1⁰, 2⁰, apoi „3." și „4.", apoi 5⁰. Am păstrat-o ca în manual, ca trimiterile să se regăsească.

## Întrebări de control

1. Scrieți în segmente dreapta $3x - 4y - 12 = 0$. Unde taie axele?
2. De ce dreptele verticale nu au coeficient unghiular, dar cele orizontale au?
3. Două drepte au același $k$. Ce puteți spune despre ele? Dar dacă au același $b$?
4. Scrieți ecuațiile parametrice ale dreptei prin $A(2;\ -5)$ și $B(-3;\ 2)$. Ce valoare a lui $t$ corespunde lui $B$?
5. Arătați că $k$ nu se schimbă dacă înlocuim vectorul director $\vec a$ cu $-3\vec a$.

## Legături

- Anterior: [[Ecuația canonică și ecuația dreptei prin două puncte]]
- Continuare: [[Ecuația generală. Teoremele 21.1–21.3]]
- Se sprijină pe: [[Coordonatele vectorului prin unghiul orientat]], [[Raportul a doi vectori coliniari]], [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]]
- Concepte: [[Coeficient unghiular]], [[Vector director]], [[Ecuațiile dreptei]]
