import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import career1 from "../../images/career-1.jpg";

export default function Career() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Careers Section – Sona Mandhira Pvt Ltd</title>
      </Helmet>
      <section class="inner_dedsd">
        <div
          class="inner_banner"
          style={{ background: `url(${career1})` }}
        ></div>
      </section>
      <div class="bedcreams">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="lead-padding">
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
            <div class="col-lg-4"></div>
            <div class="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div class="wrapper-opertaions wrapper-opertaions-bg-two pb-0">
        <div class="container">
          <h2 class="p0">Careers at Sona Mandhira </h2>
          <div class="row">
            <div
              class="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div class="wrapper-about-text wrapper-career-text">
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
        class="wrapper-career-bg-color "
        style={{ background: "#fff" }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div class="container">
          <div class="come-with-contact-us-wrap">
            <h4>Come Work With Us</h4>
          </div>
          <div class="row wrapper-career-bg-color-form-mt">
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              <div class="wrapper-career-map">
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

            <div class="col-lg-5">
              <div class="wrapper-career-form">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control crosse-form"
                      placeholder="First name"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="last"
                      class="form-control crosse-form"
                      placeholder="Last name"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="email"
                      class="form-control crosse-form"
                      placeholder="Email"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="Phone"
                      class="form-control crosse-form"
                      placeholder="Phone"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <select id="cars" class="form-control crosse-form">
                      <option value="volvo" selected>
                        Select
                      </option>
                      <option value="saab">Accounts</option>
                      <option value="vw">Marketing</option>
                      <option value="audi">Sales</option>
                      <option value="vw">Purchase</option>
                      <option value="vw">Ecommerce</option>
                      <option value="vw">Quality</option>
                      <option value="vw">Admin</option>
                      <option value="vw">HR</option>
                      <option value="vw">IT</option>
                      <option value="NPD">NPD</option>
                      <option value="PPC">PPC</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <textarea
                      class="form-control crosse-form"
                      placeholder="Attatch  your resume."
                      required=""
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <button class="danger form-control">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-1"></div>
          </div>
        </div>
      </div>

      <div class="cl"></div>
    </div>
  );
}
