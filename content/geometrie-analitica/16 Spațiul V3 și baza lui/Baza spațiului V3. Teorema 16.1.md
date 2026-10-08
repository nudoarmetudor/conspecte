---
curs: geometrie-analitica
title: "Baza spațiului V₃. Teorema 16.1"
capitol: 16 — Spațiul V3 și baza lui
paragraf: §16
tip: lecție
nr: 1
status: complet
sursa: manual „Geometrie analitică în plan", p. 69–71 (PDF p. 33–35)
tags:
  - geometrie-analitică
  - spațiu-vectorial
  - bază
  - teoremă
---

> [!tip] Despre ce este paragraful
> În [[Spațiul V2. Vectori coplanari și dimensiunea planului|§9]] am văzut că în plan **doi** vectori necoliniari ajung pentru a scrie orice vector: planul are dimensiunea 2. §16 face același lucru pentru **spațiu**: trei vectori necoplanari ajung, iar al patrulea e deja de prisos. Spațiul are dimensiunea 3.
>
> Demonstrația nu aduce nicio idee nouă: e [[Descompunerea unui vector după doi vectori necoliniari|teorema 6.9]] (descompunerea în plan) aplicată o dată, plus încă un pas „în sus". Dacă ați înțeles cazul plan, aveți deja 90% din acest paragraf.

## 1. Teorema 16.1

> [!tip] Teorema 16.1
> Dacă vectorii $\vec a$, $\vec b$ și $\vec c$ nu-s coplanari, atunci pentru orice vector $\vec p$ există în mod unic numerele $\alpha$, $\beta$ și $\gamma$, încât
> $$
> \vec p = \alpha\vec a + \beta\vec b + \gamma\vec c. \tag{1}
> $$

### Demonstrația — existența

Dintr-un punct arbitrar $O$ al spațiului depunem vectorii $\vec{OA} = \vec a$, $\vec{OB} = \vec b$, $\vec{OC} = \vec c$ și $\vec{OP} = \vec p$. Deoarece vectorii $\vec a$, $\vec b$ și $\vec c$ nu-s coplanari, punctele $O$, $A$, $B$ și $C$ nu aparțin aceluiași plan.

**Cazul 1 — $P$ aparține uneia dintre dreptele $(OA)$, $(OB)$, $(OC)$.** Dacă punctul $P$ aparține dreptei $(OA)$, atunci vectorii $\vec{OA} = \vec a$ și $\vec{OP} = \vec p$ sunt coliniari și, în baza teoremei despre vectorii coliniari, există $\alpha \in \mathbb R$, încât $\vec p = \alpha\vec a$ sau $\vec p = \alpha\vec a + 0\cdot\vec b + 0\cdot\vec c$. Așadar, în acest caz are loc egalitatea (1). Analogic ne convingem, dacă punctul $P \in (OB)$ ori $P \in (OC)$.

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-t-16-1-caz-axa.svg)
*fig. 1 (după fig. 58 din manual) — cazul 1: $P$ pe dreapta $(OA)$; aici $\alpha$ e negativ, fiindcă $P$ e de cealaltă parte a lui $O$*

**Cazul 2 — cazul general.** Să cercetăm cazul când punctul $P$ nu aparține nici uneia din dreptele $(OA)$, $(OB)$ sau $(OC)$. Prin punctul $P$ ducem o dreaptă paralelă la dreapta $(OC)$. Fie dreapta dusă intersectează planul $(OAB)$ în punctul $P_1$. Deoarece vectorii $\vec a$, $\vec b$ și $\vec{OP_1}$ sunt coplanari, atunci există așa numere reale $\alpha$ și $\beta$, astfel încât $\vec{OP_1} = \alpha\vec a + \beta\vec b$. Totodată observăm că vectorii $\vec{P_1P}$ și $\vec c$ sunt coliniari și deci există așa număr real $\gamma$ încât $\vec{P_1P} = \gamma\vec c$. După regula triunghiului $\vec{OP} = \vec{OP_1} + \vec{P_1P}$. Înlocuim în ultima egalitate expresiile pentru $\vec{OP}$, $\vec{OP_1}$, $\vec{P_1P}$ și obținem:
$$
\vec p = \alpha\vec a + \beta\vec b + \gamma\vec c.
$$

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-t-16-1-caz-general.svg)
*fig. 2 (după fig. 59 din manual) — cazul general: drumul $O \to P_1$ rămâne în planul $(OAB)$, drumul $P_1 \to P$ urcă paralel cu $\vec c$*

> [!example]- Cum se citește figura — existența descompunerii
> **Pasul 1 — planul de bază.** Zona umbrită e planul $(OAB)$, determinat de $\vec a$ și $\vec b$. Vectorul $\vec c$ (verde) iese din acest plan — asta înseamnă „necoplanari".
>
> **Pasul 2 — punctul de descompus.** Săgeata violet $\vec{OP}$ e vectorul $\vec p$. $P$ plutește deasupra planului.
>
> **Pasul 3 — „coborâți" paralel cu $\vec c$.** Linia punctată verticală trece prin $P$ și e paralelă cu $(OC)$. Ea înțeapă planul $(OAB)$ în $P_1$. Atenție: nu se coboară *perpendicular* pe plan, ci *paralel cu $\vec c$* — baza nu e neapărat ortogonală.
>
> **Pasul 4 — în plan, problema e deja rezolvată.** $\vec{OP_1}$ stă în planul lui $\vec a$ și $\vec b$, deci după [[Descompunerea unui vector după doi vectori necoliniari|teorema 6.9]] se scrie $\alpha\vec a + \beta\vec b$ (liniile punctate albastră și portocalie desenează această descompunere).
>
> **Pasul 5 — bucata verticală.** $\vec{P_1P}$ e paralel cu $\vec c$, deci e un multiplu al lui: $\gamma\vec c$.
>
> **Pasul 6 — lipiți bucățile.** Regula triunghiului: $\vec{OP} = \vec{OP_1} + \vec{P_1P} = (\alpha\vec a + \beta\vec b) + \gamma\vec c$.
>
> **Pe ce se bazează:** teorema 6.9 (descompunerea în plan), [[Raportul a doi vectori coliniari#3. Teorema 5.3 — criteriul de coliniaritate|criteriul de coliniaritate]] și [[Adunarea vectorilor. Regula triunghiului și a poligonului|regula triunghiului]].
>
> **Ce să verificați singuri pe figură:** de ce paralela prin $P$ la $(OC)$ **sigur** întâlnește planul $(OAB)$? (Răspuns: o dreaptă care nu întâlnește un plan e paralelă cu el; dar o paralelă la $(OC)$ paralelă cu $(OAB)$ ar face ca $\vec c$ să fie paralel cu planul, adică $\vec a, \vec b, \vec c$ coplanari — exclus prin ipoteză.)

> [!note] Precizare: cazul 1 e inclus în cazul 2
> Manualul tratează separat situația $P \in (OA)$, dar construcția din cazul general funcționează și atunci: paralela prin $P$ la $(OC)$ taie planul chiar în $P$, deci $P_1 = P$ și $\gamma = 0$. Separarea cazurilor e doar o prudență a manualului, ca să nu apară întrebarea „ce faci dacă $P_1$ coincide cu $O$?" — caz în care $\alpha = \beta = 0$.

### Demonstrația — unicitatea

Să demonstrăm că numerele $\alpha$, $\beta$ și $\gamma$, care satisfac egalității (1), se determină în mod unic. Să presupunem că prin careva altă metodă am determinat numerele $\alpha_1$, $\beta_1$ și $\gamma_1$, care de asemenea satisfac egalității (1), adică $\vec p = \alpha_1\vec a + \beta_1\vec b + \gamma_1\vec c$. Din ultima egalitate și din (1) avem:

$$
\alpha\vec a + \beta\vec b + \gamma\vec c = \alpha_1\vec a + \beta_1\vec b + \gamma_1\vec c \iff (\alpha - \alpha_1)\vec a + (\beta - \beta_1)\vec b + (\gamma - \gamma_1)\vec c = \vec 0. \tag{2}
$$

Deoarece vectorii $\vec a$, $\vec b$ și $\vec c$ nu-s coplanari, atunci acești vectori sunt liniar independenți și prin urmare egalitatea (2) are loc atunci și numai atunci când $\alpha = \alpha_1$, $\beta = \beta_1$ și $\gamma = \gamma_1$. Teorema 16.1 este demonstrată. $\blacksquare$

> [!example]- Pas cu pas — de ce independența dă unicitatea
> **Pasul 1 — două scrieri ale aceluiași vector.** Presupunem că $\vec p$ ar avea două seturi de coeficienți.
>
> **Pasul 2 — scădeți-le.** Diferența celor două scrieri e $\vec p - \vec p = \vec 0$, deci obținem o combinație liniară a lui $\vec a, \vec b, \vec c$ egală cu vectorul nul — relația (2).
>
> **Pasul 3 — folosiți ipoteza.** Trei vectori necoplanari sunt liniar independenți ([[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.11 — trei vectori|teorema 6.11]]). Pentru vectori independenți, singura combinație egală cu $\vec 0$ e cea **trivială**: toți coeficienții nuli.
>
> **Pasul 4 — concluzia.** $\alpha - \alpha_1 = 0$, $\beta - \beta_1 = 0$, $\gamma - \gamma_1 = 0$.
>
> **Ce s-ar strica fără ipoteză.** Dacă $\vec a, \vec b, \vec c$ ar fi coplanari, de exemplu $\vec c = \vec a + \vec b$, atunci $\vec a + \vec b - \vec c = \vec 0$ e o combinație netrivială, iar orice vector din plan s-ar scrie în infinit de moduri: $\vec a + \vec b = \vec c = \tfrac12\vec a + \tfrac12\vec b + \tfrac12\vec c = \dots$ Iar un vector din afara planului nu s-ar putea scrie deloc.

> [!check] Paralela cu cazul plan
> | | Planul ($V_2$, §9) | Spațiul ($V_3$, §16) |
> |---|---|---|
> | ipoteza | $\vec a, \vec b$ necoliniari | $\vec a, \vec b, \vec c$ necoplanari |
> | concluzia | $\vec p = \alpha\vec a + \beta\vec b$, unic | $\vec p = \alpha\vec a + \beta\vec b + \gamma\vec c$, unic |
> | figura | paralelogramul | paralelipipedul |
> | numărul de vectori | 2 | 3 |

## 2. Consecința 16.2 — patru vectori sunt întotdeauna prea mulți

> [!check] Consecința 16.2
> Orice sistem ce conține mai mult decât trei vectori este liniar dependent.

**Demonstrație.** Este suficient să cercetăm sistemul format din patru vectori:

$$
\vec a,\ \vec b,\ \vec c \ \text{și}\ \vec d. \tag{3}
$$

Dacă vectorii $\vec a$, $\vec b$ și $\vec c$ sunt coplanari, atunci acești vectori sunt liniar dependenți și prin urmare sistemul (3) este liniar dependent. Dacă însă vectorii $\vec a$, $\vec b$ și $\vec c$ nu-s coplanari, atunci conform teoremei 16.1 vectorul $\vec d$ este o combinație liniară a vectorilor $\vec a$, $\vec b$ și $\vec c$. Deci sistemul (3) este liniar dependent. Consecința 16.2 este demonstrată. $\blacksquare$

![figură](/geometrie-analitica/16%20Spa%C8%9Biul%20V3%20%C8%99i%20baza%20lui/Figuri/fig-consecinta-16-2.svg)
*fig. 3 — cele două cazuri ale demonstrației: dependența vine fie din interiorul lui $\{\vec a, \vec b, \vec c\}$, fie din $\vec d$*

> [!example]- Cum se citește figura — consecința 16.2
> **Pasul 1 — panoul stâng.** $\vec a$, $\vec b$, $\vec c$ stau toți în planul umbrit. Vectorul $\vec d$ poate ieși din plan — nu contează.
>
> **Pasul 2 — dependența e deja acolo.** Trei vectori coplanari sunt dependenți (teorema 6.11). Iar un sistem care **conține** un subsistem dependent e el însuși dependent ([[Teoremele fundamentale ale dependenței liniare#Teorema 6.7 — dependența se moștenește în sus|teorema 6.7]]): adăugarea lui $\vec d$ nu poate „repara" nimic.
>
> **Pasul 3 — panoul drept.** Acum $\vec a$, $\vec b$, $\vec c$ ies din orice plan comun și formează muchiile unui paralelipiped.
>
> **Pasul 4 — $\vec d$ e diagonala.** După teorema 16.1, $\vec d = \alpha\vec a + \beta\vec b + \gamma\vec c$, adică $\alpha\vec a + \beta\vec b + \gamma\vec c - 1\cdot\vec d = \vec 0$ — o combinație netrivială (coeficientul lui $\vec d$ e $-1 \ne 0$).
>
> **Pe ce se bazează:** teorema 16.1, teoremele 6.7 și 6.11.
>
> **Ce să verificați singuri pe figură:** de ce e suficient de demonstrat pentru **patru** vectori, și nu pentru cinci, șase…? (Răspuns: un sistem de cinci vectori conține unul de patru, care e dependent — teorema 6.7 face restul.)

## 3. Dimensiunea și baza lui $V_3$

Așadar, în spațiu există trei vectori liniar independenți (orice trei vectori necoplanari), însă orice patru vectori sunt deja liniar dependenți. Această proprietate ne arată că mulțimea vectorilor din spațiu formează un **spațiu vectorial de dimensiunea trei**, care se notează prin $V_3$.

> [!abstract] Definiția 16.3
> Orice **ternă ordonată** de vectori necoplanari din $V_3$ formează **bază** a acestui spațiu.

> [!warning] „Ordonată" contează
> $\{\vec a, \vec b, \vec c\}$ și $\{\vec b, \vec a, \vec c\}$ sunt baze **diferite**: același vector are în ele coordonatele în altă ordine. Exact ca în plan ([[Baza spațiului V2. Coordonatele vectorului#1. Baza|§9]]).

> [!check] Dimensiunea, în trei spații
> | Spațiul | Câți vectori independenți există | Câți sunt deja dependenți | Dimensiunea |
> |---|---|---|---|
> | $V_1$ — vectorii unei drepte | 1 (orice vector nenul) | 2 | 1 |
> | $V_2$ — vectorii unui plan | 2 (orice doi necoliniari) | 3 | 2 |
> | $V_3$ — vectorii spațiului | 3 (orice trei necoplanari) | 4 | 3 |
>
> Regula: **dimensiunea = numărul maxim de vectori independenți = numărul de vectori dintr-o bază.**

## Întrebări de control

1. De ce în demonstrația teoremei 16.1 paralela prin $P$ se duce la $(OC)$, și nu perpendicular pe planul $(OAB)$?
2. Vectorii $\vec a$, $\vec b$, $\vec c$ sunt coplanari. Dați un exemplu de vector $\vec p$ care **nu** se poate scrie ca $\alpha\vec a + \beta\vec b + \gamma\vec c$.
3. Pot patru vectori din spațiu să fie liniar independenți dacă unul dintre ei e nul? Dar dacă niciunul nu e nul?
4. Este $\{\vec a, \vec b, \vec a + \vec b\}$ o bază a lui $V_3$? De ce?
5. Ce rol joacă în demonstrația existenței teorema 6.9 din cazul plan?

## Legături

- Anterior: [[Rotația sistemului rectangular cartezian]]
- Continuare: [[Coordonatele vectorului în spațiul V3]]
- Se sprijină pe: [[Descompunerea unui vector după doi vectori necoliniari]], [[Coliniaritate, coplanaritate și dependență liniară]], [[Teoremele fundamentale ale dependenței liniare]], [[Spațiul V2. Vectori coplanari și dimensiunea planului]]
- Concepte: [[Spațiul V3]], [[Bază]], [[Coplanaritate]], [[Dependență liniară]]
