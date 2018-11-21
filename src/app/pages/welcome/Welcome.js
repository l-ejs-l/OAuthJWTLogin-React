import React, { Component } from "react";
import { connect } from "react-redux";
import WelcomeView from "./WelcomeView.jsx";

class Welcome extends Component {
  render() {
    return <WelcomeView auth={this.props.auth} />;
  }
}

Welcome.propTypes = {};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Welcome);
