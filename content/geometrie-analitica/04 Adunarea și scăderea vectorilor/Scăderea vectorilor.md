---
curs: geometrie-analitica
title: "Scăderea vectorilor"
capitol: 04 — Adunarea și scăderea vectorilor
paragraf: §4
tip: lecție
nr: 4
status: complet
tags:
  - geometrie-analitică
  - vectori
  - scădere
---

## 1. Definiția diferenței

> [!abstract] Definiție
> Prin **diferența** $\vec{a} - \vec{b}$ a doi vectori $\vec{a}$ și $\vec{b}$ vom înțelege un al treilea vector $\vec{c}$, care **în sumă cu vectorul $\vec{b}$ dă vectorul $\vec{a}$**.

Din ultima definiție rezultă:

$$
\vec{a} - \vec{b} = \vec{c} \iff \vec{b} + \vec{c} = \vec{a}
$$

> [!note] Scăderea este definită ca operație inversă
> Nu definim scăderea printr-o construcție, ci prin **ecuația** pe care trebuie s-o rezolve. Abia apoi arătăm că soluția există, este unică și se construiește ușor.

> [!tip] Existență și unicitate
> Se poate demonstra că pentru orice doi vectori $\vec{a}$ și $\vec{b}$ **întotdeauna există și este unică** diferența lor $\vec{a} - \vec{b} = \vec{c}$.

## 2. Construcția diferenței

Fie dați vectorii $\vec{a}$ și $\vec{b}$. Construim $\vec{OA} = \vec{a}$ și $\vec{OB} = \vec{b}$ din aceeași origine $O$.

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-diferenta-vectorilor.svg)
*fig. 1 — vectorul diferență $\vec{BA} = \vec{a} - \vec{b}$*

> [!check] Regula
> Vectorul diferență are **originea în extremitatea vectorului $\vec{b}$** (scăzătorul) și **extremitatea în extremitatea vectorului $\vec{a}$** (descăzutul):
> $$
> \vec{a} - \vec{b} = \vec{BA}
> $$

**Verificare.** După [[Adunarea vectorilor. Regula triunghiului și a poligonului#3. Relația lui Chasles|relația lui Chasles]]: $\vec{OB} + \vec{BA} = \vec{OA}$, adică $\vec{b} + \vec{BA} = \vec{a}$. Deci $\vec{BA}$ satisface exact definiția diferenței. $\blacksquare$

> [!example]- Cum se citește figura — regula diferenței
> **Pasul 1 — originea comună.** $\vec{OA} = \vec{a}$ (albastru) și $\vec{OB} = \vec{b}$ (portocaliu) pornesc din același punct $O$.
>
> **Pasul 2 — săgeata diferenței (violet).** Unește vârfurile: pleacă din $B$ (vârful scăzătorului) și ajunge în $A$ (vârful descăzutului).
>
> **Pasul 3 — verificarea prin drum.** Parcurgeți $O \to B \to A$: portocaliu, apoi violet. Ajungeți în $A$, unde ajunge și albastrul singur: $\vec{b} + \vec{BA} = \vec{a}$.
>
> **Pasul 4 — concluzia.** Aceasta este exact definiția diferenței, deci $\vec{BA} = \vec{a} - \vec{b}$.
>
> **Pe ce se bazează:** [[#1. Definiția diferenței|definiția diferenței]] (ce trebuie verificat); [[Adunarea vectorilor. Regula triunghiului și a poligonului#3. Relația lui Chasles|relația lui Chasles]] $\vec{OB} + \vec{BA} = \vec{OA}$ (pasul 3).
>
> **Ce să verificați singuri pe figură:** (1) vârful săgeții violet atinge vârful săgeții albastre, nu pe cel al portocaliei; (2) completați în gând paralelogramul pe $\vec{a}$ și $\vec{b}$: violetul este diagonala care **nu** trece prin $O$.

> [!example]- Pas cu pas — cum se ține minte sensul săgeții
> Trei moduri de a nu greși niciodată:
>
> **1. Prin definiție.** $\vec{a} - \vec{b}$ este vectorul care, adunat la $\vec{b}$, dă $\vec{a}$. Puneți degetul pe vârful lui $\vec{b}$: de acolo trebuie să plece săgeata, ca s-o continue pe $\vec{b}$ și să ajungă unde ajunge $\vec{a}$.
>
> **2. Prin Chasles.** $\vec{BA} = \vec{BO} + \vec{OA} = -\vec{b} + \vec{a} = \vec{a} - \vec{b}$. Litera din **stânga** notației ($B$) e originea, cea din **dreapta** ($A$) e vârful — iar $A$ e vârful descăzutului.
>
> **3. Mnemotehnic.** În $\vec{a} - \vec{b}$ săgeata arată spre **primul** vector scris. „Vârful spre descăzut."
>
> **Test rapid.** Dacă ați desenat corect, verificați cu ochiul: $\vec{b} + (\vec{a} - \vec{b})$ trebuie să vă ducă exact în vârful lui $\vec{a}$, mergând cap la cap.

> [!warning] Atenție la sens
> Săgeata merge **de la scăzător spre descăzut**: în $\vec{a} - \vec{b}$, de la vârful lui $\vec{b}$ spre vârful lui $\vec{a}$. O greșeală frecventă este să se deseneze invers, obținând $\vec{b} - \vec{a}$.

## 3. Scăderea ca adunare cu opusul

$$
\vec{a} - \vec{b} = \vec{a} + (-\vec{b})
$$

![figură](/geometrie-analitica/04%20Adunarea%20%C8%99i%20sc%C4%83derea%20vectorilor/Figuri/fig-diferenta-ca-suma.svg)
*fig. 2 — depunem $-\vec{b}$ din extremitatea lui $\vec{a}$*

> [!info]- Justificare
> $\vec{b} + \bigl(\vec{a} + (-\vec{b})\bigr) = \vec{a} + \bigl(\vec{b} + (-\vec{b})\bigr) = \vec{a} + \vec{0} = \vec{a}$, folosind comutativitatea și asociativitatea. Deci $\vec{a} + (-\vec{b})$ satisface definiția diferenței, iar prin unicitate coincide cu $\vec{a} - \vec{b}$.

> [!example]- Cum se citește figura — scăderea ca adunare cu opusul
> **Pasul 1 — datele.** $\vec{a}$ (albastru) din $O$; $\vec{b}$ apare punctat (portocaliu), doar ca referință.
>
> **Pasul 2 — opusul.** Din vârful $A$ se depune $-\vec{b}$ (portocaliu plin): aceeași lungime și direcție ca $\vec{b}$, sens contrar.
>
> **Pasul 3 — suma (violet).** Violetul unește $O$ cu vârful lui $-\vec{b}$: regula triunghiului dă $\vec{a} + (-\vec{b})$.
>
> **Pasul 4 — comparația cu fig. 1.** Săgeata violet este paralelă, egală și la fel orientată cu $\vec{BA}$ din fig. 1: același vector $\vec{a} - \vec{b}$, depus din $O$.
>
> **Pe ce se bazează:** [[Modulul vectorului. Vectorul opus#1. Vectorul opus|vectorul opus]]; [[Adunarea vectorilor. Regula triunghiului și a poligonului#2. Regula triunghiului|regula triunghiului]]; unicitatea diferenței ([[#1. Definiția diferenței|§1]]).
>
> **Ce să verificați singuri pe figură:** (1) săgeata portocalie punctată și cea plină sunt paralele, egale și opuse; (2) punctele $O$, $B$, $A$ și vârful violet formează un paralelogram — de aceea violetul este o copie a lui $\vec{BA}$.

Cele două construcții din fig. 1 și fig. 2 dau **același vector**, doar depus din puncte diferite.

## 4. Cele două diagonale ale paralelogramului

Pe un singur desen — paralelogramul construit pe $\vec{a}$ și $\vec{b}$ aduși la originea comună $O$ — citim ambele operații:

| Diagonala | Vectorul |
|---|---|
| din $O$ spre vârful opus | $\vec{a} + \vec{b}$ |
| de la vârful lui $\vec{b}$ spre vârful lui $\vec{a}$ | $\vec{a} - \vec{b}$ |

## Întrebări de control

1. De ce definiția diferenței nu spune cum se construiește vectorul $\vec{c}$?
2. Demonstrați unicitatea diferenței. *(Indicație: dacă $\vec{b} + \vec{c}_1 = \vec{b} + \vec{c}_2$, adunați $-\vec{b}$ în ambele părți.)*
3. Ce este $\vec{a} - \vec{a}$? Dar $\vec{0} - \vec{a}$?
4. În paralelogramul $OACB$ cu $\vec{OA} = \vec{a}$, $\vec{OB} = \vec{b}$, exprimați $\vec{BA}$ și $\vec{AB}$ prin $\vec{a}$ și $\vec{b}$.
5. Când $|\vec{a} - \vec{b}| = |\vec{a}| + |\vec{b}|$?

## Legături

- Anterior: [[Proprietățile adunării vectorilor]]
- Continuare: [[Produsul vectorului la un număr]]
- Concepte: [[Vector opus]]
