import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import contactbg from "../../images/contact.jpg";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Contact() {
  const { addToast } = useToasts();
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    AOS.init();
  }, []);

  const contactSubmit = () => {
    if (!contactInfo["name"]) {
      addToast("Sorry, enter name", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!contactInfo["phone"]) {
      addToast("Sorry, enter phone", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!contactInfo["email"]) {
      addToast("Sorry, enter email", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!contactInfo["message"]) {
      addToast("Sorry, enter message", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    setLoadingFlag(true);
    Axios.post("/contact/create", contactInfo).then((res) => {
      setLoadingFlag(false);
      if (res.data.status === 200) {
        setContactInfo({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        addToast("success", {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast("failure", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta name="description" content="" />
        <title>Contact us Section – Sona Mandhira Pvt Ltd</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="Our employees are the most vital asset of our company. Our efficiency, effectiveness and success depend largely on skills, abilities, and commitment of our employees. We are always on the lookout for new talent to add value to the work we do. Drop your CV at hr@sonamandhira.com"
        />
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${contactbg})` }}
        ></div>
      </section>
      <div className="bedcreams">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="lead-padding">
                <ul>
                  <li>
                    <Link to="/">Home &nbsp;&gt;&nbsp;</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="wrapper-opertaions wrapper-opertaions-bg-two pb-0">
        <div className="container">
          <h2 className="p0">Contact Us </h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text wrapper-career-text">
                <p>
                  You may choose to call us at 1800 257 7675 or leave your
                  details below and we will reach out at the earliest
                </p>
                <div
                  className="wrapper-career-form"
                  style={{ padding: "20px" }}
                >
                  <form action="contact.php" method="post">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control crosse-form crosse-form-two"
                            placeholder="Name"
                            required
                            value={contactInfo["name"]}
                            onChange={(e) =>
                              setContactInfo({
                                ...contactInfo,
                                ["name"]: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group">
                          <input
                            type="text"
                            minlength="10"
                            maxlength="11"
                            name="phone"
                            id="phone"
                            className="form-control crosse-form crosse-form-two"
                            placeholder="Phone"
                            required
                            value={contactInfo["phone"]}
                            onChange={(e) =>
                              setContactInfo({
                                ...contactInfo,
                                ["phone"]: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control crosse-form crosse-form-two"
                        placeholder="Email"
                        required
                        value={contactInfo["email"]}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            ["email"]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control crosse-form crosse-form-two"
                        minlength="2"
                        maxlength="60"
                        onpaste="return false;"
                        ondrop="return false;"
                        autocomplete="off"
                        placeholder="Type your message here..."
                        id="sms"
                        name="sms"
                        pattern="[a-z]"
                        required
                        value={contactInfo["message"]}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            ["message"]: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            className="danger danger-two form-control"
                            value="Submit"
                            name="submit"
                            onClick={contactSubmit}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div
                  className="wrapper-form-inner-social-design"
                  style={{ display: "none" }}
                >
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
      </div>
      <div className="cl"></div>
      {/* Loading */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingFlag}
        onClick={() => setLoadingFlag(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
