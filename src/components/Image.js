import React, { Component } from 'react';
import halloween from '../assets/halloween-pumpkin.png';
// import cake from '../src/assets/cake-slice.png';
// import heart from '../src/assets/heart.png';
// import present from '../src/assets/present.png';
// import icecream from '../src/assets/soft-serve.png';
// import sad from '../src/assets/condolences.png';



class Image extends Component {
    constructor(){
        super();
        this.state = {
            image: '',
        }
    }
    render(){
        return (
            <figure className="userImage">
                <img src={halloween} alt=""/>
            </figure>
        )
    }
}

export default Image;
