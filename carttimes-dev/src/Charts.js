import React from 'react'
import Chart from './Chart'
import List from './List'

import PouchDB from './pouchdb'

const raceTimeFormatter = (raceTime) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute: '2-digit' }
    const title = new Date(raceTime).toLocaleDateString(undefined, options)
    return title
}

const Charts = ({selectedRacers}) => {

    const [raceData, setRaceData] = React.useState([])

    React.useEffect(() => {
        const racesDB = new PouchDB('http://localhost:5984/races')
        racesDB.find({
            selector: {
                dateTime: {
                    $exists: true
                }
            },
            sort: [{dateTime: 'desc'}],
        }).then(data => {
            setRaceData(data.docs)
        })

    }, [])

    
    return (
        <div style={{marginBottom: 50}}>
            {raceData.map(race => {

                return <>
                    <Chart 
                        title={raceTimeFormatter(race.dateTime)}
                        seriesData={race.series}
                    />
                    <List
                        title={raceTimeFormatter(race.dateTime)}
                        seriesData={race.series}
                    />
                </>
            })}
        </div>
        
    )
}

export default Charts