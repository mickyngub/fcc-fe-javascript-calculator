import React from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App" style={{ marginTop: 80 }}>
      <Typography style={{ margin: 50 }}>
        Javascript-Calculator by micky-ngub
      </Typography>
      <Divider></Divider>
      <Typography style={{ margin: 50 }}>Numbers go boop boop beep</Typography>
      <Calculator />
    </div>
  );
}

export default App;
