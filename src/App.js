import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(prev => prev+1)
  }

  function decrementCount() {
    setCount(prev => prev-1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={incrementCount}>
        Increment
      </button>
      <button onClick={decrementCount}>
        Decrement
      </button>
    </div>
  );
}

export default App;