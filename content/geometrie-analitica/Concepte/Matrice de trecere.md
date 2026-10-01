---
curs: geometrie-analitica
title: "Matrice de trecere"
tip: concept
status: complet
tags: [geometrie-analitică, concept, transformarea-coordonatelor]
---

Matricea de trecere de la baza $\{\vec e_1, \vec e_2\}$ la baza $\{\vec e_1{}', \vec e_2{}'\}$:

$$
C = \begin{pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{pmatrix}, \qquad \vec e_1{}' = \{c_{11};\ c_{21}\},\quad \vec e_2{}' = \{c_{12};\ c_{22}\}
$$

**Coloanele** sunt vectorii **noi**, scriși în baza **veche**. Indicele $c_{ij}$: coordonata $i$ a vectorului nou $j$.

Formulele de transformare a coordonatelor (originea nouă $O'(x_0; y_0)$):

$$
\begin{pmatrix} x \\ y \end{pmatrix} = C\begin{pmatrix} x' \\ y' \end{pmatrix} + \begin{pmatrix} x_0 \\ y_0 \end{pmatrix}
$$

- $\det C \neq 0$, fiindcă vectorii noi sunt necoliniari ⇒ formulele se pot inversa.
- **Translație:** $C$ = matricea unitate.
- **Între baze ortonormate:** $C = \begin{pmatrix} \cos\alpha & -\varepsilon\sin\alpha \\ \sin\alpha & \varepsilon\cos\alpha \end{pmatrix}$, cu $\det C = \varepsilon = \pm 1$; $+1$ = aceeași orientare (rotație), $-1$ = orientare opusă. Inversa e transpusa.

**Vezi:** [[Transformarea sistemului afin de coordonate]] · [[Rotația sistemului rectangular cartezian]] · [[Bază]] · [[Sistem afin de coordonate]]
