---
curs: geometrie-analitica
title: "Vectori"
capitol: 01 — Paralelismul dreptelor, semidreptelor și planelor
tip: lecție
nr: 5
status: complet
tags:
  - geometrie-analitică
  - vectori
---

## 1. Definiția vectorului

Fie $V$ mulțimea tuturor segmentelor orientate ale spațiului. Relația de [[Echipolență|echipolență]] definită pe această mulțime este o **relație de echivalență**. Prin urmare, în raport cu echipolența, totalitatea segmentelor orientate ale spațiului se împarte în **clase de echivalență**.

> [!abstract] Definiție
> Fiecare clasă de echivalență a mulțimii $V$ în raport cu relația de echipolență se numește **[[Vector|vector]]**.

Altfel spus: **vectorul este mulțimea tuturor segmentelor orientate echipolente între ele**.

> [!example]- Pas cu pas — de ce vectorul este o *mulțime*, nu o săgeată
> Ideea pare ciudată la prima citire. Iat-o desfăcută:
>
> **Pasul 1 — pornim de la un desen.** Desenați o săgeată de la $A$ la $B$. Este segmentul orientat $\overline{AB}$: un obiect concret, lipit de două puncte.
>
> **Pasul 2 — desenăm „aceeași" săgeată în altă parte.** Desenați $\overline{CD}$ cu aceeași lungime, aceeași direcție și același sens. Intuitiv spunem „e același vector", deși e alt desen. Formal: $\overline{AB} \overset{\omega}{=} \overline{CD}$.
>
> **Pasul 3 — strângem toate desenele posibile.** Repetând, obținem o **mulțime infinită** de săgeți, toate echipolente între ele. Nicio săgeată din ea nu e mai „specială" decât alta.
>
> **Pasul 4 — botezăm mulțimea.** Această mulțime *este* vectorul. Alegerea unei săgeți anume se numește **reprezentant** și e doar un mod de a arăta cu degetul spre clasă.
>
> **Pasul 5 — de ce e nevoie de atâta grijă.** Pentru că vrem ca $\vec{a} = \vec{b}$ să însemne ceva precis. Dacă vectorul ar fi „o săgeată", $\overline{AB}$ și $\overline{CD}$ ar fi obiecte diferite și n-am putea scrie egalitate. Definind vectorul ca **clasă**, egalitatea devine simpla identitate a două mulțimi.
>
> **Analogie.** Fracția $\tfrac{1}{2}$ nu este scrierea „1/2": este clasa $\{\tfrac{1}{2}, \tfrac{2}{4}, \tfrac{3}{6}, \dots\}$. Scrierea aleasă e un reprezentant. Exact aceeași construcție.

### Notare

| Modul de notare | Exemple |
|---|---|
| literă mică latină cu săgeată deasupra | $\vec{a},\ \vec{b},\ \vec{c}$ |
| două litere mari (originea și extremitatea) cu săgeată deasupra | $\vec{AB},\ \vec{CD},\ \vec{EF}$ |
| literă mică aldină (în tipar) | $\mathbf{a},\ \mathbf{b},\ \mathbf{c}$ |

> [!warning] Distincția $\overline{AB}$ vs. $\vec{AB}$
> - $\overline{AB}$ — **un** [[Segment orientat|segment orientat]] concret, legat de punctele $A$ și $B$;
> - $\vec{AB}$ — **vectorul** (întreaga clasă) determinat de acest segment orientat.
>
> Un vector are o infinitate de reprezentanți; segmentul orientat este unul singur.

### Vectorul nul

Dacă măcar unul dintre segmentele orientate ale clasei este nul, atunci **toate** segmentele orientate ale acelei clase sunt nule (echipolența păstrează lungimea). În acest caz vectorul se numește **vector nul** și se notează $\vec{0}$.

$$
|\vec{0}| = 0
$$

## 2. Reprezentantul unui vector

Fie $\vec{a}$ un vector dat, adică o clasă de echivalență în raport cu echipolența. Dacă $\overline{AB}$ este un **reprezentant** al acestei clase, atunci $\overline{AB}$ determină întreaga clasă, adică vectorul $\vec{a}$. În acest caz vectorul $\vec{a}$ se notează $\vec{AB}$ și se indică pe desen printr-un segment orientat $\overline{AB}$.

## 3. Egalitatea vectorilor

> [!abstract] Definiție
> Dacă mulțimea $\vec{a}$ coincide cu mulțimea $\vec{b}$ — adică $\vec{a}$ și $\vec{b}$ sunt același vector, doar notat diferit — spunem că vectorii $\vec{a}$ și $\vec{b}$ sunt **egali** și scriem $\vec{a} = \vec{b}$.

În particular, $\vec{AB} = \vec{CD}$ înseamnă că $\vec{AB}$ și $\vec{CD}$ reprezintă unul și același vector, ceea ce este echivalent cu $\overline{AB} \overset{\omega}{=} \overline{CD}$.

> [!tip] Afirmație (regula „schimbului de mijloc")
> Dacă $\vec{AB} = \vec{CD}$, atunci $\vec{AC} = \vec{BD}$.

> [!info]- Completare — justificare
> $\vec{AB} = \vec{CD}$ înseamnă $\overline{AB} \overset{\omega}{=} \overline{CD}$, adică (după criteriul de echipolență) mijloacele segmentelor $[AD]$ și $[BC]$ coincid. Dar exact aceeași condiție — mijloacele lui $[AD]$ și $[CB]$ coincid — este criteriul pentru $\overline{AC} \overset{\omega}{=} \overline{BD}$. Deci $\vec{AC} = \vec{BD}$.
>
> Geometric: $ABDC$ este un paralelogram, iar cele două egalități citesc **cele două perechi de laturi opuse** ale lui: $\vec{AB} = \vec{CD}$ este o pereche, $\vec{AC} = \vec{BD}$ este cealaltă. ($ACDB$ este același paralelogram, parcurs în sens invers — aceleași laturi, aceleași diagonale.)

![figură](/geometrie-analitica/03%20Vectori/Figuri/fig-t-schimbul-de-mijloc.svg)
*fig. T1 — regula „schimbului de mijloc”: aceleași diagonale dau două egalități*

> [!example]- Cum se citește figura — regula „schimbului de mijloc”
> **Pasul 1 — ipoteza (albastru).** $\vec{AB} = \vec{CD}$: cele două săgeți albastre sunt paralele, egale și la fel orientate.
>
> **Pasul 2 — punctul-pivot (portocaliu).** Diagonalele gri $[AD]$ și $[BC]$ se taie în $M$. Criteriul de echipolență traduce ipoteza în: „$M$ este mijlocul lui $[AD]$ și al lui $[BC]$”.
>
> **Pasul 3 — recitim aceleași diagonale.** Pentru perechea $\overline{AC}$, $\overline{BD}$ criteriul cere mijloacele lui $[AD]$ și $[CB]$ — adică **aceleași două diagonale**, care au deja mijlocul comun $M$.
>
> **Pasul 4 — concluzia (violet).** Deci $\vec{AC} = \vec{BD}$: săgețile violet sunt cealaltă pereche de laturi opuse a aceluiași paralelogram.
>
> **Pasul 5 — cazul coliniar (jos).** Cu $A$, $B$, $C$, $D$ la $0$, $2$, $4$, $6$: $\vec{AB} = \vec{CD}$ (lungime $2$) și $\vec{AC} = \vec{BD}$ (lungime $4$); mijlocul comun $M$ este la $3$.
>
> **Pe ce se bazează:** [[Segmente orientate. Segmente echipolente#Criteriul de echipolență|criteriul de echipolență]], aplicat o dată „înainte” (pasul 2) și o dată „înapoi” (pasul 3); [[#3. Egalitatea vectorilor|egalitatea vectorilor]] ⟺ echipolența reprezentanților.
>
> **Ce să verificați singuri pe figură:** (1) nu apare niciun segment nou — aceeași pereche de diagonale servește ambelor egalități; (2) urmăriți literele: în $\vec{AB} = \vec{CD}$ literele „din mijloc” $B$ și $C$ își schimbă locul și obținem $\vec{AC} = \vec{BD}$.

## 4. Existența și unicitatea reprezentantului cu origine dată

> [!tip] Teoremă
> Pentru orice vector $\vec{a}$ și orice punct $O$ din spațiu există un **unic** punct $M$ astfel încât $\vec{OM} = \vec{a}$.

**Construcția.** Fie $\vec{a}$ un vector arbitrar, iar $O$ un punct arbitrar al spațiului. Alegem un reprezentant $\overline{AB}$ al vectorului $\vec{a}$. Notăm cu $C$ mijlocul segmentului $[OB]$, iar cu $M$ — simetricul punctului $A$ în raport cu punctul $C$.

![figură](/geometrie-analitica/03%20Vectori/Figuri/fig-reprezentant-unic.svg)
*fig. 1 — construcția reprezentantului cu originea în $O$*

**Demonstrația.** Din construcție, $C$ este mijlocul segmentului $[AM]$ (simetria față de $C$) și, în același timp, mijlocul segmentului $[OB]$. Așadar mijloacele segmentelor $[AM]$ și $[BO]$ coincid, ceea ce, conform **criteriului de echipolență**, înseamnă

$$
\overline{AB} \overset{\omega}{=} \overline{OM}, \qquad \text{deci} \qquad \vec{OM} = \vec{AB} = \vec{a}.
$$

**Unicitatea.** Dacă ar exista două puncte $M$ și $M'$ cu $\vec{OM} = \vec{a}$ și $\vec{OM'} = \vec{a}$, atunci $\overline{OM} \overset{\omega}{=} \overline{OM'}$: cele două segmente orientate pornesc din același punct, au aceeași direcție, același sens și aceeași lungime, deci $M = M'$. $\blacksquare$

> [!example]- Cum se citește figura — teorema reprezentantului unic
> **Pasul 1 — datele.** Sus, reprezentantul ales $\overline{AB}$ (albastru) al vectorului $\vec{a}$; jos-stânga, punctul dat $O$.
>
> **Pasul 2 — primul mijloc (portocaliu).** Linia gri punctată $[OB]$ și mijlocul ei $C$ — singurul punct nou care se poate calcula direct din date.
>
> **Pasul 3 — simetria față de $C$.** A doua linie punctată pleacă din $A$, trece prin $C$ și continuă cu aceeași lungime până în $M$. Astfel $C$ este mijloc și pentru $[AM]$.
>
> **Pasul 4 — concluzia (albastru, jos).** Cele două linii punctate sunt diagonalele patrulaterului $ABMO$ și au mijlocul comun $C$. Criteriul de echipolență dă $\overline{AB} \overset{\omega}{=} \overline{OM}$: săgeata de jos este „copia” celei de sus, cu originea în $O$.
>
> **Pasul 5 — unicitatea.** Orice alt punct $M'$ cu $\vec{OM'} = \vec{a}$ ar fi pe aceeași semidreaptă din $O$ și la aceeași distanță de $O$ — deci chiar $M$.
>
> **Pe ce se bazează:** [[Segmente orientate. Segmente echipolente#Criteriul de echipolență|criteriul de echipolență]], cu mijloacele luate „încrucișat”: $[AM]$ și $[BO]$ (pașii 2–4); [[Echipolență|definiția echipolenței]] — aceeași direcție, același sens, aceeași lungime (pasul 5).
>
> **Ce să verificați singuri pe figură:** (1) măsurați $AC$ și $CM$, apoi $OC$ și $CB$: perechile sunt egale; (2) mutați în gând punctul $O$: $C$ și $M$ se mută odată cu el, dar săgeata $\overline{OM}$ rămâne paralelă și egală cu $\overline{AB}$.

> [!example]- Pas cu pas — cum s-a găsit construcția
> Construcția pare scoasă din pălărie. De fapt este *citită invers* din criteriul de echipolență.
>
> **Pasul 1 — ce vrem.** Vrem un punct $M$ cu $\overline{OM} \overset{\omega}{=} \overline{AB}$.
>
> **Pasul 2 — traducem cu criteriul.** [[Segmente orientate. Segmente echipolente#Criteriul de echipolență|Criteriul]] spune: $\overline{AB} \overset{\omega}{=} \overline{OM}$ $\iff$ mijloacele lui $[A M]$ și $[B O]$ coincid. (Atenție la încrucișare: origine cu extremitate.)
>
> **Pasul 3 — ce știm deja.** Punctele $A$, $B$, $O$ sunt date. Deci mijlocul lui $[BO]$ **îl putem calcula** — îl notăm $C$.
>
> **Pasul 4 — impunem condiția.** Condiția devine: „$C$ să fie și mijlocul lui $[AM]$". Dar $A$ e cunoscut și $C$ e cunoscut — deci $M$ este **simetricul lui $A$ față de $C$**. Așa apare construcția din enunț.
>
> **Pasul 5 — verificăm.** Prin construcție $C$ e mijloc și pentru $[AM]$, și pentru $[BO]$ ⇒ criteriul e satisfăcut ⇒ $\vec{OM} = \vec{a}$.
>
> **Morală.** Când o construcție pare arbitrară, întrebați-vă *ce condiție trebuie satisfăcută* și rezolvați-o ca pe o ecuație. Construcția e soluția.

> [!note] Consecință
> Vectorul poate fi „aplicat" în orice punct al spațiului: de aceea vectorii studiați aici se numesc **vectori liberi**. Această teoremă este ceea ce face posibile, mai departe, regula triunghiului și regula paralelogramului pentru adunarea vectorilor.

## 5. Mărimi asociate unui vector

- **Lungimea (modulul)** vectorului $\vec{a} = \vec{AB}$ este lungimea oricărui reprezentant al său: $|\vec{a}| = |\overline{AB}| = AB$. Definiția este corectă, pentru că toți reprezentanții au aceeași lungime.
- **Direcția** vectorului nenul este direcția comună a reprezentanților săi. Vectorul nul nu are direcție.

> [!note] Noțiunile care decurg imediat
> Fiecare are acum lecția ei, în acest paragraf sau în cele următoare:
> - **vectori coliniari** și orientarea lor → [[Coliniaritatea și orientarea vectorilor]]
> - **[[Vector opus|vectorul opus]]** și **[[Modulul vectorului|modulul]]** → [[Modulul vectorului. Vectorul opus]]
> - **vectori coplanari** → [[Vectori coplanari]] (§6)
> - **versor (vector unitar)** — vector de lungime $1$; nu apare încă în notițele de curs.

## Întrebări de control

1. Care este diferența dintre un segment orientat și un vector?
2. Câți reprezentanți are un vector? Câți dintre ei au originea într-un punct fixat $O$?
3. De ce vectorul nul nu determină o direcție?
4. Demonstrați afirmația: dacă $\vec{AB} = \vec{CD}$, atunci $\vec{AC} = \vec{BD}$.

## Legături

- Anterior: [[Segmente orientate. Segmente echipolente]]
- Continuare: [[Coliniaritatea și orientarea vectorilor]]
- Concepte: [[Vector]], [[Echipolență]], [[Direcție]], [[Vector liber]]
