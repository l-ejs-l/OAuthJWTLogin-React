import Container from "../../../components/container/Container";
import { Link } from "react-router-dom";
import Nav from "../../../components/nav/Nav";
import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = theme => ({
  navbar: {
    background: theme.secondary,
    color: theme.text,
    position: "relative"
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

const NavbarView = props => {
  const { classes } = props;
  return (
    <div className={classes.navbar}>
      <Container>
        <div className={classes.wrapper}>
          <Link to={props.brandHome} className={classes.brand}>
            <b>Brand</b>
            <span className={classes.brandStrong}>logo</span>
          </Link>
          <Nav link={props.link} text={props.text} />
        </div>
      </Container>
    </div>
  );
};

NavbarView.propTypes = {
  link: PropTypes.string.isRequired,
  classes: PropTypes.any,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  brandHome: PropTypes.string
};

NavbarView.defaultProps = {
  link: "/",
  text: "Index",
  brandHome: "/"
};

export default withStyles(styles)(NavbarView);
