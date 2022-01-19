import React from "react";
import useDeal from './hooks/useDeal';
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [message, cards, addCard] = useDeal();
  const url = "https://deckofcardsapi.com/api/deck/new/draw/";
  
  const dealCard = () => {
    addCard(url);
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={dealCard}>Add a playing card!</button>
        {message ? <h4>{message}</h4> : <h4> </h4> }
      </div>
      <div className="PlayingCardList-card-area">
        <h4>{ message ? message : '' }</h4>
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
