import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';


import DesignPalette from './components/DesignPalette';
import Card from './components/Card';


const dbRef = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: '',
      cardColor: '#FFFFFF',
    }
  }
  componentDidMount(){
    console.log('component mount was called');
    dbRef.on('value', (snapshot) => {
      // this.car(snapshot.val());
    });
  }
  saveToFirebase = () => {
    const savedCard = {
      message: this.state.message,
      cardColor: this.state.cardColor,
      image: this.state.image
    }
    dbRef.push(savedCard);
    console.log(savedCard);
  }
  deleteCard = (cardID) => {
    // delete from firebase
    console.log(cardID);
    // const cardDbRef = firebase.database().ref(`/${cardID}`);
    // cardDbRef.remove();
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
    // console.log(this.state)
    return (
      <main>
        <Card addText={this.state.message} userImage={this.state.image}/>
        <DesignPalette addColor={this.addColor} addMessage={this.addMessage} updateCard={this.updateCard} selectImage={this.selectImage}/>
        <button onClick={this.saveToFirebase} className="create">Create E-Card</button>
      </main>
    );
  }
}

export default App;
