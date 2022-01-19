import { useState } from 'react';

const useFlip = (initialState=false) => {
    const [isFaceUp, setIsFaceUp] = useState(initialState);
    const flipCard = () => {
        setIsFaceUp(flipped => !flipped)
    };

    return [isFaceUp, flipCard]
}

export default useFlip;
