import React, { Component } from 'react';
import CustomProperties from 'react-custom-properties';


class ColorPalette extends Component {
    constructor(){
        super();
        this.state = {
            message: '',
            cardColor: '#DDEAF3',
            image:'',
        }
    }
    handleTextChange = (e) => {
        // console.log(e.target.id)
        this.props.addText(e.target.value)
        this.setState({
            message: e.target.value,
        
        }, () => {
            // console.log(this.state.card.message)
            // document.documentElement.style.setProperty('--base', this.props.newCard.cardColor)
        })
    }
    handleColorChange = (e) => {
        this.setState({
            cardColor: e.target.value,
        }, () => {
            this.props.addColor(this.state.cardColor)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addText(this.state.message, this.state.cardColor);

    }
    presetColor = (e) => {
        this.setState({
            cardColor: e.target.value,
        }, () => {
            this.props.addColor(this.state.cardColor)
        })
    }
    render(){
        return (
            // COLOUR PALETTE AND FORM 
            <section className="container container--colors">
                <form onSubmit={this.handleSubmit} action="" className="container__form">
                    <label className="visuallyhidden form__input" htmlFor="message"></label>
                    <input onChange={this.handleTextChange} className="form__input" type="text" id="message" placeholder="Insert your message" value={this.state.message}/>
                    <input className="visuallyhidden" type="submit" value="Try it!"/>
                    <CustomProperties 
                    global
                    properties={{'--base': this.state.cardColor}}/>
                    <button style={{backgroundColor: '#F0D3D1'}} onClick={this.presetColor} className="form__btn form__btn--pink" value="#F0D3D1">Blush</button>
                    <button style={{ backgroundColor: '#CDD6EE' }}onClick={this.presetColor} className="form__btn form__btn form__btn--blue" value="#CDD6EE">Cloudy Sky</button>
                    <button style={{ backgroundColor: '#F9F1EC' }}onClick={this.presetColor} className="form__btn form__btn--cream" value="#F9F1EC">Milk Tea</button>
                    <label htmlFor="cardColor">Choose your own colour:</label>
                    <input onChange={this.handleColorChange} className="form__btn form__btn--picker" type="color" id="cardColor" name="base" maxLength="200" value={this.state.cardColor}/>
                </form>
            </section>
            
        )
    }
}

export default ColorPalette;