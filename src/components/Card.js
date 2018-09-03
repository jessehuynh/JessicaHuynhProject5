import React, { Component } from 'react';
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
            <section className="container container--card card" name="card">
                <figure style={{backgroundColor: '--base'}}className="container__card">
                    <img src={this.props.userImage} alt=""/>
                </figure>
                <h4 className="card__text">{this.props.addText}</h4>
            </section>
        )
    }
}

export default Card;
