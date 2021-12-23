import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import productInner from "../../images/products-innerr-1.jpg";
import productlogo2 from "../../images/products-logo-2.png";
import mainPdf from "../../images/main-pdf-products.pdf";
import productlogo1 from "../../images/products-logo-1.png";
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
import png4 from "../../images/4.png";
import png5 from "../../images/5.png";
import png6 from "../../images/6.png";
import png7 from "../../images/7.png";
import png8 from "../../images/8.png";
import part2mp4 from "../../images/parts-2.mp4";
import { Link } from "react-router-dom";

export default function Product() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Best Auto Parts Products – Sona Mandhira Pvt Ltd</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${productInner})` }}
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
                    <Link to="/career">Products</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="about-main wrapper-products">
        <div className="container">
          <h2 className="p0">Our Products</h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text">
                <p>
                  We take pride in ensuring Quality, Safety, Integrity in every
                  product we offer to the market whether it is manufactured in
                  our own facilities or our partners’ facilities. So, when
                  people search for the best shock absorber manufacturer or Gas
                  spring manufacturer or even an automobile suspension part
                  manufacturer, they choose Sona Mandhira.
                </p>

                <p>
                  We are the most sought after Brake shoe and Control arm
                  manufacturer and a leading tie rod ends and suspension ball
                  joints manufacturer. This is achieved through our Operations
                  Standards that are built into our design, development,
                  manufacturing and supply chain processes. We keep expanding
                  our product range to satisfy our diverse clientele and
                  requirements of the aftermarket coverage. We invite you to
                  explore our product offerings below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-products-on-sub wrapper-products-on-sub-copy-type">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img">
                <img src={productlogo2} />
                <h3>4 WHEELER</h3>
                <a href={mainPdf} target="_blank" className="more-5">
                  Download Catalogue
                </a>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img">
                <img src={productlogo1} />
                <h3 className="more-2-mt">2 | 3 WHEELER</h3>
                <a href="#" className="more-5 ">
                  Download Catalogue
                </a>
              </div>
            </div>
            <div className="col-lg-3"></div>

            <div
              className="col-lg-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-text-center">
                <p>
                  The product range is constantly being enlarged to meet the
                  market demands from discontinued existing and new modes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="wrapper-products-btn-four"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-2">
              <a href={mainPdf} target="_blank" className="active more-3">
                4 Wheeler
              </a>
            </div>
            <div className="col-lg-2">
              <a
                href="https://www.flagscommunications.com/sona-redesign"
                className="more-3"
              >
                2 Wheeler
              </a>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="wrapper-products-listing">
        <div className="container-fluid width-mins-fluid">
          <div className="row">
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <img src={png1} alt="Shock Absorber - Sona Mandhira" />
                <a href={mainPdf} target="_blank">
                  <b>Shock Absorber</b>
                </a>
                <a href={mainPdf} target="_blank">
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <img src={png2} alt="Steering System - Sona Mandhira" />
                <a href={mainPdf} target="_blank">
                  <b>Steering System</b>
                </a>
                <a href={mainPdf} target="_blank">
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <a href={mainPdf} target="_blank">
                  <img src={png3} alt="Suspension - Sona Mandhira" />
                  <b>Suspension</b>
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <a href={mainPdf} target="_blank">
                  <img
                    src={png4}
                    alt="Dicky and Bonnet Shocker - Sona Mandhira"
                  />
                  <b>Dicky and Bonnet Shocker</b>
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-50">
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <a href={mainPdf} target="_blank">
                  <img
                    src={png5}
                    alt="Rubber and Metal Bonded Rubber - Sona Mandhira"
                  />
                  <b>Rubber and Metal Bonded Rubber</b>
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>

            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <a href={mainPdf} target="_blank">
                  <img src={png6} alt="Brake Parts - Sona Mandhira" />
                  <b>Brake Parts</b>
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>

            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <a href={mainPdf} target="_blank">
                  <img src={png7} alt="Filters - Sona Mandhira" />
                  <b>Filters</b>
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>

            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-products-img-shocker">
                <a href={mainPdf} target="_blank">
                  <img src={png8} alt="Wiper Blade - Sona Mandhira" />
                  <b>Wiper Blade</b>
                  <strong>Download PDF &nbsp;&gt;</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="wrapper-products-video-clip"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <video className="mainslider" autoplay="" muted="" loop="true">
                <source src={part2mp4} type="video/mp4" />
                <source src={part2mp4} type="video/ogg" />
              </video>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      <div className="cl"></div>
    </div>
  );
}
