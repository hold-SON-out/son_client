import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import KidListPage from "./Pages/KidListPage/KidListPage.jsx";
import MainPage from "./Pages/MainPage/MainPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import DetaliPage from "./Pages/Details/DetaliPage";
import AddKidPage from "./Pages/AddKidPage/AddKidPage";
import WritePage from "./Pages/WritePage/WritePage";
import LowPage from "./Pages/LowPage/LowPage";
import CommunityMainPage from "./Pages/CommunityMain/CommunityMainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/kidList" component={KidListPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/SignUP" component={SignUpPage} />
          <Route path="/Details" component={DetaliPage} />
          <Route path="/addKid" component={AddKidPage} />
          <Route path="/low" component={LowPage} />
          <Route path="/communitymain" component={CommunityMainPage} />
          <Route path="/write" component={WritePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
