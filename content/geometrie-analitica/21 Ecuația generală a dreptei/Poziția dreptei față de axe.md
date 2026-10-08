---
curs: geometrie-analitica
title: "Poziția dreptei față de axe"
capitol: 21 — Ecuația generală a dreptei
paragraf: §21
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 98–99 (PDF p. 49)
tags:
  - geometrie-analitică
  - dreapta
  - ecuația-generală
---

> [!tip] Despre ce este lecția
> Dintr-o ecuație generală $Ax + By + C = 0$ se poate citi, fără niciun calcul, cum stă dreapta față de axe: e suficient să vedem **care coeficienți sunt zero**. Lecția face inventarul complet al cazurilor.

Fie într-un sistem afin de coordonate este dată dreapta $d$ prin ecuația generală (1). Să cercetăm particularitățile poziției dreptei $d$ în raport cu axele de coordonate, dacă unele din numerele $A$, $B$, $C$ sunt egale cu zero.

## I. $C = 0$ — dreapta trece prin origine

Dacă $C = 0$, atunci ecuației (1) satisfac coordonatele punctului $O(0;\ 0)$ și prin urmare, dreapta $d$ trece prin originea de coordonate.

Invers, dacă dreapta $d$ trece prin originea de coordonate, atunci $C = 0$. Așadar dreapta $d$ trece prin originea de coordonate atunci și numai atunci, când $C = 0$. În acest caz ecuația dreptei are forma: $Ax + By = 0$.

> [!example]- Pas cu pas — de ce și invers
> **„⇒".** Dacă $C = 0$: $A\cdot 0 + B\cdot 0 + 0 = 0$ ✓, deci $O \in d$.
>
> **„⇐".** Dacă $O \in d$, coordonatele lui $O$ satisfac ecuația: $A\cdot 0 + B\cdot 0 + C = 0$, deci $C = 0$.
>
> Ambele sensuri sunt o simplă înlocuire a lui $(0; 0)$ în ecuație.

## II. $A = 0$ — dreapta e paralelă cu axa $(Ox)$

Dacă $A = 0$, atunci vectorul director al dreptei $\vec a\{-B;\ 0\}$ este coliniar cu vectorul $\vec e_1$, adică vectorul $\vec e_1$ este paralel la dreapta $d$.

Invers, dacă $\vec a \parallel \vec e_1$, atunci

$$
\begin{vmatrix} -B & A \\ 1 & 0 \end{vmatrix} = 0 \quad\text{sau}\quad A = 0.
$$

În acest caz ecuația dreptei are forma: $By + C = 0$.

Dacă $A = 0$, $C \neq 0$, atunci dreapta (1) nu trece prin originea de coordonate și este paralelă la axa $(Ox)$. Dacă $A = C = 0$, atunci dreapta (1) are ecuația $y = 0$ și coincide cu axa $(Ox)$.

## III. $B = 0$ — dreapta e paralelă cu axa $(Oy)$

Analogic, vectorul $\vec e_2$ este paralel la dreapta (1) atunci și numai atunci, când $B = 0$. În acest caz ecuația dreptei are forma: $Ax + C = 0$. Dacă $B = 0$, $C \neq 0$, atunci dreapta (1) este paralelă la axa $(Oy)$, dacă însă $B = C = 0$, atunci dreapta (1) coincide cu axa $(Oy)$ și are ecuația $x = 0$.

![figură](/geometrie-analitica/21%20Ecua%C8%9Bia%20general%C4%83%20a%20dreptei/Figuri/fig-cazuri-particulare.svg)
*fig. 1 — inventarul cazurilor: fiecare coeficient nul „fixează" ceva în poziția dreptei*

> [!example]- Cum se citește figura — cazurile particulare
> **Rândul de sus — $C = 0$ sau $A = 0$.**
> - $C = 0$ (violet): dreapta trece prin $O$, în rest oarecare.
> - $A = 0$, $C \ne 0$ (albastru): orizontală, deasupra sau dedesubtul axei.
> - $A = C = 0$ (albastru): chiar axa $(Ox)$.
>
> **Rândul de jos — cazul general sau $B = 0$.**
> - general (gri): niciun coeficient nul — taie ambele axe, nu trece prin $O$.
> - $B = 0$, $C \ne 0$ (portocaliu): verticală.
> - $B = C = 0$ (portocaliu): chiar axa $(Oy)$.
>
> **Regula de memorat.** Coeficientul care lipsește arată **ce variabilă nu contează**. $A = 0$ ⇒ $x$ lipsește din ecuație ⇒ $x$ poate fi orice ⇒ dreapta e „lungă" în direcția lui $x$ ⇒ paralelă cu $(Ox)$.
>
> **Pe ce se bazează:** teorema 21.3 (cu $\vec e_1 = \{1; 0\}$ și $\vec e_2 = \{0; 1\}$) și înlocuirea lui $O(0; 0)$ în ecuație.
>
> **Ce să verificați singuri pe figură:** pot fi nuli simultan $A$ și $B$? (Răspuns: nu — atunci ecuația n-ar mai fi de gradul întâi și n-ar descrie o dreaptă; vezi [[Ecuația generală. Teoremele 21.1–21.3|teorema 21.2]].)

> [!example]- Pas cu pas — cazul II prin teorema 21.3
> Manualul folosește un determinant; teorema 21.3 dă același rezultat mai direct.
>
> **Pasul 1.** „Dreapta e paralelă cu $(Ox)$" înseamnă „$\vec e_1 = \{1;\ 0\}$ e paralel cu $d$".
>
> **Pasul 2.** Aplicăm condiția (4): $A\cdot 1 + B\cdot 0 = 0$, adică $A = 0$.
>
> **Pasul 3.** Analog pentru $\vec e_2 = \{0;\ 1\}$: $A\cdot 0 + B\cdot 1 = 0$, adică $B = 0$.
>
> Un singur rând de calcul pentru fiecare caz.

> [!check] Tabelul cazurilor
> | Coeficienți | Ecuația | Poziția dreptei |
> |---|---|---|
> | $A, B, C \ne 0$ | $Ax + By + C = 0$ | taie ambele axe, nu trece prin $O$ |
> | $C = 0$ | $Ax + By = 0$ | trece prin origine |
> | $A = 0$, $C \ne 0$ | $By + C = 0$ | paralelă cu $(Ox)$ |
> | $A = C = 0$ | $y = 0$ | axa $(Ox)$ |
> | $B = 0$, $C \ne 0$ | $Ax + C = 0$ | paralelă cu $(Oy)$ |
> | $B = C = 0$ | $x = 0$ | axa $(Oy)$ |

> [!note] Legătura cu ecuația în segmente
> Ecuația în segmente $\frac{x}{a} + \frac{y}{b} = 1$ există exact pentru dreptele din primul rând al tabelului (toți coeficienții nenuli). Atunci $a = -\frac{C}{A}$ și $b = -\frac{C}{B}$. Vezi [[Ecuația în segmente, cu coeficient unghiular și parametrică#1. 3⁰. Ecuația dreptei în segmente|§20, ecuația (3)]].

## Întrebări de control

1. Cum stă față de axe dreapta $3y - 7 = 0$? Dar $2x + 5y = 0$?
2. Scrieți ecuația dreptei paralele cu $(Oy)$ care trece prin $(-2;\ 5)$.
3. De ce o dreaptă nu poate avea simultan $A = 0$ și $B = 0$?
4. O dreaptă trece prin origine și e paralelă cu $(Ox)$. Care e ecuația ei?
5. Arătați că pentru $A, B, C$ nenuli, segmentele tăiate pe axe sunt $-C/A$ și $-C/B$.

## Legături

- Anterior: [[Ecuația generală. Teoremele 21.1–21.3]]
- Se sprijină pe: [[Ecuația generală. Teoremele 21.1–21.3]], [[Sistemul afin de coordonate. Axe și cadrane]]
- Concepte: [[Ecuațiile dreptei]], [[Vector director]]
