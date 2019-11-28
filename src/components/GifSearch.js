import React from 'react'
class GifSearch extends React.Component{
    state={
        userInput:''
    }
    handleChange = (e)=>{
        e.persist()
        this.setState({userInput:e.target.value})
    }
    handleSubmit = (e) =>{
     e.preventDefault() 
    this.props.searchGifs(this.state.userInput)
    }
    render(){
        return(
            <div>
                <form onSubmit={event =>this.handleSubmit(event)}>
                    <input type="text" name="query" value={this.state.userInput} onChange={event =>this.handleChange(event)}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default GifSearch;