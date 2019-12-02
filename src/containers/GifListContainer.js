import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'
class GifListContainer extends React.Component{
    constructor(){
        super()
        this.state={
            gifs:[]
        }
    }
      searchGif=(value='dolphins')=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=CmaTAeFS1yZJZR3BM4vSJBP6AvPaLqUs`)
        .then(res=>res.json())
        .then(({data})=>{this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})})
    }
   
    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs.slice(0,3)}/>
                <GifSearch searchGif={this.searchGif} />
            </div>
        )
    }
    componentDidMount(){
      this.searchGif()
      
    }
}
export default GifListContainer