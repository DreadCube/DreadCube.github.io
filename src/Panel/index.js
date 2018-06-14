import React, { Component } from 'react'
import './index.css'

class Panel extends Component {

	render() {
		const {width, height, margin, children, bgImage, bgRadient} = this.props

		let styles = {
			flexBasis: width,
			height: height || '200px',
			margin: margin ||'1vmin'
		}
		let bgStyles = {
		}

		if (bgImage) {
			bgStyles.backgroundImage = 'url(\'media/' + bgImage + '\')'
		}
		if(bgRadient) {
			bgStyles.backgroundImage = 'radial-gradient(circle, ' + bgRadient.color1 + ', ' + bgRadient.color2 + ')'
		}

		return (
			<div className="panel" style={styles} >
				{bgImage || bgRadient ? <div className="bg" style={bgStyles} /> : null}
				{children}
			</div>
		)
	}
}

export default Panel;