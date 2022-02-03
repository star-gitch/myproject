export const PriceComparisonPage = () => {
  return (
    <section className="exchnages-bg">
      <div className="row">
        <div className="col-12">
          <div className="dropdown mob-ml-10">
            <div className="dropdown">
              <button
                className="btn btn-white dropdown-toggle border bg-header"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                $ USD
                <img
                  src="img/uploads/arrow-down-theme.svg"
                  alt=""
                  className="img-fluid ms-4"
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#0">
                    $ USD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    £ POU
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#0">
                    € EUR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="carouselcontrol">
            <button
              className="carousel-control-prev custom-prev"
              type="button"
              data-bs-target="#carouselCryptoList"
              data-bs-slide="prev"
              id="prev-btn"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true">
                <i className="fa fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next custom-next"
              type="button"
              data-bs-target="#carouselCryptoList"
              data-bs-slide="next"
              id="next-btn"
            >
              <span className="carousel-control-next-icon" aria-hidden="true">
                <i className="fa fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="exchnages-boxs">
            <ul id="coinList" className="coin-lists">
              <li className="border-0">
                <div className="d-flex not-shown">
                  <div className="my-auto"></div>
                  <div>
                    <div className="flex-column">
                      <span className="font-14 font-bold"></span>
                      <div className="divider"></div>
                      <span className="font-12 d-block"></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div id="#valueCoinList" className="overflow-scroll-x">
              <div className="list-wrapper" id="container">
                <div className="items">
                  <div id="first-col" className="first-col-ele">
                    &nbsp;
                  </div>
                  <div className="title">
                    <div className="img bunker-color">
                      <img src="images/exchnages-binance.png" alt="binance" />
                    </div>
                    <span>Binance</span>
                  </div>
                  <ul className="itemss"></ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img bunker-color">
                      <img src="images/exchnages-ftx.png" alt="FTX" />
                    </div>
                    <span>FTX</span>
                  </div>
                  <ul className="itemss"></ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img mirage-color">
                      <img src="images/exchnages-coinbase.png" alt="Coinbase" />
                    </div>
                    <span>Coinbase Pro</span>
                  </div>
                  <ul className="itemss"></ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img gallery-color">
                      <img
                        src="images/exchnages-huobiglobal.png"
                        alt="HuobiGlobal"
                      />
                    </div>
                    <span>Huobi Global</span>
                  </div>
                  <ul className="itemss"></ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img softpeach-color">
                      <img src="images/exchnages-bitmex.png" alt="BitMex" />
                    </div>
                    <span>Bitmex</span>
                  </div>
                  <ul className="itemss"></ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img kraken">
                      <img src="images/exchnages-kraken.png" alt="Kraken" />
                    </div>
                    <span>Kraken</span>
                  </div>
                  <div id="last-col" className="last-col-ele">
                    &nbsp;
                  </div>
                  <ul className="itemss"></ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-area">
            <ul>
              <li>
                <a href="price-comparison.html" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="price-comparison-page-2.html">2</a>
              </li>
              <li>
                <a href="price-comparison-page-3.html">3</a>
              </li>
              <li>
                <a href="price-comparison-page-4.html">4</a>
              </li>
              <li>
                <a href="price-comparison-page-5.html">5</a>
              </li>
            </ul>
          </div>
          <div className="button d-none" id="loader">
            <a href="#0" className="btn btn-link">
              Loading...
            </a>
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
