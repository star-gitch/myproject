export const PortfolioPerformancePage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-none d-lg-block">
        <div className="card-body">
          <a href="#0" className="text-dull">
            TradePro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold">
            Portfolio Performance
          </a>
        </div>
      </div>
      <div className="card mb-0 mt-4 portfolio-card">
        <div className="card-body">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h1 className="accordion-header mb-0" id="headingOne">
                <button
                  className="btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <img
                    src="img/icons/portfolio-performance-icon.svg"
                    alt=""
                    className="img-fluid performance-icon"
                  />
                  Portfolio Performance
                  <span className="float-end">
                    <img
                      src="img/uploads/arrow-down-performance.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </button>
              </h1>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead className="bg-white">
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">Trade</th>
                              <th scope="col">
                                Exchange
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col">
                                Source
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Date
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Order id
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Investment (USD)
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                                <div className="collapse-row d-none">
                                  <p className="my-2">
                                    <strong>Buy Price:</strong>
                                    $300
                                  </p>
                                  <p className="my-2">
                                    <strong>Current:</strong>
                                    $350
                                  </p>
                                  <p className="my-2">
                                    <strong>Price:</strong> $400
                                  </p>
                                  <p className="my-2">
                                    <strong>Current Value (in USD):</strong>
                                    $650
                                  </p>
                                  <p className="mt-2 mb-5">
                                    <strong>Profit/Loss %:</strong> 40%
                                  </p>
                                </div>
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                            <tr>
                              <td className="call-row">
                                <img
                                  src="img/uploads/plus.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                              <td>ETHUSDT</td>
                              <td>Universal</td>
                              <td>Signal Provider</td>
                              <td>Universal</td>
                              <td>21</td>
                              <td>$300</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                      <p className="mb-0 d-none d-sm-block">
                        Showing 1 to 10 of 57 entries
                      </p>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
                      <div className="btn-group">
                        <a href="#0" className="btn btn-light">
                          Previous
                        </a>
                        <a href="#0" className="btn btn-light active">
                          1
                        </a>
                        <a href="#0" className="btn btn-light">
                          2
                        </a>
                        <a href="#0" className="btn btn-light">
                          3
                        </a>
                        <a href="#0" className="btn btn-light">
                          4
                        </a>
                        <a href="#0" className="btn btn-light">
                          5
                        </a>
                        <a href="#0" className="btn btn-light">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 mt-4 portfolio-card">
        <div className="card-body">
          <div className="accordion" id="accordionExample1">
            <div className="accordion-item">
              <h1 className="accordion-header mb-0" id="headingTwo">
                <button
                  className="btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <img
                    src="img/icons/profitability.svg"
                    alt=""
                    className="img-fluid performance-icon"
                  />
                  Profitability
                  <span className="float-end">
                    <img
                      src="img/uploads/arrow-down-performance.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </button>
              </h1>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body">
                  <div className="row mt-4">
                    <div className="col-xl-2 col-lg-2 col-12">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12">
                          <h1 className="mb-0 font-bold theme-color text-center">
                            2
                          </h1>
                          <p className="mb-0 text-muted text-center">
                            TOTAL TRADES
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-7 my-auto mob-mt-3">
                      <div className="text-center">
                        <p className="mb-0 font-16 text-green">
                          <img
                            src="img/uploads/arrow-up-green.svg"
                            alt=""
                            className="img-fluid"
                          />
                          157.42%
                          <span className="text-muted ms-3">Avg. Profit</span>
                        </p>
                        <p className="mb-0 font-16 text-red mt-1">
                          <img
                            src="img/uploads/arrow-down-red.svg"
                            alt=""
                            className="img-fluid"
                          />
                          157.42%
                          <span className="text-muted ms-3">Avg. Loss</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-5 text-end my-auto mob-mt-3">
                      <h1 className="font-bold mb-0 theme-color text-center">
                        50.00%
                      </h1>
                      <p className="text-muted mb-0 text-center">PROFITABLE</p>
                    </div>
                  </div>
                  <div className="row mt-4 gx-0">
                    <div className="col-xl-6 col-6 col-6">
                      <div className="progress bg-success">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-6 col-6">
                      <div className="progress bg-danger">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 mt-4 portfolio-card">
        <div className="card-body">
          <div className="accordion" id="accordionExample2">
            <div className="accordion-item">
              <h1 className="accordion-header mb-0" id="headingthree">
                <button
                  className="btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  <img
                    src="img/icons/monthly-score-card.svg"
                    alt=""
                    className="img-fluid performance-icon"
                  />
                  Monthly Scorecard
                  <span className="float-end">
                    <img
                      src="img/uploads/arrow-down-performance.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </button>
              </h1>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingthree"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <img
                        src="img/uploads/performance-graph.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="text-center">
                        <button className="btn btn-primary mt-4">
                          Show more
                        </button>
                        <p className="mt-4">
                          Past performance is not indicative of future results.
                          Stats are updated on a daily basis at 00:00 GMT.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 mt-4 portfolio-card">
        <div className="card-body">
          <div className="accordion" id="accordionExample3">
            <div className="accordion-item">
              <h1 className="accordion-header mb-0" id="headingfour">
                <button
                  className="btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="true"
                  aria-controls="collapsefour"
                >
                  <img
                    src="img/icons/coin-wise-icon.svg"
                    alt=""
                    className="img-fluid performance-icon"
                  />
                  Coin-Wise Distribution
                  <span className="float-end">
                    <img
                      src="img/uploads/arrow-down-performance.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </button>
              </h1>
              <div
                id="collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead className="bg-white">
                            <tr>
                              <th scope="col" className="first-child-table">
                                Coin
                              </th>
                              <th scope="col">
                                Total Trades
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col">
                                Average Profit
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Average Loss
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Net Profitability
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                            <tr>
                              <td className="first-child-table">Bitcoin</td>
                              <td>00.000000</td>
                              <td>00.120522</td>
                              <td>00.325500</td>
                              <td>10.023322</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-xl-3 col-lg-3 col-12 my-auto">
                      <p className="mb-0 d-none d-sm-block">
                        Showing 1 to 10 of 57 entries
                      </p>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
                      <div className="btn-group">
                        <a href="#0" className="btn btn-light">
                          Previous
                        </a>
                        <a href="#0" className="btn btn-light active">
                          1
                        </a>
                        <a href="#0" className="btn btn-light">
                          2
                        </a>
                        <a href="#0" className="btn btn-light">
                          3
                        </a>
                        <a href="#0" className="btn btn-light">
                          4
                        </a>
                        <a href="#0" className="btn btn-light">
                          5
                        </a>
                        <a href="#0" className="btn btn-light">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 mt-4 portfolio-card">
        <div className="card-body">
          <div className="accordion" id="accordionExample4">
            <div className="accordion-item">
              <h1 className="accordion-header mb-0" id="headingfive">
                <button
                  className="my-auto btn accordion-button px-0 font-18 font-bold theme-color w-100 text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="true"
                  aria-controls="collapsefive"
                >
                  <img
                    src="img/icons/conpytrading-icon-dark.svg"
                    alt=""
                    className="img-fluid performance-icon"
                  />
                  Signal &amp; Copy Trading Subscribers
                  <span className="float-end">
                    <img
                      src="img/uploads/arrow-down-performance.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </button>
              </h1>
              <div
                id="collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="headingfive"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  <div className="row mt-4">
                    <div className="col-xl-6 col-lg-6 col-12">
                      <img
                        src="img/uploads/signal-subscribers-graph.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                      <img
                        src="img/uploads/copy-trading-subscribers-graph.svg"
                        alt=""
                        className="img-fluid mob-mt-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
