import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import op1 from "../../images/op-1.jpg";
import op4 from "../../images/op-4.jpg";
import op2 from "../../images/op-2.jpg";
import op3 from "../../images/op-3.jpg";
import operationImg from "../../images/operations.jpg";

export default function Operation() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="From purchase to order, marketing to after sales, Sona Mandhira operates with well-defined standards in all the functional areas of its operations, complementing the intrinsic quality of products. we constantly expand our product range for our customers and empower our distributors to build stronger relations with their customers."
        />
        <title>Operations Standards – Sona Mandhira Pvt Ltd</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${operationImg})` }}
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
                    <Link to="/operation">Operations</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="wrapper-products" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="p0">Operations Standards</h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text">
                <p>
                  From purchase to order, marketing to after sales, Sona
                  Mandhira operates with well-defined standards in all the
                  functional areas of its operations, complementing the
                  intrinsic quality of products.
                </p>

                <p>
                  Our warranty and sales policy is based on transparency and
                  ethical corporate practices. By providing 24x7 sales and
                  technical support through our dedicated sales and market
                  representatives, we keep the Ordering Process simple for our
                  customers that is backed by constant tracking till 100%
                  satisfaction.{" "}
                </p>

                <p>
                  Since we target to keep a healthy inventory level consistent
                  with the market demand, all dispatches are made from our
                  central warehouse within 48 hour. Innovation is an integral
                  part of our process. No wonder, we constantly expand our
                  product range for our customers and empower our distributors
                  to build stronger relations with their customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-opertaions">
        <div className="container">
          <h2 className="p0">Manufacturing Facilities</h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text">
                <p>
                  We, at Sona Mandhira, firmly believe in making a meaningful
                  difference in the automobile sector. A thought embedded in all
                  our actions. A thought that gives us the strength to grow
                  more, do more and achieve more.
                </p>

                <p>
                  Located at IMT Manesar, Haryana, India, our state-of-the-art
                  IATF 16949:2016 certified manufacturing facilities
                  cumulatively comprise of 60,000 sq. ft. with 3 manufacturing,
                  assembly, and quality assurance units. Following stringent
                  operating procedures prevalent in the automotive industry,
                  these units adhere to statutory standards of production,
                  labour, and pollution control.
                </p>
              </div>
            </div>

            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="wrapper-opertaions-img">
                <img src={op1} alt="Main Facility - Sona Mandhira" />
                <h6>Main Facility</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="wrapper-opertaions-img"
                alt="Satellite Unit - Sona Mandhira"
              >
                <img src={op4} />
                <h6>Satellite Unit</h6>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <div
        className="about-main wrapper-products wrapper-opertaions"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <h2 className="p0">Warehousing and Distribution Facilities</h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text">
                <p>
                  Sprawling over 51,000 sq. ft. and 3 floors, our central
                  warehousing and distribution facility is located in Gurgaon.
                  With state-of-the-art processes for storage, packing,
                  invoicing, logistics, and tracking, it ensures efficient,
                  flexible MOQ (Minimum Order Quantity), and error free
                  dispatches for customers.
                </p>
              </div>
            </div>

            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="wrapper-opertaions-img mb-0">
                <img
                  src={op2}
                  alt="Warehousing and Distribution Facilities  - Sona Mandhira
"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="wrapper-opertaions-img mb-0">
                <img
                  src={op3}
                  alt="Warehousing and Distribution Facilities  - Sona Mandhira
"
                />
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <div className="wrapper-opertaions" style={{ background: "#f7f7f7" }}>
        <div className="container">
          <h2 className="p0">Design and Development</h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text">
                <p>
                  Backed by a New Product Development division (NPD), our
                  manufacturing operations constantly develops new SKU’s to
                  fulfil the ever-growing variety and range required from the
                  aftermarket, addressing legacy car models and recent launches.
                  The cycle time of new launches and variants has now
                  significantly decreased in our target markets.
                </p>

                <p>
                  The NPD division is equipped with advanced metrology
                  equipment, drawing, modelling, and simulation software, as
                  well as testing equipment for functional and durability prove
                  outs. Based on the APQP (Advanced Product Quality Planning)
                  methodology, we supply prototypes and pre-production samples
                  for qualification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cl"></div>
    </div>
  );
}
