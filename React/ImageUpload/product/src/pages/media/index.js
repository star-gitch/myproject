import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import BusinessConnectMagazineLogo from "../../images/Business-Connect-Magazine-Logo-2.png";
import mediabg from "../../images/media.jpg";
import outlookBusiness from "../../images/outlook-business.jpg";
import newProject from "../../images/New-Project.jpg";
import "./index.css";

export default function Media() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Media & PR Section – Sona Mandhira Pvt Ltd</title>
        <script src="./js/media.js"></script>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${mediabg})` }}
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
                    <Link to="/media">Media</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="medisebb">
        <div className="container-fluid paddesl">
          <h2>Media</h2>
          <div className="col-md-12 heroSlider-fixed" data-aos="fade-up">
            <div class="slider responsive">
              <a href="https://www.outlookbusiness.com/enterprise-3/outlook-business-initiative-148/breaking-the-stereotype-like-father-like-daughter-6321">
                {" "}
                <div className="inner_des boxsh media-optimize-img-size">
                  <h4>Breaking The Stereotype Like Father, Like Daughter</h4>
                  <p>
                    In 2020 when Mandhira Kapur took the helm of SMPL, the
                    company was going through the pandemic and company’s growth
                    was stagnated.
                  </p>
                  <img
                    src={outlookBusiness}
                    alt="outlook business"
                    className="m-img"
                  />
                  <span className="readmedsec">Read More</span>
                </div>
              </a>
              <a href="https://businessconnectindia.in/sona-mandhira-breaking-grounds/">
                {" "}
                <div className="inner_des boxsh media-optimize-img-size">
                  <h4>
                    Sona Mandhira Breaking <br />
                    Grounds
                  </h4>
                  <p>
                    Sona Mandhira Pvt. Ltd. (SMPL) is a widely popular brand in
                    the automotive aftermarket, offering a range of qualified
                    and reliable products.{" "}
                  </p>
                  <img
                    src={BusinessConnectMagazineLogo}
                    alt="Sona Mandhira Breaking Grounds"
                    className="m-img"
                  />
                  <span className="readmedsec">Read More</span>
                </div>
              </a>

              <a href="">
                {" "}
                <div className="inner_des boxsh media-optimize-img-size">
                  <h4>
                    Owing to high demand, we are looking to expand to new
                    locations – Mandhira Kapur, SMPL
                  </h4>
                  <p>
                    The aftermarket automotive space is a huge segment and the
                    scope of expansion grows with more cars being manufactured.
                  </p>
                  <img
                    src={newProject}
                    alt="Financial Express - Sona Mandhira"
                    className="m-img"
                  />
                  <span className="readmedsec">Read More</span>
                </div>
              </a>
            </div>
            <div class="prev">
              <span
                class="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
            </div>
            <div class="next">
              <span
                class="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div className="cl"></div>
    </div>
  );
}
