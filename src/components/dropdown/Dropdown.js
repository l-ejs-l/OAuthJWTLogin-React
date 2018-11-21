import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DropdownView from "./DropdownView.jsx";
import { logout } from "../../redux/actions";

/**
 * Creates the items array to render a menu dropdown
 *
 * @param props
 * @return [] of items
 */
const buildItemsArray = props => {
  return [
    { type: "Link", to: "/settings", text: "Settings" },
    { type: "ActionButton", action: props.logout, text: "Logout" }
  ];
};

/**
 * DROPDOWN WRAPPER
 */
const Dropdown = props => {
  return <DropdownView header={props.header} items={buildItemsArray(props)} />;
};

Dropdown.propTypes = {
  items: PropTypes.array
};

Dropdown.defaultProps = {
  header: {},
  items: []
};

const mapStateToProps = ({ header }) => {
  return { header };
};

export default connect(
  mapStateToProps,
  { logout }
)(Dropdown);
