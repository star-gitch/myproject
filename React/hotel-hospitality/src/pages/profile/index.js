import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Layout from "../../components/layout";
import OrderHistoryIcon from "../../assets/image/profile/Receipt.svg";

const Profile = (props) => {
  const history = useHistory();
  return (
    <Layout>
      <div className="profile">
        <div className="profile_panel">
          <div
            className="profile_row"
            onClick={() => history.push({ pathname: "/order-history" })}
          >
            <div className="profile_icon" id="help_icon">
              <img src={OrderHistoryIcon} alt="Profile icon" />
            </div>
            <div className="profile_text">
              <div className="profile_toptext">
                Order History
              </div>
              <div className="profile_bottomtext">
                List of history
              </div>
            </div>
          </div>
          {/* <div className="profile_row" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
