import React from 'react'
import PouchDB from './pouchdb'
import {Heading, HeadingLevel} from 'baseui/heading';

import {MaskedInput, Input} from 'baseui/input'

import {Grid, Cell} from 'baseui/layout-grid';
import {Button} from 'baseui/button';

import { useForm } from "react-hook-form"

const Edit = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const racesDB = new PouchDB('races')
        racesDB.createIndex({index: {fields: ['dateTime']}})
        racesDB.find({selector: {dateTime: {$eq: data.dateTime}}})
            .then(result => {
                if (result.docs.length > 0) {
                    racesDB.put({
                        ...data,
                        _id: result.docs[0]._id,
                        _rev: result.docs[0]._rev
                    })
                } else {
                    racesDB.put({...data, _id: String(Math.random())})
                }
                console.log(data)
            })
    }

    const [racers, setRacers] = React.useState([])

    const [rounds, setRounds] = React.useState(2)

    React.useEffect(() => {
        const racersDb = new PouchDB('racers')
        racersDb.allDocs(
            {
                include_docs: true
            }).then(
                res => setRacers(
                    res.rows.map(
                        racer => racer.doc
                    )
                )
            )
    }, [])

    const roundsCount = new Array(rounds).fill('')
    
    const currentDate = new Date()
    const currentDateIsoString = currentDate.toISOString()
    const currentDateValue = currentDateIsoString.substring(0, (currentDateIsoString.indexOf('T')|0)+ 6|0)
    
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="datetime-local"
                placeholder="Race Date"
                name="dateTime"
                inputRef={register({required: true})}
            />
            <Input
                type="number"
                placeholder="Number of Rounds"
                name="numberOfRounds"
                onChange={(e) => setRounds(Number(e.target.value))}

            />
            
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {racers.map((racer, index) => {
                        return (
                            <div style={{margin: 20, minWidth: 300, display: 'flex', flexDirection: 'column', flex: 1}}>
                                
                                <HeadingLevel>
                                    <Heading styleLevel={6}>{racer.name}</Heading>
                                </HeadingLevel>
                                <div style={{marginBottom: 5}}>
                                    <Input
                                        type="hidden"
                                        name={`series[${racer._id}].name`}
                                        value={racer.name}
                                        inputRef={register({required: true})}
                                    />
                                    <Input
                                        placeholder="Kart Nr."
                                        type="number"
                                        name={`series[${racer._id}].cartNr`}
                                        inputRef={register({required: true})}
                                    />
                                    {roundsCount.map((round, index) => {
                                        return <div style={{marginTop: 5, marginBottom: 5}}>
                                                    <MaskedInput
                                                        placeholder={`Runde ${index + 1}`}
                                                        mask="99:99:999"
                                                        name={`series[${racer._id}].data[${index}]`}
                                                        inputRef={register}
                                                    />
                                                </div>                          
                                    })}
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            <Button type="submit">Speichern</Button>
            </form>
        </>
    )
    
}

export default Edit