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
      card: {
        cardColor: '#FFFFFF',
        message: '',
      },
    }
  }
  componentDidMount(){
    console.log('component mount was called');
    dbRef.on('value', (snapshot) => {
      this.setState({
        card: snapshot.val(),
      })
    });
  }
  addMessage = (message) => {
    this.setState({
      card: {
        message: message,
      }
    }, () => {
      // console.log(message);
      // console.log(this.state.message);
      
    })
  }
  addColor = (color) => {
    this.setState({
      card: {
        cardColor: color,
      }
    }, () => {
      // console.log(this.props.selectedColour)
    })
  }
  render() {
    return (
      <main>
        <Card addMessage={this.addMessage} newCard={this.state.card}/>
        <DesignPalette addColor={this.addColor} addMessage={this.addMessage}/>
      </main>
    );
  }
}

export default App;
