import React, { Component } from 'react'
import { execute, makePromise, ApolloLink } from 'apollo-link'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import gql from 'graphql-tag'

class Projects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			client: null
		}
	}

	componentDidMount() {

		const link = new HttpLink({uri: 'https://api.github.com/graphql'})
		const operation = {
			query: gql`query { viewer { login } }`
		}

		makePromise(execute(link, operation))
			.then(data => {
				console.log(data)
			})
			.catrch(error => {
				console.log(error)
			})
	}

	render() {
		const { client } = this.state

		return (
			<div>
				<h1>Projects</h1>
			</div>
		);
	}
}

export default Projects