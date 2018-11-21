import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import DropDown from "../dropdown/Dropdown";

const styles = {
  dropdownWrap: {
    position: "relative"
  },
  avatarWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none"
  },
  avatar: props => ({
    ...props.font,
    height: props.avatarSize,
    width: props.avatarSize,
    backgroundColor: props.backColor,
    borderRadius: "50%",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }),
  hover: {
    zIndex: 10,
    borderRadius: "50%",
    "&:hover": {
      opacity: 0.5,
      // backgroundColor: "rgba(0, 0, 0, 1)",
      boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.2)"
    }
  },
  avatarBorder: props => ({
    border: `1px solid ${props.avatarBorder}`,
    borderRadius: "50%",
    backgroundColor: "transparent",
    padding: 2
  }),
  arrowDown: props => ({
    border: `solid ${props.font.color}`,
    borderWidth: "0 2px 2px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(45deg)",
    marginLeft: "5px"
  })
};

const Avatar = props => {
  const { classes } = props;
  return (
    <div className={classes.dropdownWrap}>
      <div className={classes.avatarWrapper} onClick={props.toggle}>
        <div className={classes.avatarBorder}>
          <div className={classes.hover}>
            <div className={classes.avatar}>{props.initials}</div>
          </div>
        </div>
        <div className={classes.hover}>
          <div className={classes.arrowDown} />
        </div>
      </div>
      <DropDown />
    </div>
  );
};

Avatar.propTypes = {
  avatarSize: PropTypes.string,
  backColor: PropTypes.string,
  avatarBorder: PropTypes.string,
  initials: PropTypes.string,
  font: PropTypes.shape({
    fontSize: PropTypes.string,
    color: PropTypes.string,
    fontWeight: PropTypes.string
  }),
  toggle: PropTypes.func
};

Avatar.defaultProps = {
  avatarSize: "40px",
  backColor: "#444444",
  avatarBorder: "#66D8F6",
  initials: "US",
  font: {
    fontSize: ".8em",
    color: "#FFFFFF",
    fontWeight: "bold"
  }
};

export default withStyles(styles)(Avatar);
