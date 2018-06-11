import React, { Component } from 'react'
import Button from './Button'
import Footer from './Footer'
import Projects from './Projects'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.switchMenu = this.switchMenu.bind(this)
		this.state = {
            menu: 'main'
        }
	}

	switchMenu(menu) {
		this.setState({
			menu: menu
		})
	}

  render() {
  	const {styles, menu} = this.state
    return (
		<div className="App" style={styles}>
			<div className="comic">
				<div className="strip full"></div>
				<div className="strip half spacegame"></div>
				<div className="strip half"></div>
				<div className="strip third"></div>
				<div className="strip third"></div>
				<div className="strip third"></div>
			</div>
			<Footer />
		</div>
    );
  }
}

export default App;
