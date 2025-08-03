import React, { useState } from "react";

// CurrencyConvertor Component
function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const euroRate = 0.0099;
    const converted = parseFloat(rupees) * euroRate;
    setEuro(converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <span>Amount in INR : </span>
      <input
        type="number"
        placeholder="₹"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      
      <button onClick={handleSubmit}>Convert</button>
      </div>
      <br />
      <div>
        <span>Amount in Euro : </span>
      <input
        type="text"
        placeholder="Є"
        value={euro}
        readOnly
      />
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prev => prev + 1);
    sayHello();
    showMessage();
  };

  const dec = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello");
  };

  const showMessage = () => {
    alert("Static message after increment");
  };

  const greetUser = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      {/* Buttons in vertical order */}
      <div>
        <button onClick={inc}>Increment</button>
        <br />
        <button onClick={dec}>Decrement</button>
        <br />
        <button onClick={() => greetUser("Welcome")}>Say Welcome</button>
        <br />
        <button onClick={handleClick}>Click Me</button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
