import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num, numMath] = useState();
  const [mathSign, mathSignFunc] = useState("");

  // const symbols = {
  //   "/": /;
  // }

  // function click(event) {
  //   const { name } = event.target;
  //   console.log(numMath, mathSign);

  //   if (num === 0) {
  //     numMath(prevNum => (prevNum = name));
  //   } else {
  //     num2Math(prevNum => (prevNum = name));
  //   }
  //   if (mathSign === "/") {
  //     numMath(prevNum => (prevNum = prevNum / num2));
  //   }
  // }

  // function mathSignSet(event) {
  //   const { name } = event.target;
  //   mathSignFunc(prevSign => (prevSign = name));
  //   console.log("the sign is in the stars");
  // }

  function mathSignSet(event) {
    const { name } = event.target;
    mathSignFunc(prevSign => (prevSign = name));
  }

  function handleClear() {
    numMath(prevNum => (prevNum = 0));
  }

  function click(event) {
    const { name } = event.target;
    if (!num && !mathSign) {
      numMath(prevNum => (prevNum = name));
    } else if (mathSign === "/") {
      function calc(a, b) {
        return a / b;
      }
      numMath(prevNum => (prevNum = calc(prevNum, name)));
    } else if (mathSign === "+") {
      function calc(a, b) {
        return a + b;
      }
      numMath(prevNum => (prevNum = calc(prevNum, name)));
    } else if (mathSign === "-") {
      function calc(a, b) {
        return a - b;
      }
      numMath(prevNum => (prevNum = calc(prevNum, name)));
    }
  }

  return (
    <div className="container">
      <p className="calc-display">{num}</p>
      <div className="button-container">
        <button className="button-1" onClick={handleClear} name="C">
          C
        </button>
        <button className="button-1" onClick={mathSignSet} name="+/-">
          +/-
        </button>
        <button className="button-1" onClick={click} name="%">
          %
        </button>
        <button className="button-1" onClick={mathSignSet} name="/">
          /
        </button>
        <button className="button-1" onClick={click} name="7">
          7
        </button>
        <button className="button-1" onClick={click} name="8">
          8
        </button>
        <button className="button-1" onClick={click} name="9">
          9
        </button>
        <button className="button-1" onClick={mathSignSet} name="*">
          x
        </button>
        <button className="button-1" onClick={click} name="4">
          4
        </button>
        <button className="button-1" onClick={click} name="5">
          5
        </button>
        <button className="button-1" onClick={click} name="6">
          6
        </button>
        <button className="button-1" onClick={mathSignSet} name="-">
          -
        </button>
        <button className="button-1" onClick={click} name="1">
          1
        </button>
        <button className="button-1" onClick={click} name="2">
          2
        </button>
        <button className="button-1" onClick={click} name="3">
          3
        </button>
        <button className="button-1" onClick={mathSignSet} name="+">
          +
        </button>
        <button className="button-big" onClick={click} name="0">
          0
        </button>
        <button className="button-1" onClick={mathSignSet} name=".">
          .
        </button>
        <button className="button-1" onClick={mathSignSet} name="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
