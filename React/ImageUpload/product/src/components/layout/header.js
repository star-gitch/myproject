import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import logoImg from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import "../../css/teams.css";
import "./header.css";
import $ from "jquery";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [contactFlag, setContactFlag] = useState(false);
  const showContactBox = () => {
    setContactFlag(true);
  };
  const hideContactBox = () => {
    setContactFlag(false);
  };
  const location = useLocation();
  var home = "";
  var about = "";
  var product = "";
  var operation = "";
  var market = "";
  var media = "";
  var career = "";
  var contact = "";

  if (location.pathname === "/") {
    var home = "active";
  }
  if (location.pathname === "/about") {
    var about = "active";
  }
  if (location.pathname === "/product") {
    var product = "active";
  }
  if (location.pathname === "/operation") {
    var operation = "active";
  }
  if (location.pathname === "/market") {
    var market = "active";
  }
  if (location.pathname === "/media") {
    var media = "active";
  }
  if (location.pathname === "/career") {
    var career = "active";
  }
  if (location.pathname === "/contact") {
    var contact = "active";
  }

  return (
    <div>
      <header>
        <div className="wrapper-logo">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Link to="/">
                  <img src={logoImg} alt="Sona Mandhira logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-navbar-bg">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav nav-center">
                <li className="nav-item">
                  <Link className={`nav-link ${home}`} to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${about}`} to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${product}`} to="/product">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${operation}`} to="/operation">
                    Operations
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${market}`} to="/market">
                    Markets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${media}`} to="/media">
                    Media
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${career}`} to="/career">
                    Careers
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link ${contact}`}
                    href="javascript:void(0);"
                    onClick={showContactBox}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Drawer anchor="right" open={contactFlag} onClose={hideContactBox}>
        <div className="wrapper-career-bg-color wrapper-career-bg-color-mention">
          <div className="container">
            <div className="row">
              <div id="mySidebar" className="sidebar">
                <a className="closebtn" onClick={hideContactBox}>
                  ×
                </a>
                <h3>Contact Us</h3>
                <p style={{ color: "#31355f" }}>
                  You may choose to call us at 1800 257 7675 or leave your
                  details below and we will reach out at the earliest
                </p>
                <div
                  className="wrapper-career-form"
                  style={{ padding: "20px" }}
                >
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control crosse-form crosse-form-two"
                        placeholder="Name"
                        required=""
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control crosse-form crosse-form-two"
                        placeholder="Email"
                        required=""
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control crosse-form crosse-form-two"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control crosse-form crosse-form-two"
                        placeholder="Type your message here..."
                        required=""
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <button className="danger danger-two form-control">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="wrapper-form-inner-social-design">
                  <ul className="social-icon-footer">
                    <li>
                      <a
                        href="https://www.facebook.com/Sonamandhira/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/pvt_sona" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/sona.mandhira/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/sonamandhira"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
