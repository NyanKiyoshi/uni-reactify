# Items List

L'objectif est d'écrire une application dans laquelle :
 - on visualise une liste d'items (texte)
 - chaque item peut être supprimé grâce à un bouton
 - un `input` permet de rajouter un nouvel item

> Ecrire le composant _stateful_ suivant :
>  - `ItemListApp` :
>    - contient un `state` avec un tableau de chaînes `items`.
>    - dispose d'une fonction `addItem` qui reçoit une chaîne et modifie le state de sorte que le tableau `items` contienne cette chaîne dans une nouvelle case
>    - dispose d'une fonction `removeItem` qui reçoit un nombre et modifie le state de sorte que le tableau `items` ne contienne plus la case dont l'index correspond au nombre reçu
>    - rend une interface composée d'un `AddItemForm` et d'une `ItemList`. Le composant `AddItemForm` reçoit une prop `onAddItem` à laquelle on affecte la fonction `addItem`; le composant `ItemList` reçoit une prop `items` à laquelle on affecte le tableau `items` du state, et une prop `onRemoveItem` à laquelle on affecte la fonction `removeItem`

> Ecrire les composant _stateless_ suivants :
>  - `ItemsList` :
>    - props : tableau `items` (tableau de chaînes), fonction `onRemoveItem`
>    - rend une liste de `ListItem` correspondant aux éléments du tableau `items` en passant à chacun : une valeur unique pour la prop `key`; une chaîne pour la prop `text`; une fonction qui fait appel à la fonction `onRemoveTodo` en lui passant l'index de l'item pour la prop `onRemove`
>  - `ListItem` :
>    - props : chaîne `text`, fonction `onRemove`
>    - rend un item avec son `text`, un bouton dont l'événement `onClick` appelle la fonction `onRemove`

> Ecrire le composant _stateful_ suivant :
>  - `AddItemForm` :
>    - state : une chaîne `currentText`
>    - props : fonction `onAddItem`
>    - rend un formulaire contenant un input et un bouton de validation; l'input est contrôlé et lié à la valeur `currentText` du state; à la soumission du formulaire, la fonction `onAddTodo` est appelée en lui passant la valeur de `currentText` puis l'input est vidé
