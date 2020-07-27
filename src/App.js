import React from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";

import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App" style={{ marginTop: 80 }}>
      <Typography>Javascript-Calculator by micky-ngub</Typography>
      <Calculator />
    </div>
  );
}

export default App;
