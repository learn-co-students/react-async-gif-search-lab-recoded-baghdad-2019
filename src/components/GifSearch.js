import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        search:""
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.submit(this.state.search)
    }

    handleChange=(event)=>{
        this.setState({
            search: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={event=>this.handleSubmit(event)}>
                <input type="text" placeholder="Search HERE !" onChange={event => this.handleChange(event)} />
                <button type="submit">Submit</button>
            </form>

        )
    }
}