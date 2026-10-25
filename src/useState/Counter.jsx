import React, { useEffect, useState } from 'react'

const counter = () => {
    const[count, setCount] = useState(0);
    useEffect (() => {
        setTimeout(() =>{
            setCount (count +1);
        },1000)
    })

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(0)}>click</button>
    </div>
  )
}

export default counter
