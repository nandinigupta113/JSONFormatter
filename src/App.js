import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
function App() {
  return (
    <div className="App">
      <div className="block1">
      <Button variant="contained" color="success">
        Format JSON
      </Button>
      <Button variant="contained" color="error">
        Clear Data
      </Button>
      </div>
      <div className="block2">
        <div className="box">
          <div className="head">Enter JSON Data</div>
          <textarea></textarea>
        </div>
        <div className="box">
          <div className="head">Formatted JSON Data</div>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
