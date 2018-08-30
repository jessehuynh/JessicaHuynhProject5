import React, { Component } from 'react';
import Image from './Image';
import Message from './Message';



class Card extends Component {
    constructor(){
        super();
        // setting the natural state of the card
        this.state = {
            card: '',
        }
    }
    
    handleChange = () => {
        this.setState({
            card:this.props.selectedColor,
        })
        document.documentElement.style.setProperty('--base', this.props.selectedColor)
    }
    render(){
        console.log(this.props)
        return (
            <section className="card" name="card">
                <Image/>
                <Message/>
            </section>
        )
    }
}

export default Card;
