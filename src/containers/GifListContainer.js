import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component{state ={
        fetchedGifs:[]}
fetching = (query = "") =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=7DCpLrc4gtLNAeWBlq1VplntsoZHx739&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({fetchedGifs: data.map(gif=>({url: gif.images.original.url})
            )})})}
componentDidMount(){this.fetching()}
render(){
return(<div>
         <GifList fetchedGifs={this.state.fetchedGifs}/>
         <GifSearch searchGifs ={this.fetching}/>
         </div>)}}
export default GifListContainer; 