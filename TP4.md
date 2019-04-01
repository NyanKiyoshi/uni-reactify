# React-router

[React-router](https://reacttraining.com/react-router/web/guides/quick-start)

Utiliser la bibliothèque de composants React-Router pour faire une application dont le contenu va dépendre de l'état courant de la route __client__.

On affichera un menu de liens (__Link__) qui contient les éléments suivants :
- `Home` : amène à la route '/'
- `People` : amène à la route '/people'
- `Groups` : amène à la route '/groups'

A chacune de ces routes, on associera le rendu d'un composant particulier (__Route__).

Pour commencer, ajouter une route correspondant à chacun des TP précédents :
- Clock
- Liste d'items
- Liste de courses

Vous remarquerez que l'état des listes est détruit à chaque fois que le composant correspondant quitte l'interface, et réinitialisé à chaque fois qu'il intègre l'interface.

Modifiez vos composants liste (items et courses) pour que leurs données soient sauvegardées dans le navigateur avant leur suppression, et restaurées après leur insertion.

Indices : `localStorage.getItem`, `localStorage.setItem`, `JSON.stringify`, `JSON.parse`
