// import Nutan from "./usecontext/Nutan";

// function App() {
//   return <Nutan />;
// }

// export default App;








import { useState } from "react";
import { UserContext } from "./usecontext/UserContext";
import Navbar from "./usecontext/Navbar";
import Profile from "./usecontext/Profile";

const App = () => {
  const [name, setName] = useState("Nutan");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <Navbar />
      <Profile />

    </UserContext.Provider>

  );
};
export default App;









// import React from 'react'
// import Counter from './useState/counter'
// import Car from './useState/Car'
// import Counter2 from './useState/Counter2'
// import UseState2 from './useState/UseState2'
// import SignupForm from './useState/SignupForm'
// import Toggle from './useState/Toggle'

// // const App = () => {
// //   return (
// //     <div>
//       {/* <Counter />
//       <Car />
//       <Counter2 />
//       <UseState2 /> */}
//       {/* <SignupForm />
//       <Toggle />
//     </div>
//   )
// }

// export default App */}
