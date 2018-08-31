import React, { Component } from 'react';
import Image from './Image';
// import Message from './Message';



class Card extends Component {
    constructor(){
        super();
        // setting the natural state of the card
        this.state = {
            card: {
                cardColor:'',
                message: '',
            }
        }
    }
    
    handleChange = () => {
        document.documentElement.style.setProperty('--base', this.props.selectedColor)
        // this.setState({
        //     message:this.state.message,
        //     // cardColor: selectedColor,
        // }, ()=> {
        //     console.log(this.state.cardColor)
        // })
    }
    setColor = () => {
        this.setState({
            card:{
                cardColor: this.props.newCard.cardColor
            }
        })
    }
    render(){
        return (
            <section className="card" name="card">
                <Image/>
                <h3/>
            </section>
        )
    }
}

export default Card;
