import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar link={this.props.link} text={this.props.text} />
      </div>
    );
  }
}

export default Header;
