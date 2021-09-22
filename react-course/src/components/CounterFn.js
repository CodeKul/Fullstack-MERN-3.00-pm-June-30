import React, { useState } from "react";

export default function CounterFn() {
  const [count, setCount] = useState(0);

 const incrementCounter = () => {
  
    setCount(count +1);
  };

  const decrementCounter = () => {
    setCount(count -1);
  };

  
  return (
    <div>
      <h1>State and Component Life Cycle</h1>

      <h2>Counter: {count}</h2>

      <button onClick={incrementCounter()}>Increment</button>
      <button onClick={decrementCounter()}>Decrement</button>
    </div>
  );
}
