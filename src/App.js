import React from "react";
import { useState } from "react";
import ImageCardContent from "./ImageCardContent";

function App() {
  const [addText, setAddText] = useState("");

  function handleClick(e) {
    e.target.value = addText + "I'm glad you feel the same way too"
    setAddText(alert(e.target.value))

    console.log(e.target.value)

  }

  return (
    <div className="App">
      <header className="App-header">
        <ImageCardContent/>
      </header>
      <button className="forest-btn" onClick={handleClick}>Click Please</button>
    </div>
  );
}

export default App;
