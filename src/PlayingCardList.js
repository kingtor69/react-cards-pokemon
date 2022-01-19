import React from "react";
import useAxios from './hooks/useAxios';
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [message, cards, addCard] = useAxios();
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
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
