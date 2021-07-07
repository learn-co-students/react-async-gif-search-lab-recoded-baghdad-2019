import React from 'react'

class GifSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:""
        }
    }
    handelChane=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }
    handelSubmit=(event)=>{
        event.preventDefault()
        this.props.searchGif(this.state.inputValue)
    }

    render(){
        const buttonStyle={
            backgroundColor:"lightgreen",
            border:'none',
            margin:'5px',
            padding:'5px',
            color:'white',
            position:'absolute',
            right:'205px',
            top:'147px',

        }
        const inputStyle={
            padding:'3px',
            position:'absolute',
            right:'101px',
            top:'120px',
        }
        const labelStyle={
            position:'absolute',
            top:'100px',
            right:'198px',
        }
        return(
            <div>
                <form onSubmit={this.handelSubmit} >
                    <label style={labelStyle}>SEARCH GIF</label>
                    <input type="input" onChange={this.handelChane} value={this.state.inputValue} style={inputStyle} ></input>
                    <button style={buttonStyle} onClick={this.handelSubmit} >FIND GIF</button>
                </form>
            </div>
        )
    }
   
}
export default GifSearch