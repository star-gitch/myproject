import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

export default function Footer() {
  const [contactFlag, setContactFlag] = useState(false);
  const showContactBox = () => {
    setContactFlag(true);
  };
  const hideContactBox = () => {
    setContactFlag(false);
  };
  return (
    <div>
      <footer>
        <div className="wrapper-footer-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="wrapper-footer-little-type">
                  <h5>Support</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Help</a>
                    </li>
                    <li>
                      <Link to="/policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <a href="javascript:void(0);" onClick={showContactBox}>
                        Partner with Us
                      </a>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                  <p>
                    Contact us: <b>1800 257 7675</b>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="wrapper-footer-little-type">
                  <h5>Newsletter</h5>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        className="form-control input-type-design"
                        placeholder="Email Address"
                      />
                      <a href="#" className="more-2">
                        Submit
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="wrapper-footer-little-type wrapper-footer-little-type-two">
                  <h5>Get in Touch</h5>
                  <ul>
                    <li>
                      <a href="mailto:info@sonamandhira.com">
                        info@sonamandhira.com
                      </a>
                    </li>
                    <li>
                      Plot No 30, Sector 5 , IMT Manesar , Gurugram, 122050
                    </li>
                    <li>Phone Number: 1800 257 7675</li>
                  </ul>

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
      </footer>
      <footer>
        <div className="wrapper-footer-main2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper-copy-right-tx">
                  <p>©2021 by Sona Mandhira Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
