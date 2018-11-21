import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import routes from "./pages/routes";
import PrivateRoute from "../components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routes.map(
              (route, index) =>
                route.scope === "public" && !this.props.logged ? (
                  <Route key={index} {...route} />
                ) : (
                  <PrivateRoute key={index} {...route} />
                )
            )}
            <Redirect to={"/"} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { logged } }) => {
  return { logged };
};

export default connect(
  mapStateToProps,
  null
)(App);
