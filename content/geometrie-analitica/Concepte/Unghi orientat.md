---
curs: geometrie-analitica
title: "Unghi orientat"
tip: concept
status: complet
tags: [geometrie-analitică, concept, unghi-orientat]
---

Unghiul de la $\vec a$ la $\vec b$ (vectori nenuli, **în această ordine**), cu semn:

- mărimea unghiului geometric dintre ei, dacă $\vec b$ se obține din $\vec a$ prin rotație **contrar acelor**;
- minus această mărime, dacă rotația e **în sensul acelor**;
- $0$ pentru vectori coorientați, $\pi$ pentru vectori opuși.

$$
-\pi < \widehat{(\vec a, \vec b)} \leq \pi
$$

| Proprietate | Formula |
|---|---|
| ordinea | $\sin\widehat{(\vec a, \vec b)} = -\sin\widehat{(\vec b, \vec a)}$, $\cos$ neschimbat |
| compunerea | $\widehat{(\vec a, \vec b)} + \widehat{(\vec b, \vec c)} \equiv \widehat{(\vec a, \vec c)} \pmod{2\pi}$ |
| cosinusul | $\dfrac{a_1b_1 + a_2b_2}{\lvert\vec a\rvert\lvert\vec b\rvert}$ (ca în §13) |
| sinusul | $\dfrac{a_1b_2 - a_2b_1}{\lvert\vec a\rvert\lvert\vec b\rvert}$ — numărătorul e determinantul din condiția de coliniaritate |
| coordonatele (bază ortonormată dreaptă) | $\vec a = \{\lvert\vec a\rvert\cos\widehat{(\vec i, \vec a)};\ \lvert\vec a\rvert\sin\widehat{(\vec i, \vec a)}\}$ |

> **Două capcane ale manualului.** (1) În §10 rotația contrar acelor e numită orientare „stângă", în §14–§15 — „dreaptă"; sensul pozitiv e același, doar numele se inversează. (2) §10 dă unghiului orientat valori în $[0;\ 2\pi)$, §14 în $(-\pi;\ \pi]$; diferă cu $2\pi$, au aceleași sin și cos.
>
> **Nu folosiți tangenta singură** — nu distinge $\varphi$ de $\varphi \pm \pi$.

**Vezi:** [[Unghiul orientat dintre doi vectori]] · [[Coordonatele vectorului prin unghiul orientat]] · [[Unghiul dintre doi vectori]] (neorientat) · [[Orientarea planului]]
