import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Calculator.css";
const Calculator = () => {
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
          <Typography>number goes here</Typography>
        </div>
        <div className="grid-item AC">
          <Typography>AC</Typography>
        </div>
        <div className="grid-item s-divide">
          <Typography>/</Typography>
        </div>
        <div className="grid-item s-multiply">
          <Typography>X</Typography>
        </div>
        <div className="grid-item no7">
          <Typography>7</Typography>
        </div>
        <div className="grid-item no8">
          <Typography>8</Typography>
        </div>
        <div className="grid-item no9">
          <Typography>9</Typography>
        </div>
        <div className="grid-item s-minus">
          <Typography>-</Typography>
        </div>
        <div className="grid-item no4">
          <Typography>4</Typography>
        </div>
        <div className="grid-item no5">
          <Typography>5</Typography>
        </div>
        <div className="grid-item no6">
          <Typography>6</Typography>
        </div>
        <div className="grid-item s-plus">
          <Typography>+</Typography>
        </div>
        <div className="grid-item no1">
          <Typography>1</Typography>
        </div>
        <div className="grid-item no2">
          <Typography>2</Typography>
        </div>
        <div className="grid-item no3">
          <Typography>3</Typography>
        </div>
        <div className="grid-item s-equal">
          <Typography>=</Typography>
        </div>
        <div className="grid-item no0">
          <Typography>0</Typography>
        </div>
        <div className="grid-item s-dot">
          <Typography>.</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Calculator;
