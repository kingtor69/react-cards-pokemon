import { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useDeal = () => {
  const [cards, setCards] = useState([]);

  // const addPokemon = async name => {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${name}/`
  //   );
  //   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
  // };


  const addCard = async url => {
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard]
};

export default useDeal;
