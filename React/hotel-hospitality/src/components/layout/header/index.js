import React from "react";

const Header = (props) => {
  return (
    <div id="header">
      <div className="row no-margin">
        <button className="btn-back"></button>
        <span className="home-title">Web Check In</span>
      </div>
    </div>
  );
};

export default Header;