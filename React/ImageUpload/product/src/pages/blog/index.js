import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import blogImg from "../../images/blogs.jpg";
import "./index.css";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function Blog() {
  useScript("./js/media.js");
  return (
    <div>
      <Helmet>
        <title>Welcome to Sonamandhira</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${blogImg})` }}
        ></div>
      </section>

      <div className="blog_sectionsd blog">
        <div className="container-fluid paddesl">
          <h2>Our Blogs</h2>
          <div
            className="col-md-12 heroSlider-fixed"
            data-aos="fade-up"
            style={{ opacity: 1, transform: "translateZ(0)" }}
          >
            <div className="slider responsive">
              <a
                href="https://writeupcafe.com/community/top-5-essential-tips-for-buying-auto-spare-parts-at-affordable-price/"
                target="_blank"
              >
                {" "}
                <div className="inner_des">
                  <img
                    src="https://writeupcafe.com/community/wp-content/uploads/2021/10/Title-Pic-For-Blog-2-1.jpg"
                    alt="blog image"
                  />
                  <h3 className="blog_title">
                    Top 5 essential tips for buying auto spare parts at
                    affordable price{" "}
                  </h3>
                  <p className="blog_description">
                    Soon after buying a product for your car, you sometimes
                    realize that it lacks some of the important features or
                    notice any minor flaws in the product.
                  </p>
                  <span className="readmorecls">Read More</span>
                </div>
              </a>

              <a
                href="https://www.launchora.com/story/top-5-tips-for-car-maintenance-in-winter"
                target="_blank"
              >
                {" "}
                <div className="inner_des">
                  <img
                    src="https://d15e1ws228762b.cloudfront.net/uploads//covers/1634617883-0934239094.jpeg"
                    alt="blog image"
                  />
                  <h3 className="blog_title">
                    Top 5 Tips for Car Maintenance <br />
                    in Winter{" "}
                  </h3>
                  <p className="blog_description">
                    With winter approaching soon, it becomes really challenging
                    for car owners to maintain their car amidst cold weather
                    that causes problems for tires,
                  </p>
                  <span className="readmorecls">Read More</span>
                </div>
              </a>

              <a
                href="https://writeupcafe.com/community/top-5-essential-tips-for-buying-auto-spare-parts-at-affordable-price/"
                target="_blank"
              >
                {" "}
                <div className="inner_des">
                  <img
                    src="https://writeupcafe.com/community/wp-content/uploads/2021/10/Title-Pic-For-Blog-2-1.jpg"
                    alt="blog image"
                  />
                  <h3 className="blog_title">
                    Top 5 essential tips for buying auto spare parts at
                    affordable price{" "}
                  </h3>
                  <p className="blog_description">
                    Soon after buying a product for your car, you sometimes
                    realize that it lacks some of the important features or
                    notice any minor flaws in the product.
                  </p>
                  <span className="readmorecls">Read More</span>
                </div>
              </a>
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

      <div className="cl"></div>
    </div>
  );
}
