---
curs: geometrie-analitica
title: "Proprietățile înmulțirii vectorului cu un număr"
capitol: 05 — Produsul vectorului la un număr
paragraf: §5
tip: lecție
nr: 2
status: complet
sursa: PDF curs (AP_10_09_2026), §5, proprietățile 4–6
tags:
  - geometrie-analitică
  - vectori
  - înmulțire-cu-scalar
  - demonstrații
---

## 4. Asociativitatea față de scalari

> [!tip] Proprietate (relația 1)
> Pentru orice vector $\vec{a}$ și orice două numere reale $\alpha$ și $\beta$ are loc egalitatea
> $$
> \beta(\alpha\vec{a}) = (\beta\alpha)\vec{a} \tag{1}
> $$

**Demonstrație.** Afirmația este evidentă dacă $\alpha = 0$, $\beta = 0$ sau $\vec{a} = \vec{0}$. Rămâne să cercetăm cazul când $\alpha \ne 0$, $\beta \ne 0$ și $\vec{a} \ne \vec{0}$.

Fie $\vec{OA} = \vec{a}$, $\vec{OB} = \vec{b} = \alpha\vec{a}$, $\vec{OC} = \beta\vec{b} = \beta(\alpha\vec{a})$, iar $\vec{OD} = (\beta\alpha)\vec{a}$. Să cercetăm vectorii $\vec{OC}$ și $\vec{OD}$.

**a) Modulele.** Conform definiției 5.1:

$$
\lvert \vec{OC} \rvert = \lvert \beta \rvert \cdot \lvert \vec{b} \rvert = \lvert \beta \rvert \cdot \lvert \alpha \rvert \cdot \lvert \vec{a} \rvert, \qquad \lvert \vec{OD} \rvert = \lvert \beta\alpha \rvert \cdot \lvert \vec{a} \rvert = \lvert \alpha \rvert \cdot \lvert \beta \rvert \cdot \lvert \vec{a} \rvert
$$

Deci $\lvert \vec{OC} \rvert = \lvert \vec{OD} \rvert$.

**b) Direcțiile.** Sunt posibile două cazuri.

1. Numerele $\alpha$ și $\beta$ au **același semn**, adică $\alpha\beta > 0$. În acest caz $\vec{OC} \uparrow\uparrow \vec{a}$ și $\vec{OD} \uparrow\uparrow \vec{a}$. Deci $\vec{OC} \uparrow\uparrow \vec{OD}$.
2. Numerele $\alpha$ și $\beta$ au **semne opuse**, adică $\alpha\beta < 0$. Atunci $\vec{OC} \uparrow\downarrow \vec{a}$ și $\vec{OD} \uparrow\downarrow \vec{a}$. Prin urmare și în acest caz $\vec{OC} \uparrow\uparrow \vec{OD}$.

Deoarece $\lvert \vec{OC} \rvert = \lvert \vec{OD} \rvert$ și în ambele cazuri posibile $\vec{OC} \uparrow\uparrow \vec{OD}$, rezultă că $\vec{OC} = \vec{OD}$ și deci $\beta(\alpha\vec{a}) = (\beta\alpha)\vec{a}$. $\blacksquare$

![figură](/geometrie-analitica/05%20Produsul%20vectorului%20la%20un%20num%C4%83r/Figuri/fig-t-asociativitate-scalari.svg)
*fig. T1 — asociativitatea față de scalari: cazurile $\alpha\beta > 0$ și $\alpha\beta < 0$*

> [!example]- Cum se citește figura — asociativitatea față de scalari
> **Pasul 1 — fiecare panou este o singură dreaptă.** Linia verticală punctată marchează originea comună $O$. Toți vectorii au aceeași direcție; sunt desenați pe rânduri separate doar ca să nu se suprapună.
>
> **Pasul 2 — rândurile 1–2, datele.** $\vec{a}$ (albastru) și $\vec{b} = \alpha\vec{a}$ (portocaliu). Sus $\alpha = -2$: $\vec{b}$ e de două ori mai lung și întors. Jos $\alpha = 2$: de două ori mai lung, în același sens.
>
> **Pasul 3 — rândul 3, $\vec{OC} = \beta\vec{b}$.** Înmulțim portocaliul cu $\beta = -1{,}5$: lungimea crește de $1{,}5$ ori și sensul se întoarce **față de $\vec{b}$**. Sus rezultă $3\vec{a}$, jos $-3\vec{a}$.
>
> **Pasul 4 — rândul 4, $\vec{OD} = (\beta\alpha)\vec{a}$ (punctat).** Înmulțim direct albastrul cu produsul: sus $\beta\alpha = 3$, jos $\beta\alpha = -3$.
>
> **Pasul 5 — comparația (violet).** În fiecare panou rândurile 3 și 4 au aceeași lungime și același sens — sus ambele spre dreapta, jos ambele spre stânga. Contează doar că $\vec{OC}$ și $\vec{OD}$ sunt la fel orientați **între ei**.
>
> **Pe ce se bazează:** [[Produsul vectorului la un număr#1. Definiția|definiția 5.1]], la fiecare înmulțire; $\lvert \beta\alpha \rvert = \lvert \beta \rvert \cdot \lvert \alpha \rvert$ (modulele, punctul a); regula semnelor și tranzitivitatea coorientării — [[Coliniaritatea și orientarea vectorilor#3. Vectori la fel orientați și opus orientați|orientarea vectorilor]] (punctul b).
>
> **Ce să verificați singuri pe figură:** (1) numărați lungimile lui $\vec{a}$ pe rândurile 3 și 4: câte $3$ în ambele panouri; (2) construiți în gând panoul pentru $\alpha = -2$, $\beta = 1{,}5$ — trebuie să iasă $\vec{OC} = \vec{OD} = -3\vec{a}$.

> [!note] Schema demonstrației
> Doi vectori sunt egali dacă au **același modul** și **aceeași orientare**. Toate demonstrațiile din acest paragraf urmează acest tipar: (a) egalitatea modulelor, prin calcul cu valori absolute; (b) egalitatea orientărilor, prin discuția semnelor.

> [!example]- Pas cu pas — de ce ambele cazuri de la b) duc la aceeași concluzie
> Punctul b) pare că se repetă inutil. Iată ce se întâmplă de fapt:
>
> **Pasul 1 — ce trebuie arătat.** Că $\vec{OC}$ și $\vec{OD}$ au **aceeași orientare între ele**. Nu ne interesează cum sunt orientate față de $\vec{a}$ — acela e doar mijlocul de comparație.
>
> **Pasul 2 — cazul $\alpha\beta > 0$.** $\vec{OC} = \beta(\alpha\vec{a})$: înmulțim de două ori, cu numere de același semn, deci sensul se păstrează sau se inversează **de două ori** ⇒ revine la cel inițial. Deci $\vec{OC} \uparrow\uparrow \vec{a}$. Analog $\vec{OD} = (\beta\alpha)\vec{a}$ cu $\beta\alpha > 0$ ⇒ $\vec{OD} \uparrow\uparrow \vec{a}$.
>
> **Pasul 3 — tranzitivitate.** Ambii sunt la fel orientați cu $\vec{a}$ ⇒ sunt la fel orientați între ei.
>
> **Pasul 4 — cazul $\alpha\beta < 0$.** Acum **amândoi** sunt opus orientați față de $\vec{a}$. Dar „opus față de același lucru" înseamnă „la fel între ei" — ca două numere negative care au același semn.
>
> **Pasul 5 — de aceea concluzia e comună.** În ambele cazuri $\vec{OC} \uparrow\uparrow \vec{OD}$; ce diferă e doar *poziția lor comună* față de $\vec{a}$, care nu apare în concluzie.

## 5. Distributivitatea față de scalari

> [!tip] Proprietate (relația 2)
> Pentru orice vector $\vec{a}$ și orice numere reale $\alpha$ și $\beta$ are loc relația
> $$
> (\alpha + \beta)\vec{a} = \alpha\vec{a} + \beta\vec{a} \tag{2}
> $$

![figură](/geometrie-analitica/05%20Produsul%20vectorului%20la%20un%20num%C4%83r/Figuri/fig-distributivitate-scalari.svg)
*fig. 1 — cazul $\alpha$, $\beta$ de același semn: lungimile se adună pe aceeași dreaptă*

**Demonstrație.** Afirmația este evidentă dacă $\alpha = 0$, $\beta = 0$, $\vec{a} = \vec{0}$ sau $\alpha = -\beta$.

**a) Fie $\alpha$ și $\beta$ au același semn.** Atunci toți vectorii sunt la fel orientați:

$$
\alpha\vec{a} \uparrow\uparrow \beta\vec{a} \uparrow\uparrow (\alpha\vec{a} + \beta\vec{a}) \uparrow\uparrow (\alpha + \beta)\vec{a} \tag{3}
$$

Pe baza faptului că pentru orice două numere reale $\alpha$ și $\beta$ care au același semn $\lvert \alpha + \beta \rvert = \lvert \alpha \rvert + \lvert \beta \rvert$, obținem:

$$
\lvert (\alpha + \beta)\vec{a} \rvert = \lvert \alpha + \beta \rvert \cdot \lvert \vec{a} \rvert = (\lvert \alpha \rvert + \lvert \beta \rvert) \cdot \lvert \vec{a} \rvert = \lvert \alpha \rvert \cdot \lvert \vec{a} \rvert + \lvert \beta \rvert \cdot \lvert \vec{a} \rvert \tag{4}
$$

Pentru vectorii $\alpha\vec{a} \uparrow\uparrow \beta\vec{a}$ avem:

$$
\lvert \alpha\vec{a} + \beta\vec{a} \rvert = \lvert \alpha\vec{a} \rvert + \lvert \beta\vec{a} \rvert = \lvert \alpha \rvert \cdot \lvert \vec{a} \rvert + \lvert \beta \rvert \cdot \lvert \vec{a} \rvert \tag{5}
$$

Din (3), (4) și (5) obținem (2).

**b) Fie $\alpha$ și $\beta$ au semne opuse.** Presupunem că $\lvert \alpha \rvert > \lvert \beta \rvert$. Atunci $(\alpha + \beta)$ și $-\beta$ au același semn și, pentru aceste numere, conform cazului precedent:

$$
\bigl((\alpha + \beta) + (-\beta)\bigr)\vec{a} = (\alpha + \beta)\vec{a} + (-\beta)\vec{a}
$$

$$
\Rightarrow \quad \alpha\vec{a} = (\alpha + \beta)\vec{a} - \beta\vec{a} \quad \Rightarrow \quad (\alpha + \beta)\vec{a} = \alpha\vec{a} + \beta\vec{a}
$$

Analogic se demonstrează (2) dacă $\lvert \beta \rvert > \lvert \alpha \rvert$. $\blacksquare$

![figură](/geometrie-analitica/05%20Produsul%20vectorului%20la%20un%20num%C4%83r/Figuri/fig-t-distributivitate-semne-opuse.svg)
*fig. T2 — cazul b), semne opuse: reducerea la cazul a) pentru $\alpha = 7$, $\beta = -3$*

> [!example]- Cum se citește figura — distributivitatea față de scalari (fig. 1 și fig. T2)
> **Pasul 1 — fig. 1, cazul a).** $\alpha\vec{a}$ (albastru) și $\beta\vec{a}$ (portocaliu) sunt la fel orientați și așezați cap la cap pe aceeași dreaptă; săgeata violet $(\alpha + \beta)\vec{a}$ are lungimea egală cu suma lungimilor — relațiile (4) și (5).
>
> **Pasul 2 — fig. T2, liniile verticale.** Marchează pozițiile $0$, $4$ și $7$, măsurate în lungimi de $\vec{a}$; sunt aceleași în ambele rânduri.
>
> **Pasul 3 — fig. T2, sus.** Pentru $\alpha = 7$, $\beta = -3$ cazul a) nu se aplică direct. Luăm perechea $(\alpha + \beta, -\beta) = (4, 3)$, de același semn: $4\vec{a}$ și $3\vec{a}$ cap la cap dau $7\vec{a}$.
>
> **Pasul 4 — fig. T2, jos.** Aceeași egalitate, după ce adunăm $-3\vec{a}$: pornim cu $7\vec{a} = \alpha\vec{a}$ (albastru), ne întoarcem cu $-3\vec{a} = \beta\vec{a}$ (portocaliu) și ne oprim la $4\vec{a} = (\alpha + \beta)\vec{a}$ (violet).
>
> **Pe ce se bazează:** [[Produsul vectorului la un număr#1. Definiția|definiția 5.1]]; $\lvert \alpha + \beta \rvert = \lvert \alpha \rvert + \lvert \beta \rvert$ pentru numere de același semn (cazul a); [[Adunarea vectorilor. Regula triunghiului și a poligonului#2. Regula triunghiului|adunarea vectorilor coliniari]], cap la cap; adunarea aceluiași vector în ambele părți — [[Proprietățile adunării vectorilor]] (cazul b).
>
> **Ce să verificați singuri pe figură:** (1) în rândul de jos al fig. T2, vârful violet cade exact pe linia punctată din mijloc; (2) pentru $\alpha = 3$, $\beta = -5$ (întrebarea 3) perechea de același semn este $(\alpha + \beta, -\alpha) = (-2, -3)$ — desenați-o după același model.

> [!note] Trucul din cazul b)
> Cazul semnelor opuse **nu se demonstrează din nou**, ci se *reduce* la cazul deja demonstrat, adăugând un termen convenabil. Este o tehnică standard: alegi o rescriere în care toți coeficienții au același semn.

> [!example]- Pas cu pas — reducerea din cazul b), cu numere concrete
> Luăm $\alpha = 7$, $\beta = -3$ (semne opuse, $\lvert\alpha\rvert > \lvert\beta\rvert$). Vrem $(7 - 3)\vec{a} = 7\vec{a} + (-3)\vec{a}$, adică $4\vec{a} = 7\vec{a} - 3\vec{a}$.
>
> **Pasul 1 — nu putem aplica direct cazul a).** $7$ și $-3$ au semne diferite, iar cazul a) cere același semn.
>
> **Pasul 2 — găsim două numere de același semn.** $\alpha + \beta = 4$ și $-\beta = 3$. Amândouă pozitive ⇒ **la ele** putem aplica cazul a).
>
> **Pasul 3 — aplicăm cazul a) pentru perechea $(4,\ 3)$:**
> $$
> (4 + 3)\vec{a} = 4\vec{a} + 3\vec{a} \quad \text{adică} \quad 7\vec{a} = (7-3)\vec{a} + 3\vec{a}
> $$
>
> **Pasul 4 — mutăm termenul.** Adunăm $-3\vec{a}$ în ambele părți:
> $$
> 7\vec{a} - 3\vec{a} = (7-3)\vec{a} \quad \text{adică} \quad 7\vec{a} + (-3)\vec{a} = 4\vec{a}
> $$
> ceea ce trebuia demonstrat.
>
> **În general:** se pleacă de la $\bigl((\alpha+\beta) + (-\beta)\bigr)\vec{a}$, unde $(\alpha+\beta)$ și $-\beta$ **au același semn** exact pentru că $\lvert\alpha\rvert > \lvert\beta\rvert$.
>
> **De ce merge.** Nu inventăm nimic: folosim un caz deja demonstrat, aplicat unei perechi de numere alese anume ca să-i respecte ipoteza. Așa se sparg cazurile grele în matematică.

## 6. Distributivitatea față de suma de vectori

> [!tip] Proprietate (relația 6)
> Pentru orice număr real $\alpha$ și orice doi vectori $\vec{a}$ și $\vec{b}$ are loc egalitatea
> $$
> \alpha(\vec{a} + \vec{b}) = \alpha\vec{a} + \alpha\vec{b} \tag{6}
> $$

![figură](/geometrie-analitica/05%20Produsul%20vectorului%20la%20un%20num%C4%83r/Figuri/fig-omotetie.svg)
*fig. 2 (fig. 28 din curs) — omotetia de centru $O$ și coeficient $\alpha$ duce triunghiul $ABC$ în $A'B'C'$*

**Demonstrație.** Afirmația este evidentă dacă $\alpha = 0$. Fie $\alpha \ne 0$.

Dintr-un punct arbitrar $A$ construim $\vec{AB} = \vec{a}$ și $\vec{BC} = \vec{b}$. Atunci $\vec{AC} = \vec{a} + \vec{b}$.

Alegem un punct $O$ ce nu aparține dreptelor $(AB)$, $(AC)$, $(BC)$ și o **omotetie cu centrul $O$ și coeficientul $\alpha$**. Vom obține corespunzător vectorii $\vec{A'B'}$, $\vec{B'C'}$, $\vec{A'C'}$.

Conform [[Produsul vectorului la un număr#3. Legătura cu omotetia|proprietății 3]] avem:

$$
\vec{A'B'} = \alpha\vec{AB} = \alpha\vec{a}, \qquad \vec{B'C'} = \alpha\vec{BC} = \alpha\vec{b}, \qquad \vec{A'C'} = \alpha\vec{AC} = \alpha(\vec{a} + \vec{b})
$$

Pe de altă parte, după regula triunghiului: $\vec{A'C'} = \vec{A'B'} + \vec{B'C'} = \alpha\vec{a} + \alpha\vec{b}$.

Așadar $\alpha(\vec{a} + \vec{b}) = \alpha\vec{a} + \alpha\vec{b}$. $\blacksquare$

> [!example]- Cum se citește figura — distributivitatea față de suma de vectori (fig. 2)
> **Pasul 1 — triunghiul mic.** $\vec{AB} = \vec{a}$ (albastru), $\vec{BC} = \vec{b}$ (portocaliu) cap la cap și latura de închidere $\vec{AC} = \vec{a} + \vec{b}$ (violet).
>
> **Pasul 2 — centrul și razele.** $O$ este în afara dreptelor laturilor; liniile gri punctate duc fiecare vârf pe raza lui: $A \to A'$, $B \to B'$, $C \to C'$, cu același coeficient $\alpha$ (în figură $\alpha = 2$).
>
> **Pasul 3 — triunghiul mare, latură cu latură.** Proprietatea 3 se aplică fiecărei laturi separat: albastrul mare este $\alpha\vec{a}$, portocaliul mare $\alpha\vec{b}$, violetul mare $\alpha(\vec{a} + \vec{b})$.
>
> **Pasul 4 — regula triunghiului în triunghiul mare.** Albastrul mare și portocaliul mare sunt cap la cap, deci violetul mare este și $\alpha\vec{a} + \alpha\vec{b}$. Comparând cu pasul 3: $\alpha(\vec{a} + \vec{b}) = \alpha\vec{a} + \alpha\vec{b}$.
>
> **Pe ce se bazează:** [[Produsul vectorului la un număr#3. Legătura cu omotetia|proprietatea 3]] (pasul 3); [[Adunarea vectorilor. Regula triunghiului și a poligonului#2. Regula triunghiului|regula triunghiului]] (pașii 1 și 4).
>
> **Ce să verificați singuri pe figură:** (1) fiecare latură mare este paralelă cu latura mică de aceeași culoare și de două ori mai lungă; (2) rapoartele $OA'/OA$, $OB'/OB$, $OC'/OC$ sunt egale — acesta este $\alpha$.

> [!tip] Ideea centrală
> Omotetia transformă triunghiul $ABC$ într-un triunghi **asemenea** $A'B'C'$. Latura de închidere a triunghiului mic devine latura de închidere a celui mare — iar latura de închidere este exact suma vectorială. Distributivitatea este, geometric, **asemănarea triunghiurilor**.

> [!example]- Pas cu pas — demonstrația prin omotetie, desfășurată
> **Pasul 1 — construim un triunghi din cei doi vectori.** Alegem $A$ oarecare, punem $\vec{AB} = \vec{a}$ și, din $B$, $\vec{BC} = \vec{b}$. Prin regula triunghiului, latura care închide traseul este $\vec{AC} = \vec{a} + \vec{b}$. Avem deci un triunghi ale cărui laturi *sunt* cei trei vectori care ne interesează.
>
> **Pasul 2 — alegem un centru de omotetie.** Un punct $O$ în afara dreptelor $(AB)$, $(AC)$, $(BC)$, ca imaginea să fie tot un triunghi (nedegenerat).
>
> **Pasul 3 — aplicăm omotetia $H_O^{\alpha}$.** Fiecare vârf pleacă pe raza lui: $A \to A'$, $B \to B'$, $C \to C'$, cu $\vec{OA'} = \alpha\vec{OA}$ etc.
>
> **Pasul 4 — citim laturile noului triunghi.** Proprietatea 3 a omotetiei spune că fiecare latură se înmulțește cu $\alpha$:
> $$
> \vec{A'B'} = \alpha\vec{a}, \qquad \vec{B'C'} = \alpha\vec{b}, \qquad \vec{A'C'} = \alpha(\vec{a} + \vec{b})
> $$
> Ultima este cheia: latura de închidere se transformă în latura de închidere.
>
> **Pasul 5 — aplicăm regula triunghiului în triunghiul mare.** $\vec{A'C'} = \vec{A'B'} + \vec{B'C'} = \alpha\vec{a} + \alpha\vec{b}$.
>
> **Pasul 6 — comparăm pașii 4 și 5.** Același vector $\vec{A'C'}$, scris în două feluri:
> $$
> \alpha(\vec{a} + \vec{b}) = \alpha\vec{a} + \alpha\vec{b}
> $$
>
> **De ce e nevoie de omotetie?** Pentru că ea este singurul instrument care garantează, dintr-o singură lovitură, că **toate** cele trei laturi se înmulțesc cu același $\alpha$. Fără ea ar trebui demonstrat separat pentru fiecare latură — și tocmai asta voiam să evităm.

## Rezumat

| # | Proprietate | Relația |
|---|---|---|
| 4 | asociativitate față de scalari | $\beta(\alpha\vec{a}) = (\beta\alpha)\vec{a}$ |
| 5 | distributivitate față de scalari | $(\alpha + \beta)\vec{a} = \alpha\vec{a} + \beta\vec{a}$ |
| 6 | distributivitate față de vectori | $\alpha(\vec{a} + \vec{b}) = \alpha\vec{a} + \alpha\vec{b}$ |

> [!warning] Observație asupra sursei
> În textul PDF al cursului, în demonstrația proprietății 4, apare tipărit $\vec{OC} = \beta b \beta(\alpha \vec{a})$. Este o greșeală de tipar; corect este $\vec{OC} = \beta\vec{b} = \beta(\alpha\vec{a})$, așa cum se folosește imediat mai jos.

## Întrebări de control

1. De ce demonstrația proprietății 4 tratează separat cazurile $\alpha\beta > 0$ și $\alpha\beta < 0$, deși concluzia e aceeași?
2. În demonstrația (5) s-a folosit $\lvert \alpha\vec{a} + \beta\vec{a} \rvert = \lvert \alpha\vec{a} \rvert + \lvert \beta\vec{a} \rvert$. De ce este adevărat aici, dar fals în general?
3. Verificați relația (2) pentru $\alpha = 3$, $\beta = -5$ și un $\vec{a}$ desenat de voi.
4. De ce în demonstrația proprietății 6 se cere ca $O$ să nu aparțină dreptelor $(AB)$, $(AC)$, $(BC)$?
5. Ce se întâmplă cu demonstrația 6 dacă $\vec{a}$ și $\vec{b}$ sunt coliniari?

## Legături

- Anterior: [[Produsul vectorului la un număr]]
- Continuare: [[Raportul a doi vectori coliniari]]
- Vezi și: [[Spațiul vectorial al vectorilor liberi]]
