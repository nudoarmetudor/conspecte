---
curs: geometrie-analitica
title: "Ecuația canonică și ecuația dreptei prin două puncte"
capitol: 20 — Diferite tipuri de ecuații ale dreptei
paragraf: §20
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 93–95 (PDF p. 46–47)
tags:
  - geometrie-analitică
  - dreapta
  - ecuația-dreptei
---

> [!tip] Despre ce este capitolul II
> Capitolul I a construit unelte: vectori, coordonate, coliniaritate, produs scalar. Capitolul II le folosește pentru primul obiect geometric adevărat: **dreapta**. Ideea centrală a geometriei analitice — *o figură devine o ecuație* — apare aici pentru prima dată în forma ei completă.
>
> Ce înseamnă „ecuația dreptei"? O relație între $x$ și $y$ pe care o satisfac coordonatele **tuturor** punctelor dreptei și **numai** ale lor. Totul se reduce la o singură idee din §10: **un punct $M$ e pe dreaptă exact când vectorul care îl leagă de un punct cunoscut al dreptei e paralel cu dreapta.**

## 1. Vectorul director

> [!abstract] Definiție
> Orice vector nenul $\vec a$ paralel la dreapta $d$ se numește **vector director al dreptei $d$**.

Evident, dreapta are o mulțime infinită de vectori directori, însă oricare doi din ei sunt coliniari (ca vectori paraleli la aceeași dreaptă).

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-vector-director.svg)
*fig. 1 — $\vec a$, $2\vec a$, $-\vec a$ sunt toți vectori directori ai lui $d$; vectorul roșu nu este*

> [!example]- Cum se citește figura — vectorul director
> **Pasul 1 — dreapta** gri $d$. Vectorii directori nu trebuie să stea *pe* dreaptă: sunt vectori liberi, pot fi desenați oriunde, important e să fie **paraleli** cu ea.
>
> **Pasul 2 — trei vectori directori.** $\vec a$ (albastru), $2\vec a$ (portocaliu) și $-\vec a$ (verde). Lungimi diferite, sensuri diferite, dar aceeași **direcție** — a dreptei.
>
> **Pasul 3 — un vector care nu e director.** Săgeata roșie are altă direcție: oricât am lungi-o sau scurta-o, n-ar deveni paralelă cu $d$.
>
> **Pe ce se bazează:** definiția vectorului director și [[Coliniaritatea și orientarea vectorilor|coliniaritatea]].
>
> **Ce să verificați singuri pe figură:** de ce vectorul nul e exclus din definiție? (Răspuns: e paralel cu orice dreaptă — prin convenție — deci n-ar spune nimic despre direcția lui $d$.)

Poziția dreptei în planul de coordonate este determinată pe deplin, dacă este dat **un punct al ei și un vector director**, sau **două puncte** ale dreptei. Se pune problema: de scris ecuația dreptei, dacă într-un sistem afin de coordonate este dat un punct al dreptei $M_0(x_0;\ y_0)$ și un vector director $\vec a(a_1;\ a_2)$ sau două puncte ale dreptei.

## 2. 1⁰. Ecuația dreptei ce trece prin punctul dat și are vectorul director dat

Fie în plan este introdus un sistem afin de coordonate $O\vec e_1\vec e_2$ în raport cu care este dat un punct $M_0(x_0;\ y_0)$ al dreptei $d$ și un vector director $\vec a\{a_1;\ a_2\}$ al dreptei $d$.

Să deducem ecuația dreptei $d$. Fie $M(x;\ y)$ un punct arbitrar al planului. Evident, punctul $M(x;\ y) \in d$ atunci și numai atunci, când vectorii $\vec{M_0M}$ și $\vec a$ sunt coliniari. Deoarece $\vec{M_0M} = \{x - x_0;\ y - y_0\}$, $\vec a = \{a_1;\ a_2\}$, înseamnă că punctul $M(x;\ y) \in d$ atunci și numai atunci, când

$$
\begin{vmatrix} x - x_0 & a_1 \\ y - y_0 & a_2 \end{vmatrix} = 0 \tag{1}
$$

sau

$$
\frac{x - x_0}{a_1} = \frac{y - y_0}{a_2}, \tag{1'}
$$

sau

$$
a_2(x - x_0) - a_1(y - y_0) = 0. \tag{1''}
$$

Dacă punctul $M$ aparține dreptei $d$, atunci coordonatele punctului $M$ satisfac ecuațiilor (1)–(1″), iar dacă punctul $M$ nu aparține dreptei $d$, atunci coordonatele punctului $M$ nu satisfac ecuațiilor (1)–(1″). Prin urmare, ecuațiile (1)–(1″) sunt ecuații ale dreptei $d$.

> [!abstract] Ecuațiile canonice
> Ecuațiile (1) și (1′) se numesc **ecuații canonice ale dreptei $d$**.

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-ecuatia-canonica.svg)
*fig. 2 (după fig. 75 din manual) — $M$ e pe dreaptă exact când $\vec{M_0M}$ e paralel cu $\vec a$*

> [!example]- Cum se citește figura — deducerea ecuației canonice
> **Pasul 1 — sistemul.** Axele sunt **oblice** ($\vec e_1$, $\vec e_2$ nu sunt perpendiculari). Ecuația canonică nu cere un sistem rectangular — se bazează doar pe coliniaritate, care are sens în orice sistem afin.
>
> **Pasul 2 — datele.** Punctul $M_0$ și vectorul director $\vec a$ (portocaliu), depus din $M_0$.
>
> **Pasul 3 — un punct al dreptei.** $M$ e pe $d$; săgeata violet $\vec{M_0M}$ e pe aceeași dreaptă cu $\vec a$, deci $\vec{M_0M} \parallel \vec a$.
>
> **Pasul 4 — un punct din afara dreptei.** $N$ nu e pe $d$; săgeata roșie $\vec{M_0N}$ iese din direcția lui $\vec a$, deci nu e paralelă cu el.
>
> **Pasul 5 — traduceți „paralel" în coordonate.** Doi vectori sunt coliniari exact când determinantul coordonatelor lor e nul ([[Operații cu vectori în coordonate#5⁰. Condiția de coliniaritate|§10, condiția 5⁰]]). Determinantul dintre $\vec{M_0M} = \{x - x_0;\ y - y_0\}$ și $\vec a = \{a_1;\ a_2\}$ este exact (1).
>
> **Pe ce se bazează:** [[Coordonatele punctului. Raza vectoare#5. Coordonatele vectorului determinat de două puncte|formula $\vec{M_1M_2} = \{x_2 - x_1;\ y_2 - y_1\}$]] și condiția de coliniaritate din §10.
>
> **Ce să verificați singuri pe figură:** luați $M = M_0$. Atunci $\vec{M_0M} = \vec 0$, determinantul e $0$ — punctul $M_0$ satisface ecuația, cum e firesc.

> [!warning] Forma (1′) cere $a_1 \ne 0$ și $a_2 \ne 0$
> Manualul scrie (1′) fără această condiție (o pune abia la (2′)). Dacă o coordonată a vectorului director e nulă, fracția nu are sens.
>
> *Exemplu.* $M_0(1; 2)$, $\vec a = \{0; 3\}$ — dreapta e paralelă cu $(Oy)$. Forma (1′) ar da $\frac{x-1}{0} = \frac{y-2}{3}$. Formele (1) și (1″) funcționează fără probleme: $3(x - 1) - 0\cdot(y - 2) = 0$, adică $x = 1$.
>
> Convenția uzuală: un numitor nul în (1′) înseamnă că **numărătorul** corespunzător e nul. Mai sigur e să folosiți (1″), care nu împarte la nimic.

> [!example]- Pas cu pas — de la (1) la (1′) și (1″)
> **Pasul 1 — dezvoltați determinantul (1).** $(x - x_0)a_2 - a_1(y - y_0) = 0$. Aceasta este deja (1″).
>
> **Pasul 2 — pentru (1′), mutați un termen.** $a_2(x - x_0) = a_1(y - y_0)$, apoi împărțiți la $a_1a_2$ (dacă ambele sunt nenule): $\dfrac{x - x_0}{a_1} = \dfrac{y - y_0}{a_2}$.
>
> **Ce exprimă (1′).** Proporționalitatea coordonatelor: $\vec{M_0M}$ e un multiplu al lui $\vec a$, cu același factor pe ambele coordonate.

## 3. Exemplul 20.1

> [!example] Enunț
> Să se scrie ecuația dreptei ce trece prin punctul $A(2;\ -5)$ și are vectorul director $\vec a\{3;\ -5\}$.

**Rezolvare.** Introducem coordonatele punctului $A$ și a vectorului director în (1), obținem:

$$
\frac{x - 2}{3} = \frac{y + 5}{-5}, \qquad -5x + 10 = 3y + 15 \qquad\text{sau}\qquad 5x + 3y + 5 = 0.
$$

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-ex201.svg)
*fig. 3 — dreapta $5x + 3y + 5 = 0$ într-un sistem rectangular; vectorul director e desenat de la $(-1; 0)$ până la $A$*

> [!example]- Pas cu pas — calculul și verificarea
> **Pasul 1 — „înmulțirea în cruce".** Din $\frac{x-2}{3} = \frac{y+5}{-5}$: $-5(x - 2) = 3(y + 5)$, adică $-5x + 10 = 3y + 15$.
>
> **Pasul 2 — totul într-un membru.** $-5x - 3y - 5 = 0$; înmulțind cu $-1$: $5x + 3y + 5 = 0$.
>
> **Pasul 3 — verificați punctul dat.** $A(2; -5)$: $10 - 15 + 5 = 0$ ✓.
>
> **Pasul 4 — verificați direcția.** Un al doilea punct: $A - \vec a = (2 - 3;\ -5 + 5) = (-1;\ 0)$. În ecuație: $-5 + 0 + 5 = 0$ ✓. Două puncte verificate determină dreapta, deci ecuația e corectă.
>
> **De reținut:** verificarea cu **două** puncte e completă; verificarea doar cu punctul dat nu ar prinde o greșeală de semn la vectorul director.

## 4. 2⁰. Ecuația dreptei ce trece prin două puncte

Fie în plan este dat un sistem afin de coordonate $O\vec e_1\vec e_2$ în raport cu care sunt date coordonatele a două puncte $M_1(x_1;\ y_1)$ și $M_2(x_2;\ y_2)$ ale dreptei $d$. În acest caz vectorul $\vec{M_1M_2}$ este un vector director al dreptei $d$. Deoarece $\vec{M_1M_2} = \{x_2 - x_1;\ y_2 - y_1\}$, atunci conform formulei (1), obținem:

$$
\begin{vmatrix} x - x_1 & x_2 - x_1 \\ y - y_1 & y_2 - y_1 \end{vmatrix} = 0. \tag{2}
$$

Dacă $x_2 - x_1 \ne 0$ și $y_2 - y_1 \ne 0$, atunci ecuația (2) poate fi scrisă sub forma:

$$
\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1}. \tag{2'}
$$

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-dreapta-doua-puncte.svg)
*fig. 4 (după fig. 76 din manual) — două puncte dau și un punct, și un vector director*

> [!example]- Cum se citește figura — ecuația prin două puncte
> **Pasul 1 — cele două puncte date**, $M_1$ și $M_2$.
>
> **Pasul 2 — vectorul director gratuit.** Săgeata portocalie $\vec{M_1M_2}$ e paralelă cu $d$ (stă chiar pe ea) — deci e un vector director.
>
> **Pasul 3 — reducerea la cazul 1⁰.** Avem acum un punct ($M_1$) și un vector director ($\vec{M_1M_2}$): ecuația (1) se aplică direct, cu $a_1 = x_2 - x_1$, $a_2 = y_2 - y_1$.
>
> **Pasul 4 — un punct oarecare.** $M$ (violet) e pe $d$ exact când $\vec{M_1M} \parallel \vec{M_1M_2}$.
>
> **Pe ce se bazează:** ecuația (1) și formula coordonatelor unui vector prin capetele lui.
>
> **Ce să verificați singuri pe figură:** în (2), puneți $M = M_2$. Cele două coloane ale determinantului devin egale, deci determinantul e $0$ — $M_2$ e pe dreaptă. ✓

## 5. Exemplul 20.2

> [!example] Enunț
> Scrieți ecuația dreptei ce trece prin punctele $A(2;\ -5)$ și $B(-3;\ 2)$.

**Rezolvare.** Din ecuația (2′) obținem:

$$
\frac{x - 2}{-3 - 2} = \frac{y + 5}{2 + 5} \qquad\text{sau}\qquad \frac{x - 2}{-5} = \frac{y + 5}{7}, \qquad 7x + 5y + 11 = 0.
$$

![figură](/geometrie-analitica/20%20Diferite%20tipuri%20de%20ecua%C8%9Bii%20ale%20dreptei/Figuri/fig-ex202.svg)
*fig. 5 — dreapta prin $A$ și $B$, cu vectorul director $\vec{AB} = \{-5;\ 7\}$*

> [!example]- Pas cu pas — calculul și verificarea
> **Pasul 1 — vectorul director.** $\vec{AB} = \{-3 - 2;\ 2 - (-5)\} = \{-5;\ 7\}$. Atenție la $2 - (-5) = 7$.
>
> **Pasul 2 — înmulțirea în cruce.** $7(x - 2) = -5(y + 5)$, adică $7x - 14 = -5y - 25$, adică $7x + 5y + 11 = 0$.
>
> **Pasul 3 — verificarea cu ambele puncte.** $A$: $14 - 25 + 11 = 0$ ✓. $B$: $-21 + 10 + 11 = 0$ ✓.

> [!check] Rezumat
> | Date | Ecuația | Forma cu fracții (dacă numitorii ≠ 0) |
> |---|---|---|
> | $M_0(x_0; y_0)$ și $\vec a\{a_1; a_2\}$ | $a_2(x - x_0) - a_1(y - y_0) = 0$ | $\dfrac{x - x_0}{a_1} = \dfrac{y - y_0}{a_2}$ |
> | $M_1(x_1; y_1)$ și $M_2(x_2; y_2)$ | determinantul (2) $= 0$ | $\dfrac{x - x_1}{x_2 - x_1} = \dfrac{y - y_1}{y_2 - y_1}$ |
>
> Ambele sunt valabile în **orice sistem afin** — nu cer axe perpendiculare.

## Întrebări de control

1. De ce o dreaptă are o infinitate de vectori directori? Ce au comun toți?
2. Scrieți ecuația dreptei prin $M_0(1;\ -1)$ cu vectorul director $\{0;\ 2\}$. De ce nu puteți folosi forma (1′)?
3. Aceeași dreaptă poate avea două ecuații canonice diferite? Dați un exemplu.
4. Verificați dacă punctul $C(7;\ -12)$ e pe dreapta din exemplul 20.2.
5. De ce ecuațiile din această lecție sunt valabile și într-un sistem de coordonate cu axe oblice?

## Legături

- Anterior: [[Baza ortonormată în V3. Lungimea vectorului]] (§17–§19 — probleme — nu sunt conspectate)
- Continuare: [[Ecuația în segmente, cu coeficient unghiular și parametrică]]
- Se sprijină pe: [[Operații cu vectori în coordonate]], [[Coordonatele punctului. Raza vectoare]]
- Concepte: [[Vector director]], [[Ecuațiile dreptei]], [[Dreaptă]]
