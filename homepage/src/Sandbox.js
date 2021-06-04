import React, {useState, useEffect} from 'react'
import {ArwesThemeProvider, Text} from '@arwes/core'

import {createTheme} from '@arwes/design'

import {BleepsProvider} from '@arwes/sounds'

import './sandbox.css'

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
  const [activate, setActivate] = React.useState(true);

  const [activeCommand, setActiveCommand] = React.useState(COMMANDS.start)
  const theme = createTheme()

  const handleInput = (e) => {
      const command = e.target.value

      let newCommand = 'commandNotFound'
    
      if (COMMANDS[command]) {
          newCommand = command
      }
      setActiveCommand(COMMANDS[newCommand])
  } 


  return (

    <div style={{marginTop: 100, marginLeft: 100}}>
        <ArwesThemeProvider theme={theme}>

            <AnimatedText>Starting CUBE OS...</AnimatedText>
            <br />
            <AnimatedText delay={1000}>[CUBE OS version 1.3541]</AnimatedText>
            <br />
            <br />
            {activeCommand.text}
            <StyledInput onEnter={handleInput} />
        </ArwesThemeProvider>
    </div>
  );
}



export default Sandbox


const StyledInput = ({onEnter}) => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            setValue('')
            onEnter(e)
        }
    }
    return (
        <input autoFocus style={{
            fontFamily: 'monospace',
            color: 'rgb(0, 255, 255)',
            textShadow: 'rgb(0 255 255) 0px 0px 1px',
            width: '100%',
            backgroundColor: '#000',
            borderStyle: 'none',
            outline: 'none'
        }} 
        type="text" 
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
    )
}



