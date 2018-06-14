import React, { Component } from 'react'
import Page from '../Page'
import Panel from '../Panel'
import Text from '../Text'
import Bubble from '../Bubble'

class CodersFail extends Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <Page>
                <Panel width="100%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                    <Text text="Project CodersFail" position="br"/>
                </Panel>
                <Panel width="30%" bgRadient={{color1: '#3fff00', color2: 'black'}}>
                    <Text text="Project CodersFail" position="br"/>
                </Panel>
            </Page>
        )
    }
}

export default CodersFail;
