import { useState } from "react"

const UseState2 = ()=> {
    const[name, setName] = useState("");
    return(
        <div>
           <h1 color="red">How Can I Help You ? {name}</h1>
           <input type="text" maxLength={20} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};
export default UseState2








// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// };

// export default Counter;