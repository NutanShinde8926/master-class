import React from 'react'

const Book = (props) => {
  return (
    <div>
      <h1>title: {props.title}</h1>
      <h1>author: {props.author}</h1>
      <h1>price: {props.price}</h1>
    </div>
  )
}

export default Book;
