import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import ImageCart from './ImageCart';

class DesignPalette extends Component {
    constructor(){
        super();
        this.state = {
                message:'',
                cardColor:'#FFFFFF',
                image:'',
        }
    }
    addContent = (message, color) => {
        // console.log(color);
        this.setState({
            message: message,
            cardColor: color,
        }, () => {
            this.props.updateCard(this.state.message, this.state.cardColor)
            // console.log(this.state);
        })
    }
    changeImage = (image) => {
        this.props.selectImage(image)
    }

    render(){
        return (
            <section className="container container--design">
                <ImageCart changeImage={this.changeImage}/>
                <ColorPalette addContent={this.addContent} />
            </section>
            
        )
    }
}

export default DesignPalette;