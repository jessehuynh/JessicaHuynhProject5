import React, { Component } from 'react';
import halloween from '../assets/halloween-pumpkin.png';
import cake from '../assets/cake-slice.png';
import heart from '../assets/heart.png';
import present from '../assets/present.png';
import icecream from '../assets/soft-serve.png';
import sad from '../assets/condolences.png';

class ImageCatalog extends Component {
    constructor() {
        super();
        this.state = {
            image: ['../assets/halloween-pumpkin.png', '../assets/cake-slice.png', '../assets/heart.png', '../assets/present.png', '../assets/soft-serve.png', '../assets/condolences.png'],
        }
    }
    render(){
        return (
            <section className="catalog">
                <figure className="imageType">
                    <img src={halloween} alt=""/>
                </figure>
                <figure>
                    <img src={cake} alt=""/>
                </figure>
                <figure>
                    <img src={heart} alt=""/>
                </figure>
                <figure>
                    <img src={present} alt=""/>
                </figure>
                <figure>
                    <img src={icecream} alt=""/>
                </figure>
                <figure>
                    <img src={sad} alt=""/>
                </figure>
            </section>
        )
    }
}

export default ImageCatalog;