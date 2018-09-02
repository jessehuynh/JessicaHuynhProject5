import React, { Component } from 'react';
import halloween from '../assets/halloween-pumpkin.png';
import cake from '../assets/cake-slice.png';
import heart from '../assets/heart.png';
import present from '../assets/present.png';
import icecream from '../assets/soft-serve.png';
import sad from '../assets/condolences.png';

class ImageCart extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         image: ['../assets/halloween-pumpkin.png', '../assets/cake-slice.png', '../assets/heart.png', '../assets/present.png', '../assets/soft-serve.png', '../assets/condolences.png'],
    //     }
    // }
    clickImage = (e) => {
        // console.log(e.target.src);
        this.props.changeImage(e.target.src)
        // console.log(this.state.image);
    }

    render(){
        return (
            <React.Fragment>
            <span className="container__text">Select your image</span>
            <section className="container container--cart">
                <figure className="container__card">
                    <img onClick={this.clickImage} src={halloween} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={cake} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={heart} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={present} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={icecream} alt=""/>
                </figure>
                <figure className="container__card">
                    <img onClick={this.clickImage} src={sad} alt=""/>
                </figure>
            </section>
            </React.Fragment>
        )
    }
}

export default ImageCart;