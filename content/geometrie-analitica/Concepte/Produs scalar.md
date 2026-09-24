---
curs: geometrie-analitica
title: "Produs scalar"
tip: concept
status: complet
tags: [geometrie-analitică, concept, produs-scalar]
---

Prima operație care ia doi vectori și dă **un număr**:

$$
(\vec a, \vec b) = \lvert\vec a\rvert \cdot \lvert\vec b\rvert \cdot \cos\widehat{(\vec a, \vec b)} \tag{1}
$$

Într-o [[Bază ortonormată|bază ortonormată]], pentru $\vec a = \{a_1; a_2\}$, $\vec b = \{b_1; b_2\}$:

$$
(\vec a, \vec b) = a_1b_1 + a_2b_2 \tag{3}
$$

## Ce se poate face cu el

| Întrebare | Răspuns |
|---|---|
| $\vec a \perp \vec b$? | $(\vec a, \vec b) = 0$, adică $a_1b_1 + a_2b_2 = 0$ |
| $\lvert\vec a\rvert$? | $\lvert\vec a\rvert = \sqrt{\vec a^{\,2}}$ |
| unghiul? | $\cos\widehat{(\vec a,\vec b)} = \dfrac{a_1b_1+a_2b_2}{\sqrt{a_1^2+a_2^2}\sqrt{b_1^2+b_2^2}}$ |
| semnul? | $+$ unghi ascuțit · $0$ unghi drept · $-$ unghi obtuz |

Interpretare: $(\vec a, \vec b) = \lvert\vec a\rvert \cdot \operatorname{pr}_{\vec a}\vec b$ — *cât din $\vec b$ merge în direcția lui $\vec a$*. În fizică: **lucrul mecanic**, $A = (\vec F, \vec{M_1M_2})$.

## Proprietăți (teorema 13.3)

1. $(\vec a, \vec b) = (\vec b, \vec a)$
2. $(\alpha\vec a, \vec b) = \alpha(\vec a, \vec b)$
3. $(\vec a + \vec b, \vec c) = (\vec a, \vec c) + (\vec b, \vec c)$

## Ce **nu** are

- rezultat de aceeași natură (dă număr ⇒ nu se poate itera; $\vec a^{\,3}$ nu are sens);
- „produs nul ⇒ factor nul" — $\{1;0\}$ și $\{0;1\}$ sunt nenuli cu produs $0$;
- simplificare: din $(\vec a, \vec b) = (\vec a, \vec c)$ **nu** rezultă $\vec b = \vec c$;
- asociativitate.

**Vezi:** [[Produsul scalar — definiție și interpretare]] · [[Proprietățile produsului scalar. Expresia în coordonate]] · [[Ce nu se transferă de la numere. Aplicații]] · [[Pătrat scalar]]
