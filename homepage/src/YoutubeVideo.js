import React from 'react'

const YoutubeVideo = ({id}) => {
    return (
        <iframe 
        style={{width: '100%', height: '100%'}}
        src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=0&rel=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default YoutubeVideo