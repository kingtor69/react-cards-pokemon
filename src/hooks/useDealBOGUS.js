import { useState } from 'react';
import useAxios from './useDeal'

import uuid from "uuid";

const useDeal = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState(null)
  const { response, error, isLoading } = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  const addCard = (card) => {
    setCards(cards => [...cards, { ...card, id: uuid() }]);
    return cards;
  };

  if (error) {
    setMessage("Sorry, something went wrong.")
  } else if (isLoading) {
    setMessage("loading...")
  } else {
    setMessage(null);
    addCard(response.data);
  };

  return [ message, cards, addCard ];
}

export default useDeal;
