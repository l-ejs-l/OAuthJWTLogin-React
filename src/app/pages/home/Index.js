import React from "react";
import { IndexView } from "./IndexView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Index = props => {
  if (props.logged) {
    return <Redirect to={"/home"} />;
  } else {
    return <IndexView />;
  }
};

const mapStateToProps = ({ auth: { logged } }) => {
  return { logged };
};

export default connect(
  mapStateToProps,
  null
)(Index);
