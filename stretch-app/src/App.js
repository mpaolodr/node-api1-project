import React from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Display from "./components/Display";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/addform" component={AddForm} />
        <Route path="/" component={Display} />
      </Switch>
    </div>
  );
}

export default App;
