import React from 'react' ;
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.component {
  
  state = {
    gif : []
    
    handleSubmit =(type) =>{
      fetch (`https://api.giphy.com/v1/gifs/search?q="${type}" HERE&api_key=dc6zaTOxFJmzC&rating=g`)
      .then (res => res.JSON())
      .then (JSON => { this.setState ({gif : JSON.data.slice(0 , 3)})
      })
    }
  }
}

render(){
  return (
    <div>
    <gifSearch handleSubmit={this.handleSubmit}/>
    <GifList gif={this.state.gif}/>
    </div>
    )
}

export default GifListContainer