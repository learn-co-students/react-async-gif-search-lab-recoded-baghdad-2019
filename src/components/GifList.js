import React from 'react'

export default class GifList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.gify.map(item=>{
                   return <li><img src={item.images.original.url} alt=""/></li>
                })}
            </ul>
        )
    }
}