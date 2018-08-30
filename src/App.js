import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';


// import DesignPalette from './DesignPalette';
import Card from './Card';
import ColorPalette from './ColorPalette';
import Form from './Form';
import ImageCatalog from './ImageCatalog';

const dbRef = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {
      card: {},
      cardColor: '',
    }
  }
  componentDidMount(){
    console.log('component mount was called');
    dbRef.on('value', (snapshot) => {
    });
  }

  changeColor = (cardColor) => {
    this.setState({
      cardColor: cardColor,
    })
    

  }
  render() {
    return (
      <main>
        <Card selectedColor={this.state.cardColor}/>
        <section className="designPalette">
        <ColorPalette changeColor={this.changeColor}/>
        <Form/>
        <ImageCatalog/>
        </section>
        {/* <DesignPalette/> */}
      </main>
    );
  }
}

export default App;
