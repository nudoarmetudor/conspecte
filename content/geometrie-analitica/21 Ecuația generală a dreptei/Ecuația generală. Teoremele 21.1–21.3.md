---
curs: geometrie-analitica
title: "Ecuația generală. Teoremele 21.1–21.3"
capitol: 21 — Ecuația generală a dreptei
paragraf: §21
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 97–98 (PDF p. 48–49)
tags:
  - geometrie-analitică
  - dreapta
  - ecuația-generală
  - teoremă
---

> [!tip] Despre ce este paragraful
> §20 a dat cinci forme ale ecuației dreptei. §21 arată că, oricare ar fi forma, după ce trecem totul într-un membru obținem același tip de ecuație: **de gradul întâi în $x$ și $y$**. Și invers — orice ecuație de gradul întâi descrie o dreaptă.
>
> Aceasta e o **echivalență completă** între o clasă de figuri (dreptele) și o clasă de ecuații (cele de gradul întâi). Capitolul III va face același lucru pentru curbele de gradul doi: elipsa, hiperbola, parabola.

## 1. Teorema 21.1 — dreapta are o ecuație de gradul întâi

> [!tip] Teorema 21.1
> Ecuația dreptei într-un sistem afin de coordonate este o ecuație de gradul întâi:
> $$
> Ax + By + C = 0. \tag{1}
> $$

**Demonstrație.** Fie într-un sistem afin de coordonate dreapta $d$ se determină de punctul $M_0(x_0;\ y_0)$ și vectorul director $\vec a(a_1;\ a_2)$. Scriem ecuația canonică a acestei drepte sub forma (1″) din paragraful precedent: $a_2(x - x_0) - a_1(y - y_0) = 0$. Să notăm $a_2 = A$, $-a_1 = B$, $a_1y_0 - a_2x_0 = C$. Atunci ecuația dată are forma: $Ax + By + C = 0$. Această ecuație este de gradul întâi, deoarece vectorul director $\vec a\{a_1;\ a_2\}$ nu este nul și deci $A^2 + B^2 > 0$. Teorema 21.1 este demonstrată. $\blacksquare$

> [!example]- Pas cu pas — de unde vin $A$, $B$, $C$
> **Pasul 1 — desfaceți parantezele în (1″).** $a_2x - a_2x_0 - a_1y + a_1y_0 = 0$.
>
> **Pasul 2 — grupați după $x$, $y$ și termenul liber.** $\underbrace{a_2}_{A}\,x + \underbrace{(-a_1)}_{B}\,y + \underbrace{(a_1y_0 - a_2x_0)}_{C} = 0$.
>
> **Pasul 3 — de ce e „de gradul întâi".** O ecuație $Ax + By + C = 0$ e de gradul întâi doar dacă $x$ sau $y$ apare efectiv, adică $A$ și $B$ nu sunt **ambii** nuli: $A^2 + B^2 > 0$. Aici $A = a_2$, $B = -a_1$, iar $\vec a \ne \vec 0$ garantează că măcar una dintre coordonate e nenulă.
>
> **Exemplu.** Exemplul 20.1: $M_0(2; -5)$, $\vec a = \{3; -5\}$. $A = -5$, $B = -3$, $C = 3\cdot(-5) - (-5)\cdot 2 = -15 + 10 = -5$. Ecuația: $-5x - 3y - 5 = 0$, adică $5x + 3y + 5 = 0$ — același rezultat ca în §20. ✓

## 2. Teorema 21.2 — o ecuație de gradul întâi e o dreaptă

> [!tip] Teorema 21.2
> Orice ecuație de gradul întâi
> $$
> Ax + By + C = 0 \tag{2}
> $$
> într-un sistem afin de coordonate reprezintă (este) ecuația unei drepte. Vectorul $\vec a\{-B;\ A\}$ este un vector director al acestei drepte.

**Demonstrație.** Să presupunem că $x_0$, $y_0$ este o careva soluție a ecuației (2), adică

$$
Ax_0 + By_0 + C = 0. \tag{3}
$$

Ecuația (2) va fi echivalentă cu ecuația ce se obține dacă din ecuația (2) scădem parte cu parte egalitatea (3): $A(x - x_0) + B(y - y_0) = 0$ sau

$$
\begin{vmatrix} x - x_0 & y - y_0 \\ -B & A \end{vmatrix} = 0.
$$

Din cele demonstrate în teorema 21.1, ultima ecuație, cât și ecuația (2), este ecuația dreptei ce trece prin punctul $M_0(x_0;\ y_0)$ și are vectorul director $\vec a\{-B;\ A\}$. Teorema 21.2 este demonstrată. $\blacksquare$

> [!abstract] Ecuația generală
> Ecuația $Ax + By + C = 0$ se numește **ecuația generală a dreptei**.

![figură](/geometrie-analitica/21%20Ecua%C8%9Bia%20general%C4%83%20a%20dreptei/Figuri/fig-t-21-1-2.svg)
*fig. 1 — teoremele 21.1 și 21.2 ca dicționar în ambele sensuri: dreaptă (punct + direcție) ⇄ ecuație de gradul întâi*

> [!example]- Cum se citește figura — echivalența dreaptă ⇄ ecuație
> **Pasul 1 — caseta din stânga.** O dreaptă e dată geometric: un punct $M_0$ și un vector director $\vec a$.
>
> **Pasul 2 — săgeata de sus (T. 21.1).** Din punct și vector se calculează $A = a_2$, $B = -a_1$, $C = a_1y_0 - a_2x_0$.
>
> **Pasul 3 — caseta din dreapta.** O ecuație de gradul întâi, cu condiția $A^2 + B^2 > 0$.
>
> **Pasul 4 — săgeata de jos (T. 21.2).** Din ecuație se recuperează dreapta: vectorul director $\{-B;\ A\}$ și ca punct orice soluție a ecuației.
>
> **Pasul 5 — de ce contează ambele sensuri.** T. 21.1 singură ar spune doar „dreptele sunt *printre* soluțiile ecuațiilor de gradul întâi". T. 21.2 adaugă: „și nimic altceva". Împreună: **dreptele sunt exact mulțimile de soluții ale ecuațiilor de gradul întâi.**
>
> **Pe ce se bazează:** ecuația canonică (1″) din §20.
>
> **Ce să verificați singuri pe figură:** treceți de la $M_0$ și $\vec a$ la ecuație, apoi înapoi la vector. Obțineți $\{-B;\ A\} = \{a_1;\ a_2\}$ — exact vectorul de la care ați plecat.

> [!info]- Completare — soluția $(x_0; y_0)$ chiar există
> Demonstrația începe cu „să presupunem că $x_0, y_0$ este o careva soluție", fără să arate că există una. Există, și se poate scrie explicit, folosind $A^2 + B^2 > 0$:
> - dacă $B \ne 0$: $x_0 = 0$, $y_0 = -\dfrac{C}{B}$ (punctul unde dreapta taie axa $Oy$);
> - dacă $B = 0$, atunci $A \ne 0$ și $x_0 = -\dfrac{C}{A}$, $y_0 = 0$.
>
> Fără condiția $A^2 + B^2 > 0$ afirmația ar fi falsă: $0x + 0y + 5 = 0$ nu are nicio soluție, iar $0x + 0y + 0 = 0$ e satisfăcută de **tot** planul. Niciuna nu e o dreaptă. De aceea în „ecuație de gradul întâi" condiția e esențială.

> [!warning] Ecuația unei drepte nu e unică
> $Ax + By + C = 0$ și $\lambda Ax + \lambda By + \lambda C = 0$ (cu $\lambda \ne 0$) descriu **aceeași** dreaptă. Așadar $A$, $B$, $C$ sunt determinați doar până la un factor comun. *Exemplu:* $5x + 3y + 5 = 0$ și $-10x - 6y - 10 = 0$.

## 3. Teorema 21.3 — când e un vector paralel cu dreapta

> [!tip] Teorema 21.3
> Fie într-un sistem afin de coordonate este dată dreapta $d$ prin ecuația generală $Ax + By + C = 0$. Condiția
> $$
> a_1A + a_2B = 0 \tag{4}
> $$
> este necesară și suficientă pentru ca vectorul $\vec a\{a_1;\ a_2\}$ să fie paralel la dreapta $d$.

**Demonstrație.** Depunem vectorul $\vec a\{a_1;\ a_2\}$ din orice punct $M_0(x_0;\ y_0)$ al dreptei date. Atunci extremitatea $M$ a vectorului $\vec a$ va avea coordonatele $x_0 + a_1$, $y_0 + a_2$. Vectorul $\vec a\{a_1;\ a_2\}$ va fi paralel la dreapta dată atunci și numai atunci, când punctul $M$ va aparține dreptei date, adică atunci și numai atunci, când are loc egalitatea:

$$
A(x_0 + a_1) + B(y_0 + a_2) + C = 0 \quad\text{sau}\quad Aa_1 + Ba_2 = 0
$$

(deoarece $M_0$ aparține dreptei date, atunci $Ax_0 + By_0 + C = 0$). Teorema 21.3 este demonstrată. $\blacksquare$

![figură](/geometrie-analitica/21%20Ecua%C8%9Bia%20general%C4%83%20a%20dreptei/Figuri/fig-t-21-3.svg)
*fig. 2 — doi vectori depuși din același punct al dreptei: capătul celui paralel cade pe dreaptă, al celuilalt — nu*

> [!example]- Cum se citește figura — teorema 21.3
> **Pasul 1 — dreapta** $2x + 3y - 6 = 0$ (violet) și punctul ei $M_0(0;\ 2)$.
>
> **Pasul 2 — vectorul verde** $\vec a = \{3;\ -2\}$, depus din $M_0$. Capătul: $(0 + 3;\ 2 - 2) = (3;\ 0)$. În ecuație: $6 + 0 - 6 = 0$ — capătul e pe dreaptă, deci $\vec a$ e paralel cu $d$.
>
> **Pasul 3 — vectorul roșu** $\vec b = \{2;\ 1\}$. Capătul $(2;\ 3)$: $4 + 9 - 6 = 7 \ne 0$ — capătul iese de pe dreaptă.
>
> **Pasul 4 — de ce rămâne doar $Aa_1 + Ba_2$.** Introducând capătul $(x_0 + a_1;\ y_0 + a_2)$ în ecuație, partea $Ax_0 + By_0 + C$ e deja $0$ (fiindcă $M_0 \in d$). Rămâne exact $Aa_1 + Ba_2$: pentru $\vec a$, $2\cdot 3 + 3\cdot(-2) = 0$; pentru $\vec b$, $2\cdot 2 + 3\cdot 1 = 7$. Exact cât a ieșit mai sus.
>
> **Pe ce se bazează:** definiția vectorului director (un vector e paralel cu $d$ dacă, depus dintr-un punct al lui $d$, rămâne pe $d$) și faptul că $M_0 \in d$.
>
> **Ce să verificați singuri pe figură:** verificați că $\{-B;\ A\} = \{-3;\ 2\}$ satisface (4): $2\cdot(-3) + 3\cdot 2 = 0$ ✓ — vectorul director din teorema 21.2 trece testul, cum era de așteptat.

## 4. Vectorul normal

Dacă dreapta este determinată de ecuația $Ax + By + C = 0$ într-un **sistem rectangular cartezian** de coordonate, atunci vectorul $\vec n\{A;\ B\}$ este perpendicular pe dreapta $d$. Într-adevăr, $(\vec a, \vec n) = -B\cdot A + A\cdot B = 0$. Prin urmare, vectorul $\vec n\{A;\ B\}$ este perpendicular pe vectorul director $\vec a\{-B;\ A\}$ al dreptei $d$, dar atunci $\vec n \perp d$.

> [!abstract] Vectorul normal
> Vectorul $\vec n\{A;\ B\}$ se numește **vector normal al dreptei $d$**. Evident, există o infinitate de vectori normali ai dreptei.

![figură](/geometrie-analitica/21%20Ecua%C8%9Bia%20general%C4%83%20a%20dreptei/Figuri/fig-vector-normal.svg)
*fig. 3 — coeficienții lui $x$ și $y$ dau direct un vector perpendicular pe dreaptă*

> [!example]- Cum se citește figura — vectorul normal
> **Pasul 1 — dreapta** $2x + 3y - 6 = 0$ și punctul ei $M_0(1{,}5;\ 1)$.
>
> **Pasul 2 — vectorul director** (portocaliu) $\vec a = \{-B;\ A\} = \{-3;\ 2\}$ — din teorema 21.2. Stă pe dreaptă.
>
> **Pasul 3 — vectorul normal** (verde) $\vec n = \{A;\ B\} = \{2;\ 3\}$ — coeficienții citiți direct din ecuație.
>
> **Pasul 4 — unghiul drept.** $(\vec a, \vec n) = (-3)\cdot 2 + 2\cdot 3 = 0$ ⇒ $\vec a \perp \vec n$, după [[Proprietățile produsului scalar. Expresia în coordonate#3. Consecințele|consecința 13.6]].
>
> **Pe ce se bazează:** teorema 21.2 și criteriul de perpendicularitate în coordonate — care cere sistem **rectangular cartezian**.
>
> **Ce să verificați singuri pe figură:** din $\{A; B\}$ se obține $\{-B; A\}$ prin aceeași „regulă rapidă" ca în [[Vectori perpendiculari|§13]]: schimbi coordonatele între ele și schimbi semnul uneia.

> [!warning] Vectorul normal cere sistem rectangular cartezian
> Teorema 21.3 și vectorul director $\{-B;\ A\}$ sunt valabile în **orice** sistem afin. Vectorul normal **nu**: într-un sistem cu axe oblice, $\{A;\ B\}$ nu mai e perpendicular pe dreaptă, fiindcă formula produsului scalar $a_1b_1 + a_2b_2$ cere bază ortonormată.

> [!check] Rezumat — ce se citește dintr-o ecuație generală
> | Din $Ax + By + C = 0$ se citește | | Sistem |
> |---|---|---|
> | un vector director | $\vec a = \{-B;\ A\}$ | afin |
> | testul „$\vec v \parallel d$?" | $Av_1 + Bv_2 = 0$ | afin |
> | testul „$P \in d$?" | $Ax_P + By_P + C = 0$ | afin |
> | un vector normal | $\vec n = \{A;\ B\}$ | **rectangular cartezian** |
> | coeficientul unghiular (dacă $B \ne 0$) | $k = -\dfrac{A}{B}$ | afin |

## Întrebări de control

1. Scrieți ecuația generală a dreptei prin $M_0(-1;\ 4)$ cu vectorul director $\{2;\ 5\}$.
2. Un vector director și un vector normal pentru $4x - y + 7 = 0$.
3. Este vectorul $\{6;\ 4\}$ paralel cu dreapta $2x - 3y + 1 = 0$? Dar $\{3;\ 2\}$?
4. De ce $0\cdot x + 0\cdot y + 1 = 0$ nu reprezintă o dreaptă? Ce condiție din teorema 21.2 încalcă?
5. Arătați că $k = -A/B$ pornind de la vectorul director $\{-B;\ A\}$.

## Legături

- Anterior: [[Ecuația în segmente, cu coeficient unghiular și parametrică]]
- Continuare: [[Poziția dreptei față de axe]]
- Se sprijină pe: [[Ecuația canonică și ecuația dreptei prin două puncte]], [[Proprietățile produsului scalar. Expresia în coordonate]]
- Concepte: [[Ecuațiile dreptei]], [[Vector director]], [[Vector normal]]
