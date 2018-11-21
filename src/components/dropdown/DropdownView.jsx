import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../button/ActionButton";
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
  menuDropdownOff: {
    position: "absolute",
    right: 0,
    display: "none",
    transition: "all .2s ease-in-out"
  },
  menuDropdownOn: {
    extend: "menuDropdownOff",
    display: "block",
    animationName: "dropdown",
    animationDuration: ".2s",
    animationFillMode: "forwards"
  },
  "@keyframes dropdown": {
    "0%": {
      transform: "translateY(-20)",
      opacity: 0
    },
    "50%": {
      transform: "translateY(0px)",
      opacity: 0
    },
    "100%": {
      transform: "translateY(10px)",
      opacity: 1
    }
  }
};

/**
 * Renders a menu with an on click effect to show it. It needs a parent with
 * position relative, and an array of items {type, to, text} in case of a link
 * and {type, action, text} in case of a ActionButton.
 *
 * Also it needs a header.menuOpen boolean to show or hide
 *
 * @param props
 */
const DropdownView = props => {
  const { classes, header, items } = props;
  return (
    <ul
      className={
        header.menuOpen ? classes.menuDropdownOn : classes.menuDropdownOff
      }
    >
      {items.map((item, index) => {
        if (item.type === "Link") {
          return (
            <li key={index}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          );
        } else if (item.type === "ActionButton") {
          return (
            <li key={index}>
              <ActionButton action={item.action}>{item.text}</ActionButton>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

DropdownView.propTypes = {
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  items: PropTypes.array
};

DropdownView.defaultProps = {
  header: {},
  items: [{ type: "Link", to: "/route", text: "NewLink" }]
};

export default withStyles(styles)(DropdownView);
