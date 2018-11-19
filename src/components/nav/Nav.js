import React from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";

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
    listStyle: "none"
  },
  menuLink: {
    cursor: "pointer",
    padding: "20px",
    display: "block",
    margin: 0,
    outline: 0,
    font: {
      size: 16,
      weight: 500
    },
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
          <Link to={props.link} className={classes.menuLink}>
            {props.text}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  link: "/",
  text: "Home"
}

export default withStyles(styles)(Nav);
