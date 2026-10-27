import { useState, useEffect } from "react";

const Title = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Title;