import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';


import DesignPalette from './components/DesignPalette';
import Card from './components/Card';
import CardCollection from './components/CardCollection';


const dbRef = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: '',
      cardColor: '',
      image:'',
    }
  }
  saveToFirebase = () => {
    const savedCard = {
      message: this.state.message,
      cardColor: this.state.cardColor,
      image: this.state.image
    }
    dbRef.push(savedCard);
    console.log(savedCard);
    this.setState({
       card: savedCard,
    }, () => {
      // console.log(savedCard);
    })
  }
  updateCard = (message, color) => {
    this.setState({
      message: message,
      cardColor: color,
    }, () => {

    })
  }
  selectImage = (image) => {
    this.setState({
      image: image
    });
  }
  render() {
    console.log(this.state)
    return (
      <main>
        <Card addText={this.state.message} userImage={this.state.image}/>
        <DesignPalette addColor={this.addColor} addMessage={this.addMessage} updateCard={this.updateCard} selectImage={this.selectImage}/>
        <button onClick={this.saveToFirebase} className="create">Save E-Card</button>
        <CardCollection/>
      </main>
    );
  }
}

export default App;
