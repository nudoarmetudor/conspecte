---
curs: geometrie-analitica
title: "Coordonatele vectorului prin unghiul orientat"
capitol: 14 — Unghiul dintre doi vectori pe planul orientat. Aria triunghiului
paragraf: §14
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 61–63 (PDF p. 29–30)
tags:
  - geometrie-analitică
  - unghi-orientat
  - coordonate
  - teoremă
---

> [!tip] Despre ce este lecția
> În §11, formula $x = \lvert\vec a\rvert\cos\varphi$, $y = \lvert\vec a\rvert\sin\varphi$ a fost scoasă dintr-un triunghi dreptunghic desenat — deci, strict vorbind, numai pentru un vector din primul cadran. Teorema 14.1 o face valabilă **pentru orice vector**, fiindcă $\varphi$ are acum semn și se poate întinde pe tot cercul.
>
> Apoi, din ea, exemplul 14.3 scoate rezultatul central al paragrafului: **sinusul unghiului orientat în coordonate**. Cosinusul îl știam din §13; sinusul e nou și este cel care poartă **semnul**.

## 1. Teorema 14.1

> [!tip] Teorema 14.1
> Într-o bază ortonormată $\{\vec i, \vec j\}$ coordonatele $\{a_1;\ a_2\}$ ale oricărui vector nenul $\vec a$ se calculează după formulele:
> $$
> a_1 = \lvert\vec a\rvert\cos\widehat{(\vec i, \vec a)}, \qquad a_2 = \lvert\vec a\rvert\sin\widehat{(\vec i, \vec a)} \tag{3}
> $$

> [!warning] O ipoteză lipsește din enunț
> Demonstrația folosește $\widehat{(\vec j, \vec i)} = -\dfrac{\pi}{2}$, adică $\vec j$ se obține din $\vec i$ prin rotație cu $90°$ **contrar acelor**. Enunțul cere doar „bază ortonormată", care ar permite și $\vec j$ la $90°$ **în sensul acelor**.
>
> Într-o asemenea bază formula pentru $a_2$ își schimbă semnul: $a_2 = -\lvert\vec a\rvert\sin\widehat{(\vec i, \vec a)}$. *Exemplu:* $\vec i = \{1; 0\}$ spre dreapta, $\vec j$ în jos, $\vec a = \vec j$. Atunci $a_2 = 1$, dar $\widehat{(\vec i, \vec a)} = -90°$ și $\lvert\vec a\rvert\sin(-90°) = -1$.
>
> **Enunțul corect:** într-o bază ortonormată **dreaptă** (în sensul §14: $\vec i \to \vec j$ contrar acelor). Același lucru e cerut explicit în §15 („sistemul vechi are orientare dreaptă").

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-t-14-1.svg)
*fig. 1 — aceeași formulă în două cadrane: semnul lui $a_2$ vine singur, din semnul lui $\sin\varphi$*

> [!example]- Cum se citește figura — teorema 14.1
> **Pasul 1 — panoul stâng, vector în cadranul I.** Unghiul orientat $\varphi = \widehat{(\vec i, \vec a)}$ e pozitiv (arcul verde merge contrar acelor). Proiecțiile pe axe dau $a_1 = \lvert\vec a\rvert\cos\varphi > 0$ și $a_2 = \lvert\vec a\rvert\sin\varphi > 0$ — exact ca în §11.
>
> **Pasul 2 — panoul drept, vector în cadranul IV.** Acum drumul scurt de la $\vec i$ la $\vec a$ e **în sensul acelor**, deci $\varphi < 0$.
>
> **Pasul 3 — urmăriți semnele.** $\cos\varphi > 0$ (cosinusul e par) ⇒ $a_1 > 0$; $\sin\varphi < 0$ (sinusul e impar) ⇒ $a_2 < 0$. Proiecția verticală (linia punctată) cade într-adevăr **sub** axa $Ox$.
>
> **Pasul 4 — trageți concluzia.** Nu e nevoie de reguli separate pe cadrane. Unghiul orientat „știe" singur în ce cadran e vectorul, iar $\sin$ și $\cos$ dau semnele corecte.
>
> **Pe ce se bazează:** teorema 14.1 și [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector#2. Proprietatea 1⁰ — coordonatele ca proiecții ortogonale|formula (10) din §11]], pe care o extinde.
>
> **Ce să verificați singuri pe figură:** imaginați-vă $\vec a$ în cadranul II, cu $\varphi = 150°$. Ce semne au $a_1$ și $a_2$? (Răspuns: $\cos 150° < 0$, $\sin 150° > 0$ ⇒ $a_1 < 0$, $a_2 > 0$ — exact semnele cadranului II.)

**Demonstrație.** Conform definiției coordonatelor vectorului,

$$
\vec a = a_1\vec i + a_2\vec j.
$$

Înmulțim scalar această egalitate cu $\vec i$ și obținem

$$
(\vec i, \vec a) = a_1\vec i^{\,2} + a_2(\vec i, \vec j) \quad\text{sau}\quad a_1 = \lvert\vec i\rvert\cdot\lvert\vec a\rvert\cos\widehat{(\vec i, \vec a)} = \lvert\vec a\rvert\cos\widehat{(\vec i, \vec a)}.
$$

Dacă înmulțim egalitatea $\vec a = a_1\vec i + a_2\vec j$ cu $\vec j$, atunci analogic obținem $a_2 = \lvert\vec a\rvert\cos\widehat{(\vec j, \vec a)}$. Luând în considerație formulele (2), obținem

$$
\cos\widehat{(\vec j, \vec a)} = \cos\Big(\widehat{(\vec j, \vec i)} + \widehat{(\vec i, \vec a)}\Big) = \cos\Big(\widehat{(\vec i, \vec a)} - \frac{\pi}{2}\Big) = \sin\widehat{(\vec i, \vec a)}.
$$

Atunci $a_2 = \lvert\vec a\rvert\sin\widehat{(\vec i, \vec a)}$. Teorema 14.1 este demonstrată. $\blacksquare$

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-t-14-1-demonstratie.svg)
*fig. 2 — pasul-cheie al demonstrației: unghiul de la $\vec j$ la $\vec a$ este cu $90°$ mai mic decât unghiul de la $\vec i$ la $\vec a$*

> [!example]- Pas cu pas — demonstrația teoremei 14.1
> **Pasul 1 — scrieți descompunerea.** $\vec a = a_1\vec i + a_2\vec j$. Problema: cum „scoatem" $a_1$ din această egalitate fără să-l scoatem și pe $a_2$?
>
> **Pasul 2 — înmulțiți scalar cu $\vec i$.** Datorită [[Proprietățile produsului scalar. Expresia în coordonate#1. Teorema 13.3 — proprietățile de bază|distributivității]]:
> $$
> (\vec i, \vec a) = a_1(\vec i, \vec i) + a_2(\vec i, \vec j).
> $$
>
> **Pasul 3 — folosiți ortonormalitatea.** $(\vec i, \vec i) = 1$ (vector unitar) și $(\vec i, \vec j) = 0$ (perpendiculari). Termenul cu $a_2$ **dispare**: $(\vec i, \vec a) = a_1$. Acesta e rostul produsului scalar aici — „filtrează" o singură coordonată.
>
> **Pasul 4 — aplicați definiția produsului scalar.** $(\vec i, \vec a) = \lvert\vec i\rvert\lvert\vec a\rvert\cos\widehat{(\vec i, \vec a)} = \lvert\vec a\rvert\cos\widehat{(\vec i, \vec a)}$. Cosinusul e par, deci nu contează că unghiul e acum orientat — îl putem folosi în locul celui neorientat.
>
> **Pasul 5 — analog, cu $\vec j$:** $a_2 = \lvert\vec a\rvert\cos\widehat{(\vec j, \vec a)}$. Formula e corectă, dar vrem ceva cu $\widehat{(\vec i, \vec a)}$, nu cu $\widehat{(\vec j, \vec a)}$.
>
> **Pasul 6 — legați cele două unghiuri prin (2).** Mergeți de la $\vec j$ la $\vec a$ prin $\vec i$: $\widehat{(\vec j, \vec i)} + \widehat{(\vec i, \vec a)}$. Primul unghi este $-90°$ (de la $\vec j$ înapoi la $\vec i$ e în sensul acelor). Deci $\cos\widehat{(\vec j, \vec a)} = \cos(\varphi - 90°)$.
>
> **Pasul 7 — formula de reducere.** $\cos(\varphi - 90°) = \sin\varphi$. Rezultă $a_2 = \lvert\vec a\rvert\sin\varphi$.
>
> **Unde s-au folosit ipotezele.** Ortonormalitatea — la pasul 3 (fără ea, $a_2$ nu dispare și $\lvert\vec i\rvert \ne 1$). Orientarea dreaptă — la pasul 6: dacă $\vec j$ ar fi la $90°$ în sensul acelor, $\widehat{(\vec j, \vec i)}$ ar fi $+90°$ și am obține $\cos(\varphi + 90°) = -\sin\varphi$.

> [!check] Consecința 14.2
> Într-o bază ortonormată $\{\vec i, \vec j\}$ vectorul unitar $\vec a_0$ are coordonatele
> $$
> \vec a_0 = \Big\{\cos\widehat{(\vec i, \vec a_0)};\ \ \sin\widehat{(\vec i, \vec a_0)}\Big\}.
> $$
> (Teorema 14.1 cu $\lvert\vec a_0\rvert = 1$. Aceeași condiție de orientare dreaptă.)

> [!note] Legătura cu §11 și §12
> Formula (3) e formula (10) din [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector|§11]], acum cu un unghi care acoperă tot cercul. Este și formula de trecere din coordonate polare, $x = r\cos\varphi$, $y = r\sin\varphi$, din [[Trecerea între coordonate polare și carteziene|§12]]: raza polară e $\lvert\vec a\rvert$, unghiul polar e $\widehat{(\vec i, \vec a)}$. Trei paragrafe, aceeași idee, de fiecare dată cu ipoteze mai generale.

## 2. Exemplul 14.3 — unghiul orientat în coordonate

> [!example] Enunț
> Într-o bază ortonormată sunt dați vectorii $\vec a = \{a_1;\ a_2\}$ și $\vec b = \{b_1;\ b_2\}$. Determinați măsura unghiului orientat dintre acești vectori.

**Rezolvare.** Pentru a afla măsura unghiului orientat dintre $\vec a$ și $\vec b$ este suficient să cunoaștem $\cos\widehat{(\vec a, \vec b)}$ și $\sin\widehat{(\vec a, \vec b)}$. Fie $\widehat{(\vec a, \vec b)} = \varphi$, $\widehat{(\vec i, \vec a)} = \varphi_1$ și $\widehat{(\vec i, \vec b)} = \varphi_2$. Cu ajutorul formulelor (2) obținem:

$$
\cos\varphi = \cos\Big(\widehat{(\vec a, \vec i)} + \widehat{(\vec i, \vec b)}\Big) = \cos\Big(\widehat{(\vec i, \vec b)} - \widehat{(\vec i, \vec a)}\Big) = \cos(\varphi_2 - \varphi_1),
$$

$$
\sin\varphi = \sin\Big(\widehat{(\vec a, \vec i)} + \widehat{(\vec i, \vec b)}\Big) = \sin\Big(\widehat{(\vec i, \vec b)} - \widehat{(\vec i, \vec a)}\Big) = \sin(\varphi_2 - \varphi_1).
$$

Așadar,

$$
\begin{cases} \cos\varphi = \cos\varphi_1\cos\varphi_2 + \sin\varphi_2\sin\varphi_1, \\ \sin\varphi = \cos\varphi_1\sin\varphi_2 - \sin\varphi_1\cos\varphi_2. \end{cases} \tag{4}
$$

Din teorema 14.1 avem $a_1 = \lvert\vec a\rvert\cos\varphi_1$, $a_2 = \lvert\vec a\rvert\sin\varphi_1$, $b_1 = \lvert\vec b\rvert\cos\varphi_2$ și $b_2 = \lvert\vec b\rvert\sin\varphi_2$. Introducem expresiile pentru $\cos\varphi_1$, $\sin\varphi_1$, $\cos\varphi_2$ și $\sin\varphi_2$ din ultimele egalități în (4) și obținem:

$$
\cos\varphi = \frac{a_1b_1 + a_2b_2}{\lvert\vec a\rvert\cdot\lvert\vec b\rvert} \qquad\text{și}\qquad \sin\varphi = \frac{a_1b_2 - a_2b_1}{\lvert\vec a\rvert\cdot\lvert\vec b\rvert} \tag{5}
$$

Dacă $\widehat{(\vec a, \vec b)} \ne \pm\dfrac{\pi}{2}$, atunci din (5) obținem:

$$
\operatorname{tg}\widehat{(\vec a, \vec b)} = \frac{a_1b_2 - a_2b_1}{a_1b_1 + a_2b_2} \tag{6}
$$

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-unghi-orientat-coordonate.svg)
*fig. 3 — unghiul orientat de la $\vec a$ la $\vec b$ este diferența unghiurilor pe care fiecare le face cu $\vec i$*

> [!example]- Cum se citește figura — formulele (4)–(5)
> **Pasul 1 — cele două unghiuri „de referință".** Arcul albastru: $\varphi_1$, de la $\vec i$ la $\vec a$. Arcul portocaliu: $\varphi_2$, de la $\vec i$ la $\vec b$. Fiecare vector e descris de unghiul lui cu axa — ca în coordonate polare.
>
> **Pasul 2 — unghiul căutat.** Arcul violet merge de la $\vec a$ la $\vec b$. Se vede direct pe figură că este „ce rămâne" din $\varphi_2$ după ce scazi $\varphi_1$: $\varphi = \varphi_2 - \varphi_1$.
>
> **Pasul 3 — aplicați formulele de scădere a unghiurilor.** $\cos(\varphi_2 - \varphi_1)$ și $\sin(\varphi_2 - \varphi_1)$ din trigonometria de liceu dau exact sistemul (4).
>
> **Pasul 4 — înlocuiți unghiurile prin coordonate.** Din (3), $\cos\varphi_1 = a_1/\lvert\vec a\rvert$, $\sin\varphi_1 = a_2/\lvert\vec a\rvert$ și la fel pentru $\vec b$. Fiecare produs din (4) primește numitorul $\lvert\vec a\rvert\lvert\vec b\rvert$ — de aici (5).
>
> **Pe ce se bazează:** formula (2) (pentru $\varphi = \varphi_2 - \varphi_1$), teorema 14.1 și formulele trigonometrice pentru diferența a două unghiuri.
>
> **Ce să verificați singuri pe figură:** schimbați rolurile lui $\vec a$ și $\vec b$. Arcul violet se inversează, $\varphi$ devine $\varphi_1 - \varphi_2$, iar în (5) numărătorul sinusului își schimbă semnul — exact formula (1).

> [!example]- Pas cu pas — un calcul complet
> Fie $\vec a = \{2;\ 1\}$ și $\vec b = \{1;\ 3\}$.
>
> **Pasul 1 — modulele.** $\lvert\vec a\rvert = \sqrt{5}$, $\lvert\vec b\rvert = \sqrt{10}$, produsul lor $\sqrt{50} = 5\sqrt2$.
>
> **Pasul 2 — numărătorul cosinusului** (produsul scalar): $a_1b_1 + a_2b_2 = 2 + 3 = 5$. Deci $\cos\varphi = \dfrac{5}{5\sqrt2} = \dfrac{\sqrt2}{2}$.
>
> **Pasul 3 — numărătorul sinusului** (determinantul): $a_1b_2 - a_2b_1 = 2\cdot 3 - 1\cdot 1 = 5$. Deci $\sin\varphi = \dfrac{\sqrt2}{2}$.
>
> **Pasul 4 — citiți unghiul.** Cosinus pozitiv și sinus pozitiv ⇒ cadranul I ⇒ $\varphi = 45°$. Vectorul $\vec b$ se obține din $\vec a$ prin rotație cu $45°$ **contrar acelor**.
>
> **Pasul 5 — verificați antisimetria.** Pentru $\widehat{(\vec b, \vec a)}$: numărătorul sinusului devine $b_1a_2 - b_2a_1 = 1 - 6 = -5$, cosinusul rămâne $5$. Deci $\widehat{(\vec b, \vec a)} = -45°$. ✓
>
> **Ce ar fi dat §13:** doar $\cos = \sqrt2/2$, deci „$45°$" fără semn — n-am fi știut dacă $\vec b$ e la stânga sau la dreapta lui $\vec a$.

> [!tip] Numărătorul sinusului e un determinant vechi cunoscut
> $$
> a_1b_2 - a_2b_1 = \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix}
> $$
> Este exact determinantul din [[Operații cu vectori în coordonate#5⁰. Condiția de coliniaritate|condiția de coliniaritate]] din §10. Acum îi înțelegem sensul geometric:
> - **determinant $= 0$** ⇔ $\sin\varphi = 0$ ⇔ $\varphi \in \{0, \pi\}$ ⇔ vectori **coliniari** (ce știam din §10);
> - **determinant $> 0$** ⇔ $\vec b$ este „la stânga" lui $\vec a$ (rotație contrar acelor);
> - **determinant $< 0$** ⇔ $\vec b$ este „la dreapta" lui $\vec a$ (rotație în sensul acelor);
> - **$\lvert$determinant$\rvert$** $= \lvert\vec a\rvert\lvert\vec b\rvert\lvert\sin\varphi\rvert$ = **aria paralelogramului** construit pe $\vec a$ și $\vec b$ (vezi [[Aria triunghiului în coordonate|lecția următoare]]).

> [!warning] Formula (6) singură nu determină unghiul
> Ca la §11: tangenta are perioada $\pi$, deci nu distinge $\varphi$ de $\varphi \pm \pi$. *Exemplu:* $\vec a = \{1; 0\}$, $\vec b = \{-1; -1\}$. Formula (6) dă $\operatorname{tg}\varphi = \frac{-1}{-1} = 1$, care sugerează $45°$. Dar $\cos\varphi = -\frac{1}{\sqrt2} < 0$ și $\sin\varphi = -\frac{1}{\sqrt2} < 0$ ⇒ $\varphi = -135°$.
>
> Pentru unghiul exact folosiți **perechea** (5): cosinusul alege între stânga și dreapta, sinusul — între sus și jos.

> [!check] Comparație §13 — §14
> | | §13 (neorientat) | §14 (orientat) |
> |---|---|---|
> | domeniul | $[0;\ \pi]$ | $(-\pi;\ \pi]$ |
> | cosinusul | $\dfrac{a_1b_1 + a_2b_2}{\lvert\vec a\rvert\lvert\vec b\rvert}$ | **același** |
> | sinusul | nu se calcula | $\dfrac{a_1b_2 - a_2b_1}{\lvert\vec a\rvert\lvert\vec b\rvert}$ |
> | ordinea vectorilor | nu contează | contează (sinusul schimbă semnul) |

> [!note] Precizare de structură
> Manualul numește rezolvarea de mai sus „exemplul 14.3", dar formulele (4)–(6) sunt rezultatul principal al paragrafului: toate calculele care urmează (aria, rotațiile din §15) se sprijină pe ele. Tratați-le ca pe o teoremă.

## Întrebări de control

1. De ce teorema 14.1 are nevoie de orientarea bazei, iar formula cosinusului din §13 nu are?
2. Fie $\vec a = \{3;\ -4\}$. Calculați $\cos\widehat{(\vec i, \vec a)}$ și $\sin\widehat{(\vec i, \vec a)}$. În ce cadran e $\vec a$?
3. Calculați unghiul orientat de la $\vec a = \{1;\ 1\}$ la $\vec b = \{-1;\ 1\}$, apoi de la $\vec b$ la $\vec a$.
4. Doi vectori nenuli au $a_1b_2 - a_2b_1 = 0$. Ce puteți spune despre ei? Dar despre unghiul orientat dintre ei?
5. De ce nu e suficient să cunoașteți doar $\operatorname{tg}\widehat{(\vec a, \vec b)}$ pentru a afla unghiul?

## Legături

- Anterior: [[Unghiul orientat dintre doi vectori]]
- Continuare: [[Aria triunghiului în coordonate]]
- Se sprijină pe: [[Proprietățile produsului scalar. Expresia în coordonate]], [[Operații cu vectori în coordonate]], [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]]
- Concepte: [[Unghi orientat]], [[Bază ortonormată]], [[Produs scalar]]
