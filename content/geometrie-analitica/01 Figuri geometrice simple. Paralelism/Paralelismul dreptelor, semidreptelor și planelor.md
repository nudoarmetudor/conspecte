---
curs: geometrie-analitica
title: "Paralelismul dreptelor, semidreptelor și planelor"
capitol: 01 — Paralelismul dreptelor, semidreptelor și planelor
tip: lecție
nr: 2
status: complet
tags:
  - geometrie-analitică
  - paralelism
---

## 1. Paralelismul a două drepte

> [!abstract] Definiție
> Două drepte $a$ și $b$ se numesc **paralele** dacă sunt situate în unul și același plan și nu au puncte comune.
> Se notează $a \parallel b$.

Ambele condiții sunt esențiale: *coplanaritatea* și *lipsa punctelor comune*.

> [!info]- Completare — pozițiile relative a două drepte în spațiu
> Două drepte distincte din spațiu se pot afla în exact una dintre situațiile:
> 1. **concurente** — coplanare, cu un singur punct comun;
> 2. **paralele** — coplanare, fără puncte comune;
> 3. **necoplanare** (strâmbe) — nu există niciun plan care să le conțină pe amândouă; nu au puncte comune, dar **nu** sunt paralele.
>
> Cazul (3) arată de ce în definiție nu e suficient „nu au puncte comune".

## 2. Paralelismul semidreptelor și al segmentelor

> [!abstract] Definiție
> Semidreptele $[AB)$ și $[CD)$ (respectiv segmentele $[AB]$ și $[CD]$) se numesc **paralele** dacă dreptele $(AB)$ și $(CD)$ sunt paralele.

Paralelismul se transferă, așadar, de la dreapta-suport la orice porțiune a ei.

## 3. Paralelismul dreptei cu planul

> [!abstract] Definiție
> Dreapta $(AB)$ și planul $\sigma$ se numesc **paralele** dacă nu au niciun punct comun.
> Se notează $(AB) \parallel \sigma$.

> [!check] Criteriu de paralelism dreaptă–plan
> Dacă dreapta $(AB)$ nu este conținută în planul $\sigma$ și este paralelă cu o dreaptă situată în planul $\sigma$, atunci $(AB) \parallel \sigma$.

![figură](/geometrie-analitica/01%20Figuri%20geometrice%20simple.%20Paralelism/Figuri/fig-t-criteriu-dreapta-plan.svg)
*fig. T1 — criteriul dreaptă–plan: planul auxiliar $\tau$ și punctul imposibil $X$*

> [!example]- Cum se citește figura — criteriul de paralelism dreaptă–plan
> **Pasul 1 — ipotezele.** Planul gri $\sigma$ (jos) conține dreapta portocalie $d$. Dreapta albastră $(AB)$ este deasupra lui, paralelă cu $d$, și nu este conținută în $\sigma$.
>
> **Pasul 2 — construcția auxiliară.** Două drepte paralele sunt, prin definiție, coplanare: conturul gri punctat este planul $\tau$ care le conține pe $(AB)$ și pe $d$. Planele $\tau$ și $\sigma$ sunt distincte și au în comun exact dreapta $d$.
>
> **Pasul 3 — presupunerea absurdă (roșu).** Dacă $(AB)$ ar întâlni planul $\sigma$ într-un punct $X$, acesta ar fi în $\tau$ (fiind pe $(AB)$) și în $\sigma$ — deci pe $d$. Cercul roșu „$X$ ?” arată unde ar trebui să se afle.
>
> **Pasul 4 — contradicția și concluzia (violet).** Dar $(AB) \parallel d$ înseamnă că $(AB)$ și $d$ nu au puncte comune, deci un astfel de $X$ nu există: $(AB) \cap \sigma = \varnothing$, adică $(AB) \parallel \sigma$.
>
> **Pe ce se bazează:** [[Paralelismul dreptelor, semidreptelor și planelor#1. Paralelismul a două drepte|definiția dreptelor paralele]] (pasul 2: coplanare și fără puncte comune); [[Paralelismul dreptelor, semidreptelor și planelor#3. Paralelismul dreptei cu planul|definiția paralelismului dreaptă–plan]] (pasul 4); [[Plan|planul]] — două plane distincte cu un punct comun se taie după o dreaptă (pasul 2).
>
> **Ce să verificați singuri pe figură:** (1) cercul roșu stă chiar pe $d$ — orice punct comun lui $\tau$ și $\sigma$ trebuie să fie acolo; (2) coborâți în gând linia albastră până în $\sigma$: atunci $\tau$ ar coincide cu $\sigma$, pasul 2 nu mai funcționează — de aceea criteriul cere $(AB) \not\subset \sigma$ (avertismentul de mai jos).

> [!warning] Atenție
> Condiția $(AB) \not\subset \sigma$ este obligatorie: o dreaptă *conținută* în plan este paralelă cu multe drepte din acel plan, dar nu este paralelă cu planul (are cu el o infinitate de puncte comune).

> [!abstract] Definiție
> Semidreapta $[AB)$ (respectiv segmentul $[AB]$) și planul $\sigma$ se numesc **paralele** dacă dreapta $(AB)$ și planul $\sigma$ sunt paralele.

## 4. Paralelismul a două plane

> [!abstract] Definiție
> Două plane se numesc **paralele** dacă nu au niciun punct comun.
> Se notează $\sigma_1 \parallel \sigma_2$.

> [!check] Criteriu de paralelism a două plane
> Dacă două drepte concurente $a_1$ și $b_1$ din planul $\sigma_1$ sunt paralele respectiv cu două drepte concurente $a_2$ și $b_2$ din planul $\sigma_2$, atunci $\sigma_1 \parallel \sigma_2$.

![figură](/geometrie-analitica/01%20Figuri%20geometrice%20simple.%20Paralelism/Figuri/fig-t-criteriu-doua-plane.svg)
*fig. T2 — criteriul a două plane: dacă s-ar tăia, $a_2$ și $b_2$ ar deveni paralele*

> [!example]- Cum se citește figura — criteriul de paralelism a două plane
> **Pasul 1 — ipotezele (stânga).** În planul de jos $\sigma_1$ se taie $a_1$ (albastru) și $b_1$ (portocaliu) în $O_1$; în planul de sus $\sigma_2$ se taie $a_2 \parallel a_1$ și $b_2 \parallel b_1$ în $O_2$. Aceeași culoare înseamnă drepte paralele.
>
> **Pasul 2 — fiecare dreaptă de sus e paralelă cu planul de jos.** $a_2$ nu stă în $\sigma_1$ și e paralelă cu $a_1 \subset \sigma_1$, deci, după criteriul dreaptă–plan (fig. T1), $a_2 \parallel \sigma_1$. La fel $b_2 \parallel \sigma_1$.
>
> **Pasul 3 — presupunerea absurdă (dreapta).** Dacă planele s-ar tăia după o dreaptă $c$ (roșu punctat), atunci $a_2$ și $c$ ar fi ambele în $\sigma_2$, iar $a_2$ nu atinge $\sigma_1 \supset c$ — deci $a_2 \parallel c$. La fel $b_2 \parallel c$. Cele trei linii orizontale din dreapta arată această situație.
>
> **Pasul 4 — contradicția.** Din tranzitivitate, $a_2 \parallel b_2$ — dar în stânga se vede că $a_2$ și $b_2$ se taie în $O_2$. Deci $c$ nu există și $\sigma_1 \parallel \sigma_2$ (violet).
>
> **Pe ce se bazează:** [[Paralelismul dreptelor, semidreptelor și planelor#3. Paralelismul dreptei cu planul|criteriul de paralelism dreaptă–plan]] (pasul 2); [[Paralelismul dreptelor, semidreptelor și planelor#1. Paralelismul a două drepte|definiția dreptelor paralele]] (pasul 3); tranzitivitatea paralelismului din completarea de la [[Paralelismul dreptelor, semidreptelor și planelor#4. Paralelismul a două plane|§4]] (pasul 4); [[Paralelismul dreptelor, semidreptelor și planelor#4. Paralelismul a două plane|definiția planelor paralele]].
>
> **Ce să verificați singuri pe figură:** (1) fiecare dreaptă de sus are „perechea” ei de aceeași culoare jos; (2) desenați în gând $b_1$ și $b_2$ paralele cu $a_1$, $a_2$ (nu concurente): în pasul 4 nu mai apare nicio contradicție — de aceea criteriul cere drepte concurente.

> [!warning] Atenție
> Concurența dreptelor este esențială. Dacă $a_1 \parallel b_1$, condiția e satisfăcută și de plane care se intersectează — de aceea criteriul cere ca $a_1$ și $b_1$ să se intersecteze (deci să determine „două direcții" distincte în plan).

> [!info]- Completare — proprietăți folosite curent
> 1. **Unicitatea paralelei** (axioma paralelelor): printr-un punct exterior unei drepte trece o singură dreaptă paralelă cu ea, în planul determinat de punct și dreaptă.
> 2. **Tranzitivitatea**: dacă $a \parallel b$ și $b \parallel c$, atunci $a \parallel c$ (pentru drepte distincte). Analog pentru plane.
> 3. Dacă două plane paralele sunt intersectate de un al treilea plan, dreptele de intersecție sunt paralele.
> 4. Prin orice punct exterior unui plan trece un singur plan paralel cu acesta.
>
> Tranzitivitatea este cea care face ca relația de coorientare — și, mai departe, [[Echipolență|echipolența]] — să fie o relație de echivalență.

## Întrebări de control

1. De ce „două drepte fără puncte comune" nu este o definiție corectă a paralelismului în spațiu?
2. Care este diferența dintre *definiția* și *criteriul* de paralelism dreaptă–plan?
3. De ce în criteriul de paralelism a două plane dreptele trebuie să fie concurente?

## Legături

- Anterior: [[Figuri geometrice simple. Definiții și notare]]
- Continuare: [[Orientarea semidreptelor. Direcție]]
