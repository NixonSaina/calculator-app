import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");  // Holds the current input
  
  // Function to handle click on number or operator
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to calculate result
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());  // Evaluate the basic expression
    } catch (error) {
      setInput("Error");
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput("");
  };

  // Function to handle scientific calculations
  const handleScientific = (type) => {
    try {
      let result;
      switch (type) {
        case "sqrt":
          result = Math.sqrt(eval(input));
          break;
        case "pow2":
          result = Math.pow(eval(input), 2);
          break;
        case "pow3":
          result = Math.pow(eval(input), 3);
          break;
        case "log":
          result = Math.log10(eval(input));
          break;
        case "ln":
          result = Math.log(eval(input));
          break;
        case "exp":
          result = Math.exp(eval(input));
          break;
        case "sin":
          result = Math.sin(eval(input));
          break;
        case "cos":
          result = Math.cos(eval(input));
          break;
        case "tan":
          result = Math.tan(eval(input));
          break;
        default:
          result = "Error";
      }
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {/* Standard buttons */}
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>

        {/* Scientific buttons */}
        <button onClick={() => handleScientific("sqrt")}>√</button>
        <button onClick={() => handleScientific("pow2")}>x²</button>
        <button onClick={() => handleScientific("pow3")}>x³</button>
        <button onClick={() => handleScientific("log")}>log</button>
        <button onClick={() => handleScientific("ln")}>ln</button>
        <button onClick={() => handleScientific("exp")}>exp</button>
        <button onClick={() => handleScientific("sin")}>sin</button>
        <button onClick={() => handleScientific("cos")}>cos</button>
        <button onClick={() => handleScientific("tan")}>tan</button>
      </div>
    </div>
  );
};

export default Calculator;
