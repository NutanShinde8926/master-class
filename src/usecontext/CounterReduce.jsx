import { createContext, useContext, useState } from "react";

const CountContext = createContext();

const Child = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Child />
    </CountContext.Provider>
  );
};

export default App;