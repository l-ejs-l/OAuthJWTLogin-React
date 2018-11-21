import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";
import { NAV_HEIGHT } from "../../../config/constans";
import { Link } from "react-router-dom";

const HEIGHT = NAV_HEIGHT;

const styles = theme => ({
  navItemText: {
    font: {
      size: 16,
      weight: 500
    }
  },
  navItemAvatar: {
    display: "flex",
    alignItems: "center",
    height: HEIGHT
  },
  menuLink: {
    cursor: "pointer",
    display: "block",
    margin: 0,
    outline: 0,
    padding: "20px",
    textDecoration: "none",
    color: theme.text,
    transition: "all .1s ease-in-out",
    "&:hover": {
      color: theme.primary
    }
  }
});

function checkStringType(props) {
  return typeof props.text === typeof "";
}

const NavItem = props => {
  const { classes } = props;
  return (
    <div
      className={
        checkStringType(props) ? classes.navItemText : classes.navItemAvatar
      }
    >
      {checkStringType(props) ? (
        <Link to={props.link} className={classes.menuLink}>
          {props.text}
        </Link>
      ) : (
        props.text
      )}
    </div>
  );
};

NavItem.propTypes = { text: PropTypes.any };

NavItem.defaultProps = {
  link: "/"
};

export default withStyles(styles)(NavItem);
