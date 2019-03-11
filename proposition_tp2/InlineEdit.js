import React, { Component } from 'react';

export default class InlineEdit extends Component {
	state = {
		value: this.props.initialValue,
		editing: false
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	toggle = () => {
		this.setState((prevState) => ({ editing: !prevState.editing }), () => {
			if (!this.state.editing) {
				this.props.onEdited(this.state.value);
			}
		});
	};

	render() {
		if (this.state.editing) {
			return <>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<button onClick={this.toggle}>Go</button>
			</>;
		} else {
			return <>
				<span>{this.state.value}</span>
				<button onClick={this.toggle}>Edit</button>
			</>;
		}
	}
}
