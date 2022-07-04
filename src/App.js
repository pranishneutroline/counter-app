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
      <h1>Counter App</h1>
      <button name="increase"className="btn increase" >
        Increase
      </button>
      <button className="btn">Decrease</button>
      <p>{count}</p>
      <button onClick={() => setIsPlaying(!isPlaying)} className="btn">
        {isPlaying ? "Play" : "Pause"}
      </button>
    </div>
  );
}
