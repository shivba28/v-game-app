import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; // Replace with your logo file path

const App = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 350, y: 380 });

  const handleNoButtonHover = () => {

    const buttonContainer = document.querySelector('.button-container');
    const buttonContainerRect = buttonContainer.getBoundingClientRect();
    const buttonWidth = 100; // Adjust this value based on your button's width
    const buttonHeight = 40; // Adjust this value based on your button's height

    let randomX = Math.floor(Math.random() * window.innerWidth - 100);
    let randomY = Math.floor(Math.random() * window.innerHeight - 100);

    randomX = Math.max(randomX, 0);
    randomY = Math.max(randomY, 0);
    randomX = Math.min(randomX, buttonContainerRect.width - buttonWidth);
    randomY = Math.min(randomY, buttonContainerRect.height - buttonHeight);
  
    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <div className="app">

      <div className="head">
        <h1>Will you be my Valentine?</h1>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo floating" />
      </div>
      <div className="button-container floating">
        <p>Click 'Yes' to confirm and 'No' to break my heart<span>💔</span></p>
        <div class="item button-parrot yes-button">
    <button>Yes!
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
    </button>
  </div>
        <button
          className="button-parrot"
          style={{ position: 'absolute', left: noButtonPos.x, top: noButtonPos.y }}
          onMouseEnter={handleNoButtonHover}
          onClick={(e) => e.preventDefault()}
        >
          No
        </button>
      </div>
    </div>
  );
};


export default App;