---
curs: geometrie-analitica
title: "Adunarea vectorilor. Regula triunghiului și a poligonului"
capitol: 04 — Adunarea și scăderea vectorilor
paragraf: §4
tip: lecție
nr: 1
status: complet
tags:
  - geometrie-analitică
  - vectori
  - adunare
---

## 1. Construcția sumei

Cercetăm sistemul finit de vectori $\vec{a}_1, \vec{a}_2, \dots, \vec{a}_n$. Fixăm un punct arbitrar $A$ și construim vectorii

$$
\vec{AA_1} = \vec{a}_1, \quad \vec{A_1A_2} = \vec{a}_2, \quad \vec{A_2A_3} = \vec{a}_3, \quad \dots, \quad \vec{A_{n-1}A_n} = \vec{a}_n.
$$

> [!note] De ce e posibilă construcția
> Fiecare pas folosește [[Vectori#4. Existența și unicitatea reprezentantului cu origine dată|teorema reprezentantului unic]]: din punctul deja atins putem depune, în mod unic, următorul vector al sistemului.

În rezultat obținem o **linie frântă** $AA_1A_2A_3\dots A_{n-1}A_n$, formată din vectorii sistemului dat, astfel încât **originea vectorului următor, începând cu al doilea, se află în extremitatea vectorului precedent** (construcție „cap la cap").

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-regula-poligonului.svg)
*fig. 1 — linia frântă a sistemului $\vec{a}_1, \vec{a}_2, \vec{a}_3$ și suma $\vec{a} = \vec{AA_3}$*

> [!abstract] Definiție
> Vectorul $\vec{a} = \vec{AA_n}$ din construcția efectuată, ce are originea în **originea primului vector** $\vec{a}_1$ și extremitatea în **extremitatea ultimului vector** $\vec{a}_n$, se numește **suma** vectorilor dați.

$$
\vec{a} = \vec{a}_1 + \vec{a}_2 + \vec{a}_3 + \dots + \vec{a}_n, \qquad \text{sau} \qquad \vec{a} = \sum_{i=1}^{n} \vec{a}_i \tag{1}
$$

Adunarea câtorva vectori conform acestei definiții se numește **regula poligonului**.

## 2. Regula triunghiului

În particular, pentru **doi** vectori $\vec{a}$ și $\vec{b}$ obținem din ea **regula triunghiului** de adunare a doi vectori.

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-regula-triunghiului.svg)
*fig. 2 — regula triunghiului: $\vec{AC} = \vec{AB} + \vec{BC}$*

> [!check] Regula triunghiului
> Depunem $\vec{b}$ din **extremitatea** lui $\vec{a}$. Suma este vectorul care unește originea lui $\vec{a}$ cu extremitatea lui $\vec{b}$.

> [!example]- Cum se citește figura — regula triunghiului
> **Pasul 1 — primul termen.** Săgeata albastră $\vec{AB} = \vec{a}$, depusă din punctul ales $A$.
>
> **Pasul 2 — al doilea termen, cap la cap.** Săgeata portocalie $\vec{BC} = \vec{b}$ pleacă exact din vârful $B$ al primei — nu din $A$.
>
> **Pasul 3 — suma (violet).** Săgeata violet închide triunghiul: pleacă din originea primului vector ($A$) și ajunge în extremitatea ultimului ($C$), deci $\vec{AC} = \vec{a} + \vec{b}$.
>
> **Pasul 4 — cele două drumuri.** Parcurgeți cu degetul $A \to B \to C$, apoi direct $A \to C$: ambele drumuri pleacă și ajung în aceleași puncte.
>
> **Pe ce se bazează:** [[Vectori#4. Existența și unicitatea reprezentantului cu origine dată|teorema reprezentantului unic]] (depunerea lui $\vec{b}$ din $B$); definiția sumei din [[#1. Construcția sumei|§1]], pentru $n = 2$.
>
> **Ce să verificați singuri pe figură:** (1) săgeata violet nu e „cap la cap” cu celelalte — are aceeași origine cu $\vec{a}$ și același vârf cu $\vec{b}$; (2) latura violet e mai scurtă decât suma lungimilor celorlalte două (inegalitatea triunghiului).

După această regulă se pot aduna atât doi vectori **necoliniari** (fig. 2), cât și doi vectori **coliniari** (fig. 3).

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-adunare-coliniari.svg)
*fig. 3 — adunarea vectorilor coliniari: la fel orientați (sus) și opus orientați (jos)*

> [!tip] Existență și unicitate
> Se poate demonstra că **suma a doi vectori există și este unică**. Observăm că putem la început să definim suma a doi vectori după regula triunghiului, apoi, aplicând-o consecutiv, să obținem regula poligonului. Cele două definiții sunt echivalente.

> [!example]- Pas cu pas — de ce suma nu depinde de punctul de plecare $A$
> Definiția pare să depindă de o alegere arbitrară („fixăm un punct arbitrar $A$"). Dacă ar depinde, definiția ar fi greșită. Iată de ce nu depinde:
>
> **Pasul 1 — facem construcția de două ori.** Din $A$ obținem punctele $A_1, A_2, \dots, A_n$; din alt punct $B$ obținem $B_1, B_2, \dots, B_n$.
>
> **Pasul 2 — primul pas al fiecărei construcții.** $\vec{AA_1} = \vec{a}_1 = \vec{BB_1}$. Din regula „$\vec{AB} = \vec{CD} \Rightarrow \vec{AC} = \vec{BD}$" (afirmația din [[Vectori#3. Egalitatea vectorilor|§3]]) rezultă $\vec{AB} = \vec{A_1B_1}$.
>
> **Pasul 3 — repetăm.** La fel, din $\vec{A_1A_2} = \vec{a}_2 = \vec{B_1B_2}$ rezultă $\vec{A_1B_1} = \vec{A_2B_2}$. Prin urmare
> $$
> \vec{AB} = \vec{A_1B_1} = \vec{A_2B_2} = \dots = \vec{A_nB_n}
> $$
> Cele două linii frânte sunt „translatate" una față de alta cu unul și același vector $\vec{AB}$, la fiecare pas.
>
> **Pasul 4 — concluzia.** Din $\vec{AB} = \vec{A_nB_n}$ rezultă $\vec{AA_n} = \vec{BB_n}$ (aceeași afirmație, aplicată invers). Deci suma obținută din $A$ și cea obținută din $B$ sunt **același vector**.
>
> **Morală.** Ori de câte ori o definiție începe cu „alegem un punct arbitrar", trebuie verificat că rezultatul nu depinde de alegere. Se spune că definiția este **corectă** (sau *bine pusă*).

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-t-suma-independenta-punct.svg)
*fig. T1 — aceeași sumă, construită din $A$ și din $B$*

> [!example]- Cum se citește figura — suma nu depinde de punctul de plecare
> **Pasul 1 — prima construcție (sus).** Din $A$: $\vec{a}_1$ (albastru) până în $A_1$, apoi $\vec{a}_2$ (portocaliu) până în $A_2$; suma este săgeata violet $\vec{AA_2}$.
>
> **Pasul 2 — a doua construcție (jos).** Aceiași vectori, depuși din $B$: $B \to B_1 \to B_2$, cu suma violet $\vec{BB_2}$.
>
> **Pasul 3 — săgețile gri, de la stânga la dreapta.** $\vec{AB}$, $\vec{A_1B_1}$, $\vec{A_2B_2}$. Primele două sunt egale prin regula „schimbului de mijloc” aplicată lui $\vec{AA_1} = \vec{BB_1}$; ultimele două — aplicată lui $\vec{A_1A_2} = \vec{B_1B_2}$.
>
> **Pasul 4 — concluzia.** Din $\vec{AB} = \vec{A_2B_2}$, aceeași regulă dă $\vec{AA_2} = \vec{BB_2}$: cele două săgeți violet reprezintă același vector.
>
> **Pe ce se bazează:** [[Vectori#3. Egalitatea vectorilor|regula „schimbului de mijloc”]] (pașii 3–4); [[Vectori#4. Existența și unicitatea reprezentantului cu origine dată|teorema reprezentantului unic]] (existența celor două linii frânte).
>
> **Ce să verificați singuri pe figură:** (1) cele trei săgeți gri sunt paralele și egale — fiecare pereche vecină formează un paralelogram cu o latură colorată; (2) pentru $n$ vectori, lanțul gri ar avea $n + 1$ săgeți, toate egale.

## 3. Relația lui Chasles

Din regula triunghiului rezultă că **pentru orice trei puncte** $A$, $B$ și $C$, întotdeauna

$$
\vec{AC} = \vec{AB} + \vec{BC} \tag{2}
$$

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-relatia-chasles.svg)
*fig. 4 — relația (2) e valabilă și când punctele sunt coliniare*

> [!example]- Cum se citește figura — relația lui Chasles
> **Pasul 1 — sus: trei puncte oarecare.** $A$, $B$, $C$ formează un triunghi; $\vec{AB}$ albastru, $\vec{BC}$ portocaliu.
>
> **Pasul 2 — regula triunghiului.** Săgeata violet $\vec{AC}$ unește originea primei săgeți cu vârful celei de-a doua: $\vec{AC} = \vec{AB} + \vec{BC}$.
>
> **Pasul 3 — jos: puncte coliniare.** Aceleași trei litere, puse pe o dreaptă. Nu mai există triunghi, dar construcția „cap la cap” merge la fel: săgeata violet de dedesubt pleacă din $A$ și ajunge în $C$.
>
> **Pasul 4 — ce contează de fapt.** În ambele desene contează doar ordinea literelor: litera de la finalul primului vector ($B$) este începutul celui de-al doilea.
>
> **Pe ce se bazează:** [[#2. Regula triunghiului|regula triunghiului]], pentru vectori necoliniari (sus) și coliniari (jos, ca în fig. 3).
>
> **Ce să verificați singuri pe figură:** (1) jos, lungimea violet este suma lungimilor albastru + portocaliu, pentru că $B$ e între $A$ și $C$; (2) imaginați-vă $B$ dincolo de $C$: portocaliul s-ar întoarce spre stânga, violetul ar avea diferența lungimilor — relația rămâne adevărată.

> [!warning] Nu e nevoie de niciun triunghi
> Relația (2) nu cere ca $A$, $B$, $C$ să formeze un triunghi: ele pot fi coliniare sau chiar confundate. Aceasta o face instrumentul de bază în calculele cu vectori — orice vector $\vec{AC}$ poate fi „spart" printr-un punct intermediar oarecare.

### Consecința 1 — vectorul nul este element neutru

În particular din (2) obținem $\vec{AB} + \vec{BB} = \vec{AB}$ și $\vec{AA} + \vec{AB} = \vec{AB}$, prin urmare

$$
\vec{a} + \vec{0} = \vec{0} + \vec{a} = \vec{a} \tag{3}
$$

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-t-element-neutru.svg)
*fig. T2 — consecința 1: relația (2) cu două puncte confundate*

> [!example]- Cum se citește figura — consecința 1 (elementul neutru)
> **Pasul 1 — stânga: $C$ coincide cu $B$.** În relația (2) al doilea termen devine $\vec{BB}$ — un segment orientat nul, desenat ca cerc portocaliu gol în $B$.
>
> **Pasul 2 — citim stânga.** Săgeata albastră $\vec{AB}$ și săgeata violet $\vec{AC}$ au aceleași capete (violetul e decalat doar ca să se vadă): $\vec{AB} + \vec{BB} = \vec{AB}$, adică $\vec{a} + \vec{0} = \vec{a}$.
>
> **Pasul 3 — dreapta: $B$ coincide cu $A$.** Acum primul termen $\vec{AB} = \vec{AA}$ este nul: cercul gol stă în $A$, iar săgeata albastră $\vec{BC}$ pleacă din același punct.
>
> **Pasul 4 — citim dreapta.** $\vec{AA} + \vec{AC} = \vec{AC}$, adică $\vec{0} + \vec{a} = \vec{a}$. În textul de mai sus aceeași relație apare ca $\vec{AA} + \vec{AB} = \vec{AB}$ — doar capătul are altă literă.
>
> **Pe ce se bazează:** [[#3. Relația lui Chasles|relația lui Chasles (2)]], valabilă și pentru puncte confundate; [[Vectori#Vectorul nul|vectorul nul]] ca segment orientat $\overline{AA}$.
>
> **Ce să verificați singuri pe figură:** (1) în ambele panouri, săgeata violet are aceleași capete ca cea albastră; (2) „adăugarea” cercului gol nu mută vârful drumului — exact asta înseamnă element neutru.

### Consecința 2 — existența vectorului opus

Tot din (2) obținem $\vec{AB} + \vec{BA} = \vec{AA}$ și $\vec{BA} + \vec{AB} = \vec{BB}$. Deoarece $\vec{AB} = -\vec{BA}$, am demonstrat: **pentru orice vector $\vec{a}$ există vectorul opus $-\vec{a}$**, astfel încât

$$
\vec{a} + (-\vec{a}) = -\vec{a} + \vec{a} = \vec{0} \tag{4}
$$

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-suma-vectori-opusi.svg)
*fig. 5 — pornim din $A$ și ne întoarcem în $A$: deplasarea totală este vectorul nul*

> [!example]- Cum se citește figura — consecința 2 (vectorul opus)
> **Pasul 1 — dus.** Săgeata albastră $\vec{AB}$ duce din $A$ în $B$.
>
> **Pasul 2 — întors.** Săgeata portocalie $\vec{BA}$ pleacă din vârful $B$ și revine în $A$ — cap la cap, ca în regula triunghiului. Cele două săgeți stau pe aceeași dreaptă; sunt desenate decalat, iar liniile gri verticale arată că au aceleași capete.
>
> **Pasul 3 — suma.** Originea primului vector și vârful ultimului sunt același punct $A$, deci suma este $\vec{AA} = \vec{0}$.
>
> **Pasul 4 — concluzia.** $\vec{BA}$ este vectorul care, adunat cu $\vec{AB}$, dă $\vec{0}$ — adică opusul: $\vec{a} + (-\vec{a}) = \vec{0}$.
>
> **Pe ce se bazează:** [[#3. Relația lui Chasles|relația lui Chasles]] cu $C = A$; [[Modulul vectorului. Vectorul opus#1. Vectorul opus|definiția vectorului opus]].
>
> **Ce să verificați singuri pe figură:** (1) cele două săgeți au aceeași lungime și sensuri contrare; (2) inversați ordinea — întâi portocaliu, apoi albastru: drumul pleacă din $B$ și revine în $B$, tot $\vec{0}$.

> [!info]- Completare — linia frântă închisă
> Generalizarea consecinței 2: dacă linia frântă se **închide** (adică $A_n = A$), atunci
> $$
> \vec{a}_1 + \vec{a}_2 + \dots + \vec{a}_n = \vec{0}.
> $$
> De exemplu, în orice triunghi $ABC$: $\vec{AB} + \vec{BC} + \vec{CA} = \vec{0}$.

## Întrebări de control

1. De ce suma nu depinde de punctul $A$ ales la începutul construcției?
2. Ce devine regula poligonului pentru $n = 2$?
3. Poate suma a doi vectori nenuli să fie vectorul nul? Dar suma a trei?
4. Scrieți $\vec{MN}$ ca sumă de doi vectori care trec prin punctul $P$.
5. În paralelogramul $ABCD$, calculați $\vec{AB} + \vec{BC} + \vec{CD} + \vec{DA}$.

## Legături

- Anterior: [[Vectori aplicați, alunecători și liberi]]
- Continuare: [[Regula paralelogramului]]
- Vezi și: [[Proprietățile adunării vectorilor]], [[Scăderea vectorilor]]
