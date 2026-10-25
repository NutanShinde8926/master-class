import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name, email, password);
      }}
    >
      <input type="text" required onChange={(e) => setName(e.target.value)} />
      <br /> <br />
      <input type="email" required onChange={(e) => setEmail(e.target.value)} />
      <br /> <br />
      <input type="password" required onChange={(e) => setPassword(e.target.value)} />
      <br /> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;







// const SignupForm = () => {
//   const [email, setEmail] = useState("");

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input
//         type="email"
//         required
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };














// import { useState } from "react"

// const SignupForm =() =>{
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     return(
//         <div>
//             <input type="text" onChange={(e) =>setName(e.target.value)} /> 
//             <br/> <br />
//             <form onSubmit={(e) =>e.preventDefault()}>
//                  <input type="email" required onChange={(e) =>setEmail(e.target.value)} />
//             </form>
           
//             <br /> <br />
//             <input type="password" onChange={(e) =>setPassword(e.target.value)} />
//              <br /> <br />
//             <button>submit</button>
//         </div>
        
//     );
// };
// export default SignupForm