import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

export default function SplashBtn() {
  const history = useHistory();
  return (
    <div>
      <div>
        <div className="splash">
          <div className="sprect1"></div>
          <div className="sprect2"></div>

          <div className="frame">
            {/* <div className="backlogo1">

        </div>
        <div className="backlogo2"></div> */}
            <div className="frame189"></div>
            <div className="home-indicator"></div>
            <div className="frame190">
              <div className="group15"></div>
            </div>
            <div className="eclipse50"></div>
            <div className="logo2">
              <div className="spvector"></div>
              <div className="spvector1"></div>
              <div className="spvector2"></div>
              <div className="spvector3"></div>
            </div>
            <div className="content">
              The Sharjah Collection unveils the soul of Sharjah
            </div>
            <div
              className="btnContent"
              onClick={() => {
                console.log("hello");
                history.push("/signUp");
              }}
            >
              {" "}
              Get Started
            </div>
            <div className="logInBtn" onClick={() => history.push("/signIn")}>
              Log In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
