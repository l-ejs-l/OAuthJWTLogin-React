import React, { Component } from "react";
import withStyles from "react-jss";
// import axios from "axios";
import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import FormLogin from "../../components/form/FormLogin";
import {
  APP_DOMAIN,
  OAUTH2_LOGIN_URL,
  REDIRECT,
  REDIRECT_URI,
  SERVER_DOMAIN
} from "../../util/constants";

const styles = theme => ({
  loginTitle: {
    color: theme.textBlack,
    padding: theme.smSpace
  },
  loginWrapper: {
    textAlign: "center",
    border: `1px solid ${theme.lightBorder}`,
    background: theme.contrastBackground,
    color: theme.textBlack,
    width: "40%",
    margin: `20vmin auto`,
    borderRadius: "4px",
    padding: `${theme.xlSpace}`
  },
  "@media screen and (max-width: 1200px)": {
    loginWrapper: {
      width: "60%"
    }
  },
  "@media screen and (max-width: 700px)": {
    loginWrapper: {
      width: "80%"
    }
  },
  "@media screen and (max-width: 500px)": {
    loginWrapper: {
      width: "90%"
    }
  }
});

class Login extends Component {
  state = {
    url: ""
  };

  loginWithFacebook = e => {
    this.loginWith(e, "facebook");
  };

  loginWithGoogle = e => {
    this.loginWith(e, "google");
  };

  processHref = (href = "") => {
    console.log("OUT OF COMPONENT", href);
    let url = new URL(href);
    const token = url.searchParams.get("token");
    this.setState({ url: token });
    console.log("TOKEN", token);
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
          this.processHref(href);
          window1.close();
        }
      } catch (e) {}
    };

    let urlInterval = window.setInterval(listener, 100);

    // axios.get(OAUTH2_LOGIN_URL + "facebook").then(res => console.log(res));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header link={"/"} text={"Home"} />
        <Container>
          <div className={classes.loginWrapper}>
            <h1 className={classes.loginTitle}>Sign In With</h1>

            <FormLogin
              onSubmit={this.loginHandler}
              onClickFacebook={this.loginWithFacebook}
              onClickGoogle={this.loginWithGoogle}
            />
          </div>
        </Container>
      </div>
    );
  }

  loginHandler = e => {
    e.preventDefault();
  };
}

export default withStyles(styles)(Login);
