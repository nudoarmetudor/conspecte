---
curs: geometrie-analitica
title: "Segmente orientate. Segmente echipolente"
capitol: 01 — Paralelismul dreptelor, semidreptelor și planelor
tip: lecție
nr: 4
status: complet
tags:
  - geometrie-analitică
  - segment-orientat
  - echipolență
---

## 1. Segmentul orientat

> [!abstract] Definiție
> Un [[Segment|segment]] se numește **orientat** dacă se ia în considerare ordinea scrierii extremităților lui.

Fie un segment cu extremitățile în punctele $A$ și $B$. Dacă $A$ este *prima* extremitate, iar $B$ — *a doua*, atunci:

- $A$ se numește **originea** segmentului orientat;
- $B$ se numește **extremitatea** segmentului orientat.

Segmentul orientat $[AB]$ se notează $\overline{AB}$, iar pe desen se reprezintă printr-o săgeată îndreptată spre extremitate.

![figură](/geometrie-analitica/02%20Segmente%20orientate.%20Echipolen%C8%9B%C4%83/Figuri/fig-segment-orientat.svg)
*fig. 1 — segmentul orientat $\overline{AB}$ și opusul său $\overline{BA}$*

### Segmentul orientat nul

Fiecare punct poate fi considerat un caz particular de segment orientat, la care originea coincide cu extremitatea. Un astfel de segment se numește **segment orientat nul** și se notează $\overline{AA}$.

### Lungimea

Prin **lungimea** segmentului orientat $\overline{AB}$ înțelegem lungimea segmentului obișnuit $[AB]$; se notează $|\overline{AB}|$ sau $AB$.

$$
|\overline{AA}| = 0
$$

### Segmente orientate opuse

Ca mulțimi de puncte, $[AB]$ și $[BA]$ reprezintă unul și același segment. Ca segmente **orientate**, însă, $\overline{AB}$ și $\overline{BA}$ sunt două segmente **diferite**: fiecare se numește **opusul** celuilalt. Segmentul orientat nul se consideră opus lui însuși.

## 2. Orientarea segmentelor orientate

> [!abstract] Definiție
> Segmentele orientate nenule $\overline{AB}$ și $\overline{CD}$ se numesc **la fel orientate** (respectiv **opus orientate**) dacă semidreptele $[AB)$ și $[CD)$ sunt la fel orientate (respectiv opus orientate).
> Se notează $\overline{AB} \uparrow\uparrow \overline{CD}$, respectiv $\overline{AB} \uparrow\downarrow \overline{CD}$.

Un segment orientat **nenul** $\overline{AB}$ determină o [[Direcție|direcție]] — și anume direcția căreia îi aparține semidreapta $[AB)$. Segmentul orientat **nul nu determină nicio direcție**.

> [!check] Lacună rezolvată (confirmată în notițele §3)
> Propoziția neterminată „Vom considera … ." din notițe fixa o convenție. Ea a fost confirmată în notițele §3, unde se scrie explicit
> $$
> \vec{0} \uparrow\uparrow \vec{a} \quad \text{pentru orice vector } \vec{a}
> $$
> Așadar: **elementul nul se consideră la fel orientat cu orice element**. Este o convenție de **comoditate**: permite enunțuri fără excepții, de exemplu definiția 5.1 ($\alpha\vec{a} \uparrow\uparrow \vec{a} \iff \alpha \ge 0$, inclusiv pentru $\alpha = 0$).
>
> **Atenție:** convenția *nu* face coorientarea tranzitivă — dimpotrivă, prin elementul nul tranzitivitatea se pierde: $\vec{a} \uparrow\uparrow \vec{0}$ și $\vec{0} \uparrow\uparrow -\vec{a}$, dar $\vec{a} \uparrow\downarrow -\vec{a}$. Tranzitivitatea coorientării se folosește numai pentru elemente **nenule**. Echipolența rămâne o relație de echivalență: un segment nul este echipolent doar cu segmente nule (lungimea $0$), deci nu „leagă" niciodată segmente nenule între ele.
> Vezi [[Coliniaritatea și orientarea vectorilor#3. Vectori la fel orientați și opus orientați|orientarea vectorilor]].

## 3. Echipolența

> [!abstract] Definiția 1
> Segmentele orientate $\overline{AB}$ și $\overline{CD}$ se numesc **echipolente** dacă sunt la fel orientate și au lungimi egale.
> Se notează $\overline{AB} \overset{\omega}{=} \overline{CD}$.

Prin urmare, echipolența cere **două** condiții simultan:

$$
\overline{AB} \overset{\omega}{=} \overline{CD} \iff \begin{cases} \overline{AB} \uparrow\uparrow \overline{CD} & \text{(aceeași direcție și sens)} \ |\overline{AB}| = |\overline{CD}| & \text{(aceeași lungime)} \end{cases}
$$

Orice două segmente orientate nule se consideră echipolente între ele.

### Exemplu

În figura de mai jos este reprezentat pătratul $ABCD$, unde punctul $E$ este mijlocul laturii $AD$.

![[fig-patrat-echipolenta.png]]
*fig. 2 — pătratul $ABCD$ cu $E$ mijlocul laturii $[AD]$*

| Perechea | Lungime | Direcție și sens | Echipolente? |
|---|---|---|---|
| $\overline{AB}$ și $\overline{DC}$ | egale | la fel orientate | **da** |
| $\overline{AB}$ și $\overline{CD}$ | egale | opus orientate | nu |
| $\overline{BC}$ și $\overline{AE}$ | diferite | la fel orientate | nu |

Exemplul arată că fiecare dintre cele două condiții din definiție este necesară, dar niciuna singură nu este suficientă.

### Criteriul de echipolență

> [!check] Criteriu
> Segmentele orientate $\overline{AB}$ și $\overline{CD}$ sunt echipolente **dacă și numai dacă** mijloacele segmentelor $[AD]$ și $[BC]$ coincid.

> [!info]- Completare — de ce funcționează criteriul
> Dacă $A$, $B$, $C$, $D$ nu sunt coliniare, $\overline{AB} \overset{\omega}{=} \overline{CD}$ înseamnă că $[AB]$ și $[CD]$ sunt paralele, egale și la fel orientate, adică patrulaterul $ABDC$ (vârfurile luate în această ordine) este un **paralelogram**. Diagonalele lui sunt tocmai $[AD]$ și $[BC]$, iar diagonalele unui paralelogram se înjumătățesc reciproc — deci au același mijloc. Reciproc, dacă $[AD]$ și $[BC]$ au același mijloc, $ABDC$ este paralelogram, deci $\overline{AB} \overset{\omega}{=} \overline{CD}$.
>
> Atenție la ordinea literelor: se compară mijloacele „încrucișat" — origine cu extremitate: $[A\,D]$ și $[B\,C]$.
>
> Valoarea criteriului este că înlocuiește o verificare geometrică (direcție + sens + lungime) cu una **calculabilă**: în coordonate, condiția devine $\frac{A+D}{2} = \frac{B+C}{2}$, adică $D - C = B - A$.

![figură](/geometrie-analitica/02%20Segmente%20orientate.%20Echipolen%C8%9B%C4%83/Figuri/fig-t-criteriu-echipolenta.svg)
*fig. T1 — criteriul de echipolență: diagonalele $[AD]$ și $[BC]$ au același mijloc $M$*

> [!example]- Cum se citește figura — criteriul de echipolență
> **Pasul 1 — datele.** Sus, $\overline{AB}$ (albastru) și $\overline{CD}$ (portocaliu) sunt echipolente: paralele, de aceeași lungime, cu săgețile în același sens.
>
> **Pasul 2 — completăm patrulaterul.** Liniile gri punctate $[AC]$ și $[BD]$ închid patrulaterul $ABDC$ — citit în această ordine, **nu** $ABCD$. Laturile lui opuse $[AB]$ și $[CD]$ sunt paralele și egale, deci $ABDC$ e paralelogram.
>
> **Pasul 3 — diagonalele (violet punctat).** Diagonalele lui $ABDC$ sunt $[AD]$ și $[BC]$ — fiecare unește originea unui segment cu extremitatea celuilalt. Liniuța simplă arată $AM = MD$, cea dublă $BM = MC$: $M$ este mijlocul ambelor.
>
> **Pasul 4 — cazul coliniar (jos).** Când cele patru puncte sunt pe o dreaptă nu există paralelogram, dar regula rămâne: parantezele violet $[AD]$ și $[BC]$ au același mijloc $M$ (linia verticală punctată).
>
> **Pasul 5 — reciproca.** Citiți figura de sus invers: dacă știți doar că $[AD]$ și $[BC]$ se înjumătățesc în $M$, patrulaterul $ABDC$ e paralelogram, deci $\overline{AB} \overset{\omega}{=} \overline{CD}$.
>
> **Pe ce se bazează:** [[Echipolență|definiția echipolenței]] (pasul 1); o pereche de laturi opuse paralele și egale ⇒ paralelogram (pasul 2); diagonalele unui paralelogram se înjumătățesc, și reciproc (pașii 3 și 5); [[Orientarea semidreptelor. Direcție#1. Semidrepte coorientate|coorientarea]] — de ce contează sensul săgeților.
>
> **Ce să verificați singuri pe figură:** (1) pe dreapta de jos, cu $A = 0$, $B = 3$, $C = 5$, $D = 8$: mijlocul lui $[AD]$ este $4$, mijlocul lui $[BC]$ este tot $4$; (2) întoarceți în gând săgeata portocalie ($\overline{DC}$ în loc de $\overline{CD}$): criteriul ar cere atunci mijloacele lui $[AC]$ și $[BD]$, care în figură sunt laturi opuse și **nu** au același mijloc.

## 4. Echipolența este o relație de echivalență

Relația de echipolență satisface următoarele condiții:

1. **Reflexivitate**: $\overline{AB} \overset{\omega}{=} \overline{AB}$, pentru orice segment orientat $\overline{AB}$;
2. **Simetrie**: dacă $\overline{AB} \overset{\omega}{=} \overline{CD}$, atunci $\overline{CD} \overset{\omega}{=} \overline{AB}$;
3. **Tranzitivitate**: dacă $\overline{AB} \overset{\omega}{=} \overline{CD}$ și $\overline{CD} \overset{\omega}{=} \overline{EF}$, atunci $\overline{AB} \overset{\omega}{=} \overline{EF}$.

> [!tip] Concluzie
> Relația de echipolență este o **relație de echivalență** pe mulțimea tuturor segmentelor orientate ale planului (respectiv ale spațiului).

![figură](/geometrie-analitica/02%20Segmente%20orientate.%20Echipolen%C8%9B%C4%83/Figuri/fig-t-echipolenta-tranzitivitate.svg)
*fig. T2 — tranzitivitatea echipolenței, prin două paralelograme*

> [!example]- Cum se citește figura — tranzitivitatea echipolenței
> **Pasul 1 — ipoteza 1.** $\overline{AB}$ (albastru) și $\overline{CD}$ (portocaliu) sunt echipolente; liniile gri $[AC]$ și $[BD]$ închid paralelogramul $ABDC$.
>
> **Pasul 2 — ipoteza 2.** $\overline{CD}$ și $\overline{EF}$ (violet) sunt echipolente; liniile gri $[CE]$ și $[DF]$ închid paralelogramul $CDFE$. Segmentul $\overline{CD}$ este „puntea” comună.
>
> **Pasul 3 — ce se transmite.** Orientarea: $\overline{AB} \uparrow\uparrow \overline{CD}$ și $\overline{CD} \uparrow\uparrow \overline{EF}$, iar coorientarea e tranzitivă, deci $\overline{AB} \uparrow\uparrow \overline{EF}$. Lungimea: $|\overline{AB}| = |\overline{CD}| = |\overline{EF}|$.
>
> **Pasul 4 — concluzia (violet punctat).** $[AE]$ și $[BF]$ închid un al treilea paralelogram, $ABFE$: $\overline{AB} \overset{\omega}{=} \overline{EF}$, deși cele două segmente nu au fost comparate direct.
>
> **Pe ce se bazează:** [[Echipolență|definiția echipolenței]]; tranzitivitatea coorientării ([[Orientarea semidreptelor. Direcție]] și completarea „proprietăți folosite curent” de la [[Paralelismul dreptelor, semidreptelor și planelor#4. Paralelismul a două plane|paralelism]]); tranzitivitatea egalității numerelor, pentru lungimi.
>
> **Ce să verificați singuri pe figură:** (1) cu o riglă: cele trei săgeți sunt paralele și au aceeași lungime; (2) reflexivitatea și simetria nu cer desen nou — paralelogramul $ABDC$ citit din $C$ este $CDBA$, adică $\overline{CD} \overset{\omega}{=} \overline{AB}$.

Această concluzie este pasul-cheie: ea permite împărțirea mulțimii segmentelor orientate în clase de echivalență, iar fiecare clasă va fi numită [[Vector|vector]].

## Întrebări de control

1. Prin ce diferă $\overline{AB}$ de $[AB]$?
2. De ce segmentul orientat nul nu determină nicio direcție?
3. Verificați cu ajutorul criteriului că $\overline{AB} \overset{\omega}{=} \overline{DC}$ în pătratul din fig. 2 (mijloacele căror segmente trebuie comparate?).
4. Ce s-ar strica dacă echipolența nu ar fi tranzitivă?

## Legături

- Anterior: [[Orientarea semidreptelor. Direcție]]
- Continuare: [[Vectori]]
- Concepte: [[Segment orientat]], [[Echipolență]]
