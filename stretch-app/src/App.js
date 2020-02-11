import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Display from "./components/Display";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

function App() {
  const [user, setUser] = useState({});

  const toEdit = userObj => {
    setUser(userObj);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/addform" component={AddForm} />
        <Route
          path="/editform"
          render={props => {
            return <EditForm {...props} user={user} />;
          }}
        />
        <Route
          path="/"
          render={props => {
            return <Display {...props} toEdit={toEdit} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
