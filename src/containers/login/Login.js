import React, { Component } from "react";
import withStyles from "react-jss";
// import axios from "axios";
import { OAUTH2_LOGIN_BASE_URL } from "../../redux/actions";
import Header from "../../components/header/Header";

const styles = theme => ({
  container: {
    width: "80%",
    margin: "auto"
  },
  login: {
    color: theme.primary
  }
});

class Login extends Component {
  state = {
    url: ""
  };

  loginWithGoogle = () => {
    let window1 = window.open(
      "http://localhost:8080/" +
        OAUTH2_LOGIN_BASE_URL +
        "google?redirect_uri=http://localhost:3000/social-login-success?token=",
      "_blank",
      "height=700,width=700,status=yes,toolbar=no,menubar=no"
    );

    window1.focus();

    let href = "";
    const listener = () => {
      try {
        href = window1.location.href;
        if (href.startsWith("http://localhost:3000/social-login-success")) {
          console.log(href);
          window.clearInterval(urlInterval);
          this.processHref(href);
          window1.close();
        }
      } catch (e) {}
    };

    let urlInterval = window.setInterval(listener, 100);
  };

  processHref = (href = "") => {
    console.log("OUT OF COMPONENT", href);
    let url = new URL(href);
    const token = url.searchParams.get("token");
    this.setState({ url: token });
  };
  loginWithFacebook = () => {
    let window1 = window.open(
      "http://localhost:8080/" +
        OAUTH2_LOGIN_BASE_URL +
        "facebook?redirect_uri=http://localhost:3000/social-login-success?token=",
      "_blank",
      "height=700,width=700,status=yes,toolbar=no,menubar=no"
    );

    window1.focus();

    let href = "";
    const listener = () => {
      try {
        href = window1.location.href;
        if (href.startsWith("http://localhost:3000/social-login-success")) {
          console.log(href);
          window.clearInterval(urlInterval);
          this.processHref(href);
          window1.close();
        }
      } catch (e) {}
    };

    let urlInterval = window.setInterval(listener, 100);

    // axios.get(OAUTH2_LOGIN_BASE_URL + "facebook").then(res => console.log(res));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header link={"/"} text={"Home"} />
        <div className={classes.container}>
          <h1 className={classes.login}>Login</h1>
          <hr />
          <button onClick={this.loginWithFacebook}>Login with Facebook</button>
          <button onClick={this.loginWithGoogle}>Login with Google</button>
          <br />
          <br />
          <h3>URL: {this.state.url}</h3>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
