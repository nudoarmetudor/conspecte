---
curs: geometrie-analitica
title: "Unghiul orientat dintre doi vectori"
capitol: 14 — Unghiul dintre doi vectori pe planul orientat. Aria triunghiului
paragraf: §14
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 60–61 (PDF p. 29)
tags:
  - geometrie-analitică
  - unghi-orientat
  - orientare
---

> [!tip] Despre ce este paragraful
> Unghiul din §13 este **neorientat**: $\widehat{(\vec a, \vec b)} = \widehat{(\vec b, \vec a)}$, cuprins între $0$ și $\pi$. El spune *cât de departe* sunt două direcții, dar nu *în ce parte*. Produsul scalar îl vede doar prin $\cos$, iar cosinusul nu distinge $+30°$ de $-30°$.
>
> §14 adaugă **semnul**: unghiul devine pozitiv dacă $\vec b$ se obține din $\vec a$ printr-o rotație contrar acelor de ceasornic și negativ dacă se obține printr-o rotație în sensul acelor. Cu el se obțin două lucruri pe care §13 nu le putea da: **coordonatele unui vector direct din unghi** și **aria triunghiului cu semn**.

## 1. Definiția

Fie $\vec a$ și $\vec b$ vectori nenuli dați **într-o ordine anumită**: $\vec a$ — primul vector, $\vec b$ — al doilea vector.

> [!abstract] Unghiul orientat
> Dacă vectorii $\vec a$ și $\vec b$ nu-s coliniari, atunci **unghi orientat** dintre vectorii $\vec a$ și $\vec b$ se numește mărimea $\varphi$ a unghiului dintre ei (din §13), dacă baza $\{\vec a, \vec b\}$ este **dreaptă**, și mărimea $-\varphi$, dacă baza $\{\vec a, \vec b\}$ este **stângă**.
>
> Dacă vectorii $\vec a$ și $\vec b$ sunt coorientați, unghiul dintre ei se consideră **nul**, iar dacă au direcții opuse — egal cu $\pi$.

De aici înainte, în §14 și §15, $\widehat{(\vec a, \vec b)}$ desemnează **unghiul orientat**. Pentru orice vectori nenuli $\vec a$ și $\vec b$:

$$
-\pi < \widehat{(\vec a, \vec b)} \leq \pi.
$$

> [!warning] Manualul folosește „dreaptă" și „stângă" invers decât în §10
> În §10 (p. 44), manualul numește **stângă** orientarea în care $(Ox)$ se rotește spre $(Oy)$ **contrar acelor** de ceasornic și o declară pozitivă (vezi [[Orientarea planului, a poligoanelor și a unghiurilor#1. Orientarea sistemului de coordonate|orientarea sistemului]]).
>
> În §14 (p. 60–61) și §15 (p. 67), aceeași situație — $\vec b$ obținut din $\vec a$ printr-o rotație **contrar acelor** — este numită **dreaptă**. Figura 53 o arată fără echivoc: baza $\{\vec a, \vec b\}$ cu $\vec b$ la $45°$ contrar acelor de $\vec a$ e numită „dreaptă" și primește $+45°$.
>
> **Matematica nu se contrazice** — în ambele paragrafe, sensul pozitiv este cel **contrar acelor** (sensul trigonometric). Se contrazic doar **numele**. Ca la §10: rețineți **sensul rotației**, nu cuvântul.
>
> | | §10 (p. 44) | §14–§15 (p. 60–67) |
> |---|---|---|
> | rotație contrar acelor | „stângă", pozitivă | „dreaptă", unghi pozitiv |
> | rotație în sensul acelor | „dreaptă", negativă | „stângă", unghi negativ |
>
> În notele de mai jos se spune, ca în manual, „bază dreaptă", dar se precizează de fiecare dată sensul: **contrar acelor**.

> [!warning] Al doilea unghi orientat al manualului
> Tot în §10 (p. 45), manualul definise deja un „unghi dintre doi vectori" cu sens: unghiul cu care se rotește $\vec a$ **contrar acelor** până la direcția lui $\vec b$, cu valori în $[0;\ 2\pi)$ (vezi [[Orientarea planului, a poligoanelor și a unghiurilor#4. Unghiul orientat dintre doi vectori|§10, secțiunea 4]]).
>
> Unghiul din §14 ia valori în $(-\pi;\ \pi]$. Cele două diferă cu un multiplu de $2\pi$: unghiul de $-90°$ din §14 este unghiul de $270°$ din §10. **Sinusul și cosinusul lor coincid**, deci toate formulele din §14 rămân adevărate cu oricare dintre convenții. Diferă doar numărul scris.

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-unghi-orientat-baze.svg)
*fig. 1 (după fig. 53 din manual) — stânga: baza $\{\vec a, \vec b\}$, rotația contrar acelor, unghi $+45°$; dreapta: baza $\{\vec c, \vec d\}$, rotația în sensul acelor, unghi $-90°$*

> [!example]- Cum se citește figura — semnul unghiului orientat
> **Pasul 1 — identificați primul vector.** În fiecare panou, primul vector al bazei este cel orizontal, albastru ($\vec a$, respectiv $\vec c$). De la el se pornește întotdeauna.
>
> **Pasul 2 — căutați drumul cel mai scurt spre al doilea vector.** Din $\vec a$ spre $\vec b$ (stânga), drumul scurt e în sus, adică **contrar acelor** (arcul verde). Din $\vec c$ spre $\vec d$ (dreapta), drumul scurt e în jos, adică **în sensul acelor** (arcul roșu).
>
> **Pasul 3 — măsurați arcul.** Stânga: $45°$. Dreapta: $90°$ (unghiul drept marcat în $O$).
>
> **Pasul 4 — puneți semnul.** Contrar acelor ⇒ $+$; în sensul acelor ⇒ $-$. Deci $\widehat{(\vec a, \vec b)} = +45°$ și $\widehat{(\vec c, \vec d)} = -90°$.
>
> **Pasul 5 — comparați cu §13.** Unghiul **neorientat** ar fi fost $45°$ și $90°$ — fără semn. Unghiul orientat păstrează *mărimea* și adaugă *sensul*.
>
> **Pe ce se bazează:** definiția de mai sus și convenția că sensul pozitiv este cel contrar acelor de ceasornic ([[Orientarea planului, a poligoanelor și a unghiurilor#2. Planul orientat|planul orientat]]).
>
> **Ce să verificați singuri pe figură:** schimbați ordinea în panoul drept — $\widehat{(\vec d, \vec c)}$. Din $\vec d$ (în jos) spre $\vec c$ (orizontal) drumul scurt e contrar acelor ⇒ $+90°$.

> [!note] De ce intervalul e $(-\pi;\ \pi]$ și nu $[-\pi;\ \pi]$
> Pentru vectori opuși, ambele drumuri — contrar acelor și în sensul acelor — au exact $\pi$. Trebuie ales unul, altfel unghiul n-ar fi bine definit. Manualul alege $+\pi$; de aceea $-\pi$ este exclus.

## 2. Ordinea contează: antisimetria

Deoarece $\widehat{(\vec a, \vec b)} = -\widehat{(\vec b, \vec a)}$, pentru vectori necoliniari au loc:

$$
\sin\widehat{(\vec a, \vec b)} = -\sin\widehat{(\vec b, \vec a)} \qquad\text{și}\qquad \cos\widehat{(\vec a, \vec b)} = \cos\widehat{(\vec b, \vec a)} \tag{1}
$$

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-unghi-orientat-antisimetrie.svg)
*fig. 2 — aceeași pereche de vectori; arcul verde merge de la $\vec a$ la $\vec b$, arcul roșu — de la $\vec b$ la $\vec a$*

> [!example]- Cum se citește figura — formula (1)
> **Pasul 1 — o singură pereche de vectori.** Ambele arce leagă aceiași doi vectori, $\vec a$ și $\vec b$. Mărimea unghiului geometric dintre ei e aceeași: $\varphi$.
>
> **Pasul 2 — arcul verde** pornește de la $\vec a$ și merge spre $\vec b$ contrar acelor ⇒ $\widehat{(\vec a, \vec b)} = +\varphi$.
>
> **Pasul 3 — arcul roșu** pornește de la $\vec b$ și merge spre $\vec a$ — același drum, în sens invers, deci în sensul acelor ⇒ $\widehat{(\vec b, \vec a)} = -\varphi$.
>
> **Pasul 4 — aplicați funcțiile trigonometrice.** Sinusul este **impar** ($\sin(-\varphi) = -\sin\varphi$), cosinusul este **par** ($\cos(-\varphi) = \cos\varphi$). De aici exact formula (1).
>
> **Pe ce se bazează:** definiția unghiului orientat și paritatea funcțiilor $\sin$ și $\cos$.
>
> **Ce să verificați singuri pe figură:** de ce produsul scalar $(\vec a, \vec b) = (\vec b, \vec a)$ din §13 nu „vede" ordinea vectorilor? Pentru că depinde doar de $\cos$, care e par.

> [!note] Precizare: când nu are loc $\widehat{(\vec a, \vec b)} = -\widehat{(\vec b, \vec a)}$
> Egalitatea unghiurilor e falsă într-un singur caz: vectori **opuși**. Atunci $\widehat{(\vec a, \vec b)} = \widehat{(\vec b, \vec a)} = \pi$, fiindcă $-\pi$ nu e în interval. Formulele (1) rămân totuși adevărate și aici: $\sin\pi = 0 = -\sin\pi$. De aceea manualul pune condiția „necoliniari" — ea e necesară pentru egalitatea unghiurilor, dar nu și pentru (1).

## 3. Unghiurile se adună — „modulo $2\pi$"

Se poate demonstra că pentru orice vectori nenuli $\vec a$, $\vec b$ și $\vec c$ au loc egalitățile:

$$
\sin\Big(\widehat{(\vec a, \vec b)} + \widehat{(\vec b, \vec c)}\Big) = \sin\widehat{(\vec a, \vec c)}, \qquad \cos\Big(\widehat{(\vec a, \vec b)} + \widehat{(\vec b, \vec c)}\Big) = \cos\widehat{(\vec a, \vec c)} \tag{2}
$$

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-unghi-orientat-chasles.svg)
*fig. 3 — stânga: suma rămâne în $(-\pi;\ \pi]$ și coincide cu $\widehat{(\vec a, \vec c)}$; dreapta: suma depășește $\pi$ și diferă de $\widehat{(\vec a, \vec c)}$ cu $2\pi$*

> [!example]- Cum se citește figura — formula (2)
> **Pasul 1 — panoul stâng, rotație în doi pași.** Rotiți $\vec a$ până la $\vec b$ ($50°$, primul arc violet), apoi $\vec b$ până la $\vec c$ ($60°$, al doilea arc violet). Ați ajuns din $\vec a$ în $\vec c$ cu $110°$.
>
> **Pasul 2 — comparați cu drumul direct.** Arcul roșu merge direct din $\vec a$ în $\vec c$: tot $110°$. Aici egalitatea are loc **între unghiuri**, nu doar între sinusuri și cosinusuri.
>
> **Pasul 3 — panoul drept, suma „sare" peste $\pi$.** Acum $\widehat{(\vec a, \vec b)} = 120°$ și $\widehat{(\vec b, \vec c)} = 120°$; suma este $240°$. Dar drumul direct de la $\vec a$ la $\vec c$ (arcul roșu) e **în sensul acelor**, de $120°$: $\widehat{(\vec a, \vec c)} = -120°$.
>
> **Pasul 4 — de ce nu e o contradicție.** $240°$ și $-120°$ diferă cu $360°$ — un tur complet. Ajung **în aceeași direcție**, deci au același sinus și același cosinus. Unghiul orientat trebuie readus în $(-\pi;\ \pi]$, iar suma nu respectă automat această limită.
>
> **Pasul 5 — concluzia.** Formula (2) spune exact atât cât e adevărat mereu: **funcțiile trigonometrice** coincid. Unghiurile coincid doar când suma rămâne în interval.
>
> **Pe ce se bazează:** faptul că o rotație cu $\theta$ urmată de o rotație cu $\theta'$ este rotația cu $\theta + \theta'$, și periodicitatea de $2\pi$ a funcțiilor $\sin$ și $\cos$.
>
> **Ce să verificați singuri pe figură:** în panoul drept, calculați $\widehat{(\vec a, \vec b)} + \widehat{(\vec b, \vec c)} + \widehat{(\vec c, \vec a)}$. Răspuns: $120° + 120° + 120° = 360°$ — un tur complet, deci sin = 0 și cos = 1, la fel ca pentru $\widehat{(\vec a, \vec a)} = 0$.

> [!info]- Completare — de ce are loc relația (2)
> Manualul o enunță fără demonstrație („se poate demonstra"). Ideea e simplă.
>
> **Pasul 1.** Unghiul orientat $\widehat{(\vec u, \vec v)}$ este unghiul rotației care aduce direcția lui $\vec u$ peste direcția lui $\vec v$, ales în $(-\pi;\ \pi]$. Orice altă rotație care face același lucru diferă de ea cu un multiplu de $2\pi$.
>
> **Pasul 2.** Rotația cu $\widehat{(\vec a, \vec b)}$ duce direcția lui $\vec a$ în direcția lui $\vec b$. Rotația cu $\widehat{(\vec b, \vec c)}$ duce mai departe direcția lui $\vec b$ în direcția lui $\vec c$. Compuse, ele duc direcția lui $\vec a$ în direcția lui $\vec c$, iar două rotații în jurul aceluiași punct se compun **adunând unghiurile**.
>
> **Pasul 3.** Așadar suma $\widehat{(\vec a, \vec b)} + \widehat{(\vec b, \vec c)}$ este *un* unghi de rotație care duce $\vec a$ în $\vec c$. Diferă de $\widehat{(\vec a, \vec c)}$ cu un multiplu de $2\pi$, deci are aceleași sin și cos.

> [!check] Rezumat
> | Proprietate | Formula |
> |---|---|
> | domeniul | $-\pi < \widehat{(\vec a, \vec b)} \leq \pi$ |
> | semnul | $+$ dacă rotația $\vec a \to \vec b$ e contrar acelor, $-$ dacă e în sensul acelor |
> | schimbarea ordinii | $\sin\widehat{(\vec a, \vec b)} = -\sin\widehat{(\vec b, \vec a)}$, $\cos\widehat{(\vec a, \vec b)} = \cos\widehat{(\vec b, \vec a)}$ |
> | compunerea | $\widehat{(\vec a, \vec b)} + \widehat{(\vec b, \vec c)} \equiv \widehat{(\vec a, \vec c)} \pmod{2\pi}$ |

## Întrebări de control

1. Ce unghi orientat au doi vectori perpendiculari? Pot exista două răspunsuri diferite?
2. De ce intervalul de valori este $(-\pi;\ \pi]$ și nu $[-\pi;\ \pi]$?
3. Calculați $\widehat{(\vec b, \vec a)}$ dacă $\widehat{(\vec a, \vec b)} = -150°$.
4. Dacă $\widehat{(\vec a, \vec b)} = 100°$ și $\widehat{(\vec b, \vec c)} = 100°$, cât este $\widehat{(\vec a, \vec c)}$?
5. Cum numește manualul în §10, respectiv în §14, sistemul în care $(Ox)$ se rotește spre $(Oy)$ contrar acelor? Ce rămâne neschimbat între cele două paragrafe?

## Legături

- Anterior: [[Ce nu se transferă de la numere. Aplicații]]
- Continuare: [[Coordonatele vectorului prin unghiul orientat]]
- Se sprijină pe: [[Orientarea planului, a poligoanelor și a unghiurilor]], [[Unghiul dintre doi vectori. Perpendicularitate]]
- Concepte: [[Unghi orientat]], [[Orientarea planului]], [[Unghiul dintre doi vectori]]
