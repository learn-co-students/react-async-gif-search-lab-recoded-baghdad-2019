import React from 'react'
class GifList extends React.Component {
    render(){
        return(
            <div>
                <ul>
                {this.props.fetchedGifs.map(gif =>(
                <li>   
                <img key={gif.url} src={gif.url} alt="gif"/>
                </li>)
                )}
                </ul>
            </div>
        )
    }

}
export default GifList;