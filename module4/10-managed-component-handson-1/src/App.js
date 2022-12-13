import React from "react";
import AskForNumber from "./AskForNumber";
import Answer from "./Answer";

export default function App() {
  return (
    <div className="App">
      <div>
        <AskForNumber />
      </div>
      <Answer />
    </div>
  );
}
