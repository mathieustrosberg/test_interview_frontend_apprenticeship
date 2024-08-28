import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="count">Count: {count}</h1>
      <div>
        <button className="button button-decrement" onClick={decrement}>
          -
        </button>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
