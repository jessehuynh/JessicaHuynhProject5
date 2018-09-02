import React, { Component } from 'react';
import firebase from 'firebase';

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
    deleteCard = (cardID) => {
        const cardRef = firebase.database().ref(`/${cardID}`)
        if (cardID != '-LLM_x68QlfqPSU_4AIz'){
            cardRef.remove();
        }
    }
    render(){
        console.log(this.state.card)
        return (
            <section className="cardCatalog">
                <h3>Jesse's Card Catalog</h3>
                {this.state.card.map((card)=>{
                    
                    return (
                        <React.Fragment key={card.key}>
                        <figure style={{backgroundColor: card.cardColor}} id={card.key}>
                            <img src={card.image}/>
                            <h3>{card.message}</h3>
                        </figure>
                        <button onClick={
                            () => {this.deleteCard(card.key) 
                            }} id={card.key}>
                            delete
                        </button>

                        </React.Fragment>
                    )
                })}
            </section>
        )
    }
}


export default CardCollection;