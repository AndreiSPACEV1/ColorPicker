import React, { useState } from "react";

function Counter() {

  const [name, setName] = useState("");  
  const [counter, setCount] = useState(0);
  const increment = () => setCount(counter + 1);
  const decrement = () => setCount(counter - 1);
  const reset = () => {setCount(0)};
  const handleNameChange = (e) => setName(e.target.value);
  return (
    <div className="counter-container">
        <p className="count-display">{counter}</p>
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <br />
        <br/>
        <hr />
        <br />
        <input value={name} onChange={handleNameChange}/>
        <h1>Name: {name}</h1>
    </div>
    
);

}



export default Counter;
