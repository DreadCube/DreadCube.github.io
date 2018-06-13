import React, { Component } from 'react'
import './index.css'

class Bubble extends Component {

	render() {
		const {text} = this.props

		return (
			<p className="speech">{text}</p>
		)
	}
}

export default Bubble;