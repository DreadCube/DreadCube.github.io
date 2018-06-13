import React, { Component } from 'react'
import Page from '../Page'
import Home from '../Home'
import AboutMe from '../AboutMe'
import './index.css'

class Comic extends Component {

	constructor(props) {
		super(props)

		this.state = {
			positionCover: true,
            scroll: false
		}

        this.scroll = this.scroll.bind(this)
	}

    componentDidMount() {

        this.page1.getElementsByClassName('page')[0].addEventListener('webkitAnimationStart', (event) => {
            console.log('kdjfk');
            setTimeout(() => {
                    this.cover.getElementsByClassName('page')[0].style.display = 'none'
                    event.target.style.visibility = 'visible'
            }, 500)
        })
    }

    scroll() {
        console.log('scroll');
        this.setState({
            scroll: true
        });
    }

	render() {
        const {positionCover, scroll} = this.state

		return (
			<article className={'comic ' + (scroll ? 'scroll' : '')} onClick={this.scroll}>
				<div className="cover" ref={cover => (this.cover = cover)}>
					<AboutMe />
				</div>
                <div className="pages">
    				<div className="page1" ref={page1 => (this.page1 = page1)} >
    					<Home />
    				</div>
    				<div className="page2">
    					<AboutMe />
    				</div>
                </div>
			</article>
		)
	}
}

export default Comic;