# Dialogue avec une API

Lorsqu'une application dialogue avec une API sur un serveur distant via une requête HTTP, les données ne sont pas disponibles immédiatement.
C'est pour cela que l'on utilise des requêtes dites `asynchrones`.
Comme on l'a vu avec la communication entre le serveur HTTP et le serveur de base de données, la gestion et la configuration de l'exécution asynchrone va être réalisé par l'intermédiaire d'objets `Promise`.

La fonction `fetch` permet de réaliser une requête HTTP et retourne une `Promise` qui est résolue au moment de l'arrivée d'une réponse.

Utilisation :
```js
fetch(someURL)
.then((response) => {
	return response.json(); // pour interpréter le corps de la réponse au format JSON (retourne une nouvelle Promise)
})
.then((data) => {
	console.log('data : ', data)
})
.catch((err) => {
	console.log(err.message);
});
```

La `Promise` est résolue quel que soit le statut HTTP de la réponse.
Ce n'est qu'en cas d'absence de réponse ou de problème de connexion que la Promise est rejetée.
Si on souhaite faire échouer la chaîne de traitements en cas de statut autre que 2xx, on peut intercaler une première fonction telle que celle indiquée ci-dessous :

```js
fetch(someURL)
.then((response) => {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		return response.text()
		.then((text) => {
			throw new Error(text);
		});
	}
})
.then((response) => {
	return response.json();
})
.then((data) => {
	console.log('data : ', data)
})
.catch((err) => {
	console.log(err.message);
});
```

Un composant peut déclencher la récupération de données auprès d'une API dans la fonction `componentDidMount`.
Il faut cependant garder en tête qu'un premier `render` du composant aura lieu dès son insertion dans l'arborescence de l'application, et donc avant l'appel à `componentDidMount` (et donc avant l'arrivée des données).

> L'objectif de ce TP est d'écrire une application React qui récupère et affiche des informations obtenues auprès de l'API HTTP écrite précédemment en W4a.
