import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
  buttonLink: props => ({
    ...props.font,
    display: "inline-block",
    border: "none",
    textAlign: "center",
    width: props.btnWidth,
    backgroundColor: props.backColor,
    borderRadius: "4px",
    color: props.fontColor,
    cursor: "pointer",
    outline: "none",
    ...props.buttonStyles,
    zIndex: 1000
  })
};

const ActionButton = props => {
  const { classes } = props;
  return (
    <button onClick={props.action} className={classes.buttonLink}>
      {props.text || props.children}
    </button>
  );
};

ActionButton.propTypes = {
  action: PropTypes.func,
  buttonStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  btnWidth: PropTypes.string,
  backColor: PropTypes.string,
  fontColor: PropTypes.string,
  font: PropTypes.object,
  text: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ActionButton.defaultProps = {
  btnWidth: "45%",
  backColor: "#282C33",
  fontColor: "white",
  padding: "1em",
  font: {
    fontSize: ".8em",
    lineHeight: "1em"
  },
  outline: "#66D8F6"
};

export default withStyles(styles)(ActionButton);
