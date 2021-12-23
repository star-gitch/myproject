import React, { useEffect } from "react";
import homeSlider1 from "../../images/home-slider-1.jpg";
import homeSlider2 from "../../images/home-slider-2.jpg";
import homeSlider3 from "../../images/home-slider-3.jpg";
import wheeler1 from "../../images/wheeler-1.jpg";
import wheeler2 from "../../images/wheeler-2.jpg";
import indexPro1 from "../../images/index-pro/1.jpg";
import indexPro2 from "../../images/index-pro/2.jpg";
import indexPro3 from "../../images/index-pro/3.jpg";
import indexPro4 from "../../images/index-pro/4.jpg";
import indexPro5 from "../../images/index-pro/5.jpg";
import indexPro6 from "../../images/index-pro/6.jpg";
import outlookBusiness from "../../images/outlook-business.jpg";
import businessConnectMagazine from "../../images/Business-Connect-Magazine-Logo-2.png";
import newProject from "../../images/New-Project.jpg";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Best Automobile Spare Parts Manufacturer in India – Sona Mandhira Pvt
          Ltd
        </title>
        <script src="./js/home.js"></script>
      </Helmet>
      <section className="inner_dedsd">
        <div className="container-fluid bacnner_wids">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner height_clds">
              <div className="carousel-item active">
                <img
                  src={homeSlider1}
                  alt="Automobile Part Manufacturer | Sona Mandhira"
                />
                <h2
                  className="sub_tilds"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  Integrity
                </h2>
              </div>
              <div className="carousel-item">
                <img
                  src={homeSlider2}
                  alt="Automobile Part Manufacturer | Sona Mandhira"
                />
                <h2
                  className="sub_tilds"
                  data-aos="fade-up"
                  data-aos-duration="5000"
                >
                  Safety
                </h2>
              </div>
              <div className="carousel-item">
                <img
                  src={homeSlider3}
                  alt="Automobile Part Manufacturer | Sona Mandhira"
                />
                <h2
                  className="sub_tilds"
                  data-aos="fade-up"
                  data-aos-duration="6000"
                >
                  Quality
                </h2>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="wrapper-about-main align-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>ABOUT SONA MANDHIRA</h1>
              <p>
                Since 2012, we, at Sona Mandhira (formerly Mandhira Marketing
                Pvt. Ltd.) have been passionately serving the aftermarket by
                creating an unmatched value for our customers, through products
                that are of topmost quality and through our relationships with
                our distribution partners. Our wide range of world-className
                products are sold under a distinct brand for different vehicle
                segments. Powered by the passion for excellence in the auto
                spare part segment, our brands reflect the true essence of our
                personality, positioning and passion.
              </p>
              <Link to="/about" className="more-1">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-wheeler-main">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos-duration="1500"
              data-aos="zoom-out-left"
            >
              <div className="wrapper-wheeler-img">
                <img src={wheeler1} alt="Sona Mandhira Pvt Ltd" />
                <h4>4 WHEELER PRODUCTS</h4>
                <p>
                  Integrity, Safety, and Quality are the key principles of our
                  brand. Our 4 wheeler aftermarket products are sold under the
                  brand & logo of SMPL. Along with the brand, the products now
                  come in an intelligently designed “Yellow Box.” The new
                  packaging and branding replaces the earlier trademarks.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos-duration="1500"
              data-aos="zoom-out-right"
            >
              <div className="wrapper-wheeler-img">
                <img src={wheeler2} alt="Sona Mandhira MJNK" />
                <h4>2/3 WHEELER PRODUCTS</h4>
                <p>
                  Our 2 wheeler aftermarket products are offered under the brand
                  & logo MJNK. The brand promises the customer to “Ride with
                  Confidence.” This assurance is the result of our quality
                  products that come in an intelligently designed “Yellow Box.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-products-slide">
        <h2>PRODUCTS</h2>
        <div id="wrap">
          <div id="showcase">
            <Link to="/product">
              <img
                className="cloud9-item"
                src={indexPro1}
                alt="Rubber Parts | Sona Mandhira"
              />
            </Link>
            <Link to="/product">
              <img
                className="cloud9-item"
                src={indexPro2}
                alt="Suspension | Sona Mandhira"
              />
            </Link>
            <Link to="/product">
              <img
                className="cloud9-item"
                src={indexPro3}
                alt="Brake Parts | Sona Mandhira"
              />
            </Link>
            <Link to="/product">
              <img
                className="cloud9-item"
                src={indexPro4}
                alt="Shock Absorbers | Sona Mandhira"
              />
            </Link>
            <Link to="/product">
              <img
                className="cloud9-item"
                src={indexPro5}
                alt="Filters | Sona Mandhira"
              />
            </Link>
            <Link to="/product">
              <img
                className="cloud9-item"
                src={indexPro6}
                alt="Steering | Sona Mandhira"
              />
            </Link>
          </div>
          <div className="nav">
            <button className="left"> ← </button>
            <button className="right"> → </button>
          </div>
        </div>
      </div>
      <div className="mediasectiosdn">
        <div className="container">
          <h2>Media</h2>

          <div className="row">
            <div className="col-lg-4 medisedds">
              <a href="https://www.outlookbusiness.com/enterprise-3/outlook-business-initiative-148/breaking-the-stereotype-like-father-like-daughter-6321">
                <h4>Breaking The Stereotype Like Father, Like Daughter</h4>
                <p>
                  In 2020 when Mandhira Kapur took the helm of SMPL, the company
                  was going through the pandemic and company’s growth was
                  stagnated.
                </p>
                <img src={outlookBusiness} alt="outlook business" />
              </a>{" "}
            </div>
            <div className="col-lg-4 medisedds">
              <a href="https://businessconnectindia.in/sona-mandhira-breaking-grounds/">
                <h4>
                  Sona Mandhira Breaking <br />
                  Grounds
                </h4>
                <p>
                  Sona Mandhira Pvt. Ltd. (SMPL) is a widely popular brand in
                  the automotive aftermarket, offering a range of qualified and
                  reliable products.{" "}
                </p>
                <img
                  src={businessConnectMagazine}
                  alt="Sona Mandhira Breaking Grounds"
                />
              </a>{" "}
            </div>
            <div className="col-lg-4 medisedds">
              <a href="https://www.outlookbusiness.com/enterprise-3/outlook-business-initiative-148/breaking-the-stereotype-like-father-like-daughter-6321">
                <h4>
                  Owing to high demand, we are looking to expand to new
                  locations – Mandhira Kapur, SMPL
                </h4>
                <p>
                  The aftermarket automotive space is a huge segment and the
                  scope of expansion grows with more cars being manufactured.
                </p>
                <img src={newProject} alt="Financial Express - Sona Mandhira" />
              </a>{" "}
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-lg-12">
              <Link to="/media" className="view-more-1">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="blog_sectionsd on-a-display-block"
        style={{ display: "none" }}
      >
        <div className="container-fluid paddesl">
          <h2>PRODUCTS</h2>
          <div className="col-md-12 heroSlider-fixed" data-aos="fade-up">
            <div className="slider responsive">
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro1} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro2} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro3} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro4} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro5} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro6} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro1} alt="blog image" />
                </div>
              </Link>
              <Link to="/product">
                {" "}
                <div className="inner_des inner-type-loss">
                  <img src={indexPro2} alt="blog image" />
                </div>
              </Link>
            </div>
            <div className="prev">
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
            </div>
            <div className="next">
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
