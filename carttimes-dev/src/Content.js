import React from 'react'

import {
    Checkbox,
    LABEL_PLACEMENT
  } from "baseui/checkbox";

import {HeadingLevel, Heading} from 'baseui/heading'
import racersDB from './racersDB.json'

import Charts from './Charts'
import {Button} from 'baseui/button'

import Edit from './Edit'

const racers = racersDB



const Content = () => {

    const [CONTENT_VIEW, setContentView] = React.useState('MAIN')
    const [checkedRacers, setCheckedRacers] = React.useState([])


    const toggleRacer = (id) => {
        
        const newCheckedRacers = [...checkedRacers]
        const foundRacerIndex = checkedRacers.findIndex(racer => racer === id)

        if (foundRacerIndex >= 0) {
            newCheckedRacers.splice(foundRacerIndex, 1)
        } else {
            newCheckedRacers.push(id)
        }
    
        setCheckedRacers(newCheckedRacers)
    
    }

    return (<div style={{maxWidth: '100vw'}}>
        <Button onClick={() => setContentView(CONTENT_VIEW === 'MAIN' ? 'EDIT': 'MAIN')}>{CONTENT_VIEW === 'MAIN' ? 'Edit Times' : 'Dashboard'}</Button>
        <HeadingLevel>
            <Heading>Cart Times</Heading>
        </HeadingLevel>
            
            {CONTENT_VIEW === 'MAIN' && <Charts selectedRacers={checkedRacers} />}
            {CONTENT_VIEW === 'EDIT' && <Edit />}
        </div>)
}

export default Content