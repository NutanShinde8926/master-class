import React, { useEffect, useState } from 'react'

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
    
        setTimeout(() => {
            setCount (count + 1)
            },1000)
        
    },[count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount(0)}>RESET</button>
    </div>
  )
}

export default AutoCounter
