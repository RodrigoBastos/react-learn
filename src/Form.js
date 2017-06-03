import React from 'react';

export default class extends React.Component {
	constructor () {
		super();
		this.state = {
			buttonValue: 'Enviar formulário'
		};
	};

	_changeButtonValue (value) {
		this.setState({
			buttonValue: value
		});
	}

	render() {
		return (
			<form>
				<input type="text" placeholder={this.props.inputPlaceholder} />
				<button onMouseOut={() => this._changeButtonValue('Enviar formulário')} onMouseOver={() => this._changeButtonValue('Não enviar formulário')}>{this.state.buttonValue}</button>
			</form>
		);
	};
};