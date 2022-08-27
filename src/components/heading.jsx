import React, { Component } from "react";
import SvgComponent from "./signature";

export default class Heading extends Component {
  render() {
    return (
      <div className="base-section" id="about">
        <img
          className="header-image"
          src={"./images/placeholder.jpg"}
          alt="Jackson's headshot"
        />
        <SvgComponent></SvgComponent>
      </div>
    );
  }
}
