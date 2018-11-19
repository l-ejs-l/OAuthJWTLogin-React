import React from "react";
import withStyles from "react-jss";

const styles = {
  container: {
    width: "90%",
    margin: "0 auto"
  },
  "@media screen and (min-width: 576px)": {
    container: {
      width: "80%"
    }
  }
};

const Container = props => {
  return <div className={props.classes.container}>{props.children}</div>;
};

export default withStyles(styles)(Container);
