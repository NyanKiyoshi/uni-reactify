import React, { Component } from 'react';

class Clock extends Component {
	// valeur initiale du state
	state = {
		time: new Date().toLocaleTimeString()
	};

	// propriété de l'instance servant à stocker l'identifiant de l'intervalle retourné par setInterval
	interval = null;
	
	// exécuté au "montage" de l'instance du composant
	// (le composant est présent lors de ce rendu et ne l'était pas au rendu précédent)
	componentDidMount() {
		this.interval = setInterval(() => {
			// mise à jour du state + demande de re-render du composant
			this.setState({
				time: new Date().toLocaleTimeString()
			});
		}, 1000);
	}

	// exécuté avant que l'instance du composant soit supprimée
	// (le composant était présent au rendu précédent et ne l'est plus lors de ce rendu)
	componentWillUnmount() {
		clearInterval(this.interval);
		// vous pouvez essayer d'enlever cet appel pour voir l'erreur arriver
		// 1 seconde (ou moins) après avoir enlevé la Clock du rendu de l'TP3ItemListApp
	}
	
	render() {
		return <p>Il est {this.state.time}</p>;
	}
}

const Box = (props) => {
	let style = {
		borderWidth: '3px',
		borderStyle: 'solid',
		borderColor: 'black'
	};
	return <div style={style}>
		{props.children}
	</div>;
};

class App extends Component {
	// valeur initiale du state
	state = {
		showClock: true
	}
	
	// cette fonction est passée en tant que prop "onChange" à l'élément "input" rendu;
	// elle sera appelée avec un objet "event" par le gestionnaire d'événements à chaque
	// foid que l'état de l'input aura changé
	showClockChanged = (event) => {
		let value = event.target.checked;
		this.setState({ showClock: value });
	};
	
	render() {
		// la variable "clock" vaut soit un élément "Clock" soit null selon la valeur actuelle de showClock
		let clock = this.state.showClock ? <Clock/> : null;
		return <div>
			<label>Show clock :</label>
			<input type="checkbox" checked={this.state.showClock} onChange={this.showClockChanged}/>
			{/* si "clock" vaut null, les children de l'élément Box seront null, 
			ce qui correspond à ne rien ajouter au DOM résultat */}
			<Box> { clock } </Box>
		</div>
	}
}

export default App;
