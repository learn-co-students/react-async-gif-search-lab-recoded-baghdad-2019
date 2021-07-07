import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        input: ""
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.input)
    }
    render() {
        return (

            <form onSubmit={event=>this.handleSubmit(event)}>
                <input type="text" placeholder="Enter Type" onChange={event => this.handleChange(event)} />
                <button type="submit">Submit</button>
            </form>

        )
    }
}