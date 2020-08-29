import React from 'react'

import ApexChart from "react-apexcharts";

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

const Chart = ({seriesData, title}) => {

    const [stateSeries, setStateSeries] = React.useState(seriesData)
    React.useEffect(() => {
        const series = seriesData.map(serie => {
            serie.data = serie.data.map(entry => timeToMs(entry))
            return serie
        })
        setStateSeries(series)
    }, [seriesData])
  
    const options = {
        title: {
            text: title,
            margin: 10,
            style: {
                color: '#FFFFFF'
            }
        },
        dataLabels: {
            enabled: false,
        },
        chart: {
            id: "basic-bar",
            type: 'area',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        xaxis: {
            categories: [].fill(20),
            labels: {
                formatter: (value) => {
                    return `L ${value}`
                },
                style: {
                    colors: '#FFFFFF'
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value) => {
                    return msToTime(value)
                },
                style: {
                    fontSize: '2.5vw',
                    colors: '#FFFFFF'
                },
                show: false
            }
        },
        legend: {
            labels: {
                useSeriesColors: true
            }
        }
    }

    return (
        <div style={{width: '90vw'}}>
            <ApexChart
                options={options}
                series={stateSeries}
                type="area"
                />
        </div>
    )
}

export default Chart