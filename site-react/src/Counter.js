// src/Counter.js
import React, { useState } from 'react'; // Import useState hook

function Counter() {
  // Declare a state variable called 'count' and its setter function 'setCount'
  // Initialize count to 0
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const increment = () => {
    setCount(count + 1); // Update count
  };

  // Function to handle decrementing the count
  const decrement = () => {
    setCount(count - 1); // Update count
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>Count: {count}</p>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>Decrement</button>
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>Increment</button>
    </div>
  );
}

export default Counter;