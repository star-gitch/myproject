import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import marketbg from "../../images/market.jpg";
import earth from "../../images/earth.jpg";
import globe from "../../images/globe-1.png";
import { Link } from "react-router-dom";

export default function Market() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Market Segments – Sona Mandhira Pvt Ltd</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${marketbg})` }}
        ></div>
      </section>
      <div className="bedcreams">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="lead-padding">
                <ul>
                  <li>
                    <Link to="/">Home &nbsp;&gt;</Link>
                  </li>
                  <li>
                    <Link to="/market">Markets</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div
        className="about-main wrapper-products wrapper-opertaions"
        style={{ background: "#f7f7f7" }}
      >
        <div className="container">
          <h2 className="p0">Application Segments </h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text wrapper-markets-text pb-0 pt-0">
                <h5>Market</h5>
                <p>
                  The target application segments for Sona Mandhira (SMPL)
                  products are predominantly Passenger Vehicles complemented by
                  recent entry to 2/3 Wheelers, and Commercial Vehicle segments.
                  The common philosophy is to offer the best value products with
                  a contemporary range and efficient distribution and keep the
                  customer confidence and customer loyalty always high.
                </p>

                <p>
                  Being the best car spares manufacturer, our target application
                  segment is predominantly 4 wheeler passenger vehicles.
                  However, we have plans to serve the 2/3 wheeler markets too.
                  Offering the best value products, with a contemporary range,
                  that keeps the customer confidence and loyalty high is a
                  strategy that we never miss to follow.{" "}
                </p>

                <p>
                  SMPL’s products are distributed in the Indian market through
                  dedicated distribution networks, focusing on the specific
                  application segment. The structure typically consists of a
                  master distributor with a chain of sub distributors, dealer or
                  retailers.
                </p>

                <p>
                  Our product range includes Shock Absorbers, Steering Systems,
                  Suspension, Dicky and Bonnet Shocker, Rubber and Metal Bonded
                  Rubber, Brake Parts, Filters, Wiper Blade and many more. We
                  are specialist in manufacturing, Stabilizer Links Assembly,
                  Steering Tie Rods Assembly, Rack Ends, Upper Links, Lower
                  Links, and Relay Lever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-markets-blue-partten">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div
              className="col-lg-4"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-markets-text-blue-parts">
                <h6>Export Market</h6>
                <p>
                  Thanks to our product quality and brand reputation, there is a
                  preferential demand in our export markets. We have established
                  links in the neighboring SAARC countries (Sri Lanka, Nepal,
                  Bangladesh, Bhutan), African countries , and Russia. We are in
                  the process of opening our offices in USA and UAE and
                  enlarging our presence worldwide.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-markets-text-blue-parts wrapper-markets-text-blue-parts-two">
                <h6>Domestic Market</h6>
                <p>
                  SMP’s products are distributed in in India market through
                  dedicated distribution networks, focusing on the specific
                  application segment.The distribution structure consists of
                  territorially aligned Distributor Partners who in turn reach
                  to their network of dealers and retailers. Additional support
                  is provided by our company in the form of marketing, brand
                  building and on ground pull creation
                </p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <div
        className="about-main wrapper-products wrapper-opertaions"
        style={{
          background: "#f7f7f7",
          paddingTop: " 0px !important",
          paddingBottom: "0px !important",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-markets-img">
                <img src={earth} alt="globe" />
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className=" wrapper-markets-text">
                <h2>Domestic Distribution </h2>
                <p style={{ marginTop: "20px" }}>
                  We have Pan India coverage catering to Tier 1, 2 & 3 cities
                  and town. These are facilitated through our 130+ distribution
                  partners that are steadily increasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-opertaions wrapper-opertaions-twos">
        <h2 className="p0">Global Presence </h2>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-1"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            ></div>
            <div
              className="col-lg-10"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text wrapper-markets-text pb-0 pt-0">
                <img src={globe} alt="map" />
              </div>
            </div>
            <div
              className="col-lg-1"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            ></div>
          </div>
        </div>
      </div>

      <div className="cl"></div>
    </div>
  );
}
