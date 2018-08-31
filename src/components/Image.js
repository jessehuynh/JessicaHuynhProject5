import React, { Component } from 'react';
import halloween from '../assets/halloween-pumpkin.png';
import cake from '../assets/cake-slice.png';
import heart from '../assets/heart.png';
import present from '../assets/present.png';
import icecream from '../assets/soft-serve.png';
import sad from '../assets/condolences.png';

class Image extends Component {
    constructor(){
        super();
        this.state = {
            image: ['../assets/halloween-pumpkin.png', '../assets/cake-slice.png', '../assets/heart.png', '../assets/present.png', '../assets/soft-serve.png', '../assets/condolences.png'],
        }
    }
    render(){
        console.log(this.state.image)
        return (
            <figure className="userImage">
                <img src={halloween} alt=""/>
            </figure>
        )
    }
}

export default Image;
