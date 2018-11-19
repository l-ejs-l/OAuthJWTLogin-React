import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../../routes";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
