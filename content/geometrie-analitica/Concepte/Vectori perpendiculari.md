---
curs: geometrie-analitica
title: "Vectori perpendiculari"
tip: concept
status: complet
tags: [geometrie-analitică, concept, produs-scalar, unghi]
---

Vectorii nenuli $\vec a$ și $\vec b$ sunt **reciproc perpendiculari** dacă $\widehat{(\vec a, \vec b)} = \dfrac{\pi}{2}$. Se notează $\vec a \perp \vec b$.

## Trei criterii echivalente

| Criteriu | Formulă | Sursa |
|---|---|---|
| geometric | $\widehat{(\vec a, \vec b)} = \pi/2$ | definiția |
| prin produs scalar | $(\vec a, \vec b) = 0$ | din formula (1) |
| în coordonate (bază ortonormată) | $a_1b_1 + a_2b_2 = 0$ | consecința 13.6 |

**Rețetă rapidă:** un vector perpendicular pe $\{x;\ y\}$ este $\{-y;\ x\}$ — verificare: $x(-y) + yx = 0$.

## Convenția pentru vectorul nul

> Dacă măcar unul din $\vec a$, $\vec b$ este nul, se convine $\widehat{(\vec a, \vec b)} = \pi/2$. **Vectorul nul este perpendicular pe orice vector.**
>
> **De ce:** ca echivalența $(\vec a, \vec b) = 0 \iff \vec a \perp \vec b$ să nu aibă excepții.
>
> **Ce costă:** $\vec 0 \perp \vec a$ și $\vec 0 \perp \vec b$ pentru orice $\vec a, \vec b$, inclusiv paraleli — deci perpendicularitatea nu are nicio urmă de tranzitivitate. Ca și [[Vectori coliniari|convenția $\vec 0 \uparrow\uparrow \vec a$]], servește formulele, nu intuiția.

**Vezi:** [[Unghiul dintre doi vectori. Perpendicularitate]] · [[Produs scalar]]
