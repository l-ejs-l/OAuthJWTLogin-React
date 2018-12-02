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
    const { logged } = this.props;
    return (
      <div>
        <Router>
          <Switch>
            {routes.map(
              (route, index) =>
                route.scope === "public" && !logged ? (
                  <Route key={index} {...route} />
                ) : (
                  <PrivateRoute key={index} {...route} />
                )
            )}
            {/*{this.props.logged ? (*/}
              {/*<Redirect to={"/home"} />*/}
            {/*) : (*/}
              {/*<Redirect to={"/"} />*/}
            {/*)}*/}
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
