import React, {useState, useEffect} from 'react'
import logo from './logo.svg';

import Sandbox from './Sandbox'
import TV from './TV'
import YoutubeVideo from './YoutubeVideo';

import flickerGif from './assets/images/tv_flicker.gif'
const Flicker = () => {

  useEffect(() => {
    const audio = new Audio('/assets/sounds/flickering.mp3')
    audio.play()
    audio.volume = 0.1
    return () => audio.pause() 
  }, [])

  return (
    <img style={{width: '100%', height: '100%'}} src={flickerGif} />
  )
}
function App() {

  const MODES = {
    1: <Sandbox />,
    2: <YoutubeVideo id="lLWEXRAnQd0" />,
    3: <YoutubeVideo id="cKOSJ5AAwfc" />
  }

  const [activeMode, setActiveMode] = useState(null)

  const onKnobClick = (knob) => {

    setTimeout(() => {
      setActiveMode(MODES[knob])
    },  1000)
    setActiveMode(<Flicker />)
  }

  return (
    <div className="App">
      <TV onKnobClick={onKnobClick}>
        {activeMode && activeMode}
      </TV>
    </div>
  );
}

export default App;
