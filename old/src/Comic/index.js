import React, { Component } from 'react'
import Cover from '../Cover'
import Home from '../Home'
import AboutMe from '../AboutMe'
import CodersFail from '../CodersFail'

import './index.css'

class Comic extends Component {

	constructor(props) {
		super(props)

		this.state = {
            coverScroll: false,
            normalScroll: false,
            page: 0
		}

        this.scroll = this.scroll.bind(this)
        this.audio = new Audio();
        this.audio.src = 'http://localhost:3000/page_turn.mp3'
	}

    componentDidMount() {
        const audio = this.audio
        this.cover.addEventListener('webkitAnimationEnd', (event) => {
            audio.pause();
            audio.currentTime = 0
        })
        /*this.page1.getElementsByClassName('page')[0].addEventListener('webkitAnimationStart', (event) => {
            console.log('kdjfk');
            setTimeout(() => {
                    this.cover.getElementsByClassName('page')[0].style.display = 'none'
                    event.target.style.visibility = 'visible'
            }, 500)
        })*/
    }

    scroll() {
        this.audio.play()
        this.setState({
        	normalScroll: this.state.coverScroll,
            coverScroll: true,
            page: this.state.page+=2
        });
    }

	render() {
        const {positionCover, coverScroll, normalScroll} = this.state

		return (
			<article className={'comic ' + (coverScroll ? 'coverScroll' : '') + (normalScroll ? ' normalScroll' : '')} onClick={this.scroll}>
				<div className="cover" ref={cover => (this.cover = cover)}>
					<Cover />
				</div>

                <div className="page1">
                    <AboutMe />
                </div>
                <div className="holder1">
                	<Cover />
                	<AboutMe />
                	<Cover />
                	<AboutMe />
                </div>
                <div className="page2">
                    <CodersFail />
                </div>
                <div className="holder2">
                	<CodersFail />
                	<CodersFail />
                	<CodersFail />
                	<CodersFail />
                </div>
			</article>
		)
	}
}

export default Comic;