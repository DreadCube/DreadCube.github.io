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
                    <Text text="This is a story about me." position="tl"/>
                </Panel>
                <Panel width="100%" bgRadient={{color1: 'blue', color2: 'black'}}>
                    <Bubble text="shalala!" />
                    <Bubble text="ding dong!" top="100px" right="5px" />
                </Panel>
                <Panel width="30%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                </Panel>
                <Panel width="30%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                </Panel>
                <Panel width="30%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                </Panel>
                <Panel width="20%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                </Panel>
                <Panel width="20%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                </Panel>
            </Page>
        )
    }
}

export default AboutMe;
