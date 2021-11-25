import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Layout from "../../components/layout";
import mainImg from '../../assets/image/food/Pic.png';
import groLogo from "../../assets/image/food/groceries.png";
import expLogo from "../../assets/image/food/explorer.png";
import foodLogo from "../../assets/image/food/food.png";
import starImg from "../../assets/image/food/star.png"
import d_starImg from "../../assets/image/food/d-star.png"
import ellipseImg from "../../assets/image/food/ellipse.png"
import {checkLogin} from '../common.modules';
import postData from '../postData';
import "./index.css";

const Food = (props) => {
  // const { groceryListData } = props;
  const [activeReservation,setActiveReservation]=useState(0);
  const history=useHistory();
  useEffect(async()=>{
   
    checkLogin(history);
    let authToken=localStorage.getItem("h_auth_token");
    if(authToken)
    {
      let  data = new FormData();
      data.append('action', 'getActiveReservation');
      let response=await postData(data);
      
     setActiveReservation(response.active_reservation);

    }  




  },[]);
  return (
    <Layout>
      <div className="food-body">
        <img id="mainImg" src={mainImg}/>
        <button className="btn-date"></button>
        <div className="img-description">
          <img src={ellipseImg} style={{marginBottom: "3px", marginRight: "3px"}}/>
          <label className="des-place">Your Hotel</label><br/>
          <label className="des-title">Moon Retreat</label>
          <img className="star" src={d_starImg}/>
          <img className="star" src={starImg}/>
          <img className="star" src={starImg}/>
          <img className="star" src={starImg}/>
          <img className="star" src={starImg}/>
          <label className="des-content">E55 Al Shuwaib - Umm Al Quwain Rd Sharjah - ОАЭ</label>
        </div>
        <label className="service-header">Quick Services</label>
        {activeReservation!="0"? 
          <>
        <div className="service-panel">
          <span className="header-line" />
          <label className="select-service">Select your service</label>
           
       
          
            <div className="grocery-service">
              <div style={{width: "100%", height: "100%", position: "relative"}}>
                <img className="service-img" src={groLogo}/>
                <label className="service-des">Groceries</label>
              </div>
            </div>
            <div className="food-service">
              <div style={{width: "100%", height: "100%", position: "relative"}}>
                  <img className="service-img" src={foodLogo}/>
                  <label className="service-des" style={{color: "#FFFFFF"}}>Food</label>
                </div>
              </div>
            <div className="explorer-service">
              <div style={{width: "100%", height: "100%", position: "relative"}}>
                <img className="service-img" src={expLogo}/>
                <label className="service-des">Explorer</label>
              </div>
            </div>
           
           
        </div>
        </>
        :<div style={{width: "100%", height: "100%", position: "relative" , textAlign: "center"}}><button class="btn btn-primary">Book Now</button></div>}
      </div>
    </Layout>
  );
};

export default Food;
