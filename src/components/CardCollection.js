import React, { Component } from 'react';
import firebase from 'firebase';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver/FileSaver';
import FileSaver from 'file-saver';

// import Canvas2Image from 'canvas2image';


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
    saveImage = (e) => {
        const capture = e.target.id
        console.log(e.target)
        // html2canvas(document.getElementById('capture')).then(function (canvas) {
        //     // Export canvas as a blob 
        //     canvas.toBlob(function (blob) {
        //         // Generate file download
        //         FileSaver.saveAs(blob, "bestECard.png");
        //     });
        // });
        // console.log(this.refs, capture)
    
        html2canvas(this.refs[capture]).then(function (canvas) {
            // Export canvas as a blob 
            // console.log(canvas)
            canvas.toBlob(function (blob) {
                // console.log(blob)
                // Generate file download
                FileSaver.saveAs(blob, "bestECard.png");
            });
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
                    // console.log(card.key)
                    return (
                        // CARD CATALOG SECTION
                        <section className="container container--collection">
                            <figure className="container__card capture" ref={card.key} style={{backgroundColor: card.cardColor}}>   
                                <img id="mirror" class="canvas__mirror" src={card.image}/>
                                <h4 className="container__text">{card.message}</h4>
                                <button class="button" id={card.key} onClick={this.saveImage}><i id={card.key} class="fas fa-file-download"></i></button>
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