import Nav from "../../../components/nav/Nav";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import React from "react";
import Avatar from "../../../components/avatar/Avatar";

import NavbarView from "./NavbarView.jsx";

const Navbar = props => {
  return (
    <NavbarView
      brandHome={props.auth.logged ? "/login" : "/"}
      link={props.auth.logged ? "/login" : props.link}
      text={props.auth.logged ? <Avatar /> : props.text}
    />
  );
};

Navbar.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  brandHome: PropTypes.string
};

Nav.defaultProps = {
  link: "/"
};

const mapStateToProps = auth => {
  return auth;
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
