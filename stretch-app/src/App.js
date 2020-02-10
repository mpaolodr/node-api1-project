import React from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <Header />

      <Display />
    </div>
  );
}

export default App;
