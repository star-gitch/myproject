import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import blogImg from "../../images/blogs.jpg";
import Axios from "axios";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Blog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    // Get all blog
    Axios.get("/blog/all").then(async (response) => {
      console.log("data=", response.data);
      setBlogList(response.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta name="description" content="" />
        <title>Welcome to Sonamandhira</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
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
              <Slider {...settings}>
                {blogList.map((item, index) => (
                  <div>
                    <a href={item["ref"]} target="_blank">
                      {" "}
                      <div className="inner_des">
                        <img src={item["img"]} alt="blog image" />
                        <h3 className="blog_title">{item["title"]} </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item["content"],
                          }}
                        />
                        <span className="readmorecls">Read More</span>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
              {blogList.length ? (
                <></>
              ) : (
                <p style={{ fontSize: "20px" }}>There is no any blog.</p>
              )}
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
