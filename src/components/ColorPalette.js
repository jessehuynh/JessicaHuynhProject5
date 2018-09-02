import React, { Component } from 'react';
import CustomProperties from 'react-custom-properties';

// const colorPicker = document.querySelector('input[type=color]');

class ColorPalette extends Component {
    constructor(){
        super();
        this.state = {
            message: '',
            cardColor: 'none',
            image:'',
        }
    }
    handleTextChange = (e) => {
        // console.log(e.target.id)
        this.props.addContent(e.target.value)
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
    presetColor = (e) => {
        this.setState({
            cardColor: e.target.value,
        }, () => {
            this.props.addContent(this.state.cardColor)
        })
    }
    render(){
        return (
            <section className="container container--colors">
                <form onSubmit={this.handleSubmit} action="" className="container__form">
                <label className="visuallyhidden form__input" htmlFor="message"></label>
                <input onChange={this.handleTextChange} className="form__input" type="text" id="message" placeholder="Insert your message" value={this.state.message}/>
                <input className="visuallyhidden" type="submit" value="Try it!"/>
                <CustomProperties 
                global
                properties={{'--base': this.state.cardColor}}/>
                <span>Select your colour</span>
                <button onClick={this.presetColor} className="form__btn form__btn--pink" value="#F0D3D1">Blush</button>
                <button onClick={this.presetColor} className="form__btn form__btn form__btn--blue" value="#CDD6EE">Cloudy Sky</button>
                <button onClick={this.presetColor} className="form__btn form__btn--cream" value="#F9F1EC">Milk Tea</button>
                <input onChange={this.handleColorChange} className="form__btn form__btn--picker" type="color" id="cardColor" name="base" maxLength="200" value={this.state.cardColor}/>
            </form>
            </section>
            
        )
    }
}

export default ColorPalette;