import React, { Component } from 'react';
import Image from './Image';
// import Message from './Message';



class Card extends Component {
   constructor(){
       super();
       this.state = {
           image: ''
       }
   }
    render(){
        return (
            <section className="card" name="card">
                <figure className="userImage">
                    <img src={this.props.userImage} alt=""/>
                </figure>
                <h3>{this.props.addText}</h3>
            </section>
        )
    }
}

export default Card;
