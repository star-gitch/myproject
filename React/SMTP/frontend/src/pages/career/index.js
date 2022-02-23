import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import career1 from "../../images/career-1.jpg";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Career() {
  const { addToast } = useToasts();
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [careerInfo, setCareerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sort: "",
    resume: "",
  });
  useEffect(() => {
    AOS.init();
  }, []);

  const careerSubmit = (e) => {
    e.preventDefault();

    if (!careerInfo["firstName"]) {
      addToast("Sorry, enter firstName", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!careerInfo["lastName"]) {
      addToast("Sorry, enter lastName", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!careerInfo["email"]) {
      addToast("Sorry, enter email", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!careerInfo["phone"]) {
      addToast("Sorry, enter phone", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!careerInfo["sort"]) {
      addToast("Sorry, select something", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (!careerInfo["resume"]) {
      addToast("Sorry, enter resume", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    setLoadingFlag(true);
    Axios.post("/career/create", careerInfo).then((res) => {
      setLoadingFlag(false);
      if (res.data.status === 200) {
        setCareerInfo({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          sort: "",
          resume: "",
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
        <meta
          name="description"
          content="Our employees are the most vital asset of our company. Our efficiency, effectiveness and success depend largely on skills, abilities, and commitment of our employees. We are always on the lookout for new talent to add value to the work we do."
        />
        <title>Careers Section – Sona Mandhira Pvt Ltd</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${career1})` }}
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
                    <Link to="/career">Careers</Link>
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
          <h2 className="p0">Careers at Sona Mandhira </h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text wrapper-career-text">
                <p>
                  Our employees are the most vital asset of our company. Our
                  efficiency, effectiveness and success depend largely on
                  skills, abilities, and commitment of our employees. Together,
                  we make the company grow and soar high.{" "}
                </p>
                <p>
                  We are always on the lookout for new talent to add value to
                  the work we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="wrapper-career-bg-color "
        style={{ background: "#fff" }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="come-with-contact-us-wrap">
            <h4>Come Work With Us</h4>
          </div>
          <div className="row wrapper-career-bg-color-form-mt">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="wrapper-career-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28087.179890663956!2d76.90995151853559!3d28.361948762731043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dcd858c8d69%3A0x1589664a976b4f46!2sSona%20Mandhira%20Private%20Limited!5e0!3m2!1sen!2sin!4v1635502406491!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="wrapper-career-form">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control crosse-form"
                      placeholder="First name"
                      required=""
                      value={careerInfo["firstName"]}
                      onChange={(e) =>
                        setCareerInfo({
                          ...careerInfo,
                          ["firstName"]: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="last"
                      className="form-control crosse-form"
                      placeholder="Last name"
                      required=""
                      value={careerInfo["lastName"]}
                      onChange={(e) =>
                        setCareerInfo({
                          ...careerInfo,
                          ["lastName"]: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control crosse-form"
                      placeholder="Email"
                      required=""
                      value={careerInfo["email"]}
                      onChange={(e) =>
                        setCareerInfo({
                          ...careerInfo,
                          ["email"]: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="Phone"
                      className="form-control crosse-form"
                      placeholder="Phone"
                      required=""
                      value={careerInfo["phone"]}
                      onChange={(e) =>
                        setCareerInfo({
                          ...careerInfo,
                          ["phone"]: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <select
                      id="cars"
                      className="form-control crosse-form"
                      value={careerInfo["sort"]}
                      onChange={(e) =>
                        setCareerInfo({
                          ...careerInfo,
                          ["sort"]: e.target.value,
                        })
                      }
                    >
                      <option value="volvo" selected>
                        Select
                      </option>
                      <option value="Accounts">Accounts</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Ecommerce">Ecommerce</option>
                      <option value="Quality">Quality</option>
                      <option value="Admin">Admin</option>
                      <option value="HR">HR</option>
                      <option value="IT">IT</option>
                      <option value="NPD">NPD</option>
                      <option value="PPC">PPC</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control crosse-form"
                      placeholder="Attatch  your resume."
                      required=""
                      value={careerInfo["resume"]}
                      onChange={(e) =>
                        setCareerInfo({
                          ...careerInfo,
                          ["resume"]: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <button
                      className="danger form-control"
                      onClick={(e) => careerSubmit(e)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-1"></div>
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
