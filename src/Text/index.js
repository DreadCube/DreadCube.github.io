import React, { Component } from 'react'
import './index.css'

class Text extends Component {

	render() {
		const {text, position} = this.props


		return (
				<p className={'text ' + position} >{text}</p>
		)
	}
}

export default Text;