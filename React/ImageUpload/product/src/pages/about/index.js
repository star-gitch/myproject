import React, { useEffect } from "react";
import aboutMember from "../../images/about-memebers.jpg";
import aboutInner from "../../images/about-inner.jpg";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>About Us – Sona Mandhira Pvt Ltd</title>
      </Helmet>
      <section class="inner_dedsd">
        <div
          class="inner_banner"
          style={{ background: `url(${aboutInner})` }}
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
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4"></div>
            <div class="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div class="wrapper-sona-manishira-company-details">
        <div class="container">
          <h2>About Us</h2>
          <div class="row">
            <div
              class="col-lg-12"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div class="wrapper-about-text">
                <p>
                  Since 2012, we, at Sona Mandhira (formerly known as Mandira
                  Marketing.) have been passionately serving the aftermarket by
                  creating an unmatched value for our customers. Owing to our
                  high quality products and our relationships with our
                  distribution partners we have become a world renowned auto
                  parts manufacturer.
                </p>
                <p>
                  Our wide range of world-class products has made us one of the
                  leading car spares manufacturers. Our products are sold under
                  a distinct brand for different vehicle segments. Powered by
                  the passion for excellence in the auto spare part segment, our
                  brands reflect the true essence of our personality,
                  positioning, and passion. No wonder, we are known as the best
                  Automobile Spare Part Manufacturer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-main about-main-pb-add wrapper-sona-manishira-company-details-white-c">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div class="wrapper-about-text wrapper-about-text-twosings">
                <h2 style={{ marginTop: "80px" }}>
                  Ms. Mandhira Kapur <br />
                  <span>Chairman & Managing Director</span>
                </h2>
                <p style={{ color: "#4e4b4b" }}>
                  A visionary leader, a pathfinder, and a torchbearer, Mandhira
                  Kapur, the 2nd Generation entrepreneur and the Managing
                  Director of Sona Mandhira Private Limited, stands strong for
                  everyone in the company. With astute planning, sheer
                  dedication, and years of expertise in management, she has
                  achieved perfection in every sphere of her work – and that is
                  what inspires others. An avid traveller and a proud mother of
                  2 (Jaie Veer and Nyna), her self-driven approach to research
                  and analytics makes her an exceptional choice to lead the
                  company from the front. Her active involvement in all the
                  spheres of management ensures that the company operates in a
                  result-oriented way. No wonder, under the aegis of Mandhira
                  Kapur, SMPL charters new territories with ease, successfully
                  achieving the highest turnover ever.
                </p>
              </div>
            </div>
            <div
              class="col-lg-6"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div class="wrapper-about-img">
                <img
                  src={aboutMember}
                  alt="Ms. Mandhira Kapur
Chairman & Managing Director"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper-mission-vision">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="wrapper-mission">
                <h3>Mission</h3>
                <p>
                  Transform the aftermarket with Best Value, Innovative Approach
                  and relentless focus on safety, quality, and integrity.
                </p>
              </div>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-5">
              <div class="wrapper-mission">
                <h3>Vision</h3>
                <p>
                  To become the number one global brand in the automotive
                  aftermarket that always focuses on customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-team section-margin">
        <div class="container-fluid">
          <div
            class="one-title dsn-active"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <h2 class="title-main">Management Team</h2>
            <hr class="border-with-tabs" />
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Mandhira Kapur</h2>
                <strong>Chairman & Managing Director</strong>
              </div>
            </div>
          </div>

          <div class="row padding-define">
            <div class="col-lg-4">
              <div
                class="teams-management-type step-1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Atanu Maity</h2>
                <strong>Business Development & Marketing</strong>
              </div>
            </div>

            <div class="col-lg-4">
              <div
                class="teams-management-type step-2"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Vishu Singhal</h2>
                <strong>Technology & Operations</strong>
              </div>
            </div>

            <div class="col-lg-4">
              <div
                class="teams-management-type step-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Basant Jha</h2>
                <strong>CHRO</strong>
              </div>
            </div>
          </div>

          <div class="row padding-define-2">
            <div class="col-lg-2">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Naresh Raheja</h2>
                <strong>Head of Sales 4w - Domestic</strong>
              </div>
            </div>

            <div class="col-lg-2">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Manoj Sharma</h2>
                <strong>Head of Sales Exports</strong>
              </div>
            </div>

            <div class="col-lg-2">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Gurdeep Singh</h2>
                <strong>Head of Sales New Initiatives</strong>
              </div>
            </div>

            <div class="col-lg-2">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Nikkhil Kanwar</h2>
                <strong>Head of Supply chain</strong>
              </div>
            </div>

            <div class="col-lg-2">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Mahesh Yadav</h2>
                <strong>Head of Finance</strong>
              </div>
            </div>

            <div class="col-lg-2">
              <div
                class="teams-management-type"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <h2>Praveen K. Sharma</h2>
                <strong>Head of Marketing & Branding</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cl"></div>
    </div>
  );
}
