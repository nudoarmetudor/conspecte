---
title: "Notații și simboluri"
tip: referință
status: complet
tags:
  - geometrie-analitică
  - notații
  - referință
---

## Figuri geometrice

| Simbol | Se citește | Observații |
|---|---|---|
| $A$, $B$, $C$ | punct | litere mari latine |
| $a$, $b$, $c$ | dreaptă | litere mici latine |
| $(AB)$ | dreapta determinată de $A$ și $B$ | nemărginită în ambele sensuri |
| $\alpha,\ \beta,\ \gamma,\ \sigma,\ \tau,\ \pi$ | plan | litere mici grecești |
| $(ABC)$ | planul determinat de trei puncte necoliniare | |
| $h,\ k,\ l,\ m$ | semidreaptă | litere mici intermediare |
| $[OA)$ | semidreapta cu originea $O$ ce trece prin $A$ | prima literă = originea |
| $[AB]$ | segmentul cu extremitățile $A$ și $B$ | $[AB] = [BA]$ ca mulțime |
| $AB$ | lungimea segmentului $[AB]$ | fără paranteze |

Incluziunile: $[AB] \subset [AB) \subset (AB)$.

## Relații geometrice

| Simbol | Se citește |
|---|---|
| $a \parallel b$ | dreapta $a$ este paralelă cu dreapta $b$ |
| $(AB) \parallel \sigma$ | dreapta $(AB)$ este paralelă cu planul $\sigma$ |
| $\sigma_1 \parallel \sigma_2$ | planele $\sigma_1$ și $\sigma_2$ sunt paralele |
| $[O_1A_1) \uparrow\uparrow [O_2A_2)$ | semidrepte coorientate (la fel orientate) |
| $[O_1A_1) \uparrow\downarrow [O_2A_2)$ | semidrepte opus orientate |
| $\overline{AB} \overset{\omega}{=} \overline{CD}$ | segmentele orientate sunt echipolente |

## Segmente orientate și vectori

| Simbol | Se citește |
|---|---|
| $\overline{AB}$ | segmentul orientat cu originea $A$ și extremitatea $B$ |
| $\overline{AA}$ | segmentul orientat nul |
| $\lvert \overline{AB} \rvert$ | lungimea (modulul) segmentului orientat |
| $\vec{a}$, $\mathbf{a}$ | vector |
| $\vec{AB}$ | vectorul determinat de segmentul orientat $\overline{AB}$ |
| $\vec{0}$ | vectorul nul |
| $\lvert \vec{a} \rvert$ | modulul (lungimea) vectorului |
| $-\vec{a}$ | vectorul opus |
| $\vec{a} \parallel \vec{b}$ | vectorii sunt coliniari |
| $\vec{a} \not\parallel \vec{b}$ | vectorii nu sunt coliniari |
| $\vec{a} \uparrow\uparrow \vec{b}$ | vectori la fel orientați |
| $\vec{a} \uparrow\downarrow \vec{b}$ | vectori opus orientați |

> [!warning] Confuzia cea mai frecventă
> **Linie deasupra** = segment orientat (obiect concret): $\overline{AB}$.
> **Săgeată deasupra** = vector (clasă de echivalență): $\vec{AB}$.

## Operații cu vectori

| Simbol | Se citește |
|---|---|
| $\vec{a} + \vec{b}$ | suma vectorilor |
| $\vec{a} - \vec{b}$ | diferența vectorilor |
| $\alpha\vec{a}$ | produsul vectorului $\vec{a}$ cu numărul real $\alpha$ |
| $\dfrac{\vec{a}}{\vec{b}} = \lambda$ | raportul a doi vectori **coliniari** ($\vec{b} \ne \vec{0}$) |
| $H_O^k$ | omotetia de centru $O$ și coeficient $k$ |

## Dependență liniară și spații

| Simbol | Se citește |
|---|---|
| $\sigma = \{\vec{a}_1, \dots, \vec{a}_n\}$ | sistem finit de vectori |
| $\sigma'$ | subsistem al lui $\sigma$ |
| $\alpha_1, \alpha_2, \dots, \alpha_n$ | coeficienții unei combinații liniare |
| $\sum\limits_{i=1}^{n} \alpha_i\vec{a}_i$ | combinație liniară a sistemului |
| $\sum\limits_{i=1}^{n} \alpha_i^2 \ne 0$ | coeficienții nu sunt toți nuli (combinație **netrivială**) |
| $V$ | mulțimea (spațiul vectorial al) tuturor vectorilor |
| $V_1$, $V_2$ | vectorii unei drepte, respectiv ai unui plan |
| $W = \{\vec{0}\}$ | subspațiul nul |
| $L(\vec{a}, \vec{b})$ | subspațiul generat de $\vec{a}$ și $\vec{b}$ |
| $\mathbb{R}$ | mulțimea numerelor reale (scalarii) |

## Baze, repere și coordonate (§9–§10)

| Simbol | Se citește |
|---|---|
| $V_2$ | spațiul vectorilor din plan (dimensiunea 2) |
| $\{\vec{a}, \vec{b}\}$ | bază (pereche **ordonată** de vectori necoliniari) |
| $\vec{c} = \{\alpha;\ \beta\}_{\{\vec{a},\vec{b}\}}$ | coordonatele lui $\vec{c}$ în baza $\{\vec{a}, \vec{b}\}$ |
| $\vec{e}_1,\ \vec{e}_2$ | vectorii bazei unui reper |
| $\vec{i},\ \vec{j}$ | vectorii unitari, perpendiculari, ai reperului rectangular cartezian |
| $R = \{O, \vec{e}_1, \vec{e}_2\}$ sau $\{O, E_1, E_2\}$ | reper afin |
| $(xOy)$, $O\vec{e}_1\vec{e}_2$ | sistem afin de coordonate |
| $(Ox)$, $(Oy)$ | axa absciselor, axa ordonatelor |
| $\vec{e}_1 \perp \vec{e}_2$ | vectori perpendiculari |
| $\widehat{(\vec{a}, \vec{b})}$ | unghiul dintre $\vec a$ și $\vec b$ — vezi precizarea de la §13 |
| $P_{(Ox)}\vec{a}$ | proiecția **geometrică** (vector) a lui $\vec{a}$ pe $(Ox)$ |
| $\operatorname{pr}_{(Ox)}\vec{a}$ | proiecția **algebrică** (număr) a lui $\vec{a}$ pe $(Ox)$ |
| $\vec{a} = \{x;\ y\}$ | coordonatele vectorului (acolade) |
| $M(x;\ y)$ | coordonatele punctului (paranteze rotunde) |
| $\vec{OM}$ | raza vectoare a punctului $M$ |
| $\begin{vmatrix} x_1 & y_1 \\ x_2 & y_2 \end{vmatrix}$ | determinantul $x_1y_2 - x_2y_1$ |
| $\lambda = \dfrac{\vec{M_1M_0}}{\vec{M_0M_2}}$ | raportul în care $M_0$ împarte $\overline{M_1M_2}$ ($\lambda \ne -1$) |

## Metrică, coordonate polare și produs scalar (§11–§13)

| Simbol | Se citește |
|---|---|
| $R = \{O, \vec{i}, \vec{j}\}$ | reper rectangular cartezian ($\lvert\vec i\rvert = \lvert\vec j\rvert = 1$, $\vec i \perp \vec j$) |
| $\varphi$ | unghiul dintre $\vec{i}$ și vectorul dat |
| $\rho(A, B)$ | distanța dintre punctele $A$ și $B$ |
| $R = \{O, \vec{i}\}$ | reper **polar** (un singur vector de bază) |
| $M(r;\ \varphi)$ | coordonatele polare: rază polară și unghi polar |
| $[OE)$ | axa polară; $O$ — polul |
| $(\vec{a}, \vec{b})$ | **produsul scalar** — un **număr**, nu un vector |
| $\widehat{(\vec{a}, \vec{b})}$ | unghiul **neorientat** dintre vectori, $\in [0;\ \pi]$ (§13) |
| $\vec{a}^{\,2}$ | pătratul scalar, $= (\vec a, \vec a) = \lvert\vec a\rvert^2$ |
| $\vec{a} \perp \vec{b}$ | vectori reciproc perpendiculari, $\widehat{(\vec a, \vec b)} = \pi/2$ |
| $\{\vec i, \vec j\}$ ortonormată | bază ortogonală **și** normată — ipoteza teoremei 13.5 |

> [!warning] Aceleași paranteze, trei înțelesuri
> | Scriere | Ce este |
> |---|---|
> | $M(x;\ y)$ | coordonatele unui **punct** (punct-virgulă între ele) |
> | $\widehat{(\vec a, \vec b)}$ | **unghiul** dintre doi vectori (accent circumflex deasupra) |
> | $(\vec a, \vec b)$ | **produsul scalar** — un număr |
>
> Alte manuale scriu produsul scalar $\vec a \cdot \vec b$ sau $\langle \vec a, \vec b \rangle$. Aici se păstrează notația cursului.

> [!note] Unghi neorientat (§13) vs. unghi orientat (§14)
> În §13, $\widehat{(\vec a, \vec b)}$ este un unghi **fără semn**, cuprins între $0$ și $\pi$, cu $\widehat{(\vec a, \vec b)} = \widehat{(\vec b, \vec a)}$.
> În §14, aceeași notație capătă **semn** (pozitiv dacă baza $\{\vec a, \vec b\}$ este dreaptă, negativ dacă e stângă). Verificați întotdeauna paragraful în care vă aflați.

## Sintaxă LaTeX folosită în vault

| Se scrie | Se afișează |
|---|---|
| `$\overline{AB}$` | $\overline{AB}$ |
| `$\vec{AB}$` | $\vec{AB}$ |
| `$a \parallel b$` / `$a \not\parallel b$` | $a \parallel b$ / $a \not\parallel b$ |
| `$\uparrow\uparrow$` / `$\uparrow\downarrow$` | $\uparrow\uparrow$ / $\uparrow\downarrow$ |
| `$\overset{\omega}{=}$` | $\overset{\omega}{=}$ |
| `$\lvert \vec{a} \rvert$` | $\lvert \vec{a} \rvert$ |
| `$\sum_{i=1}^{n} \alpha_i^2$` | $\sum_{i=1}^{n} \alpha_i^2$ |
| `$\sigma_1$`, `$\vec{a}_1$` | $\sigma_1$, $\vec{a}_1$ |
| `$\iff$`, `$\Rightarrow$` | $\iff$, $\Rightarrow$ |
| `$\widehat{(\vec{a}, \vec{b})}$` | $\widehat{(\vec{a}, \vec{b})}$ |
| `$\operatorname{pr}_{(Ox)}\vec{a}$` | $\operatorname{pr}_{(Ox)}\vec{a}$ |
| `$\begin{vmatrix} a & b \\ c & d \end{vmatrix}$` | $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ |
| `$\blacksquare$` | $\blacksquare$ (sfârșit de demonstrație) |

> [!tip] De ce `\lvert … \rvert` și nu `|…|`
> În interiorul unui **tabel** Markdown, caracterul `|` separă coloanele și rupe formula. Comenzile `\lvert` și `\rvert` produc aceleași bare verticale, dar sunt sigure oriunde.

**Vezi:** [[Geometrie analitică în plan]], [[Recapitulare — vectori]]
