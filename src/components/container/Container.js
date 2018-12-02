import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
  wrap: props => ({
    ...props.customStyles,
    width: "90%",
    padding: "0 20px",
    margin: "0 auto"
  }),
  "@media screen and (max-width: 600px)": {
    wrap: {
      width: "100%"
    }
  }
};

const Container = props => {
  return <div className={props.classes.wrap}>{props.children}</div>;
};

Container.propTypes = {
  customStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default withStyles(styles)(Container);
