import Navbar from "../../common/navbar/Navbar";
import React from "react";
import withStyles from "react-jss";

const styles = {
  title: {
    textAlign: "center"
  }
};

const WelcomeView = props => {
  const { classes, auth } = props;
  return (
    <div>
      <Navbar link={"/home"} text={"Index"} />
      <main>
        <h1 className={classes.title}>Welcome {auth.user.name}</h1>
      </main>
    </div>
  );
};

export default withStyles(styles)(WelcomeView);
