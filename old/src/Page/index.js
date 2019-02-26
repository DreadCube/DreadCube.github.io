import React, { Component } from 'react'
import './index.css'

class Page extends Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        )
    }
}

export default Page;
