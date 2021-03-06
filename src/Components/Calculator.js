import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./Calculator.css";

const math = require("mathjs");

const Calculator = () => {
  const [wholeString, setWholeString] = useState("");
  const [value, setValue] = useState(0);
  const [result, setResult] = useState("");

  const signPressHandler = (sign) => {
    if (result !== "") {
      setWholeString(result);
      setResult("");
    }
    let lastString = wholeString.slice(-1);
    let testRegex = /[+*/]/;
    let testMinus = /[-]/;
    if (testMinus.test(lastString)) {
      setWholeString(
        (current) => (current = current.substring(0, current.length - 2) + sign)
      );
      setValue((current) => (current = sign));
      return;
    }

    if (testRegex.test(lastString)) {
      if (sign === "-") {
        setValue((current) => (current = sign));
        setWholeString((current) => current + sign);
      } else {
        setWholeString(
          (current) =>
            (current = current.substring(0, current.length - 1) + sign)
        );
        setValue((current) => (current = sign));
      }
    } else {
      setValue((current) => (current = sign));
      setWholeString((current) => current + sign);
    }
  };
  const numberPressHandler = (number) => {
    if (result !== "") {
      setWholeString(number);
      setValue(number);
      setResult("");
      return;
    }
    if (value == 0) {
      if (number == "0") {
        return;
      } else {
        setValue(number);
        setWholeString(number);
      }
    } else if (
      value === "*" ||
      value === "/" ||
      value === "+" ||
      value === "-"
    ) {
      setValue(number);
      setWholeString((current) => current + number);
    } else {
      setValue((current) => current + number);
      setWholeString((current) => current + number);
    }
  };
  const dotPressHandler = () => {
    if (wholeString.slice(-1) === ".") {
      return;
    } else if (value.includes(".")) {
      return;
    } else {
      setValue((current) => current + ".");
      setWholeString((current) => current + ".");
    }
  };
  const equalPressHandler = () => {
    let lastString = wholeString.slice(-1);
    let testRegex = /[+\-*/]/;
    if (testRegex.test(lastString)) {
      console.log("last string is sign");
      return;
    } else {
      let answer = math.evaluate(wholeString);
      setResult(answer);
      setValue((current) => (current = answer));
      setWholeString((current) => current + "=" + answer.toString());
      console.log("last string is not a sign");
    }
  };
  const acPressHandler = () => {
    setValue(0);
    setWholeString("");
  };
  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "lightblue",

        marginTop: "10vh",
        marginBottom: "10vh",
        padding: 0,
      }}
    >
      <div className="grid-container">
        <div className="grid-item showNumber">
          <div>
            <Typography>{wholeString}</Typography>
          </div>
          <div id="display">
            <Typography>{value}</Typography>
          </div>
        </div>
        <div id="clear" className="grid-item AC" onClick={acPressHandler}>
          <Typography>AC</Typography>
        </div>
        <div
          id="divide"
          className="grid-item s-divide"
          onClick={() => signPressHandler("/")}
        >
          <Typography>/</Typography>
        </div>
        <div
          id="multiply"
          className="grid-item s-multiply"
          onClick={() => signPressHandler("*")}
        >
          <Typography>X</Typography>
        </div>
        <div
          id="seven"
          className="grid-item no7"
          onClick={() => numberPressHandler("7")}
        >
          <Typography>7</Typography>
        </div>
        <div
          id="eight"
          className="grid-item no8"
          onClick={() => numberPressHandler("8")}
        >
          <Typography>8</Typography>
        </div>
        <div
          id="nine"
          className="grid-item no9"
          onClick={() => numberPressHandler("9")}
        >
          <Typography>9</Typography>
        </div>
        <div
          id="subtract"
          className="grid-item s-minus"
          onClick={() => signPressHandler("-")}
        >
          <Typography>-</Typography>
        </div>
        <div
          id="four"
          className="grid-item no4"
          onClick={() => numberPressHandler("4")}
        >
          <Typography>4</Typography>
        </div>
        <div
          id="five"
          className="grid-item no5"
          onClick={() => numberPressHandler("5")}
        >
          <Typography>5</Typography>
        </div>
        <div
          id="six"
          className="grid-item no6"
          onClick={() => numberPressHandler("6")}
        >
          <Typography>6</Typography>
        </div>
        <div
          id="add"
          className="grid-item s-plus"
          onClick={() => signPressHandler("+")}
        >
          <Typography>+</Typography>
        </div>
        <div
          id="one"
          className="grid-item no1"
          onClick={() => numberPressHandler("1")}
        >
          <Typography>1</Typography>
        </div>
        <div
          id="two"
          className="grid-item no2"
          onClick={() => numberPressHandler("2")}
        >
          <Typography>2</Typography>
        </div>
        <div
          id="three"
          className="grid-item no3"
          onClick={() => numberPressHandler("3")}
        >
          <Typography>3</Typography>
        </div>
        <div
          id="equals"
          className="grid-item s-equal"
          onClick={equalPressHandler}
        >
          <Typography>=</Typography>
        </div>
        <div
          id="zero"
          className="grid-item no0"
          onClick={() => numberPressHandler("0")}
        >
          <Typography>0</Typography>
        </div>
        <div id="decimal" className="grid-item s-dot" onClick={dotPressHandler}>
          <Typography>.</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Calculator;
