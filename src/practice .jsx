function Counter() {
  let count = 0;

  return (
    <button onClick={() => { count = count + 1; console.log(count); }}>
      {count}
    </button>
  );
}