import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const removeValue = () => {
    setCounter((counter) => counter - 1);
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Vite react app</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value</button>{" "}
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
