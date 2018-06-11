import React, { Component } from 'react';
import './index.css';

class Button extends Component {

	constructor(props) {
		super(props)

		this.onClick = this.onClick.bind(this)

		this.state = {
			menu: this.props.menu
		}
	}

	onClick(ev) {
		this.props.switchMenu(this.state.menu)
	}

	render() {
		const {children} = this.props
		return (
			<button className="button" onClick={this.onClick}>{children}</button>
		);
	}
}

export default Button;