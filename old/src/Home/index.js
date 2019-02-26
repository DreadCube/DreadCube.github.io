import React, { Component } from 'react'
import Page from '../Page'
import Panel from '../Panel'
import Text from '../Text'
import Bubble from '../Bubble'

class Home extends Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
            <Page>
                <Panel width="100%" bgRadient={{color1: 'yellow', color2: 'orange'}}>
                    <Bubble text="WTF!" />
                    <Text text="Das ist ein Test" position="br"/>
                </Panel>
                <Panel width="100px" bgImage="star_wars/marvel_star_wars_comic.jpg" />
                <Panel width="100px" bgImage="star_wars/star_wars1.jpg" />
                <Panel width="100px" bgImage="spider_man/spider-man-deadpool-monsters-unleashed-225870-1280x0.jpg"/>
            </Page>
        );
    }
}

export default Home;
