---
curs: geometrie-analitica
title: "Combinație liniară. Dependență și independență liniară"
capitol: 06 — Dependența și independența liniară
paragraf: §6
tip: lecție
nr: 1
status: complet
sursa: PDF curs (AP_10_09_2026), §6, definițiile 6.1–6.4
tags:
  - geometrie-analitică
  - vectori
  - dependență-liniară
---

Considerăm sistemul finit $\sigma$ de vectori $\vec{a}_1, \vec{a}_2, \vec{a}_3, \dots, \vec{a}_n$.

## 1. Combinație liniară

> [!abstract] Definiția 6.1
> Vom spune că vectorul $\vec{a}$ este o **combinație liniară** a vectorilor sistemului $\sigma$, dacă există așa numere reale $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_n$ încât
> $$
> \vec{a} = \alpha_1\vec{a}_1 + \alpha_2\vec{a}_2 + \alpha_3\vec{a}_3 + \dots + \alpha_n\vec{a}_n \tag{1}
> $$

> [!tip] Ce înseamnă concret
> „Combinație liniară" = tot ce se poate obține din vectorii dați folosind **doar** cele două operații pe care le cunoaștem: [[Produsul vectorului la un număr|înmulțirea cu un număr]] și [[Adunarea vectorilor. Regula triunghiului și a poligonului|adunarea]]. Numerele $\alpha_i$ se numesc **coeficienți**.

## 2. Sistem liniar dependent

> [!abstract] Definiția 6.2
> Sistemul finit $\sigma$ se numește **liniar dependent**, dacă există așa numere reale $\alpha_1, \alpha_2, \alpha_3, \dots, \alpha_n$ **neegale cu zero simultan**, încât
> $$
> \alpha_1\vec{a}_1 + \alpha_2\vec{a}_2 + \alpha_3\vec{a}_3 + \dots + \alpha_n\vec{a}_n = \vec{0} \tag{2}
> $$

> [!note] Nota 6.3 — condiția „nu toți nuli", scrisă cu o formulă
> Faptul că numerele $\alpha_1, \alpha_2, \dots, \alpha_n$ nu-s egale simultan cu zero este echivalent cu următoarea condiție:
> $$
> \alpha_1^2 + \alpha_2^2 + \alpha_3^2 + \dots + \alpha_n^2 = \sum_{i=1}^{n} \alpha_i^2 \ne 0 \tag{3}
> $$
>
> Suma de pătrate este $0$ **exact** când toți termenii sunt $0$ — de aceea (3) este o rescriere comodă, calculabilă, a condiției „măcar un coeficient e nenul".

> [!example]- Pas cu pas — cum se citește condiția $\sum \alpha_i^2 \ne 0$
> **Pasul 1 — ce spune fiecare termen.** $\alpha_i^2 \ge 0$ pentru orice număr real, cu $\alpha_i^2 = 0$ **numai** dacă $\alpha_i = 0$.
>
> **Pasul 2 — ce spune suma.** O sumă de numere $\ge 0$ este $0$ doar dacă *fiecare* termen e $0$. (Dacă unul ar fi strict pozitiv, suma ar fi strict pozitivă — nu are cine să-l compenseze, pentru că nu există termeni negativi.)
>
> **Pasul 3 — negăm.** Deci:
> $$
> \sum_{i=1}^{n} \alpha_i^2 = 0 \iff \alpha_1 = \alpha_2 = \dots = \alpha_n = 0
> $$
> $$
> \sum_{i=1}^{n} \alpha_i^2 \ne 0 \iff \text{măcar un } \alpha_i \ne 0
> $$
>
> **Pasul 4 — de ce e utilă rescrierea.** „Măcar unul e nenul" este o afirmație cu *există*, greu de manipulat în calcule. „$\sum \alpha_i^2 \ne 0$" este o **inegalitate numerică** pe care o poți scrie, aduna și verifica direct — cum se și face în demonstrațiile teoremelor 6.6 și 6.7.
>
> **Capcană.** Nu confundați cu $\sum \alpha_i \ne 0$! Suma simplă poate fi $0$ cu coeficienți nenuli (de ex. $1 + (-1) = 0$). Tocmai de aceea se folosesc **pătratele**.

Partea stângă a egalității (2) cu condiția (3) se mai numește **combinație liniară netrivială** a vectorilor sistemului $\sigma$.

> [!tip] Reformulare
> Relația (2) înseamnă că sistemul $\sigma$ este liniar dependent atunci când $\vec{0}$ este o **combinație liniară netrivială** a vectorilor acestui sistem.
>
> Combinația **trivială** — cea cu toți coeficienții $0$ — dă întotdeauna $\vec{0}$, pentru orice sistem. Ea nu spune nimic. Interesant este dacă $\vec{0}$ se poate obține și **altfel**.

## 3. Sistem liniar independent

> [!abstract] Definiția 6.4
> Dacă egalitatea (2) are loc **numai** atunci când $\alpha_1 = \alpha_2 = \alpha_3 = \dots = \alpha_n = 0$ $\left( \sum\limits_{i=1}^{n} \alpha_i^2 = 0 \right)$, atunci sistemul $\sigma$ se numește **liniar independent**.

| | Liniar dependent | Liniar independent |
|---|---|---|
| $\vec{0}$ se scrie ca | combinație netrivială | doar trivial |
| Intuitiv | un vector „e de prisos" | fiecare vector aduce ceva nou |
| Formal | $\exists\, \alpha_i$ nu toți nuli cu $\sum \alpha_i \vec{a}_i = \vec{0}$ | $\sum \alpha_i \vec{a}_i = \vec{0} \Rightarrow$ toți $\alpha_i = 0$ |

## 4. Cazul unui singur vector

> [!check] Consecință imediată
> Sistemul $\{\vec{a}\}$, ce constă dintr-un singur vector, va fi liniar dependent atunci și numai atunci, când $\vec{a} = \vec{0}$.

> [!info]- De ce
> Dacă $\vec{a} = \vec{0}$, luăm $\alpha_1 = 1 \ne 0$ și avem $1 \cdot \vec{0} = \vec{0}$ — combinație netrivială, deci dependent.
> Invers, dacă $\alpha_1\vec{a} = \vec{0}$ cu $\alpha_1 \ne 0$, atunci $\lvert \alpha_1 \rvert \cdot \lvert \vec{a} \rvert = 0$, deci $\lvert \vec{a} \rvert = 0$, adică $\vec{a} = \vec{0}$.

![figură](/geometrie-analitica/06%20Dependen%C8%9Ba%20%C8%99i%20independen%C8%9Ba%20liniar%C4%83/Figuri/fig-t-un-singur-vector.svg)
*fig. T1 — sistemul cu un singur vector: $\vec{a} = \vec{0}$ față de $\vec{a} \ne \vec{0}$*

> [!example]- Cum se citește figura — consecința imediată (sistemul cu un singur vector)
> **Pasul 1 — stânga: $\vec{a} = \vec{0}$.** Cercul portocaliu gol este vectorul nul. Înmulțit cu $1$ rămâne cercul gol: $1 \cdot \vec{0} = \vec{0}$ cu coeficientul $1 \ne 0$ — combinație netrivială, deci sistem dependent.
>
> **Pasul 2 — dreapta: $\vec{a} \ne \vec{0}$.** Toate săgețile pornesc din aceeași origine (linia verticală punctată): albastrul este $\vec{a}$, violetele sunt $2\vec{a}$, $0{,}5\vec{a}$ și $-\vec{a}$.
>
> **Pasul 3 — căutăm $\vec{0}$ printre multipli.** Oricât de mic sau de negativ ar fi $\alpha \ne 0$, săgeata $\alpha\vec{a}$ are lungimea $\lvert \alpha \rvert \cdot \lvert \vec{a} \rvert > 0$. Singurul multiplu redus la un punct este $0 \cdot \vec{a}$ (punctul gri de jos).
>
> **Pasul 4 — concluzia.** $\alpha\vec{a} = \vec{0}$ doar pentru $\alpha = 0$, deci $\{\vec{a}\}$ este liniar independent.
>
> **Pe ce se bazează:** [[#2. Sistem liniar dependent|definiția 6.2]] și [[#3. Sistem liniar independent|definiția 6.4]]; [[Produsul vectorului la un număr#1. Definiția|definiția 5.1]] ($\lvert \alpha\vec{a} \rvert = \lvert \alpha \rvert \cdot \lvert \vec{a} \rvert$); [[Modulul vectorului. Vectorul opus#2. Modulul vectorului|modulul]] — $\lvert \vec{a} \rvert = 0$ doar pentru $\vec{a} = \vec{0}$.
>
> **Ce să verificați singuri pe figură:** (1) săgețile violet stau toate pe dreapta lui $\vec{a}$ — nicio înmulțire nu „iese” de pe ea; (2) imaginați-vă $\alpha = 0{,}01$: săgeata e minusculă, dar tot nu e un punct.

## Exemplu ilustrativ

![figură](/geometrie-analitica/06%20Dependen%C8%9Ba%20%C8%99i%20independen%C8%9Ba%20liniar%C4%83/Figuri/fig-dependenta-doi-vectori.svg)
*fig. 1 — doi vectori coliniari sunt întotdeauna liniar dependenți*

Dacă $\vec{b} = 2\vec{a}$, atunci $2\vec{a} + (-1)\vec{b} = \vec{0}$, cu coeficienții $\alpha_1 = 2$ și $\alpha_2 = -1$ — ambii nenuli. Sistemul $\{\vec{a}, \vec{b}\}$ este deci liniar dependent. Acesta e conținutul [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.10 — doi vectori|teoremei 6.10]].

## Întrebări de control

1. De ce condiția din definiția 6.2 este „nu toate nule" și nu „toate nenule"?
2. Poate un sistem care conține vectorul $\vec{0}$ să fie liniar independent?
3. Scrieți combinația trivială pentru un sistem de 3 vectori. Ce valoare are ea, întotdeauna?
4. Este sistemul $\{\vec{a}, \vec{a}\}$ liniar dependent? Justificați.
5. De ce se preferă scrierea (3) în locul formulării „măcar unul dintre $\alpha_i$ este nenul"?

## Legături

- Anterior: [[Raportul a doi vectori coliniari]]
- Continuare: [[Teoremele fundamentale ale dependenței liniare]]
- Concepte: [[Combinație liniară]], [[Dependență liniară]]
