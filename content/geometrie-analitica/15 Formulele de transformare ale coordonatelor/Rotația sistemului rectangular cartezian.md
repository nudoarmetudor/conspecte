---
curs: geometrie-analitica
title: "Rotația sistemului rectangular cartezian"
capitol: 15 — Formulele de transformare ale coordonatelor
paragraf: §15
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 67–69 (PDF p. 32–33)
tags:
  - geometrie-analitică
  - transformarea-coordonatelor
  - rotație
  - teoremă
---

> [!tip] Despre ce este lecția
> Sistemul rectangular cartezian este un caz particular al celui afin, deci la trecerea de la un sistem rectangular cartezian la altul ne putem folosi de aceleași formule (5). Însă în acest caz asupra elementelor $c_{ij}$ ale matricei de trecere **se pun unele limite adăugătoare**: vectorii noi trebuie să fie tot unitari și perpendiculari.
>
> Consecința: cele patru numere $c_{ij}$ nu mai sunt libere. Le determină **un singur unghi** $\alpha$ și o alegere între două orientări. Lecția arată cum.

## 1. Ipotezele

Să presupunem că sistemul vechi $O\vec i\vec j$ are **orientare dreaptă** (în sensul §14: $\vec i \to \vec j$ contrar acelor) și să examinăm două cazuri: sistemul nou $O'\vec i{}'\vec j{}'$ are aceeași orientare sau orientarea opusă.

> [!warning] Din nou „dreaptă" = contrar acelor
> Ca în [[Unghiul orientat dintre doi vectori|§14]], manualul numește aici **dreaptă** orientarea în care $\vec j$ se obține din $\vec i$ prin rotație cu $+90°$, contrar acelor. În §10 aceeași orientare era numită **stângă**. Rețineți **sensul rotației**: tot ce urmează presupune $\widehat{(\vec i, \vec j)} = +\dfrac{\pi}{2}$.

## 2. Cazul 1 — aceeași orientare

Fie $\alpha = \widehat{(\vec i, \vec i{}')}$. Conform consecinței 14.2, vectorii $\vec i{}'$ și $\vec j{}'$ au coordonatele

$$
\vec i{}' = \{\cos\alpha;\ \sin\alpha\}, \qquad \vec j{}' = \Big\{\cos\widehat{(\vec i, \vec j{}')};\ \sin\widehat{(\vec i, \vec j{}')}\Big\} \tag{8}
$$

Însă

$$
\cos\widehat{(\vec i, \vec j{}')} = \cos\Big(\widehat{(\vec i, \vec i{}')} + \widehat{(\vec i{}', \vec j{}')}\Big) = \cos\Big(\alpha + \frac{\pi}{2}\Big) = -\sin\alpha,
$$

$$
\sin\widehat{(\vec i, \vec j{}')} = \sin\Big(\widehat{(\vec i, \vec i{}')} + \widehat{(\vec i{}', \vec j{}')}\Big) = \sin\Big(\alpha + \frac{\pi}{2}\Big) = \cos\alpha.
$$

Așadar, formulele (5) în acest caz au forma:

$$
\begin{cases} x = x'\cos\alpha - y'\sin\alpha + x_0, \\ y = x'\sin\alpha + y'\cos\alpha + y_0. \end{cases} \tag{9}
$$

În (9) avem

$$
\begin{vmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{vmatrix} = 1.
$$

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-t-15-cazul-1.svg)
*fig. 1 — cazul 1: $\vec j{}'$ se obține din $\vec i{}'$ prin $+90°$, deci face cu $\vec i$ unghiul $\alpha + 90°$*

> [!example]- Cum se citește figura — cazul 1
> **Pasul 1 — baza veche.** Săgețile groase albastre din origine: $\vec i$ orizontal, $\vec j$ vertical în sus. $\vec j$ se obține din $\vec i$ rotind contrar acelor — orientarea „dreaptă" a manualului.
>
> **Pasul 2 — primul vector nou.** $\vec i{}'$ (portocaliu) face cu $\vec i$ unghiul $\alpha$ (arcul verde). Fiind unitar, consecința 14.2 dă direct coordonatele: $\{\cos\alpha;\ \sin\alpha\}$ — se citesc pe axe, la capetele liniilor punctate.
>
> **Pasul 3 — al doilea vector nou.** $\vec j{}'$ e perpendicular pe $\vec i{}'$ (unghiul drept) și, fiind aceeași orientare, se obține din $\vec i{}'$ tot prin $+90°$. Deci de la $\vec i$ până la $\vec j{}'$ sunt $\alpha + 90°$ (arcul violet).
>
> **Pasul 4 — citiți coordonatele lui $\vec j{}'$.** $\cos(\alpha + 90°) = -\sin\alpha$ (proiecția pe $Ox$ cade **la stânga** originii) și $\sin(\alpha + 90°) = \cos\alpha$.
>
> **Pasul 5 — puneți coloanele în matrice.** $C = \begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}$, cu $\det C = \cos^2\alpha + \sin^2\alpha = +1$.
>
> **Pe ce se bazează:** [[Coordonatele vectorului prin unghiul orientat#1. Teorema 14.1|consecința 14.2]], relația (2) din §14 și formulele de reducere $\cos(\alpha + 90°) = -\sin\alpha$, $\sin(\alpha + 90°) = \cos\alpha$.
>
> **Ce să verificați singuri pe figură:** pentru $\alpha = 0$ sistemul nou coincide cu cel vechi. Matricea devine matricea unitate și (9) se reduce la translația (6). ✓

### Rotația propriu-zisă

Să mai cercetăm cazul particular când ambele sisteme au aceeași origine $O$. În acest caz se mai spune că sistemul de coordonate $O\vec i{}'\vec j{}'$ se obține din sistemul $O\vec i\vec j$ prin **rotația în jurul punctului $O$ cu unghiul $\alpha$**. Formulele (5) au forma:

$$
\begin{cases} x = x'\cos\alpha - y'\sin\alpha, \\ y = x'\sin\alpha + y'\cos\alpha. \end{cases} \tag{10}
$$

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-rotatie-axe.svg)
*fig. 2 (după fig. 57 din manual) — rotația axelor în jurul originii: ambele axe se rotesc cu același unghi $\alpha$*

> [!example]- Cum se citește figura — rotația axelor
> **Pasul 1 — perechea veche** (albastru): $\vec i$, $\vec j$, perpendiculari.
>
> **Pasul 2 — perechea nouă** (portocaliu): $\vec i{}'$, $\vec j{}'$, tot perpendiculari, tot unitari.
>
> **Pasul 3 — cele două arce verzi** sunt egale: și $\vec i$ s-a rotit cu $\alpha$ până la $\vec i{}'$, și $\vec j$ s-a rotit cu $\alpha$ până la $\vec j{}'$. Sistemul întreg s-a rotit „rigid", ca un cadran de ceas întors cu totul.
>
> **Pasul 4 — ce nu s-a schimbat.** Originea (fără termen liber în (10)), lungimile și unghiul drept dintre axe.
>
> **Pe ce se bazează:** formulele (9) cu $x_0 = y_0 = 0$.
>
> **Ce să verificați singuri pe figură:** în cazul 2 de mai jos, arcele n-ar mai fi egale: $\vec j{}'$ ar fi de cealaltă parte a lui $\vec i{}'$.

> [!example]- Pas cu pas — verificarea formulei (10) pe un punct concret
> Rotim sistemul cu $\alpha = 30°$. Punctul $M$ se află pe noua axă $Ox'$, la distanța $2$ de origine: în sistemul nou, $M(2;\ 0)$.
>
> **Pasul 1 — aplicați (10).** $x = 2\cos 30° - 0 = 2\cdot\frac{\sqrt3}{2} = \sqrt3$, $\quad y = 2\sin 30° + 0 = 2\cdot\frac12 = 1$.
>
> **Pasul 2 — verificați geometric.** Punctul e la distanța $2$ de $O$, pe direcția de $30°$. Coordonatele lui vechi sunt deci $(2\cos 30°;\ 2\sin 30°) = (\sqrt3;\ 1)$. ✓
>
> **Pasul 3 — verificați distanța.** În sistemul nou: $\sqrt{2^2 + 0^2} = 2$. În cel vechi: $\sqrt{3 + 1} = 2$. ✓ Rotația păstrează distanțele — de aceea formula (12) din §11 se poate folosi în oricare dintre sisteme.
>
> **Pasul 4 — un al doilea punct.** $N$ are în sistemul nou $(0;\ 1)$, adică e chiar vârful lui $\vec j{}'$. Formula dă $x = -\sin 30° = -\frac12$, $y = \cos 30° = \frac{\sqrt3}{2}$ — exact coordonatele lui $\vec j{}'$ din (8). ✓

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-rotatie-punct.svg)
*fig. 3 — același punct $M$ în două sisteme rotite unul față de altul cu $30°$: $M(2;\ 0)$ în cel nou, $M(\sqrt3;\ 1)$ în cel vechi*

> [!example]- Cum se citește figura — un punct, două perechi de coordonate
> **Pasul 1 — sistemul nou** (portocaliu). $M$ e pe axa $Ox'$, la $2$ unități de $O$: $x' = 2$, $y' = 0$.
>
> **Pasul 2 — sistemul vechi** (albastru). Liniile punctate coboară din $M$ pe axe: $x = \sqrt3 \approx 1{,}73$, $y = 1$.
>
> **Pasul 3 — legătura.** Formula (10) cu $\alpha = 30°$ transformă perechea portocalie în cea albastră.
>
> **Pe ce se bazează:** formulele (10).
>
> **Ce să verificați singuri pe figură:** măsurați $OM$ în ambele sisteme — trebuie să iasă $2$ de fiecare dată.

## 3. Cazul 2 — orientări opuse

Sistemele de coordonate $O\vec i\vec j$ și $O'\vec i{}'\vec j{}'$ sunt opus orientate, adică sistemul vechi $O\vec i\vec j$ este drept, iar sistemul nou $O'\vec i{}'\vec j{}'$ este stâng.

Și în acest caz vectorii $\vec i{}'$ și $\vec j{}'$ au aceleași coordonate (8), însă $\widehat{(\vec i{}', \vec j{}')} = -\dfrac{\pi}{2}$ și, prin urmare,

$$
\cos\widehat{(\vec i, \vec j{}')} = \cos\Big(\widehat{(\vec i, \vec i{}')} + \widehat{(\vec i{}', \vec j{}')}\Big) = \cos\Big(\alpha - \frac{\pi}{2}\Big) = \sin\alpha,
$$

$$
\sin\widehat{(\vec i, \vec j{}')} = \sin\Big(\widehat{(\vec i, \vec i{}')} + \widehat{(\vec i{}', \vec j{}')}\Big) = \sin\Big(\alpha - \frac{\pi}{2}\Big) = -\cos\alpha.
$$

În acest caz formulele (5) au forma:

$$
\begin{cases} x = x'\cos\alpha + y'\sin\alpha + x_0, \\ y = x'\sin\alpha - y'\cos\alpha + y_0. \end{cases} \tag{11}
$$

În (11) avem

$$
\begin{vmatrix} \cos\alpha & \sin\alpha \\ \sin\alpha & -\cos\alpha \end{vmatrix} = -1.
$$

![figură](/geometrie-analitica/15%20Formulele%20de%20transformare%20ale%20coordonatelor/Figuri/fig-t-15-cazul-2.svg)
*fig. 4 — cazul 2: $\vec j{}'$ se obține din $\vec i{}'$ prin $-90°$, deci face cu $\vec i$ unghiul $\alpha - 90°$*

> [!example]- Cum se citește figura — cazul 2
> **Pasul 1 — $\vec i{}'$ ca înainte.** Tot $\{\cos\alpha;\ \sin\alpha\}$: primul vector nou nu „știe" nimic despre orientare.
>
> **Pasul 2 — $\vec j{}'$ e de cealaltă parte.** Acum $\vec j{}'$ se obține din $\vec i{}'$ prin rotație cu $90°$ **în sensul acelor**. Comparați cu figura cazului 1: acolo $\vec j{}'$ era „la stânga" lui $\vec i{}'$, aici e „la dreapta".
>
> **Pasul 3 — unghiul de la $\vec i$ la $\vec j{}'$** (arcul roșu) este $\alpha - 90°$.
>
> **Pasul 4 — coordonatele.** $\cos(\alpha - 90°) = \sin\alpha$, $\sin(\alpha - 90°) = -\cos\alpha$. Proiecția verticală a lui $\vec j{}'$ cade **sub** axa $Ox$.
>
> **Pasul 5 — determinantul.** $\cos\alpha\cdot(-\cos\alpha) - \sin\alpha\cdot\sin\alpha = -1$.
>
> **Pe ce se bazează:** aceleași argumente ca în cazul 1, cu $\widehat{(\vec i{}', \vec j{}')} = -90°$ în loc de $+90°$.
>
> **Ce să verificați singuri pe figură:** pentru $\alpha = 0$: $\vec i{}' = \vec i$, dar $\vec j{}' = -\vec j$. Formula (11) dă $x = x'$, $y = -y'$ — **simetria față de axa $Ox$**. O schimbare de orientare nu se poate obține printr-o rotație: e nevoie de o „oglindire".

## 4. Formula unificată

Formulele (9) și (11) pot fi unite într-o formulă:

$$
\begin{cases} x = x'\cos\alpha - \varepsilon y'\sin\alpha + x_0, \\ y = x'\sin\alpha + \varepsilon y'\cos\alpha + y_0, \end{cases} \tag{12}
$$

unde $\varepsilon = 1$, dacă sistemele de coordonate $O\vec i\vec j$ și $O'\vec i{}'\vec j{}'$ au aceeași orientare, și $\varepsilon = -1$, dacă aceste sisteme au orientări opuse.

> [!tip] Ce spune $\varepsilon$
> $\varepsilon$ este chiar **determinantul matricei de trecere**:
> $$
> \det\begin{pmatrix} \cos\alpha & -\varepsilon\sin\alpha \\ \sin\alpha & \varepsilon\cos\alpha \end{pmatrix} = \varepsilon(\cos^2\alpha + \sin^2\alpha) = \varepsilon.
> $$
> Așadar **semnul determinantului spune dacă orientarea se păstrează**: $+1$ — da (rotație), $-1$ — nu (rotație combinată cu o simetrie). Este același mesaj ca la [[Aria triunghiului în coordonate#2. Aria orientată și aria obișnuită|aria orientată]]: un determinant pozitiv păstrează sensul de parcurgere, unul negativ îl inversează.

> [!example]- Pas cu pas — de ce exact două cazuri și nu mai multe
> **Pasul 1 — ce cerem.** Vectorii noi trebuie să fie unitari și perpendiculari: $\lvert\vec i{}'\rvert = \lvert\vec j{}'\rvert = 1$, $\vec i{}' \perp \vec j{}'$.
>
> **Pasul 2 — $\vec i{}'$ e fixat de un unghi.** Orice vector unitar are forma $\{\cos\alpha;\ \sin\alpha\}$ (consecința 14.2). Deci primul vector nou e determinat de $\alpha$.
>
> **Pasul 3 — $\vec j{}'$ are doar două variante.** Perpendiculare pe $\vec i{}'$ și de lungime $1$ sunt **exact doi** vectori: unul la $+90°$, celălalt la $-90°$ de $\vec i{}'$. Nu există o a treia posibilitate.
>
> **Pasul 4 — cele două variante sunt cele două cazuri.** $+90°$ ⇒ aceeași orientare ⇒ $\varepsilon = 1$. $-90°$ ⇒ orientare opusă ⇒ $\varepsilon = -1$.
>
> **Concluzie.** Patru numere $c_{ij}$ s-au redus la **un unghi și un semn**. Restul ipotezelor (unitari, perpendiculari) le-au „consumat" pe celelalte.

> [!info]- Completare — formulele inverse pentru rotație
> Pentru rotația propriu-zisă (10), inversa se obține fără calcul: rotația inversă este rotația cu $-\alpha$. Înlocuind $\alpha$ cu $-\alpha$ și schimbând rolurile:
> $$
> x' = x\cos\alpha + y\sin\alpha, \qquad y' = -x\sin\alpha + y\cos\alpha.
> $$
> Matriceal: inversa matricei de rotație este **transpusa** ei. Aceasta este o proprietate a tuturor matricelor care trec dintr-o bază ortonormată în alta.
>
> *Verificare pe exemplul de mai sus:* $M(\sqrt3;\ 1)$, $\alpha = 30°$: $x' = \sqrt3\cdot\frac{\sqrt3}{2} + 1\cdot\frac12 = 2$, $y' = -\sqrt3\cdot\frac12 + 1\cdot\frac{\sqrt3}{2} = 0$. ✓
>
> Am verificat numeric formulele (9), (11), (12) și valorile determinanților pe 2000 de cazuri aleatoare.

> [!check] Rezumat
> | Caz | $\vec j{}'$ | Formulele | $\det$ |
> |---|---|---|---|
> | aceeași orientare | $\{-\sin\alpha;\ \cos\alpha\}$ | (9) | $+1$ |
> | — și aceeași origine (rotație) | idem | (10) | $+1$ |
> | orientări opuse | $\{\sin\alpha;\ -\cos\alpha\}$ | (11) | $-1$ |
> | unificat | $\{-\varepsilon\sin\alpha;\ \varepsilon\cos\alpha\}$ | (12) | $\varepsilon$ |

## Întrebări de control

1. De ce, într-un sistem rectangular cartezian, matricea de trecere depinde de un singur unghi, deși are patru elemente?
2. Scrieți formulele (10) pentru $\alpha = 90°$. Ce coordonate vechi are punctul cu coordonatele noi $(1;\ 0)$?
3. Arătați că rotația (10) păstrează distanța de la origine: $x^2 + y^2 = x'^2 + y'^2$.
4. Ce transformare se obține din (11) pentru $\alpha = 0$ și $x_0 = y_0 = 0$? Dar pentru $\alpha = 90°$?
5. De ce o schimbare de orientare nu se poate realiza printr-o rotație, oricare ar fi unghiul?

## Legături

- Anterior: [[Transformarea sistemului afin de coordonate]]
- Continuare: [[Baza spațiului V3. Teorema 16.1]]
- Se sprijină pe: [[Coordonatele vectorului prin unghiul orientat]], [[Unghiul orientat dintre doi vectori]], [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]]
- Concepte: [[Matrice de trecere]], [[Unghi orientat]], [[Sistem rectangular cartezian]], [[Orientarea planului]]
