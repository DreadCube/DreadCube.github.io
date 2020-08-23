import React from 'react'

import '../node_modules/react-vis/dist/style.css';

import {HeadingLevel, Heading} from 'baseui/heading'

import Chart from "react-apexcharts";


const msToTime = (duration) => {
    
    var milliseconds = parseInt((duration % 1000)),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    if (milliseconds < 10) {
        milliseconds = "00" + milliseconds
    } else if (milliseconds < 100) {
        milliseconds = "0" + milliseconds
    }
    return minutes + ":" + seconds + "." + milliseconds;
  }



const timeToMs = (time) => {
    const parts = time.split(':')
    const ms = (Number(parts[0]) * 60 * 1000) + (Number(parts[1]) * 1000 ) + Number(parts[2])
    return ms
}
const Charts = ({selectedRacers}) => {

    const series = [
        {
          name: "DreadCube",
          data: [
              timeToMs('00:46:109'),
              timeToMs('00:45:920'),
              timeToMs('00:45:840'),
              timeToMs('00:45:588'),
              timeToMs('00:45:340'),
              timeToMs('00:45:169'),
              timeToMs('00:45:168'),
              timeToMs('00:45:339'),
              timeToMs('00:45:006'),
              timeToMs('00:45:236'),
              timeToMs('00:45:091'),
              timeToMs('00:45:201')
            ]
        },
        {
            name: "Haferflöckli",
            data: [
                timeToMs('00:46:854'),
                timeToMs('00:46:878'),
                timeToMs('00:46:705'),
                timeToMs('00:46:663'),
                timeToMs('00:46:616'),
                timeToMs('00:46:513'),
                timeToMs('00:46:452'),
                timeToMs('00:46:565'),
                timeToMs('00:46:624'),
                timeToMs('00:46:569'),
                timeToMs('00:46:757'),
                timeToMs('00:46:754')
              ]
          },
          {
            name: "Lavaling",
            data: [
                timeToMs('00:47:614'),
                timeToMs('00:46:990'),
                timeToMs('00:46:875'),
                timeToMs('00:46:569'),
                timeToMs('00:46:470'),
                timeToMs('00:46:564'),
                timeToMs('00:46:766'),
                timeToMs('00:46:940'),
                timeToMs('00:46:460'),
                timeToMs('00:46:486'),
                timeToMs('00:46:491'),
                timeToMs('00:46:316')
              ]
          }
      ]

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [].fill(20),
            labels: {
                formatter: (value) => {
                    return `L ${value}`
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value) => {
                    return msToTime(value)
                }
            }
        }
    }

    return (
        <div style={{width: '80vw'}}>
        <HeadingLevel>
            <Heading styleLevel={4}>Rundenzeiten nach Fahrer</Heading>
        </HeadingLevel>
        <Chart
              options={options}
              series={series}
              type="line"
            />
        </div>
    )
}

export default Charts