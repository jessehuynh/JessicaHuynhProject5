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
    addText = (message) => {
        this.setState({
            message:message,
        }, () => {
            this.props.updateText(this.state.message)
        })
    }
    addColor = (color) => {
        this.setState({
            cardColor:color,
        }, () => {
            this.props.updateColor(this.state.cardColor)
        })
    }
    changeImage = (image) => {
        this.props.selectImage(image)
    }
    render(){
        return (
            // DESIGN PALETTE
            <section className="container container--design">
                <ImageCart changeImage={this.changeImage}/>
                <ColorPalette addText={this.addText} addColor={this.addColor} />
            </section>
            
        )
    }
}

export default DesignPalette;