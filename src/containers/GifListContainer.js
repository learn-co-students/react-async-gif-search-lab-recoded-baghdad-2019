import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        GifArray:[]
    }

    Submit=(type)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q="${type}"&api_key=kCGdztQcjnNR5MZEH8FZ4UwbXlNUF4Lk&rating=g`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                GifArray: json.data.slice(0, 3)
            })
        })
}

        render(){
            return(
                <div>
                <GifSearch Submit={this.Submit} />
                <GifList GifArray={this.state.GifArray} />
            </div>
            )
        }
    }
