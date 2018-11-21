import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ logged, component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = logged;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth }) => {
  return { logged: auth.logged };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
