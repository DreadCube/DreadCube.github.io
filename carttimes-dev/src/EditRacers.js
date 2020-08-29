import React from 'react'

import {Input} from 'baseui/input'
import {Button} from 'baseui/button';

import PouchDB from './pouchdb'

import { useForm } from "react-hook-form"

const EditRacers = () => {

    const { register, handleSubmit } = useForm();

    const [racers, setRacers] = React.useState([])

    console.log(racers)
    React.useEffect(() => {
        const racersDb = new PouchDB('http://localhost:5984/racers')
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

    const onSubmit = (data) => {
        const racersDB = new PouchDB('http://localhost:5984/racers')

        racersDB.allDocs().then(res => {
            const nextId = String(res.rows.length)
            racersDB.put({name: data.name, _id: nextId}).then(res => {
            })
        })

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="TEXT"
                placeholder="Racer Name"
                name="name"
                inputRef={register({required: true})}
            />
            <Button type="submit">Hinzufügen</Button>
        </form>
    )
}

export default EditRacers