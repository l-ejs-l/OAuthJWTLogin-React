import Nav from "../nav/Nav";
import React from "react";
import { Link } from "react-router-dom";

import withStyles from "react-jss";

import Container from "../container/Container";

const styles = theme => ({
  navbar: {
    background: theme.secondary,
    color: theme.text,
    "box-shadow": "0 5px 6px rgba(0, 0, 0, 0.16)"
  },
  wrapper: {
    display: "flex",
    "align-items": "center"
  },
  brand: {
    flex: "0 0 100px",
    letterSpacing: "2px",
    borderBottom: `2px solid ${theme.text}`,
    paddingBottom: "5px",
    userSelect: "none",
    cursor: "pointer",
    color: theme.text,
    textDecoration: "none",
    textAlign: "center"
  },
  brandStrong: {
    color: theme.primary
  }
});

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.navbar}>
      <Container>
        <div className={classes.wrapper}>
          <Link to={"/"} className={classes.brand}>
            <b>Brand</b>
            <span className={classes.brandStrong}>logo</span>
          </Link>
          <Nav link={props.link} text={props.text} />
        </div>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Navbar);
