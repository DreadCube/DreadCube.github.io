import React, {useState, useEffect} from 'react'
import {ArwesThemeProvider, Text, Button} from '@arwes/core'
import { AnimatorGeneralProvider } from '@arwes/animation'
import {createTheme} from '@arwes/design'

import {BleepsProvider} from '@arwes/sounds'

import './sandbox.css'

const animatorGeneral = { duration: { enter: 200, exit: 200 } };


function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

const AboutMe = () => {
    const age = calculateAge(new Date(1997, 2, 4))
   
    return (
        <>
            <AnimatedText delay={0}>
                Hi! My names Alexander Hofer.
            </AnimatedText>
            <AnimatedText delay={2000}>
                Im {age} years old and a react developer.
            </AnimatedText>
            <AnimatedText delay={2000}>
                I'm in love with geeky coding memes, netflix,
                fancy Mitsubishis and also a floorball enthusiast.             
            </AnimatedText>
        </>
    )
}


const pages = {
    'aboutMe': <AboutMe />
}

const AnimatedText = ({children, delay = 0}) => {

    const [activate, setActivate] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setActivate(true), delay)
    }, [delay])
    const SOUND_TYPE_URL = '/assets/sounds/type.mp3';
    const duration = { enter: 1000 };

    const audioSettings = { common: { volume: 0.25 } };
    const playersSettings = { type: { src: [SOUND_TYPE_URL], loop: true } };
    const bleepsSettings = { type: { player: 'type' } };
    
    return (
        <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
        >
            <Text animator={{duration, activate}}>
                {children}
            </Text>
        </BleepsProvider>
    )
}

const COMMANDS = {
    start: {
        text: (
            <>
                <AnimatedText delay={1500}>Type help for all available commands.</AnimatedText>
            </>
        )
    },
    commandNotFound: {
        text: <AnimatedText>Invalid command</AnimatedText>,
    },
    help: {
        text: (<>
                <AnimatedText delay={1000}>
                    aboutMe
                </AnimatedText>
                <br />
                <AnimatedText delay={2000}>
                    projects
                </AnimatedText>
                <br />
                <AnimatedText delay={3000}>
                    socialMedia
                </AnimatedText>
            </>
        )
    },
    socialMedia: {
        text: (
            <>
                <AnimatedText>
                    Github: <a href="https://github.com/DreadCube" target="_blank">dreadcube</a>
                </AnimatedText>
                <br />
                <AnimatedText>
                    Instagram: <a href="https://www.instagram.com/dreadcube/" target="_blank">DreadCube</a>
                </AnimatedText>
            </>
        )
    }
}

const Sandbox = () => {


  const theme = createTheme()

  const SOUND_TYPE_URL = '/assets/sounds/type.mp3';
  const duration = { enter: 1000 };

  const audioSettings = { common: { volume: 0.25 } };
  const playersSettings = { type: { src: [SOUND_TYPE_URL], loop: true } };
  const bleepsSettings = { type: { player: 'type' } };

  const [showMenu, setShowMenu] = useState(false)
  const [activePage, setActivePage] = useState(null)

  return (

    <div style={{marginTop: 100, marginLeft: 100}}>
        <ArwesThemeProvider theme={theme}>
            <BleepsProvider
            audioSettings={audioSettings}
            playersSettings={playersSettings}
            bleepsSettings={bleepsSettings}
            >
                <AnimatorGeneralProvider animator={animatorGeneral}>
                    {showMenu ? 
                    <>
                        <Button 
                            palette="primary" 
                            animator={{activate: true}}
                            onClick={() => setActivePage('aboutMe')}
                        >
                            <Text>About Me</Text>
                        </Button>
                        <Button palette="primary" animator={{activate: true}}>
                            <Text>My Skills</Text>
                        </Button>
                        <Button palette="primary" animator={{activate: true}}>
                            <Text>My Projects</Text>
                        </Button>
                        <Button palette="primary" animator={{activate: true}}>
                            <Text>Social Media</Text>
                        </Button>
                    </>
                    :
                    <Button onClick={() => setShowMenu(true)} palette="secondary">
                        <Text>Login</Text>
                    </Button>
                }

                    {activePage && pages[activePage]}
                </AnimatorGeneralProvider>

            </BleepsProvider>
        </ArwesThemeProvider>
    </div>
  );
}



export default Sandbox

