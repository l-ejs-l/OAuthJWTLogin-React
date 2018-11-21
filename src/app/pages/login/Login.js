import React, { Component } from "react";
import { connect } from "react-redux";

import {
  APP_DOMAIN,
  OAUTH2_LOGIN_URL,
  REDIRECT,
  REDIRECT_URI,
  SERVER_DOMAIN
} from "../../../config/config";
import LoginView from "./LoginView";
import { fetchUserWithToken } from "../../../redux/actions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  jwtLoginHandler = e => {
    e.preventDefault();
  };

  loginWith = (e, client) => {
    e.preventDefault();
    let window1 = window.open(
      `${SERVER_DOMAIN}${OAUTH2_LOGIN_URL}${client}${REDIRECT}`,
      "_blank",
      "height=700,width=700,status=yes,toolbar=no,menubar=no"
    );

    window1.focus();

    let href = "";
    const listener = () => {
      try {
        href = window1.location.href;
        if (href.startsWith(`${APP_DOMAIN}${REDIRECT_URI}`)) {
          window.clearInterval(urlInterval);
          this.fetchUserWithToken(href);
          window1.close();
        }
      } catch (e) {}
    };

    let urlInterval = window.setInterval(listener, 100);
  };

  loginWithFacebookHandler = e => {
    this.loginWith(e, "facebook");
  };

  loginWithGoogleHandler = e => {
    this.loginWith(e, "google");
  };

  fetchUserWithToken = (href = "") => {
    let url = new URL(href);
    const token = url.searchParams.get("token");
    this.props.fetchUserWithToken(token);
  };

  render() {
    if (this.props.logged) {
      return <Redirect to={"/home"} />;
    } else {
      return (
        <LoginView
          onSubmit={this.jwtLoginHandler}
          onClickFacebook={this.loginWithFacebookHandler}
          onClickGoogle={this.loginWithGoogleHandler}
        />
      );
    }
  }
}

const mapStateToProps = ({ auth: { logged } }) => {
  return { logged };
};

export default connect(
  mapStateToProps,
  { fetchUserWithToken: fetchUserWithToken }
)(Login);
