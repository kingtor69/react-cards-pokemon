import { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = () => {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState({});
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addCard = async(url) => {
    setIsLoading(true);
    const response = await axios.get(url);
    setData(response.data);
    setCards(cards => [...cards, { ...data, id: uuid() }]);
    setIsLoading(false);
  };

  useEffect(() => {
      if (data.errors) {
        setMessage("Sorry, something went wrong.");
      } else if (isLoading) {
        setMessage("loading...");
      } else {
        setMessage(null);
      };
  }, [data, isLoading, message]);

  return [message, cards, addCard];
};

export default useAxios;
