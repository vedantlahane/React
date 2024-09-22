import { useState } from "react";
//import PropTypes from "prop-types";

function Counter() {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
    };

    const removeValue = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addValue}>Increment</button>
            <button onClick={removeValue}>Decrement</button>
        </div>
    );
}

Counter.propTypes = {
    // No props needed if using local state
};

export default Counter;
