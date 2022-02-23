import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import productInner from "../../images/products-innerr-1.jpg";
import productlogo2 from "../../images/products-logo-2.png";
import productlogo1 from "../../images/products-logo-1.png";
import part2mp4 from "../../images/parts-2.mp4";
import { Link } from "react-router-dom";
import Axios from "axios";
import $ from "jquery";
import { useHistory } from "react-router-dom";

export default function Product() {
  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [firstCatId, setFirstCatId] = useState("");
  const history = useHistory();

  useEffect(() => {
    AOS.init();
    // Get all category
    var firstCatId = "";
    Axios.get("/category/all").then(async (response) => {
      console.log(response.data[0]["id"]);
      setFirstCatId(response.data[0]["id"]);
      setCatList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("/subcat/selSubCat/" + firstCatId).then(async (response) => {
      setSubCatList(response.data);
    });
  }, [firstCatId]);

  // When clicking category tab, add "active" class
  $(document).ready(function () {
    $(document).on("click", "a.more-3", function () {
      $("a.more-3").removeClass("active");
      $(this).addClass("active");
    });
  });

  // When clicking category tab, get subcategory that belong to selected category.
  const getSubCat = (id) => {
    // Get all subcategory
    Axios.get("/subcat/selSubCat/" + id).then(async (response) => {
      console.log("sub=", response.data);
      setSubCatList(response.data);
    });
  };

  // When clicking subcategory.
  const productList = (id, name) => {
    localStorage.setItem("sub_cat_Id", id);
    history.push({
      pathname: "/Product/" + name,
    });
  };
  return (
    <div>
      <Helmet>
        <title>Best Auto Parts Products – Sona Mandhira Pvt Ltd</title>
        <meta
          name="description"
          content="We take pride in ensuring Quality, Safety, Integrity in every product we offer to the market. We keep expanding our product range to satisfy our diverse clientele and requirements of the aftermarket coverage."
        />
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
          <div className="row justify-content-center">
            {catList.map((cat, index) => (
              <div
                className="col-lg-3"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                key={index}
              >
                <div className="wrapper-products-img">
                  <img
                    src={cat["img_url"]}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "110px",
                    }}
                  />
                  <h3>{cat["name"]}</h3>
                  <a href={cat["pdf_url"]} target="_blank" className="more-5">
                    Download Catalogue
                  </a>
                </div>
              </div>
            ))}

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
          <div className="row justify-content-center">
            {catList.map((cat, index) => {
              return index == 0 ? (
                <div className="col-lg-2">
                  <a
                    href="#sub_list"
                    className="active more-3"
                    onClick={() => getSubCat(cat["id"])}
                  >
                    {cat["name"]}
                  </a>
                </div>
              ) : (
                <div className="col-lg-2">
                  <a
                    href="#sub_list"
                    className="more-3"
                    onClick={() => getSubCat(cat["id"])}
                  >
                    {cat["name"]}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="wrapper-products-listing" id="sub_list">
        <div className="container-fluid width-mins-fluid">
          <div className="row justify-content-center">
            {subCatList.length ? (
              subCatList.map((sub, index) => (
                <div
                  className="col-lg-3"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <div className="wrapper-products-img-shocker">
                    <img
                      src={sub["img_url"]}
                      alt="Shock Absorber - Sona Mandhira"
                    />
                    <a
                      href="javascript: void(0)"
                      onClick={() => productList(sub["id"], sub["name"])}
                    >
                      <b>{sub["name"]}</b>
                    </a>
                    <a href={sub["pdf_url"]} target="_blank">
                      <strong>Download PDF &nbsp;&gt;</strong>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "20px" }}>
                This category has no any subcategory.
              </p>
            )}
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
