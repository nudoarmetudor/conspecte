---
curs: geometrie-analitica
title: "Aria triunghiului în coordonate"
capitol: 14 — Unghiul dintre doi vectori pe planul orientat. Aria triunghiului
paragraf: §14
tip: lecție
nr: 3
status: complet
sursa: manual „Geometrie analitică în plan", p. 63–64 (PDF p. 30–31)
tags:
  - geometrie-analitică
  - arie
  - determinant
  - coordonate
---

> [!tip] Despre ce este lecția
> Formula $S = \frac12\,ab\sin C$ din școală cere două laturi și unghiul dintre ele — lucruri pe care trebuie să le măsori. Combinată cu formula sinusului din [[Coordonatele vectorului prin unghiul orientat|lecția precedentă]], ea devine o formulă care cere doar **coordonatele celor trei vârfuri**: un determinant de ordinul 2.
>
> Bonus neașteptat: determinantul are **semn**, iar semnul spune în ce sens sunt enumerate vârfurile.

## 1. Exemplul 14.4 — formula ariei

> [!example] Enunț
> Fie în raport cu un sistem rectangular cartezian de coordonate dat triunghiul $ABC$, unde $A(x_1;\ y_1)$, $B(x_2;\ y_2)$ și $C(x_3;\ y_3)$. Calculați aria acestui triunghi.

**Rezolvare.** Se știe că

$$
S_{\Delta ABC} = \frac12\lvert AB\rvert\cdot\lvert AC\rvert\cdot\sin\hat A
$$

sau

$$
S_{\Delta ABC} = \frac12\lvert\vec{AB}\rvert\cdot\lvert\vec{AC}\rvert\cdot\sin\widehat{(\vec{AB}, \vec{AC})} \tag{7}
$$

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-arie-triunghi.svg)
*fig. 1 (după fig. 54 din manual) — înălțimea din $C$ este $\lvert AC\rvert\sin\hat A$; aria = ½ · bază · înălțime*

> [!example]- Cum se citește figura — de unde vine $\frac12\lvert AB\rvert\lvert AC\rvert\sin\hat A$
> **Pasul 1 — alegeți baza.** Latura $AB$ (albastru), de lungime $\lvert AB\rvert$.
>
> **Pasul 2 — duceți înălțimea.** Din $C$, perpendiculara pe $AB$ (verde, punctată). Unghiul drept arată că e chiar înălțimea.
>
> **Pasul 3 — exprimați înălțimea prin unghiul $\hat A$.** În triunghiul dreptunghic format de $A$, $C$ și piciorul înălțimii, ipotenuza este $\lvert AC\rvert$ (portocaliu), iar înălțimea e cateta opusă unghiului $\hat A$. Deci $h = \lvert AC\rvert\sin\hat A$.
>
> **Pasul 4 — aplicați formula din școală.** $S = \frac12\cdot\lvert AB\rvert\cdot h = \frac12\lvert AB\rvert\lvert AC\rvert\sin\hat A$.
>
> **Pe ce se bazează:** aria triunghiului ca jumătate din produsul bazei cu înălțimea și definiția sinusului în triunghiul dreptunghic.
>
> **Ce să verificați singuri pe figură:** dacă $\hat A$ ar fi obtuz, piciorul înălțimii ar cădea în afara laturii $AB$. Formula rămâne adevărată, fiindcă $\sin(180° - \hat A) = \sin\hat A$.

Deoarece în cazul dat

$$
\vec{AB} = \{x_2 - x_1;\ y_2 - y_1\} \quad\text{și}\quad \vec{AC} = \{x_3 - x_1;\ y_3 - y_1\},
$$

atunci, folosind (5), obținem:

$$
S_{\Delta ABC} = \frac12\lvert\vec{AB}\rvert\cdot\lvert\vec{AC}\rvert\cdot\frac{(x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1)}{\lvert\vec{AB}\rvert\cdot\lvert\vec{AC}\rvert}
$$

sau

$$
S_{\Delta ABC} = \frac12\begin{vmatrix} x_2 - x_1 & y_2 - y_1 \\ x_3 - x_1 & y_3 - y_1 \end{vmatrix} \tag{8}
$$

> [!example]- Pas cu pas — de la (7) la (8)
> **Pasul 1 — scrieți vectorii laturilor din $A$.** $\vec{AB} = \{x_2 - x_1;\ y_2 - y_1\}$, $\vec{AC} = \{x_3 - x_1;\ y_3 - y_1\}$ (regula *extremitate minus origine*).
>
> **Pasul 2 — luați sinusul din (5)**, cu $\vec a = \vec{AB}$ și $\vec b = \vec{AC}$:
> $$
> \sin\widehat{(\vec{AB}, \vec{AC})} = \frac{(x_2 - x_1)(y_3 - y_1) - (y_2 - y_1)(x_3 - x_1)}{\lvert\vec{AB}\rvert\cdot\lvert\vec{AC}\rvert}.
> $$
>
> **Pasul 3 — înlocuiți în (7).** Produsul modulelor apare o dată în față și o dată la numitor — **se simplifică**. Rămâne doar numărătorul, înmulțit cu $\frac12$.
>
> **Pasul 4 — recunoașteți determinantul.** Numărătorul are forma $ad - bc$, deci este determinantul matricei cu rândurile $\vec{AB}$ și $\vec{AC}$.
>
> **Ce s-a câștigat.** Nicio rădăcină, nicio funcție trigonometrică — patru diferențe, două înmulțiri, o scădere. Modulele, care cereau radicali, au dispărut cu totul.

> [!warning] Pasul de la $\sin\hat A$ la $\sin\widehat{(\vec{AB}, \vec{AC})}$ schimbă sensul formulei
> Manualul scrie „sau" între cele două formule, ca și cum ar fi aceeași. Nu sunt.
> - $\sin\hat A$ — unghiul **interior** al triunghiului, între $0$ și $\pi$ ⇒ $\sin\hat A > 0$ ⇒ aria e **pozitivă**.
> - $\sin\widehat{(\vec{AB}, \vec{AC})}$ — unghiul **orientat** ⇒ sinusul poate fi **negativ**.
>
> Cele două coincid doar când $\vec{AC}$ se obține din $\vec{AB}$ prin rotație contrar acelor. Altfel diferă prin semn. De aceea (7) și (8) nu mai dau „aria" obișnuită, ci **aria orientată** — un număr cu semn. Manualul o spune abia după formula (8).

## 2. Aria orientată și aria obișnuită

După (8) se calculează **aria triunghiului orientat**. Se va obține $S_{\Delta ABC} > 0$, dacă $\Delta ABC$ este orientat **pozitiv**, și $S_{\Delta ABC} < 0$, dacă $\Delta ABC$ este orientat **negativ**.

Dacă ne interesează pur și simplu aria triunghiului și nu orientarea lui, ne vom folosi de expresia

$$
S_{\Delta ABC} = \frac12\operatorname{mod}\begin{vmatrix} x_2 - x_1 & y_2 - y_1 \\ x_3 - x_1 & y_3 - y_1 \end{vmatrix} \tag{9}
$$

unde simbolul $\operatorname{mod}$ înseamnă valoarea absolută a determinantului ce urmează.

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-arie-orientata-semn.svg)
*fig. 2 — același triunghi, enumerat în două ordini: semnul ariei orientate arată sensul de parcurgere*

> [!example]- Cum se citește figura — semnul ariei
> **Pasul 1 — panoul stâng.** Urmăriți săgețile de pe laturi: $A \to B \to C \to A$. Parcursul merge **contrar acelor** (arcul verde din interior). Triunghiul e orientat **pozitiv** ([[Orientarea planului, a poligoanelor și a unghiurilor#3. Poligoane orientate|§10]]).
>
> **Pasul 2 — legați de unghiul din (7).** Vectorul $\vec{AC}$ se obține din $\vec{AB}$ printr-o rotație contrar acelor ⇒ $\sin\widehat{(\vec{AB}, \vec{AC})} > 0$ ⇒ determinantul e pozitiv ⇒ $S > 0$.
>
> **Pasul 3 — panoul drept, aceleași puncte, altă ordine:** $A \to C \to B$. Acum parcursul e **în sensul acelor**. În formulă, rolurile lui $B$ și $C$ s-au schimbat, deci s-au schimbat rândurile determinantului ⇒ determinantul își schimbă semnul ⇒ $S < 0$.
>
> **Pasul 4 — trageți concluzia.** Valoarea absolută e aceeași — e același triunghi. Doar **semnul** ține minte ordinea vârfurilor.
>
> **Pe ce se bazează:** formula (8), antisimetria unghiului orientat (formula 1) și faptul că un determinant își schimbă semnul când se schimbă două rânduri.
>
> **Ce să verificați singuri pe figură:** enumerați $B \to C \to A$. E o permutare **circulară** a lui $A \to B \to C$ — sensul de parcurgere nu se schimbă, deci aria orientată rămâne pozitivă.

> [!info]- Completare — o formulă echivalentă, fără să alegeți un vârf privilegiat
> Formula (8) „pornește" din $A$. Dezvoltând determinantul și regrupând termenii se obține o formulă simetrică în cele trei vârfuri:
> $$
> S_{\Delta ABC} = \frac12\Big[(x_1y_2 - x_2y_1) + (x_2y_3 - x_3y_2) + (x_3y_1 - x_1y_3)\Big].
> $$
> Fiecare paranteză e determinantul a două vârfuri consecutive. Formula se extinde la orice poligon: se adună determinanții tuturor perechilor de vârfuri consecutive („formula lui Gauss" sau „a șiretului").
>
> Am verificat numeric, pe 2000 de triunghiuri aleatoare, că dă exact același rezultat ca (8).

> [!check] De reținut
> | Vreau | Folosesc | Semn |
> |---|---|---|
> | aria **orientată** (cu semn) | (8): $\frac12\begin{vmatrix} x_2 - x_1 & y_2 - y_1 \\ x_3 - x_1 & y_3 - y_1 \end{vmatrix}$ | $+$ dacă $A \to B \to C$ e contrar acelor |
> | aria **obișnuită** | (9): valoarea absolută a lui (8) | mereu $\geq 0$ |
> | test de coliniaritate a trei puncte | determinantul din (8) $= 0$ | — |

> [!tip] Trei puncte coliniare ⇔ aria zero
> Dacă determinantul din (8) e nul, triunghiul e „turtit" într-un segment: punctele $A$, $B$, $C$ sunt **coliniare**. Este [[Operații cu vectori în coordonate#5⁰. Condiția de coliniaritate|condiția de coliniaritate din §10]], aplicată vectorilor $\vec{AB}$ și $\vec{AC}$ — acum cu o interpretare geometrică: aria triunghiului e zero.

## 3. Exemplul 14.5 — aria paralelogramului

> [!example] Enunț
> Determinați aria paralelogramului ce are trei vârfuri în punctele $A(3;\ 7)$, $B(2;\ -3)$ și $C(-1;\ 4)$.

**Rezolvare.** Construim schematic acest paralelogram și notăm cu $D$ vârful al patrulea.

Aria paralelogramului $ABCD$ este egală cu suma ariilor triunghiurilor $ABC$ și $CDA$. Însă aceste triunghiuri sunt congruente și, prin urmare, aria paralelogramului $ABCD$ este egală cu două arii ale triunghiului $ABC$. Calculăm aria acestui triunghi utilizând formula (9):

$$
S_{\Delta ABC} = \frac12\operatorname{mod}\begin{vmatrix} 2 - 3 & -3 - 7 \\ -1 - 3 & 4 - 7 \end{vmatrix} = \frac12\operatorname{mod}\begin{vmatrix} -1 & -10 \\ -4 & -3 \end{vmatrix} = \frac12\lvert 3 - 40\rvert = \frac{37}{2}.
$$

Atunci $S_{ABCD} = 2\,S_{\Delta ABC} = 37$ (u.p.).

![figură](/geometrie-analitica/14%20Unghiul%20dintre%20doi%20vectori%20pe%20planul%20orientat.%20Aria%20triunghiului/Figuri/fig-ex145-paralelogram.svg)
*fig. 3 (după fig. 55 din manual) — paralelogramul desenat pe coordonatele reale; diagonala $AC$ îl împarte în două triunghiuri congruente*

> [!example]- Pas cu pas — calculul, cu verificări
> **Pasul 1 — vectorii din $A$.** $\vec{AB} = \{2 - 3;\ -3 - 7\} = \{-1;\ -10\}$, $\vec{AC} = \{-1 - 3;\ 4 - 7\} = \{-4;\ -3\}$.
>
> **Pasul 2 — determinantul.** $(-1)(-3) - (-10)(-4) = 3 - 40 = -37$.
>
> **Pasul 3 — interpretați semnul.** Negativ ⇒ triunghiul $ABC$ e orientat **negativ**: $A \to B \to C$ se parcurge în sensul acelor. Verificați pe figură: din $A(3;7)$ coborâți la $B(2;-3)$, urcați la $C(-1;4)$ — în sensul acelor. ✓
>
> **Pasul 4 — aria obișnuită.** Luăm valoarea absolută: $S_{\Delta ABC} = \frac{37}{2}$.
>
> **Pasul 5 — paralelogramul.** $S_{ABCD} = 2\cdot\frac{37}{2} = 37$.
>
> **Pasul 6 — al patrulea vârf** (manualul nu-l calculează). Din $\vec{AD} = \vec{BC}$: $D = A + (C - B) = (3 + (-3);\ 7 + 7) = (0;\ 14)$. Verificare: $\vec{DC} = \{-1;\ -10\} = \vec{AB}$. ✓

> [!note] Figura din manual este schematică
> Fig. 55 din manual desenează $A(3; 7)$ jos și $B(2; -3)$ sus — invers decât pe coordonatele reale. Manualul avertizează că desenul e „schematic", dar o figură care inversează sus cu jos poate deruta la verificarea orientării. Figura de mai sus folosește coordonatele adevărate.

> [!info]- Completare — trei puncte determină trei paralelograme
> Enunțul spune „**paralelogramul** ce are trei vârfuri în $A$, $B$, $C$", ca și cum ar fi unul singur. De fapt sunt **trei**, după care dintre puncte se află opus vârfului lipsă:
>
> | Al patrulea vârf | Paralelogramul |
> |---|---|
> | $D = A + C - B = (0;\ 14)$ | $ABCD$ (cel din manual) |
> | $D' = A + B - C = (6;\ 0)$ | $ACBD'$ |
> | $D'' = B + C - A = (-2;\ -6)$ | $BACD''$ |
>
> Răspunsul nu se schimbă: fiecare dintre ele e format din două copii ale triunghiului $ABC$, deci toate au aria $37$. De aceea problema e corectă, deși formularea ei e ambiguă.

## Întrebări de control

1. Ce semn are aria orientată a triunghiului $A(0;0)$, $B(4;0)$, $C(0;3)$? Dar a triunghiului $ACB$?
2. De ce formula (8) nu conține niciun radical, deși (7) conține modulele vectorilor?
3. Verificați cu formula (8) dacă punctele $P(1;\ 2)$, $Q(3;\ 6)$, $R(-2;\ -4)$ sunt coliniare.
4. Aria orientată a lui $ABC$ este $-5$. Cât este aria orientată a lui $BCA$? Dar a lui $CBA$?
5. Arătați că aria paralelogramului construit pe vectorii $\vec a = \{a_1; a_2\}$ și $\vec b = \{b_1; b_2\}$ este $\lvert a_1b_2 - a_2b_1\rvert$.

## Legături

- Anterior: [[Coordonatele vectorului prin unghiul orientat]]
- Continuare: [[Transformarea sistemului afin de coordonate]]
- Se sprijină pe: [[Orientarea planului, a poligoanelor și a unghiurilor]], [[Operații cu vectori în coordonate]], [[Coordonatele punctului. Raza vectoare]]
- Concepte: [[Arie orientată]], [[Unghi orientat]]
