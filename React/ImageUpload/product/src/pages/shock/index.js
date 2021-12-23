import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import shock1 from "../../images/inner-pro-1st-type/1.png";
import shock2 from "../../images/inner-pro-1st-type/2.png";
import shock3 from "../../images/inner-pro-1st-type/3.png";
import shock4 from "../../images/inner-pro-1st-type/4.png";
import shock5 from "../../images/inner-pro-1st-type/5.png";
import shock6 from "../../images/inner-pro-1st-type/6.png";
import mainPdf from "../../images/main-pdf-products.pdf";

export default function Shock() {
  return (
    <div>
      <Helmet>
        <title>
          Best Shock Absorber Manufacturer in India - Sona Mandhira Pvt Ltd
        </title>
      </Helmet>
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
                    <Link to="/product">Products &nbsp;&gt;&nbsp;</Link>
                  </li>
                  <li>
                    <Link to="/shock">Shock Absorber</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4"></div>
            <div class="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div class="about-main wrapper-products">
        <div class="container">
          <h2 class="p0">Shock Absorber</h2>
        </div>
      </div>

      <div class="wrapper-products-listing">
        <div class="container-fluid width-mins-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div class="wrapper-products-img-shocker">
                <a href="#">
                  <img src={shock1} alt="sub" />
                  <b>Coil Pad</b>
                  <a href={mainPdf} class="view-more-btns" target="blank">
                    Download PDF
                  </a>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="wrapper-products-img-shocker">
                <a href="#">
                  <img src={shock2} alt="sub" />
                  <b>Front Shock Absorber</b>
                  <a href={mainPdf} class="view-more-btns" target="blank">
                    Download PDF
                  </a>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="wrapper-products-img-shocker">
                <a href="#">
                  <img src={shock3} alt="sub" />
                  <b>Rear Shock Absorber</b>
                  <a href={mainPdf} class="view-more-btns" target="blank">
                    Download PDF
                  </a>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="wrapper-products-img-shocker">
                <a href="#">
                  <img src={shock4} alt="sub" />
                  <b>Shock absorber Bush Kit</b>
                  <a href={mainPdf} class="view-more-btns" target="blank">
                    Download PDF
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper-products-listing" style={{ background: "#f7f7f7" }}>
        <div class="container-fluid width-mins-fluid">
          <div class="row">
            <div class="col-lg-3"></div>

            <div class="col-lg-3">
              <div class="wrapper-products-img-shocker">
                <a href="#">
                  <img src={shock5} alt="sub" />
                  <b>Brake Parts</b>
                  <a href={mainPdf} class="view-more-btns" target="blank">
                    Download PDF
                  </a>
                </a>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="wrapper-products-img-shocker">
                <a href="#">
                  <img src={shock6} alt="sub" />
                  <b>Filters</b>
                  <a href={mainPdf} class="view-more-btns" target="blank">
                    Download PDF
                  </a>
                </a>
              </div>
            </div>

            <div class="col-lg-3"></div>
          </div>
        </div>
      </div>
      <div class="cl"></div>
    </div>
  );
}
