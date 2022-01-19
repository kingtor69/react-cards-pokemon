import { useState, useEffect } from 'react';
import uuid from "uuid";
import axios from 'axios';

const useDeal = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const axiosCall = async() => {
      try{
        const res = await axios.get(url);
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      };
      setIsLoading(false);
    };
    axiosCall();
  }, [url, setIsLoading]);

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

  return [message, cards, addCard];
};

export default useDeal;
