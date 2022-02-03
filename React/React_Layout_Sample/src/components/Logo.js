import React, { Component } from "react";
import logo from "../assets/uploads/logo.svg";

export default class Logo extends Component {
  render() {
    return <img src={logo} alt="TraderPro live" className="img-fluid logo" />;
  }
}
