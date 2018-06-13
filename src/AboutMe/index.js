import React, { Component } from 'react'
import Page from '../Page'
import Panel from '../Panel'
import Text from '../Text'
import Bubble from '../Bubble'

class AboutMe extends Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <Page>
                <Panel width="100%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                    <Text text="About Me Page" position="br"/>
                </Panel>
            </Page>
        )
    }
}

export default AboutMe;
