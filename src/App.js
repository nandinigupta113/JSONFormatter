import "./App.css";
import * as React from "react";
import { useState,useRef } from "react";
import Button from "@mui/material/Button";
function App() {
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const ref = useRef();
  const handleClear = () => {
    setContent("");
    setContent2("");
 }

 const handleformat = () => {
  var json = JSON.parse(ref.current.value);
    setContent2(JSON.stringify(json,null,1));
  }
  return (
    <div className="App">
      <div className="block1">
      <Button onClick={handleformat} variant="contained" color="success">
        Format JSON
      </Button>
      <Button onClick={handleClear} variant="contained" color="error">
        Clear Data
      </Button>
      </div>
      <div className="block2">
        <div className="box">
          <div className="head">Enter JSON Data</div>
          <textarea value={content} ref={ref} onChange={(e) => {
            setContent(e.target.value)}}></textarea>
        </div>
        <div className="box">
          <div className="head">Formatted JSON Data</div>
          <textarea value={content2} readOnly></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
