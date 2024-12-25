import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <>
            <div className="container">
                <h2>Count</h2>
                <h2>{count}</h2>
                <button onClick={increment}>+</button>
                <button onClick={reset} className="reset">
                    Reset
                </button>
                <button onClick={decrement}>-</button>
            </div>
            <br />
            <br />
        </>
    );
}

export default App;
