Démarrage
===

Afin d'initialiser un dossier `tp1` contenant l'ensemble des outils nécessaires, vous pouvez utiliser le module `create-react-app` :
```
npx create-react-app tp1
```

Clock
===

Ecrire un composant `Clock` qui affiche l'heure (hh:mm:ss) courante.
Le composant ne reçoit pas de propriété d'entrée et est autonome pour son rafraichissement régulier.

Dans le composant principal de l'application, rendre une checkbox dont l'état courant indique si oui ou non un composant `Clock` doit également être rendu.

Box
===

Ecrire un composant `Box` qui reçoit une propriété `color`. Ce composant affiche une bordure de la couleur reçue autour du contenu (enfants) du composant.

Mettre la checkbox et l'horloge écrite précédemment dans une `Box` bleue.

InlineEdit
===

Ecrire un composant `InlineEdit` qui reçoit une propriété `initialValue` et une propriété `onEdited`. Ce composant peut être dans 2 états :
- _affichage_ dans lequel il affiche la valeur `value` courante, ainsi qu'un bouton "Edit" permettant de passer dans l'état _édition_
- _édition_ dans lequel il affiche un input permettant de modifier la valeur, ainsi qu'un bouton "OK" qui déclenche le passage dans l'état _affichage_ et un appel à la fonction `onEdited` avec la nouvelle valeur

Faire en sorte que la couleur donnée à la `Box` soit contrôlée par un `InlineEdit`.
