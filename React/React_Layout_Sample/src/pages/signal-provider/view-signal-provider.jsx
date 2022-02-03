import search_icon from "./../../assets/img/icons/search-icon.svg";
import listView_icon from "./../../assets/img/icons/list-view.svg";
import gridView_icon from "./../../assets/img/icons/grid-view.svg";
import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";

import user_icon_1 from "./../../assets/img/user-icon/user-1.svg";

const ViewSignalProviderPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-xl-block d-none">
        <div className="card-body">
          <a href="/" className="text-dull">
            TradePro &gt;{" "}
          </a>
          <a href="/" className="theme-color font-bold">
            Copy Traders View
          </a>
        </div>
      </div>
      <div className="card grey-card mb-0">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-7">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback">
                  <img src={search_icon} alt="" className="img-fluid" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-5 text-end">
              <div className="dropdown d-xl-inline d-none">
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      XLS
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#0">
                <img src={listView_icon} alt="" className="img-fluid px-2" />
              </a>
              <a href="#0">
                <img src={gridView_icon} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 card-light-grey">
        <div className="card-body mob-pad-0">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="bg-white">
                <tr>
                  <th scope="col">
                    Name
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                  <th scope="col" className="text-center">
                    Subscribers
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                  <th scope="col" className="text-center">
                    Membership
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                  <th scope="col" className="text-center">
                    Signals Sent
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                  <th scope="col" className="text-center">
                    Profit
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                  <th scope="col" className="text-center">
                    Action
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                  <th scope="col" className="text-center">
                    Configure
                    <img src={tableArrow_icon} alt="" className="img-fluid" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img
                          src={user_icon_1}
                          alt=""
                          className="img-fluid table-pic"
                        />
                      </div>
                      <div>
                        <a href="/" className="flex-column">
                          <span className="font-12">username</span>
                          <div className="divider"></div>
                          <span className="font-bold font-13">
                            Richard Stroud
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">20156</td>
                  <td className="text-center">Free</td>
                  <td className="text-center">12</td>
                  <td className="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      className="img-fluid"
                    />
                    <span className="text-green">59.28% </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-primary">Subscribe</button>
                  </td>
                  <td className="text-center">
                    <a href="trade-configuration.html">
                      <button className="btn btn-success">Configure</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12 my-auto">
              <p className="mb-0 d-none d-sm-block">
                Showing 1 to 10 of 57 entries
              </p>
            </div>
            <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
              <div className="btn-group">
                <a href="/" className="btn btn-light">
                  Previous
                </a>
                <a href="/" className="btn btn-light active">
                  1
                </a>
                <a href="/" className="btn btn-light">
                  2
                </a>
                <a href="/" className="btn btn-light">
                  3
                </a>
                <a href="/" className="btn btn-light">
                  4
                </a>
                <a href="/" className="btn btn-light">
                  5
                </a>
                <a href="/" className="btn btn-light">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSignalProviderPage;
