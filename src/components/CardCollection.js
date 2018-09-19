import React, { Component } from 'react';
import firebase from 'firebase';
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image';



const dbRef = firebase.database().ref();

class CardCollection extends Component {
   constructor(){
       super();
       this.state = {
           card: []
       }
    }
    componentDidMount() {
        console.log('component mount was called');
        dbRef.on('value', (snapshot) => {
            if (snapshot.val()) {
                this.cardList(snapshot.val())
            }
        });
    }
    cardList = (cards) => {
        console.log(cards)
        const cardListArray = Object.entries(cards).map((card) => {
            return({
                key: card[0],
                cardColor: card[1].cardColor,
                message: card[1].message,
                image: card[1].image,
            })
        })
        // console.log(cardListArray)
        this.setState({
            card: cardListArray
        }, () =>{
            // console.log(cardListArray)
        })
    }
    saveImage = () => {
        // let htmlObj = html2canvas(document.getElementById('capture'))
        // var queue = htmlObj.Parse();
        // var canvas = htmlObj.Renderer(queue, { elements: { length: 1 } });
        // var img = canvas.toDataURL();
        // window.open(img);
        html2canvas(document.getElementById('capture')).then(canvas => {
            document.querySelector('.saved').appendChild(canvas) 
        });
    }
    deleteCard = (cardID) => {
        const cardRef = firebase.database().ref(`/${cardID}`)
        const confirm = window.confirm('WARNING: This will permanently remove this card. Do you want to continue?');
        if (confirm === true && cardID != '-LLXuJgN3DMECSVSIjLL') {
            cardRef.remove();
        }
    }
    render(){
        // console.log(this.state.card)
        return (
            <section className="container__catalog">
                
                {this.state.card.map((card)=>{
                    return (
                        // CARD CATALOG SECTION
                        <section className="container container--collection">
                            <figure className="container__card" id="capture" style={{backgroundColor: card.cardColor}} id={card.key}>
                                <img id="mirror" class="canvas__mirror"  src={card.image}/>
                                <h4 className="container__text">{card.message}</h4>
                                <a href="#" class="button" id="btn--download" onClick={this.saveImage}><i class="fas fa-file-download"></i></a>
                                <button className="btn--delete" onClick={
                                    () => {this.deleteCard(card.key) 
                                    }} id={card.key}>
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </figure>
                            <div className="saved"></div>
                        </section>
                    )
                })}
            </section>
        )
    }
}


export default CardCollection;