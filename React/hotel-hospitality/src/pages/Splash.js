import React from "react";
import { useHistory } from "react-router";

export default function Splash() {
  const history = useHistory();
  return (
    <div>
      <div className="splash">
        <div className="rect1"></div>
        <div className="rect2"></div>

        <div className="frame">
          <div className="backlogo1"></div>
          <div className="backlogo2"></div>
          <div className="frame188"></div>
          <div className="home-indicator"></div>
          <div className="frame190">
            <div className="group15"></div>
          </div>
          <div className="eclipse50"></div>
          <div className="logo1">
            <div className="vector"></div>
            <div className="vector1"></div>
            <div className="vector2"></div>
            <div className="vector3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
