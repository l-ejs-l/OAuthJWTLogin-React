import React from "react";
import { Link } from "react-router-dom";
import withStyles from "react-jss";

import logo from "../../assets/img/logo.svg";

const styles = theme => ({
  app: {
    textAlign: "center"
  },
  appLogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: "40vmin"
  },
  appHeader: props => ({
    backgroundColor: "#282c34",
    minHeight: `calc(100vh - ${props.navHeight})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: theme.text
  }),
  appLink: {
    color: "#66D8F6",
    zIndex: 10
  },
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  }
});

const ReactHome = props => {
  const { classes } = props;
  return (
    <div>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>{props.title}</p>
        <Link className={classes.appLink} to={props.route}>
          {props.link}
        </Link>
      </header>
    </div>
  );
};

ReactHome.defaultProps = {
  navHeight: "0px"
};

export default withStyles(styles)(ReactHome);
