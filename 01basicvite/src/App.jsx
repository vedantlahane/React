import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const removeValue = () => {
    setCounter(counter => counter - 1);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Vite react app</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
