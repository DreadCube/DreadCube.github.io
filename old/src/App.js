import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Comic from './Comic'

class App extends Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (
		<div className="App">
            <Switch>
                <Route path="/" component={Comic} />
            </Switch>
		</div>
    );
  }
}

export default App;
