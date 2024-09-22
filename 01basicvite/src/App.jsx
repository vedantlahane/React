// import { useState } from "react";
import "./App.css";
import "./components/MyComponent.jsx";
import MyComponent from "./components/MyComponent.jsx";
import Counter from "./components/Counter.jsx";
function App() {
  

  return (
    <>
      <div>
        <Counter />
        <MyComponent title="My Component" description="This is my component" />
      </div>
    </>
  );
}

export default App;
