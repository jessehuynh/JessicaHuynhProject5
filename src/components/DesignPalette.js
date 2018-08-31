import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import Form from './Form';
import ImageCatalog from './ImageCatalog';

class DesignPalette extends Component {
    constructor(){
        super();
        this.state = {
                message:'',
                cardColor:'#FFFFFF',
                image:'',
        }
    }
    addContent = (message, color, image) => {
        // console.log(color);
        this.setState({
            message: message,
            cardColor: color,
            image:image,
        }, () => {
            this.props.updateCard(this.state.message, this.state.cardColor)
            console.log(this.state);
        })
    }
    changeImage = (image) => {
        this.props.selectImage(image)
    }

    render(){
        return (
            <section className="design">
                <ColorPalette addContent={this.addContent} />
                <ImageCatalog changeImage={this.changeImage}/>
            </section>
            
        )
    }
}

export default DesignPalette;