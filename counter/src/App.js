import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((val) => val+1);
  }

  return (
    <div className="App">
      <h1>
        Counter: {counter}
      </h1>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;
