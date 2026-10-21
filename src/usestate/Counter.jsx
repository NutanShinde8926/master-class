import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
  return (
    <div>
      <h1>Count: {count} Count: {count1}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrease</button>
      <button onClick={() => { setCount(0); setCount1(0); }}>RESET</button>
    </div>
  )
}

export default Counter 
