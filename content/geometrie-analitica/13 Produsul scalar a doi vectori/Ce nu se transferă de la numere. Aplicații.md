---
curs: geometrie-analitica
title: "Ce nu se transferă de la numere. Aplicații"
capitol: 13 — Produsul scalar a doi vectori
paragraf: §13
tip: lecție
nr: 4
status: complet
sursa: manual „Geometrie analitică în plan", p. 59–60 (PDF p. 28–29)
tags:
  - geometrie-analitică
  - produs-scalar
  - capcane
  - aplicații
---

> [!tip] Despre ce este lecția
> Teorema 13.3 a arătat că produsul scalar este comutativ, omogen și distributiv — exact ca înmulțirea numerelor. De aici la concluzia „deci se comportă în toate privințele ca înmulțirea" e un pas mic, și **greșit**.
>
> Manualul avertizează explicit: *„cercetând proprietățile produsului scalar a doi vectori, am putea face o concluzie greșită precum că proprietățile produsului scalar a doi vectori coincid cu proprietățile produsului numerelor."* Lecția strânge la un loc cele trei deosebiri, apoi aplică tot aparatul la o problemă completă.

## 1. Trei proprietăți pe care produsul scalar nu le are

> [!warning] 1) Rezultatul este de altă natură
> Produsul scalar a doi vectori este **un număr**, adică un obiect de **altă natură** decât factorii, pe când produsul a două numere este de asemenea un număr, adică un obiect de aceeași natură.
>
> **Ce consecință are.** Operația nu se poate **itera**. Pentru numere, $\alpha\beta\gamma$ are sens. Pentru vectori, $(\vec a, \vec b)$ e un număr, deci nu mai poate fi al doilea argument al unui nou produs scalar. Din același motiv nu există „puteri" $\vec a^{\,3}$.
>
> **Ce operație există totuși.** $(\vec a, \vec b)\cdot\vec c$ — număr înmulțit cu vector — este perfect definită, dar este [[Produsul vectorului la un număr|înmulțirea cu un scalar]] din §5, nu un produs scalar.

> [!warning] 2) Un produs nul nu obligă niciun factor să fie nul
> Dacă $\alpha$ și $\beta$ sunt numere reale, atunci din egalitatea $\alpha\cdot\beta = 0$ urmează că cel puțin unul din numerele $\alpha$ sau $\beta$ este egal cu zero. **Așa proprietate nu este corectă pentru produsul scalar a doi vectori.**
>
> **Contraexemplu.** $\vec a = \{1;\ 0\}$, $\vec b = \{0;\ 1\}$. Niciunul nu este nul, dar $(\vec a, \vec b) = 1\cdot 0 + 0\cdot 1 = 0$.
>
> **Ce se pierde practic.** Din $(\vec a, \vec b) = (\vec a, \vec c)$ **nu** rezultă $\vec b = \vec c$. Se poate doar conchide $(\vec a, \vec b - \vec c) = 0$, adică $\vec a \perp (\vec b - \vec c)$. Cu alte cuvinte: **nu se poate „simplifica prin $\vec a$"**.

> [!warning] 3) Nu este asociativ
> Pentru orice numere reale $\alpha$, $\beta$ și $\gamma$ are loc egalitatea $(\alpha\beta)\gamma = \alpha(\beta\gamma)$. Dacă însă $\vec a$, $\vec b$ și $\vec c$ sunt trei vectori arbitrari, atunci
> $$
> \big((\vec a, \vec b),\ \vec c\big) \neq \big(\vec a,\ (\vec b, \vec c)\big).
> $$
>
> Într-adevăr, fie $\vec p = (\vec a, \vec b)\,\vec c$ și $\vec q = (\vec b, \vec c)\,\vec a$. Observăm că vectorul $\vec p$ este coliniar cu vectorul $\vec c$, iar vectorul $\vec q$ este coliniar cu vectorul $\vec a$. Prin urmare, în caz general, $\vec p \neq \vec q$.

![figură](/geometrie-analitica/13%20Produsul%20scalar%20a%20doi%20vectori/Figuri/fig-produs-scalar-vs-numere.svg)
*fig. 1 — stânga: doi vectori nenuli cu produs scalar nul; dreapta: $\vec p$ e coliniar cu $\vec c$, iar $\vec q$ cu $\vec a$ — deci diferiți*

> [!example]- Cum se citește figura — cele două capcane
> **Pasul 1 — panoul stâng, datele.** Două săgeți nenule, perpendiculare. Unghiul drept marcat în origine este esențial.
>
> **Pasul 2 — calculați.** $(\vec a, \vec b) = \lvert\vec a\rvert\lvert\vec b\rvert\cos 90° = 0$, deși ambele module sunt strict pozitive. Produsul se anulează din cauza **unghiului**, nu a factorilor.
>
> **Pasul 3 — comparați cu numerele.** Textul de sub panou amintește regula numerelor, care aici nu mai funcționează. Concluzia practică: într-o ecuație vectorială nu aveți voie să „dați cu $\vec a$" de ambele părți.
>
> **Pasul 4 — panoul drept, cele trei date.** Albastru $\vec a$, verde $\vec c$, iar $\vec b$ intervine doar prin cele două numere pe care le produce.
>
> **Pasul 5 — urmăriți cele două rezultate.** Săgeata portocalie punctată, $\vec p = (\vec a, \vec b)\vec c$, este un multiplu al lui $\vec c$: stă **pe aceeași dreaptă** cu $\vec c$. Săgeata violet punctată, $\vec q = (\vec b, \vec c)\vec a$, stă pe aceeași dreaptă cu $\vec a$.
>
> **Pasul 6 — trageți concluzia.** Cum $\vec a$ și $\vec c$ nu sunt coliniari în figură, cele două drepte sunt diferite; deci $\vec p$ și $\vec q$ nu pot fi egali (decât dacă ambii ar fi $\vec 0$). Asociativitatea cade.
>
> **Pe ce se bazează:** [[Produsul vectorului la un număr|definiția înmulțirii cu un număr]] (rezultatul e coliniar cu vectorul înmulțit) și [[Coliniaritate, coplanaritate și dependență liniară#Teorema 6.10 — doi vectori|criteriul de coliniaritate]].
>
> **Ce să verificați singuri pe figură:** în ce caz particular ar putea totuși $\vec p = \vec q$? (Răspuns: dacă $\vec a$ și $\vec c$ sunt coliniari, sau dacă $\vec b \perp \vec a$ și $\vec b \perp \vec c$ simultan, caz în care ambii sunt $\vec 0$.)

> [!note] Precizare de notație
> Manualul scrie inegalitatea ca $\big((\vec a, \vec b), \vec c\big) \neq \big(\vec a, (\vec b, \vec c)\big)$. Strict vorbind, această scriere nu este corectă: paranteza interioară $(\vec a, \vec b)$ este **un număr**, iar produsul scalar este definit doar între doi **vectori** — deci expresia exterioară nu este un produs scalar.
>
> Sensul intenționat este cel din demonstrație: $\vec p = (\vec a, \vec b)\cdot\vec c$ față de $\vec q = \vec a\cdot(\vec b, \vec c)$, adică **înmulțiri cu scalar**. Reținem afirmația, nu notația.

> [!check] Tabloul comparativ
> | Proprietate | Numere reale | Produs scalar |
> |---|---|---|
> | comutativitate | da | da (1⁰) |
> | distributivitate | da | da (3⁰) |
> | omogenitate | da | da (2⁰) |
> | rezultat de aceeași natură | da | **nu** — dă un număr |
> | produs nul ⇒ un factor nul | da | **nu** |
> | simplificare prin factor comun | da | **nu** |
> | asociativitate | da | **nu** (nici nu e bine formulată) |

## 2. Exemplul 13.8 — unghiurile unui triunghi

> [!example] Enunț
> Determinați măsurile unghiurilor interioare ale triunghiului cu vârfurile în punctele: $A(5;\ 0)$, $B(0;\ 1)$ și $C(3;\ 3)$.

![figură](/geometrie-analitica/13%20Produsul%20scalar%20a%20doi%20vectori/Figuri/fig-ex138-triunghi.svg)
*fig. 2 — triunghiul $ABC$ cu unghiurile calculate: $45°$, $45°$ și $90°$*

**Rezolvare.** Conform condiției problemei vom avea:

$$
\vec{AB} = \{-5;\ 1\}, \qquad \vec{AC} = \{-2;\ 3\}, \qquad \vec{BC} = \{3;\ 2\}.
$$

Notăm $m(\angle CAB) = \alpha$, $m(\angle ABC) = \beta$ și $m(\angle BCA) = \gamma$. Atunci

$$
\cos\alpha = \frac{(\vec{AC}, \vec{AB})}{\lvert\vec{AC}\rvert\cdot\lvert\vec{AB}\rvert} = \frac{(-2)\cdot(-5) + 3\cdot 1}{\sqrt{13}\cdot\sqrt{26}} = \frac{13}{13\sqrt2} = \frac{\sqrt2}{2},
$$

de unde obținem $\alpha = m(\angle CAB) = 45°$. În mod analog

$$
\cos\beta = \frac{(\vec{BA}, \vec{BC})}{\lvert\vec{BA}\rvert\cdot\lvert\vec{BC}\rvert} = \frac{5\cdot 3 + (-1)\cdot 2}{\sqrt{26}\cdot\sqrt{13}} = \frac{13}{13\sqrt2} = \frac{\sqrt2}{2},
$$

de unde obținem $\beta = m(\angle ABC) = 45°$ și

$$
\cos\gamma = \frac{(\vec{CA}, \vec{CB})}{\lvert\vec{CA}\rvert\cdot\lvert\vec{CB}\rvert} = \frac{2\cdot(-3) + (-3)\cdot(-2)}{\sqrt{13}\cdot\sqrt{13}} = \frac{0}{13} = 0,
$$

de unde rezultă că $\gamma = m(\angle BCA) = 90°$.

Măsura unghiului $\angle BCA$ putea fi calculată și în alt mod. Se cunoaște că suma măsurilor unghiurilor unui triunghi este egală cu $180°$. Cunoscând măsurile unghiurilor $CAB$ și $ABC$, obținem:

$$
m(\angle BCA) = 180° - m(\angle CAB) - m(\angle ABC) = 180° - 45° - 45° = 90°.
$$

> [!example]- Pas cu pas — metoda completă, cu capcanele ei
> **Pasul 1 — calculați vectorii laturilor.** Regula: *extremitate minus origine*.
> $\vec{AB} = B - A = \{0-5;\ 1-0\} = \{-5;\ 1\}$
> $\vec{AC} = C - A = \{3-5;\ 3-0\} = \{-2;\ 3\}$
> $\vec{BC} = C - B = \{3-0;\ 3-1\} = \{3;\ 2\}$
>
> **Pasul 2 — capcana principală: alegeți vectorii care pleacă din vârful cercetat.** Unghiul $\angle CAB$ este la vârful $A$, deci se lucrează cu $\vec{AB}$ și $\vec{AC}$ — **ambele pleacă din $A$**. Pentru unghiul de la $B$ trebuie $\vec{BA}$ și $\vec{BC}$, nu $\vec{AB}$ și $\vec{BC}$. Iată de ce în al doilea calcul apare $\vec{BA} = -\vec{AB} = \{5;\ -1\}$.
>
> *Ce s-ar întâmpla dacă greșiți sensul:* produsul scalar și-ar schimba semnul, iar unghiul ar ieși suplementar — $135°$ în loc de $45°$.
>
> **Pasul 3 — calculați modulele o singură dată.**
> $\lvert\vec{AB}\rvert = \lvert\vec{BA}\rvert = \sqrt{25+1} = \sqrt{26}$
> $\lvert\vec{AC}\rvert = \lvert\vec{CA}\rvert = \sqrt{4+9} = \sqrt{13}$
> $\lvert\vec{BC}\rvert = \lvert\vec{CB}\rvert = \sqrt{9+4} = \sqrt{13}$
>
> **Pasul 4 — aplicați formula (7) pentru fiecare vârf.** Numărătorul e produsul scalar, numitorul produsul modulelor. Simplificați radicalii: $\sqrt{13}\cdot\sqrt{26} = \sqrt{338} = 13\sqrt2$.
>
> **Pasul 5 — verificați suma.** $45° + 45° + 90° = 180°$ ✓ Aceasta este verificarea gratuită pe care orice problemă de acest tip o oferă — folosiți-o întotdeauna.
>
> **Pasul 6 — economia de efort.** Al treilea unghi putea fi dedus din sumă, fără niciun calcul. Dar calculându-l independent ați obținut verificarea. Alegeți în funcție de timp.

> [!example]- Cum se citește figura — triunghiul din exemplul 13.8
> **Pasul 1 — localizați vârfurile pe rețea.** $A(5;\ 0)$ pe axa $Ox$, $B(0;\ 1)$ pe axa $Oy$, $C(3;\ 3)$ în interiorul primului cadran.
>
> **Pasul 2 — identificați laturile colorate.** Fiecare latură are o culoare, ca să puteți urmări ce vectori intră în fiecare produs scalar.
>
> **Pasul 3 — priviți unghiul din $C$.** Marca de unghi drept confirmă $\gamma = 90°$ — rezultatul obținut aritmetic din $(\vec{CA}, \vec{CB}) = 0$.
>
> **Pasul 4 — comparați cele două laturi care pleacă din $C$.** $\lvert\vec{CA}\rvert = \lvert\vec{CB}\rvert = \sqrt{13}$: triunghiul este **dreptunghic isoscel**. De aici, fără niciun calcul, celelalte două unghiuri trebuie să fie egale și să însumeze $90°$ — deci $45°$ fiecare.
>
> **Pasul 5 — trageți concluzia metodologică.** Figura oferă un drum mult mai scurt decât cele trei aplicări ale formulei (7): un singur produs scalar (cel din $C$) plus o comparație de module. Desenul nu înlocuiește calculul, dar îi sugerează forma cea mai scurtă.
>
> **Pe ce se bazează:** [[Proprietățile produsului scalar. Expresia în coordonate#3. Consecințele|consecințele 13.6 și 13.7]] și formula modulului din §11.
>
> **Ce să verificați singuri pe figură:** calculați $\lvert\vec{AB}\rvert = \sqrt{26}$ și verificați Pitagora: $13 + 13 = 26$ ✓ — ipotenuza este $AB$, cateta comună este $\sqrt{13}$.

> [!warning] Greșeală de notare în manual (exemplul 13.8)
> După calculul lui $\cos\beta$, manualul scrie *„de unde obținem $\beta = m(\angle BCA) = 45°$"*. Notația corectă este $\beta = m(\angle ABC)$ — așa cum $\beta$ a fost definit cu trei rânduri mai sus. Simbolul $\angle BCA$ este folosit imediat după, pentru $\gamma = 90°$; aceeași notație nu poate desemna două unghiuri diferite.
>
> Calculul propriu-zis este corect: vectorii folosiți, $\vec{BA}$ și $\vec{BC}$, pleacă amândoi din $B$, deci unghiul obținut este într-adevăr cel de la vârful $B$.

> [!info]- Completare — trei metode pentru același rezultat
> Triunghiul din exemplul 13.8 poate fi rezolvat în trei feluri. Merită comparate, fiindcă în alte probleme una dintre ele va fi vizibil mai scurtă.
>
> **Metoda 1 — produsul scalar (cea din manual).** Trei aplicări ale formulei (7). Funcționează întotdeauna, dar cere atenție la sensul vectorilor.
>
> **Metoda 2 — lungimile laturilor + teorema cosinusului.** $AB = \sqrt{26}$, $AC = \sqrt{13}$, $BC = \sqrt{13}$. Din $AC^2 + BC^2 = 13 + 13 = 26 = AB^2$ rezultă direct unghiul drept în $C$ (reciproca lui Pitagora), iar din $AC = BC$ — isoscelul. Două observații, zero trigonometrie.
>
> **Metoda 3 — criteriul (6) singur.** $\vec{CA} = \{2;\ -3\}$, $\vec{CB} = \{-3;\ -2\}$. Produsul $2\cdot(-3) + (-3)\cdot(-2) = 0$ ⇒ unghi drept în $C$. Apoi isoscelul din module, apoi suma unghiurilor. **Un singur produs scalar.**
>
> **Concluzie.** Când triunghiul are o particularitate (dreptunghic, isoscel), căutați-o întâi — economisiți două treimi din calcul. Formula (7) rămâne pentru cazul general, când nicio particularitate nu se vede.

## Întrebări de control

1. Dați un exemplu de doi vectori nenuli al căror produs scalar este zero. De ce nu contrazice acest lucru nicio proprietate din teorema 13.3?
2. Din $(\vec a, \vec b) = (\vec a, \vec c)$ ce se poate deduce despre $\vec b$ și $\vec c$? Dar ce **nu** se poate deduce?
3. De ce scrierea $\big((\vec a, \vec b), \vec c\big)$ nu este, strict vorbind, corectă?
4. Aflați unghiurile triunghiului $P(0;0)$, $Q(4;0)$, $R(0;3)$, folosind cea mai scurtă metodă posibilă.
5. Arătați că, dacă $(\vec a, \vec b) = 0$ pentru **orice** vector $\vec b$, atunci $\vec a = \vec 0$. (Indicație: alegeți $\vec b$ convenabil.)

## Legături

- Anterior: [[Proprietățile produsului scalar. Expresia în coordonate]]
- Se sprijină pe: [[Produsul vectorului la un număr]], [[Coliniaritate, coplanaritate și dependență liniară]], [[Distanța dintre două puncte]]
- Concepte: [[Produs scalar]], [[Vectori perpendiculari]]
