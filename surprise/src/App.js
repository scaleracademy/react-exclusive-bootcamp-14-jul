import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const WordOfTheDay = 'FORGO'

  const backspace = () => {}
  const enter = () => {}
  const word = (letter) => {}

  const handleKeyDown = e => {
    let pressedKey = String(e.key)
    if (pressedKey === "Backspace") {
      backspace();
      return
    }

    if (pressedKey === "Enter") {
      enter();
      return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
      return
    } else {
      word(pressedKey)
    }
  }
  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
