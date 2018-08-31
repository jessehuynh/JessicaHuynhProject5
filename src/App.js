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
    }
    dbRef.push(savedCard);
    console.log(savedCard);
  }
  updateCard = (message, color) => {
    this.setState({
      message: message,
      cardColor: color,
    }, () => {

    })
  }
  render() {
    console.log(this.state)
    return (
      <main>
        <Card addText={this.state.message} />
        <DesignPalette addColor={this.addColor} addMessage={this.addMessage} updateCard={this.updateCard}/>
        <button onClick={this.saveToFirebase} className="create">Create E-Card</button>
      </main>
    );
  }
}

export default App;
