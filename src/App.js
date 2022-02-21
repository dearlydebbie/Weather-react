import React from "react";
import Overview from "./Overview";
import Developer from "./Developer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Overview defaultCity="Lagos"/>
      <Developer />
    </div>
  );
}
