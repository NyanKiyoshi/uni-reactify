# Liste de courses

Reprendre l'application du TP précédent.

Faire en sorte que chaque item de la liste ne soit plus simplement une chaîne de caractères, mais un objet avec les propriétés suivantes :
 - `name`
 - `cost`
 - `quantity`

Quand un item est ajouté à la liste, son coût et sa quantité sont initialisés à 1.

Le coût et la quantité de chaque item sont modifiables grâce à un `input` de type `number`.

L'intitulé d'un item est modifiable en utilisant un composant `InlineEdit` écrit au TP1.

> Dans quel cas et pourquoi a-t-on besoin de gérer `componentDidUpdate` dans le composant `InlineEdit` ?
