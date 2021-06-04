import React, {useState, useEffect} from 'react'

import tv from './assets/images/tv.png'

const TV = ({children, onTVClick, onKnobClick}) => {
    const [activeKnob, setActiveKnob] = useState(null)

    useEffect(() => {
        if (activeKnob) {
            onKnobClick(activeKnob)
        }
    }, [activeKnob])


    return (
        <div onClick={onTVClick} style={{
            position: 'relative',
            width: '100vw', 
            height: '100vh',
            backgroundImage: `url(${tv})`,
            backgroundRepeat: 'no-repeat',
            transformStyle: 'preserve-3d'
        }}>
            <div style={{
                marginTop: 80,
                marginLeft: 100,
                width: 1150,
                height: 850,
                position: 'absolute',
                transform: 'translateZ(-10px)'
            }}>
                {children}
            </div>
            <div onClick={() => setActiveKnob(1)} style={{
                cursor: 'pointer',
                position: 'absolute', 
                width: 40, 
                height: 40, 
                top: 585,
                left: 1420
            }}></div>
            <div onClick={() => setActiveKnob(2)} style={{
                cursor: 'pointer',
                position: 'absolute', 
                width: 40, 
                height: 40, 
                top: 585,
                left: 1515,
                zIndex: 1
            }}></div>
              <div onClick={() => setActiveKnob(3)} style={{
                cursor: 'pointer',
                position: 'absolute', 
                width: 40, 
                height: 40, 
                top: 665,
                left: 1417,
                zIndex: 1
            }}></div>
        </div>
    )
}

export default TV