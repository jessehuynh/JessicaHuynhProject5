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
            // cardColor: this.props.newCard
        }, () => {
            // console.log(this.state.message)
            this.props.addMessage(this.state.message);
            this.props.setColor(this.state.cardColor);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.message);
        // this.props.newCard()
        // document.documentElement.style.setProperty('--base', this.props.newCard.cardColor)
        this.props.addMessage(this.state.message);
        this.props.setColor(this.state.cardColor);
    
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} action="" className="userInput">
                <label className="visuallyhidden" htmlFor="message"></label>
                <input onChange={this.handleChange} type="text" id="message" placeholder="Insert your message" value={this.state.message}/>
                <input type="submit" value="Create E-Card"/>
            </form>
        )
    }
}

export default Form;