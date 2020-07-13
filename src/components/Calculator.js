import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [numDisplay, numDisplaySet] = useState("");
  const [num, numMath] = useState("");
  const [num2, num2Set] = useState("");
  const [mathSign, mathSignFunc] = useState("=");
  const [mathString, mathStringFunc] = useState("");

  function mathSignSet(event) {
    const { name } = event.target;
    if (mathSign === "=") {
      mathSignFunc(prevSign => (prevSign = name));
      mathStringFunc(prevString => (prevString = prevString + "" + name));
    } else if (
      isNaN(parseInt(mathString[mathString.length - 1])) === true &&
      name === "-" &&
      mathString[mathString.length - 1] !== "="
    ) {
      num2Set(prevNum => (prevNum = prevNum + "-"));
      mathStringFunc(prevString => (prevString = prevString + "" + name));
      console.log(num2, "what", mathSign);
    } else {
      handleEquals();
      mathSignFunc(prevSign => (prevSign = name));
      mathStringFunc(prevString => (prevString = prevString + "" + name));
      console.log("boo!" + mathSign);
    }
  }

  function handleClear() {
    numMath(prevNum => (prevNum = ""));
    mathSignFunc(prevSign => (prevSign = "="));
    mathStringFunc(prevString => (prevString = ""));
    num2Set(prevNum => (prevNum = ""));
    numDisplaySet(prevNum => "");
  }

  function handleEquals() {
    mathStringFunc(prevString => (prevString = prevString + "="));
    console.log(mathString);
    if (num2[num2.length - 1] === "%") {
      num2Set(
        prevNum =>
          (prevNum = (prevNum.substring(0, prevNum.length - 2) / 100) * num)
      );
      numDisplaySet(prevNum => (prevNum = num2));
      console.log("in the %", num2);
    }
    if (mathSign === "/") {
      function calc(a, b) {
        return parseFloat(a) / parseFloat(b);
      }
      mathSignFunc(prevSign => (prevSign = "="));
      numDisplaySet(prevNum => (prevNum = "" + calc(num, num2)));
      numMath(prevNum => (prevNum = calc(num, num2)));
      // num2Set(prevNum => (prevNum = ""));
      console.log(numDisplay, num2, mathSign);
    } else if (mathSign === "+") {
      function calc(a, b) {
        return parseFloat(a) + parseFloat(b);
      }
      mathSignFunc(prevSign => (prevSign = "="));
      numDisplaySet(prevNum => (prevNum = "" + calc(num, num2)));
      numMath(prevNum => (prevNum = "" + calc(num, num2)));
      // num2Set(prevNum => (prevNum = ""));
    } else if (mathSign === "-") {
      function calc(a, b) {
        return parseFloat(a) - parseFloat(b);
      }
      mathSignFunc(prevSign => (prevSign = "="));
      numDisplaySet(prevNum => "" + calc(num, num2));
      numMath(prevNum => (prevNum = calc(num, num2)));
      // num2Set(prevNum => (prevNum = ""));
    } else if (mathSign === "*") {
      function calc(a, b) {
        return parseFloat(a) * parseFloat(b);
      }
      mathSignFunc(prevSign => (prevSign = "="));
      numDisplaySet(prevNum => "" + calc(num, num2));
      numMath(prevNum => (prevNum = calc(num, num2)));
      // num2Set(prevNum => (prevNum = ""));
    }
    // else if (mathSign === "%") {
    //   function calc(a, b) {
    //     return parseFloat(a) * parseFloat(b);
    //   }
    //   mathSignFunc(prevSign => (prevSign = "="));
    //   numDisplaySet(prevNum => "" + calc(num, num2));
    //   numMath(prevNum => (prevNum = calc(num, num2)));
    //   // num2Set(prevNum => (prevNum = ""));
  }

  function click(event) {
    const { name } = event.target;
    if (num2[num2.length - 1] === "%") {
      num2Set(
        prevNum =>
          (prevNum = (prevNum.substring(0, prevNum.length - 2) / 100) * num)
      );
      numDisplaySet(prevNum => (prevNum = num2));
      console.log("in the %", num2);
    }
    console.log(isNaN(parseInt(mathString[mathString.length - 1])));
    mathStringFunc(prevString => (prevString = prevString + "" + name));
    if (mathSign === "=" && !num2 && name !== "!") {
      numMath(prevNum => (prevNum = prevNum + "" + name));
      numDisplaySet(prevNum => (prevNum = prevNum + "" + name));
      console.log(num + "hi");
    } else if (name === "!") {
      num >= 0
        ? numMath(prevNum => (prevNum = prevNum * -1))
        : numMath(prevNum => (prevNum = Math.abs(prevNum)));
      numDisplay >= 0
        ? numDisplaySet(prevNum => (prevNum = prevNum * -1))
        : numDisplaySet(prevNum => (prevNum = Math.abs(prevNum)));
      mathStringFunc(prevString => (prevString = prevString + "" + name));
    } else if (
      isNaN(parseInt(mathString[mathString.length - 1])) === true &&
      mathString[mathString.length - 1] !== "." &&
      num2 !== "-"
      // mathString[mathString.length - 1] !== "!"
    ) {
      num2Set(prevNum => (prevNum = "" + name));
      numDisplaySet(prevNum => (prevNum = "" + name));
      console.log("karatee", num, num2, mathString);
    } else if (
      isNaN(parseInt(mathString[mathString.length - 1])) === true &&
      mathString[mathString.length - 1] !== "."
      // mathString[mathString.length - 1] !== "!"
    ) {
      num2Set(prevNum => (prevNum = "-" + name));
      numDisplaySet(prevNum => (prevNum = "" + name));
      console.log("karatee", num, num2, mathString);
    } else {
      console.log("click long num");
      num2Set(prevNum => (prevNum = prevNum + "" + name));
      numDisplaySet(prevNum => (prevNum = prevNum + "" + name));
    }
  }

  return (
    <div className="container">
      <p className="calc-display">{numDisplay}</p>
      <div className="button-container">
        <button className="button-1" onClick={handleClear} name="C">
          C
        </button>
        <button className="button-1" onClick={click} name="!">
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
        <button className="button-1" onClick={click} name=".">
          .
        </button>
        <button className="button-1" onClick={handleEquals} name="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
