---
curs: geometrie-analitica
title: "Coordonatele vectorului în spațiul V₃"
capitol: 16 — Spațiul V3 și baza lui
paragraf: §16
tip: lecție
nr: 2
status: complet
sursa: manual „Geometrie analitică în plan", p. 71–73 (PDF p. 35–36)
tags:
  - geometrie-analitică
  - spațiu-vectorial
  - coordonate
  - teoremă
---

> [!tip] Despre ce este lecția
> Teorema 16.1 spune că fiecare vector din spațiu are o **singură** scriere $\alpha\vec a + \beta\vec b + \gamma\vec c$. Cele trei numere se numesc coordonate — și, ca în plan, cu ele operațiile cu vectori devin aritmetică: adunare coordonată cu coordonată, înmulțire coordonată cu coordonată. Tot ce s-a făcut în [[Operații cu vectori în coordonate|§10]] pentru două coordonate se repetă aici cu trei.

## 1. Coordonatele

Din cele stabilite mai sus rezultă că orice vector $\vec p \in V_3$ se descompune în mod unic după vectorii $\vec a$, $\vec b$ și $\vec c$ ai bazei acestui spațiu și are forma (1).

De obicei vectorii din bază se notează prin $\vec e_1$, $\vec e_2$ și $\vec e_3$. Pentru orice vector $\vec a \in V_3$ există așa numere $a_1$, $a_2$, $a_3$ încât:

$$
\vec a = a_1\vec e_1 + a_2\vec e_2 + a_3\vec e_3. \tag{4}
$$

> [!abstract] Definiția 16.4
> Numerele $a_1$, $a_2$, $a_3$ din descompunerea (4) se numesc **coordonate ale vectorului $\vec a$** în baza $\vec e_1$, $\vec e_2$ și $\vec e_3$. Numărul $a_1$ se numește **prima coordonată** a vectorului $\vec a$, $a_2$ — **a doua** și $a_3$ — **a treia coordonată** a vectorului $\vec a$.

Dacă vectorul $\vec a$ în baza dată are coordonatele $a_1$, $a_2$ și $a_3$, atunci scriem: $\vec a(a_1, a_2, a_3)$ sau $\vec a = \{a_1, a_2, a_3\}$. Uneori se indică și baza: $\vec a = \{a_1;\ a_2;\ a_3\}_{\{\vec e_1; \vec e_2; \vec e_3\}}$.

Vectorii din bază fiind aduși la originea comună $O$ formează împreună cu acest punct așa-numitul **reper afin**, care se notează $R = \{O, \vec e_1, \vec e_2, \vec e_3\}$.

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-descompunere-v3.svg)
*fig. 1 — coordonatele ca muchii ale unui paralelipiped: vectorul e diagonala lui*

> [!example]- Cum se citește figura — ce sunt coordonatele în spațiu
> **Pasul 1 — baza.** Cele trei săgeți groase din $O$ sunt $\vec e_1$ (albastru), $\vec e_2$ (portocaliu, „spre noi"), $\vec e_3$ (verde, în sus).
>
> **Pasul 2 — întindeți fiecare vector de bază.** Săgețile subțiri de aceeași culoare sunt $a_1\vec e_1$, $a_2\vec e_2$, $a_3\vec e_3$ — vectorii de bază înmulțiți cu coordonatele.
>
> **Pasul 3 — construiți paralelipipedul** cu aceste trei muchii din $O$ (liniile gri).
>
> **Pasul 4 — citiți vectorul.** Diagonala violet, din $O$ până în colțul opus, este $\vec a = a_1\vec e_1 + a_2\vec e_2 + a_3\vec e_3$ — [[Adunarea vectorilor. Regula triunghiului și a poligonului|regula poligonului]] pe trei muchii consecutive.
>
> **Pe ce se bazează:** teorema 16.1 și definiția 16.4.
>
> **Ce să verificați singuri pe figură:** urmăriți un drum pe muchii de la $O$ la capătul lui $\vec a$: întâi albastru, apoi orice muchie portocalie, apoi orice muchie verde. Ajungeți în același colț indiferent de ordinea în care mergeți — adunarea e comutativă.

> [!warning] Notații: virgulă sau punct și virgulă
> Manualul scrie coordonatele în spațiu fie cu virgulă, $\{a_1, a_2, a_3\}$, fie cu punct și virgulă, $\{a_1; a_2; a_3\}$. Sunt același lucru. În România și Republica Moldova virgula e separator zecimal, deci **punctul și virgula** evită confuzia: $\{1{,}5;\ 2;\ 0\}$ are clar trei coordonate, prima fiind $1{,}5$, pe când $\{1,5,2,0\}$ ar fi ambiguu.

## 2. Exemplu — vectorul $\vec{PB_1}$ în paralelipiped

În figura 60 din manual este dată imaginea unui paralelipiped și este indicată baza $\vec e_1$, $\vec e_2$, $\vec e_3$. Punctul $P$ este mijlocul muchiei $DD_1$. Să determinăm coordonatele vectorului $\vec{PB_1}$ în baza dată. Conform regulii poligonului:

$$
\vec{PB_1} = \vec{PD_1} + \vec{D_1A_1} + \vec{A_1B_1} = \frac12\vec e_3 + \vec e_1 - \vec e_2 = 1\cdot\vec e_1 + (-1)\cdot\vec e_2 + \frac12\vec e_3.
$$

Prin urmare, $\vec{PB_1} = \left\{1;\ -1;\ \dfrac12\right\}$. Evident că $\vec e_1(1; 0; 0)$, $\vec e_2(0; 1; 0)$ și $\vec e_3(0; 0; 1)$.

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-ex-pb1-paralelipiped.svg)
*fig. 2 (după fig. 60 din manual) — drumul pe muchii de la $P$ la $B_1$, cu fiecare bucată recunoscută ca multiplu al unui vector de bază*

> [!example]- Pas cu pas — alegerea drumului
> **Pasul 1 — identificați baza.** $\vec e_1 = \vec{CB}$, $\vec e_2 = \vec{CD}$, $\vec e_3 = \vec{CC_1}$: cele trei muchii care pleacă din $C$.
>
> **Pasul 2 — alegeți un drum pe muchii** de la $P$ la $B_1$, astfel încât fiecare bucată să fie paralelă cu un vector de bază: $P \to D_1 \to A_1 \to B_1$.
>
> **Pasul 3 — recunoașteți fiecare bucată.**
> - $\vec{PD_1}$: jumătate de muchie laterală, în sus ⇒ $\tfrac12\vec e_3$ (fiindcă $\vec{DD_1} = \vec{CC_1}$, muchii laterale ale paralelipipedului).
> - $\vec{D_1A_1} = \vec{DA} = \vec{CB} = \vec e_1$ (laturi opuse ale paralelogramului $ABCD$, același sens).
> - $\vec{A_1B_1} = \vec{AB} = \vec{DC} = -\vec{CD} = -\vec e_2$ (atenție la sens!).
>
> **Pasul 4 — adunați și ordonați după $\vec e_1, \vec e_2, \vec e_3$.** $\vec{PB_1} = \vec e_1 - \vec e_2 + \tfrac12\vec e_3 = \{1;\ -1;\ \tfrac12\}$.
>
> **Verificare independentă.** Pe un paralelipiped oblic oarecare (baze neortogonale), calculul numeric dă exact $\{1;\ -1;\ 0{,}5\}$. Rezultatul nu depinde de forma paralelipipedului — doar de ce muchii sunt vectorii de bază.
>
> **Capcana.** Pasul 3 cere atenție la sens: $\vec{A_1B_1}$ e **opus** lui $\vec e_2 = \vec{CD}$. Un semn greșit aici dă $\{1;\ 1;\ \tfrac12\}$.

> [!note] Greșeală de tipar
> La p. 71 manualul scrie „Punctul $P$ este **mujlocul** muchiei $DD_1$" — corect *mijlocul*.

## 3. Exemplul 16.5 — operații în coordonate

> [!example] Enunț
> În baza $\vec e_1$, $\vec e_2$, $\vec e_3$ sunt dați vectorii $\vec a(a_1, a_2, a_3)$ și $\vec b(b_1, b_2, b_3)$. De aflat coordonatele vectorului $\vec p = \alpha\vec a + \beta\vec b$, unde $\alpha$ și $\beta$ sunt numere reale date.

**Rezolvare.** Conform definiției coordonatelor vectorului, avem:

$$
\vec a = a_1\vec e_1 + a_2\vec e_2 + a_3\vec e_3, \qquad \vec b = b_1\vec e_1 + b_2\vec e_2 + b_3\vec e_3.
$$

Prin urmare,

$$
\alpha\vec a = \alpha a_1\vec e_1 + \alpha a_2\vec e_2 + \alpha a_3\vec e_3, \qquad \beta\vec b = \beta b_1\vec e_1 + \beta b_2\vec e_2 + \beta b_3\vec e_3.
$$

Adunând aceste egalități și folosind proprietățile adunării vectorilor și înmulțirii vectorului la un număr, obținem:

$$
\alpha\vec a + \beta\vec b = (\alpha a_1 + \beta b_1)\vec e_1 + (\alpha a_2 + \beta b_2)\vec e_2 + (\alpha a_3 + \beta b_3)\vec e_3.
$$

Așadar, vectorul $\vec p = \alpha\vec a + \beta\vec b$ are coordonatele:

$$
\vec p\,(\alpha a_1 + \beta b_1,\ \alpha a_2 + \beta b_2,\ \alpha a_3 + \beta b_3).
$$

Aplicând acest exemplu la vectorii $\vec a + \vec b$, $\vec a - \vec b$ și $\lambda\vec c$ ne convingem de justețea următoarelor afirmații:

> [!check] Proprietățile 1⁰–3⁰
> **1⁰.** Fiecare coordonată a **sumei** a doi vectori este egală cu suma coordonatelor corespunzătoare a vectorilor termeni.
>
> **2⁰.** Fiecare coordonată a **diferenței** a doi vectori este egală cu diferența coordonatelor corespunzătoare a acestor vectori.
>
> **3⁰.** La **înmulțirea vectorului la un număr** fiecare coordonată a acestui vector se înmulțește la acest număr.

> [!example]- Pas cu pas — cum se obțin 1⁰–3⁰ din exemplul 16.5
> Formula $\alpha\vec a + \beta\vec b \to (\alpha a_i + \beta b_i)$ conține toate trei proprietățile; trebuie doar aleși $\alpha$ și $\beta$:
>
> | Alegerea | Vectorul | Coordonatele |
> |---|---|---|
> | $\alpha = 1$, $\beta = 1$ | $\vec a + \vec b$ | $a_i + b_i$ — proprietatea 1⁰ |
> | $\alpha = 1$, $\beta = -1$ | $\vec a - \vec b$ | $a_i - b_i$ — proprietatea 2⁰ |
> | $\alpha = \lambda$, $\beta = 0$ | $\lambda\vec a$ | $\lambda a_i$ — proprietatea 3⁰ |
>
> **Exemplu numeric.** $\vec a = \{1;\ -2;\ 3\}$, $\vec b = \{4;\ 0;\ -1\}$: $\ 2\vec a - \vec b = \{2 - 4;\ -4 - 0;\ 6 + 1\} = \{-2;\ -4;\ 7\}$.
>
> **De ce merge.** Pasul-cheie e „regruparea după $\vec e_1, \vec e_2, \vec e_3$", permisă de comutativitatea și asociativitatea adunării și de distributivitatea înmulțirii cu un număr ([[Spațiul vectorial al vectorilor liberi|cele 8 proprietăți]]). Apoi unicitatea din teorema 16.1 garantează că coeficienții obținuți **sunt** coordonatele.

## 4. Teorema 16.6 — coliniaritatea în coordonate

> [!tip] Teorema 16.6
> Doi vectori $\vec a(a_1, a_2, a_3)$ și $\vec b(b_1, b_2, b_3)$ dați într-o bază $\vec e_1$, $\vec e_2$, $\vec e_3$ sunt coliniari atunci și numai atunci, când coordonatele lor corespunzătoare sunt **proporționale**.

**Demonstrație.** Dacă măcar unul din vectorii $\vec a$ sau $\vec b$ este nul, atunci teorema este evidentă. Să presupunem că $\vec a \ne \vec 0$ și $\vec b \ne \vec 0$.

Fie $\vec a \parallel \vec b$. Conform teoremei despre vectorii coliniari există $\lambda \in \mathbb R$, astfel încât $b_1 = \lambda a_1$, $b_2 = \lambda a_2$, $b_3 = \lambda a_3$, adică coordonatele corespunzătoare ale vectorilor $\vec a$ și $\vec b$ sunt proporționale.

Invers, fie coordonatele corespunzătoare a vectorilor $\vec a$ și $\vec b$ sunt proporționale: $b_1 = \lambda a_1$, $b_2 = \lambda a_2$, $b_3 = \lambda a_3$. Înmulțim ultimele egalități corespunzător la $\vec e_1$, $\vec e_2$, $\vec e_3$ și adunându-le parte cu parte obținem $\vec b = \lambda\vec a$, dar asta și înseamnă că vectorii $\vec a$ și $\vec b$ sunt coliniari. Teorema 16.6 este demonstrată. $\blacksquare$

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-t-16-6.svg)
*fig. 3 — doi vectori coliniari: paralelipipedul coordonatelor lui $\vec b$ e cel al lui $\vec a$, mărit la fel pe toate trei muchiile*

> [!example]- Cum se citește figura — teorema 16.6
> **Pasul 1 — cutia mică (albastră)** are muchiile $a_1\vec e_1$, $a_2\vec e_2$, $a_3\vec e_3$; diagonala ei e $\vec a$.
>
> **Pasul 2 — cutia mare (portocalie)** are muchiile $b_1\vec e_1$, $b_2\vec e_2$, $b_3\vec e_3$; diagonala ei e $\vec b$.
>
> **Pasul 3 — comparați muchiile.** Fiecare muchie a cutiei mari e de **1,8 ori** muchia corespunzătoare a celei mici: același factor pe toate trei direcțiile. Cutia mare e o copie mărită a celei mici, cu un colț comun în $O$.
>
> **Pasul 4 — comparați diagonalele.** Fiind copii la scară cu colț comun, diagonalele stau **pe aceeași dreaptă** — vectorii sunt coliniari, iar $\vec b = 1{,}8\,\vec a$.
>
> **Pasul 5 — și invers.** Dacă factorii ar fi diferiți pe muchii (de exemplu 1,8 pe una și 2 pe alta), cutia mare n-ar mai fi o copie la scară, iar diagonala ei ar ieși din dreapta lui $\vec a$.
>
> **Pe ce se bazează:** teorema 16.6 și proprietatea 3⁰.
>
> **Ce să verificați singuri pe figură:** ce se întâmplă cu cutia mare dacă factorul e negativ, de exemplu $-1$? (Răspuns: cutia se „răsfrânge" prin $O$, de partea cealaltă; diagonala rămâne pe aceeași dreaptă, dar în sens opus.)

> [!warning] „Proporționale" trebuie citit cu grijă când apar zerouri
> Scrierea $\dfrac{b_1}{a_1} = \dfrac{b_2}{a_2} = \dfrac{b_3}{a_3}$ cere toate $a_i \ne 0$. Formularea sigură e cea din demonstrație: **există $\lambda$ cu $b_i = \lambda a_i$ pentru toți $i$** (sau invers, $a_i = \lambda b_i$).
>
> *Exemplu.* $\vec a = \{2;\ 0;\ 1\}$, $\vec b = \{6;\ 0;\ 3\}$ sunt coliniari ($\vec b = 3\vec a$), deși raportul $\tfrac00$ nu are sens.
>
> Tot din acest motiv, afirmația manualului că teorema e „evidentă" dacă un vector e nul cere precizarea: $\vec 0 = 0\cdot\vec b$, deci coordonatele lui $\vec 0$ sunt proporționale cu ale oricărui vector — în sensul „unul e multiplu al celuilalt".

> [!check] În plan față de spațiu
> | | Plan (§10) | Spațiu (§16) |
> |---|---|---|
> | coordonatele | $\{a_1; a_2\}$ | $\{a_1; a_2; a_3\}$ |
> | suma, diferența, $\lambda\vec a$ | coordonată cu coordonată | coordonată cu coordonată |
> | coliniaritatea | $a_1b_2 - a_2b_1 = 0$ | $b_i = \lambda a_i$ pentru $i = 1, 2, 3$ |

## Întrebări de control

1. Ce coordonate are vectorul $\vec e_2$ în baza $\{\vec e_1, \vec e_2, \vec e_3\}$? Dar în baza $\{\vec e_2, \vec e_1, \vec e_3\}$?
2. În paralelipipedul din figura 2, calculați coordonatele lui $\vec{AC_1}$.
3. Sunt coliniari vectorii $\{2;\ -4;\ 6\}$ și $\{-1;\ 2;\ -3\}$? Dar $\{1;\ 2;\ 3\}$ și $\{2;\ 4;\ 5\}$?
4. De ce în plan condiția de coliniaritate e o singură egalitate, iar în spațiu sunt necesare două?
5. Calculați coordonatele lui $3\vec a - 2\vec b$ pentru $\vec a = \{1;\ 0;\ -1\}$ și $\vec b = \{2;\ 1;\ 1\}$.

## Legături

- Anterior: [[Baza spațiului V3. Teorema 16.1]]
- Continuare: [[Baza ortonormată în V3. Lungimea vectorului]]
- Se sprijină pe: [[Operații cu vectori în coordonate]], [[Raportul a doi vectori coliniari]], [[Spațiul vectorial al vectorilor liberi]]
- Concepte: [[Spațiul V3]], [[Bază]], [[Reper afin]], [[Vectori coliniari]]
