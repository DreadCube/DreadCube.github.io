import React, { Component } from 'react'
import './index.css'

class Bubble extends Component {

	render() {
		const {text, top, left, right, bottom} = this.props

		const styles = {
			top: top || null,
			left: left || null,
			right: right || null,
			bottom: bottom || null
		}
		return (
			<p className="speech" style={styles}>{text}</p>
		)
	}
}

export default Bubble;