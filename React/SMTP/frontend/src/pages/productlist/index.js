import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

export default function ProductList() {
  let { name } = useParams();
  const history = useHistory();
  const [proList, setProList] = useState([]);
  useEffect(() => {
    // Get all product
    var id = localStorage.getItem("sub_cat_Id");
    Axios.get("/product/selProList/" + id).then(async (response) => {
      console.log("Pro=", response.data);
      setProList(response.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Sona Mandhira Pvt Ltd is one of the top Shock Absorber Manufacturer in India. Our brand reflects the true essence of our personality, positioning, and passion. No wonder, we are known as the best Shock Absorber provider in India."
        />
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
                    <Link to="/shock">{name}</Link>
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
          <h2 class="p0">{name}</h2>
        </div>
      </div>

      <div class="wrapper-products-listing">
        <div class="container-fluid width-mins-fluid">
          <div class="row justify-content-center">
            {proList.length ? (
              proList.map((pro, index) => (
                <div class="col-lg-3">
                  <div class="wrapper-products-img-shocker">
                    <a href="javascript: void(0)">
                      <img src={pro["img_url"]} alt="sub" />
                      <b>{pro["name"]}</b>
                      <a
                        href={pro["pdf_url"]}
                        class="view-more-btns"
                        target="blank"
                      >
                        Download PDF
                      </a>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "20px" }}>
                This subcategory has no any products.
              </p>
            )}
          </div>
        </div>
      </div>

      <div class="cl"></div>
    </div>
  );
}
