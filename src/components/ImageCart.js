import React, { Component } from 'react';

// images
import halloween from '../assets/halloween-pumpkin.png';
import cake from '../assets/cake-slice.png';
import ghost from '../assets/ghost.png';
import star from '../assets/star.png';
import icecream from '../assets/soft-serve.png';
import witch from '../assets/witch-hat.png';
import cat from '../assets/cat.png';


class ImageCart extends Component {
    clickImage = (e) => {
        // console.log(e.target.src);
        this.props.changeImage(e.target.src)
        // console.log(this.state.image);
    }

    render(){
        return (
            // IMAGES SELECTION SECTION
            <React.Fragment>
            <label htmlFor="images">Select your card:</label>
            <section className="container container--cart" id="images">
                <figure className="container__card">
                    <img onClick={this.clickImage} src={halloween} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={witch} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={ghost} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={cake} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={star} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={icecream} alt=""/>
                </figure>
                <figure className="container__card cat">
                    <img onClick={this.clickImage} src={cat} alt="" />
                </figure>
            </section>
            </React.Fragment>
        )
    }
}

export default ImageCart;