import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import './index.css'

class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

    render() {
        return (
            <footer className="footer">
                <div class="text">
                    <span>made with <FontAwesome.FaHeart color="grey" size="15"/> by DreadCube</span>
                </div>
                <div class="socialLinks">

                    <a target="_blank" href="https://www.facebook.com/dreadcube">
                        <FontAwesome.FaFacebook />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/dreadcube/">
                        <FontAwesome.FaInstagram />
                    </a>
                    <a target="_blank" href="https://github.com/DreadCube/">
                        <FontAwesome.FaGithub />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/alexander-hofer-36628a121/">
                        <FontAwesome.FaLinkedin />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer
