import React, { useState } from "react";
import "./Calculator.css"; // Optional for styling

const Calculator = () => {
  const [input, setInput] = useState("");  // Holds the current input
  
  // Function to handle click on number or operator
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to calculate result
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // Evaluate the expression
    } catch (error) {
      setInput("Error");  // Handle invalid expressions
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleEqual()}>=</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
