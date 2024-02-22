import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; // Replace with your logo file path

const App = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 350, y: 380 });

  const [text, setText] = useState("Will you be my Valentine?");
  const [clickCount, setClickCount] = useState(0);
  const [buttonText, setButtonText] = useState("Yes");
  const [fontSize, setFontSize] = useState(80);

  const handleYesButtonClick = () => {
    setClickCount(clickCount + 1);

    switch (clickCount) {
      case 0:
        setText("Are you sure?");
        break;
      case 1:
        setText("Really, Really sure?");
        break;
      case 2:
        setText("100% sure?");
        break;
      case 3:
        setText("200% sure?");
        break;
      case 4:
        setText("There is no going back!");
        break;
      case 5:
        setText("Are you still clicking the 'Yes' button? Dumbo! Go call them right away");
        setFontSize(50);
        setButtonText("Understood");
        break;
      case 6:
        setText("Happy Valentines!");
        setFontSize(80);
        break;
      default:
        break;
    }
  };

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
        <h1 className='text-container' style={{ fontSize: `${fontSize}px` }}>{text}</h1>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo floating" />
      </div>
      <div className="button-container floating">
        <p>Click 'Yes' to confirm and 'No' to break my heart<span>💔</span></p>
        <div class="item button-parrot yes-button">
    <button onClick={handleYesButtonClick}>{buttonText}
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