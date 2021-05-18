import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";
import HomePage from "./components/HomePage";
import NavbarHome from "./components/navbar";
import Loading from "./components/loading";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="container-fluid px-0">
            <NavbarHome />
            <div className="py-5"></div>
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/create" component={Create} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/index" component={Index} />
                <Route path="" component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
