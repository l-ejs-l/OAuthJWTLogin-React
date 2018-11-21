import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = theme => ({
  formGroup: {
    display: "block",
    margin: `${theme.smSpace} 0`
  },
  formControl: {
    display: "block",
    border: `1px solid ${theme.lightBorder}`,
    width: "100%",
    padding: theme.xsSpace,
    fontSize: theme.mdSpace,
    borderRadius: "4px",
    "&:focus": {
      outlineColor: theme.primary
    }
  },
  formLabel: {
    ...theme.small,
    color: theme.lightText,
    padding: `${theme.xsSpace} 0`,
    display: "block",
    textAlign: "left"
  },
  error: {
    ...theme.small,
    color: theme.danger,
    fontWeight: "lighter",
    display: "block",
    textAlign: "left",
    padding: `${theme.xsSpace} 0`
  }
});

const FormInput = props => {
  const { classes } = props;
  return (
    <div className={classes.formGroup}>
      <label className={classes.formLabel} htmlFor={props.name}>
        {props.text}
      </label>
      <input
        className={classes.formControl}
        type={props.type}
        name={props.name}
      />
      <span className={classes.error} />
    </div>
  );
};

FormInput.propTypes = {
  classes: PropTypes.any,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default withStyles(styles)(FormInput);
