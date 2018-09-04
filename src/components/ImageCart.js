import React, { Component } from 'react';

// images
import halloween from '../assets/halloween-pumpkin.png';
import cake from '../assets/cake-slice.png';
import heart from '../assets/heart.png';
import star from '../assets/star.png';
import icecream from '../assets/soft-serve.png';
import witch from '../assets/witch-hat.png';


class ImageCart extends Component {
    clickImage = (e) => {
        // console.log(e.target.src);
        this.props.changeImage(e.target.src)
        // console.log(this.state.image);
    }

    render(){
        return (
            <section className="container container--cart">
                <figure className="container__card">
                    <img onClick={this.clickImage} src={halloween} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={witch} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={cake} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={heart} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={star} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={icecream} alt=""/>
                </figure>
            </section>
        )
    }
}

export default ImageCart;