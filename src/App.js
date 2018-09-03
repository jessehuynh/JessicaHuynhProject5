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
  updateText = (message) => {
    this.setState({
      message:message,
    })
  }
  updateColor = (color) => {
    this.setState({
      cardColor:color
    })
  }

  // updateCard = (message, color) => {
  //   this.setState({
  //     message: message,
  //     cardColor: color,
  //   })
  // }
  selectImage = (image) => {
    this.setState({
      image: image
    });
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <main>
          <section className="container container--xCards">
          <CardCollection/>
          </section>
          <div className="wrapper">
            <section className="container">
              <Card addText={this.state.message} userImage={this.state.image}/>
            </section>
            <aside>
              <DesignPalette addColor={this.addColor} addMessage={this.addMessage} updateText={this.updateText} updateColor={this.updateColor} selectImage={this.selectImage}/>
              <button className="container__btn" onClick={this.saveToFirebase} className="create">Save E-Card</button>
            </aside>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
