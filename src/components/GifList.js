import React from 'react'

export default class GifList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.GifArray.map(item=>{
                   return <li><img src={item.images.original.url} alt=""/></li>
                })
                }
            </ul>
        )
    }
}