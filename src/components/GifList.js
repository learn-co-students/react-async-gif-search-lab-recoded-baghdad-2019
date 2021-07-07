import React from 'react'

const GifList=(props)=>{
    const imageStyle={
        display:'block',
        width:'280px',
        hight:'280px',
        margin:'0 0 5px 50px'
    }
    return (
        <div>
           {props.gifs.map((element)=><img style={imageStyle} key={element.url} src={element.url} alt="gif"/>)}
        </div>
    )
}
export default GifList