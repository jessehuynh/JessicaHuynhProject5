import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            message:'',

        }
    }
    handleChange = (e) => {
        // console.log(e.target.id)
        this.setState({
            message: e.target.value,
        })
        console.log(this.state.message)
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} action="" className="userInput">
                <label className="visuallyhidden" htmlFor="message"></label>
                <input onChange={this.handleChange} type="text" id="message" placeholder="Insert your message" value={this.state.message}/>
                <input type="submit" value="Try it!"/>
            </form>
        )
    }
}

export default Form;