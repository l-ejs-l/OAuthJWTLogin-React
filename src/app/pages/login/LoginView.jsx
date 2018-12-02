import Container from "../../../components/container/Container";
import FormLogin from "./form/Form";
import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";
import Navbar from "../../common/navbar/Navbar";

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

const LoginView = props => {
  return (
    <div>
      <Navbar link={"/"} text={"Home"} />
      <Container>
        <div className={props.classes.loginWrapper}>
          <h1 className={props.classes.loginTitle}>Sign In With</h1>

          <FormLogin
            onSubmit={props.onSubmit}
            onClickFacebook={props.onClickFacebook}
            onClickGoogle={props.onClickGoogle}
          />
        </div>
      </Container>
    </div>
  );
};

LoginView.propTypes = {
  classes: PropTypes.any,
  onSubmit: PropTypes.func,
  onClickFacebook: PropTypes.func,
  onClickGoogle: PropTypes.func
};

export default withStyles(styles)(LoginView);
