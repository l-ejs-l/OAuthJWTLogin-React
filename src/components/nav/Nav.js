import React from "react";
import withStyles from "react-jss";
import * as PropTypes from "prop-types";
import NavItem from "./nav_item/NavItem";


const styles = theme => ({
  nav: {
    display: "flex",
    flex: "1 1 auto"
  },
  menuContainer: {
    display: "flex",
    margin: "0 0 0 auto"
  },
  menuItem: {
    listStyle: "none",
    display: "flex",
    alignItems: "center"
  },
  menuLink: {
    cursor: "pointer",
    display: "block",
    margin: 0,
    outline: 0,
    textDecoration: "none",
    color: theme.text,
    transition: "all .1s ease-in-out",
    "&:hover": {
      color: theme.primary
    }
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <nav className={classes.nav}>
      <ul className={classes.menuContainer}>
        <li className={classes.menuItem}>
          <NavItem
            text={props.text}
            link={props.link}
            className={classes.menuLink}
          />
        </li>
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  link: "/",
  text: "Index",
  brandHome: "/"
};

Nav.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  brandHome: PropTypes.string
};

export default withStyles(styles)(Nav);
