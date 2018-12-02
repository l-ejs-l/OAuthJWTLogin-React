import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = {
  button: props => ({
    ...props.font,
    display: "inline-block",
    border: "none",
    textAlign: "center",
    width: props.btnWidth,
    backgroundColor: props.backColor,
    borderRadius: "4px",
    color: props.fontColor,
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    outline: "none"
  }),
  container: props => ({
    padding: props.padding
  }),
  hover: {
    backgroundColor: "transparent",
    transition: "all .2s ease-in-out",
    "&:hover": {
      opacity: 0.9,
      backgroundColor: "rgba(255, 255, 255, .3)",
      boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.2)"
    }
  }
};

const Button = props => {
  const { classes } = props;
  return (
    <button onClick={props.onClick} className={classes.button}>
      <div className={classes.hover}>
        <div className={classes.container}>{props.text || props.children}</div>
      </div>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.any,
  btnWidth: PropTypes.string,
  backColor: PropTypes.string,
  fontColor: PropTypes.string,
  font: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Button.defaultProps = {
  btnWidth: "45%",
  backColor: "#282C33",
  fontColor: "white",
  padding: "1em",
  font: {
    fontSize: ".8em",
    lineHeight: "1em"
  },
  outline: "#66D8F6",
  text: "ButtonAction"
};

export default withStyles(styles)(Button);
