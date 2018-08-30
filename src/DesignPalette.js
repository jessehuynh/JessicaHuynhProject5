import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import Form from './Form';
import ImageCatalog from './ImageCatalog';

class DesignPalette extends Component {
    render(){
        return (
            <section className="design">
                <ColorPalette/>
                <Form/>
                <ImageCatalog/>
            </section>
            
        )
    }
}

export default DesignPalette;