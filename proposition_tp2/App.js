import React, { Component } from 'react';

import InlineEdit from './InlineEdit';
import ItemListApp from './ItemList';

const Box = (props) => {
	let style = {
		border: '4px solid ' + props.color
	};
	return <div style={style}>{props.children}</div>;
};

class App extends Component {
	state = {
		color: 'blue'
	};

	handleChange = (value) => {
		this.setState({ color: value });
	};

	render() {
		return <>
			<h1>TP React</h1>
			<ItemListApp />
			<Box color={this.state.color}>
				<span>voilà du texte</span>
			</Box>
			<InlineEdit initialValue={this.state.color} onEdited={this.handleChange} />
		</>;
	}
}

export default App;
