import Navbar from "../../common/navbar/Navbar";
import React from "react";
import withStyles from "react-jss";
import Container from "../../../components/container/Container";
import ReactLogo from "./logo/ReactLogo";
import theme from "../../../assets/jss/theme";

const styles = theme => ({
  main: {
    color: theme.text,
    textAlign: "center"
  },
  showcase: {
    backgroundColor: theme.secondary,
    height: "230px",
    width: "100%"
  },
  title: {
    ...theme.title,
    textAlign: "center",
    color: theme.primary
  },
  subtitle: {
    ...theme.subtitle,
    fontWeight: 200
  },
  logoContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    transform: "translateX(30%)",
    overflow: "hidden",
    userSelect: "none"
  },
  userWelcome: {
    ...theme.title,
    color: theme.textBlack,
    textAlign: "left",
    marginTop: theme.mdSpace
  },
  times: {
    ...theme.subtitle,
    color: theme.textBlack,
    fontWeight: "400",
    textAlign: "left",
  },
  "@media screen and (min-width: 600px)": {
    showcase: {
      height: "300px"
    }
  },
  "@media screen and (min-width: 1200px)": {
    showcase: {
      height: "420px"
    }
  }
});

const containerStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative"
};

const svgStyles = {
  position: "absolute",
  bottom: 0,
  right: 0
};

const WelcomeView = props => {
  const { classes, auth } = props;
  return (
    <div>
      <Navbar link={"/home"} text={"Index"} />
      <main className={classes.main}>
        <div className={classes.showcase}>
          <Container customStyles={containerStyles}>
            <h1 className={classes.title}>Social Login Demo</h1>
            <h3 className={classes.subtitle}>Using OAuth2 & JWT</h3>
            <div className={classes.logoContainer}>
              <ReactLogo
                fill={theme.lightText}
                opacity={".1"}
                styles={svgStyles}
              />
            </div>
          </Container>
        </div>

        <Container>
          <h3 className={classes.userWelcome}>Welcome {auth.user.name}</h3>
          <h3 className={classes.times}>
            You have logged in {auth.timesLogged} times before
          </h3>
        </Container>
      </main>
    </div>
  );
};

export default withStyles(styles)(WelcomeView);
