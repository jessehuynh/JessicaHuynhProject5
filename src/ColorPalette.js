import React, { Component } from 'react';

const colorPicker = document.querySelector('input[type=color]');

class ColorPalette extends Component {
    constructor(){
        super();
        this.state = {
            cardColor: '#C2EBDC',
        }
    }
    // when the user selects a colour, the card background will take the same colour
    // place the same colour value on the button and pass it to the card BGC
        // I want to do it this way because it will take the same technique as the color picker
    handleUpdate = (e) => {
        this.setState({
            cardColor: e.target.value,
        })
        this.props.changeColor(this.state.cardColor)
        // console.log(this.state.cardColor);
    }
    render(){
        return (
            <section className="colours">
                <button className="pink">#F0D3D1</button>
                <button className="blue">#CDD6EE</button>
                <button className="beige">#DFC39F</button>
                <input onChange={this.handleUpdate} type="color" name="base" value="#C2EBDC"/>
            </section>
        )
    }
}

export default ColorPalette;