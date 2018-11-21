import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AvatarView from "./AvatarView";
import { toggleHeaderMenu } from "../../redux/actions";

const Avatar = props => {
  return <AvatarView toggle={props.toggleHeaderMenu} />;
};

Avatar.propTypes = {
  toggleHeaderMenu: PropTypes.func
};

const mapStateToProps = ({ header }) => {
  return header;
};

export default connect(
  mapStateToProps,
  { toggleHeaderMenu }
)(Avatar);
