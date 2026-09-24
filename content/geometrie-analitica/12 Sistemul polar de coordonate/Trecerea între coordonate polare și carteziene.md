---
curs: geometrie-analitica
title: "Trecerea între coordonate polare și carteziene"
capitol: 12 — Sistemul polar de coordonate
paragraf: §12
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 54–55 (PDF p. 26)
tags:
  - geometrie-analitică
  - coordonate
  - coordonate-polare
  - conversie
---

> [!tip] Despre ce este lecția
> Același punct, două limbaje. Lecția dă **dicționarul** dintre ele: cum se traduce $(r;\ \varphi)$ în $(x;\ y)$ și invers. Traducerea într-un sens este imediată; în celălalt sens apar capcane, fiindcă unghiul nu se lasă recuperat dintr-o singură funcție trigonometrică.

## 1. De la polare la carteziene

Fie $(r;\ \varphi)$ coordonatele punctului $M$ în sistemul polar, iar $(x;\ y)$ — coordonatele **aceluiași punct** în sistemul rectangular cartezian asociat. Atunci

$$
x = \lvert\vec{OM}\rvert\cos\varphi = r\cos\varphi, \qquad y = r\sin\varphi.
$$

După aceste expresii se efectuează trecerea de la coordonatele polare ale unui punct la coordonatele carteziene rectangulare ale acestui punct.

![figură](/geometrie-analitica/12%20Sistemul%20polar%20de%20coordonate/Figuri/fig-polar-rectangular.svg)
*fig. 1 (după fig. 50 din manual) — cele două sisteme suprapuse: $(r;\varphi)$ și $(x;y)$ descriu același punct $M$*

> [!example]- Cum se citește figura — formulele de trecere
> **Pasul 1 — observați suprapunerea.** Polul $O$ **este** originea carteziană; axa polară **este** semiaxa pozitivă $(Ox)$. Cele două sisteme nu sunt alături — sunt suprapuse.
>
> **Pasul 2 — datele polare.** Săgeata violet $\vec{OM}$ are lungimea $r$, iar unghiul ei cu $\vec i$ este $\varphi$. Acestea sunt cele două numere de la care plecăm.
>
> **Pasul 3 — coborâți perpendicularele.** Din $M$ se coboară pe $(Ox)$ în $M_1$ și pe $(Oy)$ în $M_2$. Segmentele $OM_1$ și $OM_2$ sunt $x$, respectiv $y$.
>
> **Pasul 4 — recunoașteți triunghiul dreptunghic $OM_1M$.** Ipotenuza $OM = r$, unghiul de la $O$ este $\varphi$. Deci cateta alăturată este $r\cos\varphi$ și cea opusă $r\sin\varphi$.
>
> **Pasul 5 — identificați formula deja cunoscută.** Comparați cu [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector#2. Proprietatea 1⁰ — coordonatele ca proiecții ortogonale|formula (10)]] din §11: acolo scria $x = \lvert\vec a\rvert\cos\varphi$, $y = \lvert\vec a\rvert\sin\varphi$. Aici $\vec a$ este raza vectoare $\vec{OM}$ și $\lvert\vec a\rvert = r$. **Nu e o formulă nouă** — e formula (10) citită cu alte litere.
>
> **Pe ce se bazează:** formula (10) din §11 și faptul că $r = \lvert\vec{OM}\rvert$ prin definiția razei polare.
>
> **Ce să verificați singuri pe figură:** luați $\varphi$ puțin mai mare de $90°$. $M_1$ trece de partea negativă a axei, deci $x < 0$ — și într-adevăr $\cos\varphi < 0$ acolo. Semnele se corectează singure.

## 2. De la carteziene la polare

Din aceleași expresii obținem:

**a)** $x^2 + y^2 = r^2$, deci

$$
r = \sqrt{x^2 + y^2}, \qquad\text{unde } r = \lvert\vec{OM}\rvert > 0;
$$

**b)**

$$
\cos\varphi = \frac{x}{r} = \frac{x}{\sqrt{x^2+y^2}}, \qquad \sin\varphi = \frac{y}{r} = \frac{y}{\sqrt{x^2+y^2}}.
$$

Pe baza acestor expresii se determină **univoc** coordonatele polare ale punctului, dacă se cunosc coordonatele lui în raport cu sistemul rectangular cartezian introdus în modul arătat mai sus.

> [!warning] De ce manualul dă **două** formule pentru unghi, nu una
> Ar fi fost mai scurt să se scrie $\operatorname{tg}\varphi = y/x$. Ar fi fost însă **insuficient**: tangenta are perioada $\pi$, deci nu distinge un punct de simetricul lui față de origine. Punctele $(1;\ 1)$ și $(-1;\ -1)$ au aceeași tangentă, dar unghiuri polare $\pi/4$ și $5\pi/4$.
>
> Perechea $(\cos\varphi,\ \sin\varphi)$ determină însă unghiul **fără ambiguitate** pe $[0;\ 2\pi)$: cosinusul alege între stânga și dreapta, sinusul alege între sus și jos — împreună aleg cadranul.
>
> *Exemplu.* $M(-1;\ -1)$: $r = \sqrt 2$, $\cos\varphi = -1/\sqrt 2$, $\sin\varphi = -1/\sqrt 2$ ⇒ ambele negative ⇒ cadranul III ⇒ $\varphi = 5\pi/4$. Cu tangenta singură ați fi obținut $\pi/4$, adică punctul greșit.

> [!warning] Cazul $r = 0$
> Formulele de la b) au $r$ la numitor. Pentru polul $O$ avem $r = 0$ și ele își pierd sensul — ceea ce era de așteptat: unghiul polar al polului nici nu există. De aceea scrierea $r > 0$ de la punctul a) trebuie citită ca „pentru orice punct diferit de pol".

> [!check] Dicționarul complet
> | De la | La | Formule | Atenție la |
> |---|---|---|---|
> | $(r;\ \varphi)$ | $(x;\ y)$ | $x = r\cos\varphi$, $y = r\sin\varphi$ | nimic — trecerea e directă |
> | $(x;\ y)$ | $(r;\ \varphi)$ | $r = \sqrt{x^2+y^2}$; $\cos\varphi = x/r$, $\sin\varphi = y/r$ | cadranul; cazul $r = 0$ |

## 3. Exemplul 12.1 — distanța dintre două puncte date polar

> [!example] Enunț
> În sistemul polar de coordonate sunt date punctele $A\left(5;\ \dfrac{\pi}{4}\right)$ și $B\left(8;\ \dfrac{\pi}{3}\right)$. Calculați distanța dintre punctele date.

**Rezolvare.** Vom aplica formulele $x = r\cos\varphi$, $y = r\sin\varphi$. Atunci

$$
\lvert AB\rvert = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} = \sqrt{(r_2\cos\varphi_2 - r_1\cos\varphi_1)^2 + (r_2\sin\varphi_2 - r_1\sin\varphi_1)^2} =
$$

$$
= \sqrt{\left(8\cos\frac{\pi}{3} - 5\cos\frac{\pi}{4}\right)^2 + \left(8\sin\frac{\pi}{3} - 5\sin\frac{\pi}{4}\right)^2} = \sqrt{\left(8\cdot\frac{1}{2} - 5\cdot\frac{\sqrt2}{2}\right)^2 + \left(8\cdot\frac{\sqrt3}{2} - 5\cdot\frac{\sqrt2}{2}\right)^2} =
$$

$$
= \sqrt{\left(4 - \frac{5\sqrt2}{2}\right)^2 + \left(4\sqrt3 - \frac{5\sqrt2}{2}\right)^2} = \sqrt{\frac{57}{2} - 20\sqrt2 + \frac{27}{4}} = \sqrt{\frac{141}{4} - 20\sqrt2}.
$$

> [!example]- Pas cu pas — desfacerea calculului
> Manualul comprimă trei rânduri de calcul într-unul singur. Iată-le desfăcute.
>
> **Pasul 1 — treceți fiecare punct în carteziene.**
> $A$: $x_1 = 5\cos\frac{\pi}{4} = \frac{5\sqrt2}{2}$, $y_1 = 5\sin\frac{\pi}{4} = \frac{5\sqrt2}{2}$ (firesc — $\varphi = 45°$ dă $x = y$).
> $B$: $x_2 = 8\cos\frac{\pi}{3} = 4$, $y_2 = 8\sin\frac{\pi}{3} = 4\sqrt3$.
>
> **Pasul 2 — prima paranteză, la pătrat.**
> $$
> \left(4 - \tfrac{5\sqrt2}{2}\right)^2 = 16 - 2\cdot 4\cdot\tfrac{5\sqrt2}{2} + \tfrac{25\cdot 2}{4} = 16 - 20\sqrt2 + \tfrac{25}{2}.
> $$
> Deci $16 + 12{,}5 = 28{,}5 = \frac{57}{2}$, minus $20\sqrt2$. Aici apare termenul $\frac{57}{2} - 20\sqrt2$ din manual.
>
> **Pasul 3 — a doua paranteză.** Cei doi termeni au radicali **diferiți** ($\sqrt3$ și $\sqrt2$), deci nu se poate da factor comun; se ridică direct la pătrat:
> $$
> \left(4\sqrt3 - \tfrac{5\sqrt2}{2}\right)^2 = 48 - 2\cdot 4\sqrt3\cdot\tfrac{5\sqrt2}{2} + \tfrac{25}{2} = 48 - 20\sqrt6 + 12{,}5 = \tfrac{121}{2} - 20\sqrt6.
> $$
>
> **Pasul 4 — adunați.** $\frac{57}{2} + \frac{121}{2} = 89$, iar termenii cu radical rămân separați:
> $$
> \lvert AB\rvert = \sqrt{89 - 20\sqrt2 - 20\sqrt6}.
> $$
>
> **Pasul 5 — valoarea numerică.** $20\sqrt2 \approx 28{,}284$, $20\sqrt6 \approx 48{,}990$, deci
> $$
> \lvert AB\rvert \approx \sqrt{89 - 77{,}274} = \sqrt{11{,}726} \approx 3{,}42.
> $$
> Plauzibil: $A$ și $B$ sunt la $5$ și $8$ unități de pol, pe direcții apropiate ($45°$ și $60°$), deci distanța dintre ele trebuie să fie ceva mai mare decât diferența razelor, $8 - 5 = 3$. ✓
>
> **Ce diferă de manual:** vezi avertismentul de mai jos — manualul obține $\sqrt{\frac{141}{4} - 20\sqrt2} \approx 2{,}64$, valoare care ar fi **mai mică** decât diferența razelor, deci imposibilă.

> [!warning] Eroare de tipar în exemplul 12.1
> La rândul al doilea al calculului, manualul scrie în a doua paranteză $8\sin\frac{\pi}{3} - 5\sin\frac{\pi}{4} = 4\sqrt3 - \frac{5\sqrt2}{2}$, dar în rândul următor tratează termenul ca și cum ar fi $4\sqrt3 - \frac{5\sqrt3}{2}$ (numai așa se obține $\frac{27}{4}$). Valoarea corectă, cu $\sin\frac{\pi}{4} = \frac{\sqrt2}{2}$, este:
> $$
> \left(4\sqrt3 - \frac{5\sqrt2}{2}\right)^2 = 48 - 20\sqrt6 + \frac{25}{2} = \frac{121}{2} - 20\sqrt6.
> $$
> Adunând cu prima paranteză, $\frac{57}{2} - 20\sqrt2$, distanța corectă este
> $$
> \lvert AB\rvert = \sqrt{89 - 20\sqrt2 - 20\sqrt6} \approx \sqrt{89 - 28{,}284 - 48{,}990} = \sqrt{11{,}726} \approx 3{,}42.
> $$
>
> **Verificare independentă, prin teorema cosinusului.** În triunghiul $OAB$: $OA = 5$, $OB = 8$, iar unghiul dintre ele este $\frac{\pi}{3} - \frac{\pi}{4} = \frac{\pi}{12} = 15°$. Atunci
> $$
> AB^2 = 25 + 64 - 2\cdot 5\cdot 8\cos 15° = 89 - 80\cos 15°.
> $$
> Cum $\cos 15° = \frac{\sqrt6+\sqrt2}{4}$, avem $80\cos 15° = 20(\sqrt6+\sqrt2) = 20\sqrt6 + 20\sqrt2$ — **exact** rezultatul de mai sus. ✓ Numeric: $89 - 80\cdot 0{,}96593 = 11{,}726$, deci $AB \approx 3{,}42$.

> [!info]- Completare — formula directă a distanței în coordonate polare
> Calculul de mai sus, făcut cu litere, dă o formulă care merită reținută:
> $$
> \rho(A,B) = \sqrt{r_1^2 + r_2^2 - 2r_1r_2\cos(\varphi_2 - \varphi_1)}.
> $$
>
> **De unde vine.** Este **teorema cosinusului** în triunghiul $OAB$: laturile $OA = r_1$ și $OB = r_2$, iar unghiul dintre ele este chiar diferența unghiurilor polare, $\varphi_2 - \varphi_1$.
>
> **Verificare pe exemplul 12.1.** $r_1 = 5$, $r_2 = 8$, $\varphi_2 - \varphi_1 = \frac{\pi}{12}$:
> $$
> \rho = \sqrt{25 + 64 - 80\cos 15°} \approx 3{,}42. ✓
> $$
>
> Folosind-o, exemplul se rezolvă într-un singur rând, fără trecerea prin coordonate carteziene.

## Întrebări de control

1. De ce nu este suficientă formula $\operatorname{tg}\varphi = y/x$ pentru a determina unghiul polar?
2. Treceți punctul $M(0;\ -4)$ în coordonate polare. Ce valoare are $\varphi$?
3. Ce ecuație are, în coordonate polare, cercul de rază $R$ cu centrul în pol? Dar în coordonate carteziene?
4. Arătați că formula $\rho(A,B) = \sqrt{r_1^2+r_2^2-2r_1r_2\cos(\varphi_2-\varphi_1)}$ se reduce la $\lvert r_2 - r_1\rvert$ atunci când $\varphi_1 = \varphi_2$. De ce era de așteptat?
5. Ce se întâmplă cu formulele de la punctul b) dacă punctul dat este chiar polul?

## Legături

- Anterior: [[Reperul polar. Coordonate polare]]
- Continuare: [[Unghiul dintre doi vectori. Perpendicularitate]]
- Se sprijină pe: [[Sistemul rectangular cartezian. Coordonatele și modulul unui vector]], [[Distanța dintre două puncte]]
- Concepte: [[Coordonate polare]], [[Distanța dintre două puncte (formulă)]]
