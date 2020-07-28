import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./Calculator.css";

const math = require("mathjs");

const Calculator = () => {
  const [wholeString, setWholeString] = useState("");
  const [value, setValue] = useState(0);

  const signPressHandler = (sign) => {
    let lastString = wholeString.slice(-1);
    let testRegex = /[+\-*/]/;
    if (testRegex.test(lastString)) {
      return;
    } else {
      setValue((current) => sign);
      setWholeString((current) => current + sign);
    }
  };
  const numberPressHandler = (number) => {
    if (value === 0) {
      setValue(number);
      setWholeString(number);
    } else if (
      value === "X" ||
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
    setValue((current) => current + ".");
    setWholeString((current) => current + ".");
  };
  const equalPressHandler = () => {
    let lastString = wholeString.slice(-1);
    let testRegex = /[+\-*/]/;
    if (testRegex.test(lastString)) {
      console.log("last string is sign");
      return;
    } else {
      let answer = math.evaluate(wholeString);
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
          <div>
            <Typography>{value}</Typography>
          </div>
        </div>
        <div className="grid-item AC" onClick={acPressHandler}>
          <Typography>AC</Typography>
        </div>
        <div
          className="grid-item s-divide"
          onClick={() => signPressHandler("/")}
        >
          <Typography>/</Typography>
        </div>
        <div
          className="grid-item s-multiply"
          onClick={() => signPressHandler("*")}
        >
          <Typography>X</Typography>
        </div>
        <div className="grid-item no7" onClick={() => numberPressHandler("7")}>
          <Typography>7</Typography>
        </div>
        <div className="grid-item no8" onClick={() => numberPressHandler("8")}>
          <Typography>8</Typography>
        </div>
        <div className="grid-item no9" onClick={() => numberPressHandler("9")}>
          <Typography>9</Typography>
        </div>
        <div
          className="grid-item s-minus"
          onClick={() => signPressHandler("-")}
        >
          <Typography>-</Typography>
        </div>
        <div className="grid-item no4" onClick={() => numberPressHandler("4")}>
          <Typography>4</Typography>
        </div>
        <div className="grid-item no5" onClick={() => numberPressHandler("5")}>
          <Typography>5</Typography>
        </div>
        <div className="grid-item no6" onClick={() => numberPressHandler("6")}>
          <Typography>6</Typography>
        </div>
        <div className="grid-item s-plus" onClick={() => signPressHandler("+")}>
          <Typography>+</Typography>
        </div>
        <div className="grid-item no1" onClick={() => numberPressHandler("1")}>
          <Typography>1</Typography>
        </div>
        <div className="grid-item no2" onClick={() => numberPressHandler("2")}>
          <Typography>2</Typography>
        </div>
        <div className="grid-item no3" onClick={() => numberPressHandler("3")}>
          <Typography>3</Typography>
        </div>
        <div className="grid-item s-equal" onClick={equalPressHandler}>
          <Typography>=</Typography>
        </div>
        <div className="grid-item no0" onClick={() => numberPressHandler("0")}>
          <Typography>0</Typography>
        </div>
        <div className="grid-item s-dot" onClick={dotPressHandler}>
          <Typography>.</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Calculator;
