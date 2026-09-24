---
curs: geometrie-analitica
title: "Reperul afin în plan. Tipuri de repere"
capitol: 09 — Spațiul V₂
paragraf: §9
tip: lecție
nr: 3
status: complet
sursa: manual „Geometrie analitică în plan", p. 40–41 (PDF p. 20)
tags:
  - geometrie-analitică
  - reper
  - coordonate
---

## 1. Reperul afin

De obicei vectorii de bază se notează prin $\vec{e}_1$ și $\vec{e}_2$. Fie vectorii de bază $\vec{e}_1$ și $\vec{e}_2$ aduși la **originea comună** $O$.

> [!abstract] Definiția 9.2
> Ansamblul $R = \{O,\ \vec{e}_1,\ \vec{e}_2\}$ se numește **reper afin în plan**.

Coordonatele unui vector $\vec{a}$ în baza $\{\vec{e}_1, \vec{e}_2\}$ se notează prin $x$ și $y$ și se scrie $\vec{a} = \{x;\ y\}$, ceea ce înseamnă că

$$
\vec{a} = x\,\vec{e}_1 + y\,\vec{e}_2 \tag{1}
$$

> [!tip] Bază vs. reper — ce aduce punctul $O$
> | | Bază $\{\vec{e}_1, \vec{e}_2\}$ | Reper $\{O, \vec{e}_1, \vec{e}_2\}$ |
> |---|---|---|
> | Conține | doi vectori | un **punct** + doi vectori |
> | Dă coordonate pentru | vectori | vectori **și puncte** |
>
> O bază e suficientă pentru vectori, pentru că vectorii sunt liberi. Punctele însă au poziție: ca să-i dăm unui punct o „adresă", avem nevoie de un **punct de referință**. Acesta este rolul originii $O$ — folosit efectiv în [[Coordonatele punctului. Raza vectoare|§10]].

## 2. Tipuri de repere

Reperul $R$ de mai sus se consideră **cel mai general**. În el vectorii $\vec{e}_1$ și $\vec{e}_2$ au, ca regulă, **module diferite**, iar măsura unghiului dintre ei este **arbitrară**. Prin condiții suplimentare se obțin repere particulare:

![figură](/geometrie-analitica/09%20Spa%C8%9Biul%20V2/Figuri/fig-tipuri-repere.svg)
*fig. 1 — cele patru tipuri de repere; liniuțele transversale marchează vectori de lungimi egale, pătratul — unghi drept*

> [!example]- Cum se citește figura — cele patru repere
> **Pasul 1 — două semne convenționale.** O **liniuță transversală** pe un vector înseamnă „acest vector are aceeași lungime ca vectorul marcat la fel". Un **pătrățel** în colțul dintre vectori înseamnă „unghi drept".
>
> **Pasul 2 — stânga-sus (afin).** Niciun semn: lungimi diferite, unghi oarecare. E cazul general.
>
> **Pasul 3 — dreapta-sus (cartezian).** Liniuțe pe ambii vectori, fără pătrățel: lungimi egale, unghi oarecare.
>
> **Pasul 4 — stânga-jos (rectangular).** Pătrățel, fără liniuțe: unghi drept, lungimi diferite.
>
> **Pasul 5 — dreapta-jos (rectangular cartezian).** Și liniuțe, și pătrățel — plus lungimea comună egală cu $1$; de aceea vectorii poartă nume speciale, $\vec{i}$ și $\vec{j}$.
>
> **Pe ce se bazează:** definițiile din manual (secțiunea 2). Panourile sunt ordonate astfel încât **fiecare condiție adăugată** să se vadă ca un semn nou pe desen.
>
> **Ce să verificați singuri pe figură:** acoperiți cu mâna panoul dreapta-jos. Puteți descrie ce semne ar trebui să apară pe el doar din cele trei panouri rămase?

| Reper | Condiție asupra lungimilor | Condiție asupra unghiului | Notare |
|---|---|---|---|
| **afin** | oarecare | oarecare | $\{O, \vec{e}_1, \vec{e}_2\}$ |
| **cartezian** | $\lvert\vec{e}_1\rvert = \lvert\vec{e}_2\rvert$ | oarecare | $\{O, \vec{e}_1, \vec{e}_2\}$ |
| **rectangular** | oarecare | $\vec{e}_1 \perp \vec{e}_2$ | $\{O, \vec{e}_1, \vec{e}_2\}$ |
| **rectangular cartezian** | $\lvert\vec{e}_1\rvert = \lvert\vec{e}_2\rvert = 1$ | $\vec{e}_1 \perp \vec{e}_2$ | $\{O, \vec{i}, \vec{j}\}$ |

> [!abstract] Definiții (manual)
> - Dacă $\lvert\vec{e}_1\rvert = \lvert\vec{e}_2\rvert$, reperul $R$ se numește **cartezian**.
> - Dacă $\vec{e}_1 \perp \vec{e}_2$, reperul $R$ se numește **rectangular**.
> - Dacă $\lvert\vec{e}_1\rvert = \lvert\vec{e}_2\rvert = 1$ și $\vec{e}_1 \perp \vec{e}_2$, reperul $R$ se numește **rectangular cartezian**. Vectorii unitari ai acestui reper se notează $\vec{i}$ și $\vec{j}$, iar reperul însuși — $R = \{O, \vec{i}, \vec{j}\}$.

> [!warning] Terminologia diferă de la o carte la alta
> Denumirile de mai sus sunt **cele din acest curs**. În alte manuale:
> - „reper cartezian" înseamnă uneori *orice* reper afin, alteori un reper *ortonormat*;
> - „rectangular cartezian" se numește adesea **ortonormat** (sau „ortonormal").
>
> La examen și în probleme folosiți definițiile de aici; când citiți alte surse, verificați întâi definiția.

> [!example]- Pas cu pas — cum se includ tipurile unul în altul
> **Pasul 1 — afin e cel mai general.** Orice reper (de oricare tip) este în primul rând afin: e format dintr-un punct și doi vectori necoliniari.
>
> **Pasul 2 — condițiile se adună.** „Cartezian" adaugă o condiție de lungime, „rectangular" adaugă o condiție de unghi. Un reper rectangular cartezian le îndeplinește pe amândouă, **plus** lungimea $1$.
>
> **Pasul 3 — schema incluziunilor.**
> $$
> \text{rectangular cartezian} \subset \text{cartezian} \cap \text{rectangular} \subset \text{afin}
> $$
>
> **Pasul 4 — incluziunea din stânga e strictă.** Luați $\lvert\vec{e}_1\rvert = \lvert\vec{e}_2\rvert = 2$ și $\vec{e}_1 \perp \vec{e}_2$. Reperul este **și** cartezian (lungimi egale), **și** rectangular (unghi drept), dar **nu** este rectangular cartezian, pentru că lungimile nu sunt $1$.
>
> **Pasul 5 — de ce contează.** Formulele pentru *lungimi* și *unghiuri* (distanța dintre două puncte etc.) sunt simple doar în reperul rectangular cartezian. Formulele *afine* — sumă, înmulțire cu un număr, coliniaritate, mijlocul unui segment — funcționează în **orice** reper. De aceea §10 lucrează intenționat în reperul general.

## Întrebări de control

1. De ce un reper conține un punct, iar o bază — nu?
2. Un reper cu $\lvert\vec{e}_1\rvert = 3$, $\lvert\vec{e}_2\rvert = 3$ și unghiul dintre ei de $60^\circ$ — ce tip este?
3. Poate un reper să fie rectangular cartezian fără să fie cartezian? Justificați.
4. Ce coordonate au $\vec{e}_1$ și $\vec{e}_2$ în reperul $R = \{O, \vec{e}_1, \vec{e}_2\}$?
5. De ce este util să lucrăm în reperul afin general, deși în practică se folosește cel rectangular cartezian?

## Legături

- Anterior: [[Baza spațiului V2. Coordonatele vectorului]]
- Continuare: [[Sistemul afin de coordonate. Axe și cadrane]] (§10)
- Concepte: [[Reper afin]], [[Bază]]
