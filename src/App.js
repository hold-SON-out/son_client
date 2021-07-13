import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import KidListPage from "./Pages/KidListPage/KidListPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/kidList" component={KidListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
