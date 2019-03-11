import React, { Component } from 'react';

class AddItemForm extends Component {
	state = {
		value: ''
	};

	handleChange = (e) => this.setState({ value: e.target.value });

	submit = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		return <form onSubmit={this.submit}>
			<input value={this.state.value} onChange={this.handleChange} />
			<button>Add</button>
		</form>;
	}
}

const ItemList = (props) => {
	return <ul>
		{props.items.map((i, idx) => (
			<li key={idx}>
				{i}
				<button onClick={() => props.onRemoveItem(idx)}>Remove</button>
			</li>
		))}
	</ul>;
};

export default class ItemListApp extends Component {
	state = {
		items: [ 'salut', 'youpi' ]
	};

	addItem = (item) => {
		this.setState((prevState) => ({
			items: [ ...prevState.items, item ]
		}));
	};

	removeItem = (index) => {
		this.setState((prevState) => ({
			items: prevState.items.filter((i, idx) => idx !== index)
		}));
	}

	render () {
		return <>
			<AddItemForm onAddItem={this.addItem} />
			<ItemList items={this.state.items} onRemoveItem={this.removeItem} />
		</>;
	}
}
