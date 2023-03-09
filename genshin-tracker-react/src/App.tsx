import React from "react";
// import logo from './logo.svg';
import ElementIcon from "./landing/elementIcon";
import "./App.css";
import Content from "./landing/content";

function App() {
  return (
    <div>
      <div className="flex justify-center z-10">
        <Content />
      </div>
      <div className="fixed -bottom-20 -right-20 -z-10">
        <ElementIcon />
      </div>
    </div>
  );
}

export default App;
