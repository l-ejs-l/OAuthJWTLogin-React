import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = theme => ({
  button: props => ({
    ...theme.small,
    display: "inline-block",
    border: "none",
    padding: theme.mdSpace,
    textAlign: "center",
    width: props.btnWidth,
    backgroundColor: props.backColor,
    borderRadius: "4px",
    color: props.fontColor,
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
  })
});

const Button = props => {
  const { classes } = props;
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.any
};

Button.defaultProps = {
  btnWidth: "45%",
  backColor: "#4469B0",
  fontColor: "white"
};

export default withStyles(styles)(Button);
