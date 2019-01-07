import Container from "../../../components/container/Container";
import { Link } from "react-router-dom";
import Nav from "../../../components/nav/Nav";
import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";
import color from "color";

const styles = theme => ({
  navbar: {
    background: color(theme.secondary)
      .darken(0.3)
      .hex(),
    color: theme.text,
    position: "relative",
    boxShadow: "0 1px 3px rgba(0, 0, 0, .5)"
  },
  wrapper: {
    display: "flex",
    "align-items": "center"
  },
  brand: {
    flex: "0 0 80px",
    letterSpacing: "2px",
    borderBottom: `2px solid ${theme.text}`,
    paddingBottom: "5px",
    userSelect: "none",
    cursor: "pointer",
    color: theme.text,
    textDecoration: "none",
    textAlign: "center",
    ...theme.small
  },
  brandStrong: {
    color: theme.primary
  },
  "@media screen and (min-width: 600px)": {
    brand: {
      ...theme.p
    }
  },
  "@media screen and (min-width: 1200px)": {
    showcase: {
      height: "420px"
    }
  }
});

const NavbarView = props => {
  const { classes } = props;
  return (
    <header className={classes.navbar}>
      <Container>
        <div className={classes.wrapper}>
          <Link to={props.brandHome} className={classes.brand}>
            <b>Brand</b>
            <span className={classes.brandStrong}>logo</span>
          </Link>
          <Nav link={props.link} text={props.text} />
        </div>
      </Container>
    </header>
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
