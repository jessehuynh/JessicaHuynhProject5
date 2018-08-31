import React, { Component } from 'react';
import CustomProperties from 'react-custom-properties';

const colorPicker = document.querySelector('input[type=color]');

class ColorPalette extends Component {
    constructor(){
        super();
        this.state = {
            message: '',
            cardColor: '#FFFFFF',
            
        }
    }
    handleTextChange = (e) => {
        // console.log(e.target.id)
        this.setState({
            message: e.target.value,
        
        }, () => {
            // console.log(this.state.card.message)
            // document.documentElement.style.setProperty('--base', this.props.newCard.cardColor)
            // this.props.addColor(this.state.cardColor);
        })
    }
    handleColorChange = (e) => {
        this.setState({
            cardColor: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.message);
        // this.props.newCard()
        // this.props.addMessage(this.state.message);
        this.props.addContent(this.state.message, this.state.cardColor);

    }
    // handleUpdate = (e) => {
    //     this.setState({
    //         cardColor: e.target.value,
    //     })
    //     console.log(this.state.cardColor);
    //     this.props.addColor(this.state.cardColor);
    // }
    render(){
        return (
            <section className="colours">
             <form onSubmit={this.handleSubmit} action="" className="userInput">
            <CustomProperties 
            global
            properties={{'--base': this.state.cardColor}}/>
                <button className="pink">#F0D3D1</button>
                <button className="blue">#CDD6EE</button>
                <button className="beige">#DFC39F</button>
                <input onChange={this.handleColorChange} type="color" id="cardColor" name="base" value={this.state.cardColor}/>
            
                <label className="visuallyhidden" htmlFor="message"></label>
                <input onChange={this.handleTextChange} type="text" id="message" placeholder="Insert your message" value={this.state.message}/>
                <input type="submit" value="Try it!"/>
            </form>
            </section>
            
        )
    }
}

export default ColorPalette;