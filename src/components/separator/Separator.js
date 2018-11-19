import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = theme => ({
  separator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.lightText,
    margin: `${theme.mdSpace} 0`
  },
  separatorText: {
    ...theme.small,
    textAlign: "center"
  },
  separatorLine: {
    height: 1,
    backgroundColor: theme.lightBorder,
    width: "30%"
  }
});

const Separator = props => {
  const { classes } = props;
  return (
    <div className={classes.separator}>
      <span className={classes.separatorLine} />
      <span className={classes.separatorText}>or sign in manually</span>
      <span className={classes.separatorLine} />
    </div>
  );
};

Separator.propTypes = { classes: PropTypes.any };

export default withStyles(styles)(Separator);
