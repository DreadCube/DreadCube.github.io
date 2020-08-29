import React from 'react'

import { Table } from "baseui/table";

const List = ({title, seriesData}) => {
    const racers = seriesData.map(series => series.name)
    racers.unshift('Lap')
    const data = seriesData.map(series => series.data)
    
    const racerDatas = []

    const raceLength = data[0].length
   
    for (let i = 0; i < raceLength; i++) {
        const filteredData = data.map((subData, subKey) => subData[i])
        filteredData.unshift(i+1)
        racerDatas.push(filteredData)
    }
    
    return  <Table
                columns={racers}
                data={racerDatas}
            />
}

export default List