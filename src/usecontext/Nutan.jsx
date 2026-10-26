import { createContext, useContext } from "react";

const NameContext = createContext();

const Child = () => {
  const name = useContext(NameContext);
  return <h1>Hello {name}</h1>;
};

const Parent = () => {
  return <Child />;
};

const App = () => {
  return (
    <NameContext.Provider value="Nutan">
      <Parent />
    </NameContext.Provider>
  );
};

export default App;