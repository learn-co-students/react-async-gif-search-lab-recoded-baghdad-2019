import React, {Component} from 'react'
class GifList extends Component{
render(){return(<div><ul>{this.props.fetchedGifs.map
(gif =>(<li><img key = {gif.url} src = {gif.url} alt = "gif" />
</li>))}
</ul></div>)}
}
export default GifList