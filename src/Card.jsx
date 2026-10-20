function Card(props) {
  return (
    <div >
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Card;


// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       <h2>{probs.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// export default Card
