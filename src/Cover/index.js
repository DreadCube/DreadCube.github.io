import React, { Component } from 'react'
import Page from '../Page'
import Panel from '../Panel'
import Text from '../Text'
import Bubble from '../Bubble'

class Cover extends Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <Page>
                <Panel width="100%" height="100%" margin="0" bgImage="star_wars/cover.jpg">
                    <Text text="Wazz up ;-)" position="tl"/>
                    <Text text="Welcome Padawan" position="br"/>
                </Panel>
            </Page>
        )
    }
}

export default Cover;
