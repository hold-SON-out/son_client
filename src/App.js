import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
