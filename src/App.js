import React, { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [button, setButton] = useState("");

  function increase() {
    setCount((prevCounter) => prevCounter + 1)
  }
  function decrease() {
    setCount((prevCounter) => prevCounter - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // !isPlaying&&increase();
      !isPlaying?increase(): decrease();
 
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="App">
      <p>Counter App</p>
      <button name="increase" >
        Increase
      </button>
      <button>Decrease</button>
      <p>{count}</p>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Play" : "Pause"}
      </button>
    </div>
  );
}
