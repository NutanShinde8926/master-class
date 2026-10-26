import { useReducer } from "react";

function reducer(count, action) {
  if (action === "increase") {
    return count + 1;
  }

  if (action === "decrease") {
    return count - 1;
  }

  if (action === "reset") {
    return 0;
  }

  return count;
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch("increase")}>
        Increase
      </button>

      <button onClick={() => dispatch("decrease")}>
        Decrease
      </button>

      <button onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default App;