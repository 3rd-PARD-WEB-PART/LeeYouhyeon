import React from "react";
import Name from "./Name";
import Button from "./Button";
import Email from "./Email";
import "./Form.css";

function App() {
  return (
    <div className="App">
      <Name/>
      <Email/>
      <div>
        <div>message:</div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <Button/>
    </div>
  );
}

export default App;
