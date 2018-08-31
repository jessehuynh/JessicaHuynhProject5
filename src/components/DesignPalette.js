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
    addContent = (message, color) => {
        console.log(color);
        this.setState({
            message: message,
            cardColor: color,
        }, () => {
            // console.log(this.state.card);
        })
    }

    render(){
        return (
            <section className="design">
                <ColorPalette addContent={this.addContent} />
                <ImageCatalog />
            </section>
            
        )
    }
}

export default DesignPalette;