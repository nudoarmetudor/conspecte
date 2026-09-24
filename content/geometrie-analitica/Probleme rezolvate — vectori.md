---
curs: geometrie-analitica
title: "Probleme rezolvate — vectori"
tip: exerciții
status: complet
sursa: completare (nu figurează în notițele de curs)
tags:
  - geometrie-analitică
  - vectori
  - exerciții
---

> [!info] Material adăugat
> Aceste probleme **nu** figurează în notițele de curs. Sunt aplicații clasice ale rezultatelor din §3–§6, alese ca să exerseze exact tehnicile predate. Fiecare soluție este desfăcută în pași și indică rezultatul folosit.

## 1. Suma vectorilor pe conturul unui poligon

**Enunț.** Fie $ABCDE$ un pentagon oarecare. Calculați $\vec{AB} + \vec{BC} + \vec{CD} + \vec{DE} + \vec{EA}$.

> [!example]- Soluție
> **Pasul 1.** Aplicăm repetat [[Adunarea vectorilor. Regula triunghiului și a poligonului#3. Relația lui Chasles|relația lui Chasles]] ($\vec{XY} + \vec{YZ} = \vec{XZ}$), de la stânga la dreapta:
> $$
> \vec{AB} + \vec{BC} = \vec{AC}, \quad \vec{AC} + \vec{CD} = \vec{AD}, \quad \vec{AD} + \vec{DE} = \vec{AE}
> $$
>
> **Pasul 2.** Rămâne $\vec{AE} + \vec{EA} = \vec{AA} = \vec{0}$.
>
> **Răspuns:** $\vec{0}$.
>
> **Generalizare.** Suma vectorilor laturilor oricărui poligon închis, parcurs într-un sens, este $\vec{0}$ — linia frântă se închide.

## 2. Vectorul medianei

**Enunț.** Fie $M$ mijlocul laturii $[BC]$ a triunghiului $ABC$. Arătați că
$$
\vec{AM} = \tfrac{1}{2}\left( \vec{AB} + \vec{AC} \right).
$$

> [!example]- Soluție
> **Pasul 1 — scriem $\vec{AM}$ în două feluri**, trecând prin $B$ și prin $C$ (Chasles):
> $$
> \vec{AM} = \vec{AB} + \vec{BM}, \qquad \vec{AM} = \vec{AC} + \vec{CM}
> $$
>
> **Pasul 2 — adunăm cele două relații:**
> $$
> 2\vec{AM} = \vec{AB} + \vec{AC} + \left( \vec{BM} + \vec{CM} \right)
> $$
>
> **Pasul 3 — folosim că $M$ e mijloc.** $M$ mijlocul lui $[BC]$ înseamnă $\vec{BM} = -\vec{CM}$ (lungimi egale, sensuri opuse), deci $\vec{BM} + \vec{CM} = \vec{0}$.
>
> **Pasul 4 — împărțim la 2:**
> $$
> \vec{AM} = \tfrac{1}{2}\left( \vec{AB} + \vec{AC} \right) \qquad \blacksquare
> $$
>
> **Rezultate folosite:** relația lui Chasles, [[Vector opus|vectorul opus]], [[Produsul vectorului la un număr|înmulțirea cu un scalar]].
>
> **Interpretare.** $\vec{AM}$ e jumătate din diagonala paralelogramului construit pe $\vec{AB}$ și $\vec{AC}$ — exact [[Regula paralelogramului|regula paralelogramului]].

## 3. Criteriul de coliniaritate a trei puncte

**Enunț.** Arătați că punctele $A$, $B$, $C$ sunt coliniare $\iff$ există $\lambda \in \mathbb{R}$ cu $\vec{AC} = \lambda\vec{AB}$ (unde $A \ne B$).

> [!example]- Soluție
> **($\Rightarrow$)** Dacă $A$, $B$, $C$ sunt coliniare, atunci segmentele $[AB]$ și $[AC]$ sunt pe aceeași dreaptă, deci $\vec{AB}$ și $\vec{AC}$ sunt [[Vectori coliniari|coliniari]]. Cum $\vec{AB} \ne \vec{0}$, [[Raportul a doi vectori coliniari#3. Teorema 5.3 — criteriul de coliniaritate|teorema 5.3]] dă $\vec{AC} = \lambda\vec{AB}$.
>
> **($\Leftarrow$)** Dacă $\vec{AC} = \lambda\vec{AB}$, atunci $\vec{AC} \parallel \vec{AB}$. Cei doi vectori au **originea comună** $A$, deci reprezentanții lor sunt pe aceeași dreaptă prin $A$ — vezi [[Coliniaritatea și orientarea vectorilor#De ce se numesc „coliniari"|argumentul originii comune]]. Prin urmare $C$ e pe dreapta $(AB)$. $\blacksquare$
>
> **De ce e nevoie de $A \ne B$.** Dacă $A = B$, atunci $\vec{AB} = \vec{0}$ și $\lambda\vec{AB} = \vec{0}$ pentru orice $\lambda$ — criteriul ar da $C = A$, ceea ce nu caracterizează coliniaritatea.

## 4. Diagonalele paralelogramului se înjumătățesc

**Enunț.** În paralelogramul $ABCD$, fie $O$ mijlocul diagonalei $[AC]$. Arătați că $O$ este și mijlocul lui $[BD]$.

> [!example]- Soluție
> **Pasul 1 — traducem ipoteza.** $ABCD$ paralelogram $\iff \vec{AB} = \vec{DC}$.
>
> **Pasul 2 — folosim afirmația din §3.** Din $\vec{AB} = \vec{DC}$ rezultă $\vec{AD} = \vec{BC}$ (vezi [[Vectori#3. Egalitatea vectorilor|regula schimbului de mijloc]]).
>
> **Pasul 3 — calculăm $\vec{AO}$ pe două drumuri.** Fie $O$ mijlocul lui $[AC]$, deci $\vec{AO} = \tfrac{1}{2}\vec{AC} = \tfrac{1}{2}(\vec{AB} + \vec{BC})$.
>
> **Pasul 4 — calculăm mijlocul lui $[BD]$.** Notăm $O'$ acest mijloc:
> $$
> \vec{AO'} = \vec{AB} + \vec{BO'} = \vec{AB} + \tfrac{1}{2}\vec{BD} = \vec{AB} + \tfrac{1}{2}(\vec{BA} + \vec{AD}) = \vec{AB} - \tfrac{1}{2}\vec{AB} + \tfrac{1}{2}\vec{AD}
> $$
> $$
> = \tfrac{1}{2}\vec{AB} + \tfrac{1}{2}\vec{AD} = \tfrac{1}{2}(\vec{AB} + \vec{BC})
> $$
> (la ultimul pas am folosit pasul 2: $\vec{AD} = \vec{BC}$).
>
> **Pasul 5 — comparăm.** $\vec{AO} = \vec{AO'}$, deci $O = O'$. $\blacksquare$

## 5. Descompunerea după două laturi

**Enunț.** În triunghiul $ABC$, punctul $P$ împarte latura $[BC]$ astfel încât $\vec{BP} = \tfrac{2}{3}\vec{BC}$. Descompuneți $\vec{AP}$ după $\vec{AB}$ și $\vec{AC}$.

> [!example]- Soluție
> **Pasul 1 — Chasles prin $B$:** $\;\vec{AP} = \vec{AB} + \vec{BP} = \vec{AB} + \tfrac{2}{3}\vec{BC}$.
>
> **Pasul 2 — exprimăm $\vec{BC}$ prin cei doi vectori-bază:** $\;\vec{BC} = \vec{BA} + \vec{AC} = -\vec{AB} + \vec{AC}$.
>
> **Pasul 3 — înlocuim:**
> $$
> \vec{AP} = \vec{AB} + \tfrac{2}{3}(-\vec{AB} + \vec{AC}) = \left(1 - \tfrac{2}{3}\right)\vec{AB} + \tfrac{2}{3}\vec{AC}
> $$
>
> **Răspuns:** $\;\vec{AP} = \tfrac{1}{3}\vec{AB} + \tfrac{2}{3}\vec{AC}$.
>
> **Verificare de bun-simț.** Coeficienții au suma $1$ — semnul că $P$ e **pe segmentul** $[BC]$. Cum $P$ e mai aproape de $C$, coeficientul lui $\vec{AC}$ e mai mare. ✔
>
> **Unicitatea** acestei scrieri e garantată de [[Descompunerea unui vector după doi vectori necoliniari|teorema 6.9]] ($\vec{AB}$ și $\vec{AC}$ sunt necoliniari, fiind laturi ale unui triunghi).

## 6. Verificarea dependenței liniare

**Enunț.** Fie $\vec{u} = 2\vec{a} - \vec{b}$ și $\vec{v} = -6\vec{a} + 3\vec{b}$, unde $\vec{a}$, $\vec{b}$ sunt necoliniari. Este sistemul $\{\vec{u}, \vec{v}\}$ liniar dependent?

> [!example]- Soluție
> **Pasul 1 — căutăm o relație.** Observăm că $\vec{v} = -3(2\vec{a} - \vec{b}) = -3\vec{u}$.
>
> **Pasul 2 — scriem combinația nulă.** $3\vec{u} + 1 \cdot \vec{v} = \vec{0}$, cu coeficienții $3$ și $1$ — nu toți nuli.
>
> **Pasul 3 — concluzia.** Conform [[Combinație liniară. Dependență și independență liniară|definiției 6.2]], sistemul este **liniar dependent**. Echivalent, prin [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.10 — doi vectori|teorema 6.10]]: $\vec{u}$ și $\vec{v}$ sunt coliniari.
>
> **Metoda generală.** Puneți $\alpha\vec{u} + \beta\vec{v} = \vec{0}$, înlocuiți și grupați după $\vec{a}$ și $\vec{b}$:
> $$
> (2\alpha - 6\beta)\vec{a} + (-\alpha + 3\beta)\vec{b} = \vec{0}
> $$
> Cum $\vec{a}$, $\vec{b}$ sunt necoliniari (deci **liniar independenți**), ambii coeficienți trebuie să fie nuli:
> $$
> \begin{cases} 2\alpha - 6\beta = 0 \\ -\alpha + 3\beta = 0 \end{cases}
> $$
> Sistemul are soluții nenule (de ex. $\alpha = 3$, $\beta = 1$) ⇒ dependent.
>
> **Reține tehnica:** *dependența unor combinații se reduce întotdeauna la un sistem de ecuații în coeficienți*, folosind independența bazei.

## 7. Trei vectori coplanari

**Enunț.** Arătați că $\vec{a}$, $\vec{b}$ și $\vec{c} = 3\vec{a} - 5\vec{b}$ sunt coplanari, oricare ar fi $\vec{a}$ și $\vec{b}$.

> [!example]- Soluție
> **Pasul 1.** Scriem relația sub forma unei combinații nule:
> $$
> 3\vec{a} - 5\vec{b} - \vec{c} = \vec{0}
> $$
>
> **Pasul 2.** Coeficienții sunt $3$, $-5$, $-1$ — nu toți nuli ($\sum \alpha_i^2 = 9 + 25 + 1 = 35 \ne 0$). Deci sistemul $\{\vec{a}, \vec{b}, \vec{c}\}$ este liniar dependent.
>
> **Pasul 3.** Prin [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.11 — trei vectori|teorema 6.11]], trei vectori liniar dependenți sunt **coplanari**. $\blacksquare$
>
> **Observație.** Nu a fost nevoie de niciun desen. Aceasta este puterea traducerii geometrie → algebră: o proprietate spațială se verifică numărând coeficienți.

## Legături

- Recapitulare: [[Recapitulare — vectori]]
- Index: [[Geometrie analitică în plan]]
