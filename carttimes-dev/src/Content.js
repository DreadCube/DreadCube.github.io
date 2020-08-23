import React from 'react'

import {
    Checkbox,
    LABEL_PLACEMENT
  } from "baseui/checkbox";

import {HeadingLevel, Heading} from 'baseui/heading'
import racersDB from './racersDB.json'

import Charts from './Charts'

const racers = racersDB



const Content = () => {

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
        <HeadingLevel>
            <Heading>Cart Times</Heading>
        </HeadingLevel>
        {racers.map((racer, index) => {
            return (
            <Checkbox
                checked={checkedRacers.find(checkedRacer => checkedRacer === racer.id) >= 0}
                onChange={e => toggleRacer(racer.id)}
                labelPlacement={LABEL_PLACEMENT.right}
              >
                  {racer.name}
              </Checkbox>
            )
        })}
   
            <Charts selectedRacers={checkedRacers} />
        </div>)
}

export default Content