import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const words = ['Style', 'Elegance', 'Minimalism', 'Comfort'];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId); 
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <div className='header'>
      <h1>
        Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span className='animated-word'>{currentWord}</span>.
      </h1>
    </div>
  );
}

export default Header;

