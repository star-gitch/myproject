// sidebar icons

import sb_fav from "./../assets/img/icons/favourite-icon-dark.svg";
import sb_copytrading from "./../assets/img/icons/conpytrading-icon-dark.svg";
import sb_signaltrading from "./../assets/img/icons/signalprovider-icon-dark.svg";
import sb_pricecomparison from "./../assets/img/icons/pricecomparison-icon-dark.svg";
import sb_tradeterminal from "./../assets/img/icons/tradeterminal-icon-dark.svg";
import sb_portolioperformance from "./../assets/img/icons/portfolioperformance-icon-dark.svg";
import sb_reports from "./../assets/img/icons/reports-icon-dark.svg";
import sb_exchangeaccount from "./../assets/img/icons/exchangeaccount-icon-dark.svg";
import sb_arrowdown from "./../assets/img/icons/arrow-down.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

//Sidebar (this should be aislated in order to be reused... for demo reasons we're creating a sidebar for each page... their styles are in DefaultTradingLayoutStyles, a.k.a. app.css in old versions.)
// before deciding to move sidebar to a FC first we need to create logic for routes links
export const Sidebar = ({ collapseSidebar }) => {
  const [showCopyTraderScroll, setShowCopyTraderScroll] = useState(false);
  const [showSignalTradingScroll, setShowSignalTradingScroll] = useState(false);
  const [showReportsScroll, setShowReportsScroll] = useState(false);
  const [showExchangeScroll, setShowExchangeScroll] = useState(false);

  // checking to routes to set class active on elements
  const location = useLocation();
  // location.pathname.includes("/copy-trading") && setShowCopyTraderScroll(true);

  // location.pathname.includes("/reports") && setShowReportsScroll(true);
  // location.pathname.includes("/exchange-account") &&

  return (
    <>
      <nav
        id="sidebar"
        className={`sidebar js-sidebar ${collapseSidebar ? "collapsed" : ""}`}
      >
        <div className="sidebar-content js-simplebar" data-simplebar="init">
          <div className="simplebar-wrapper">
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset">
                <div
                  className="simplebar-content-wrapper"
                  tabIndex="0"
                  role="region"
                  aria-label="scrollable content"
                >
                  <div className="simplebar-content">
                    <Link className="sidebar-brand" to="/favourites">
                      <span className="align-middle">
                        <Logo />
                      </span>
                    </Link>

                    <div className="scrollBox">
                      <nav>
                        <ul className="mt-5">
                          <li>
                            <Link
                              to="/favourites"
                              className={`${
                                location.pathname === "/favourites"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_fav}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Favourites
                            </Link>
                          </li>
                          <li className="sub-menu">
                            <Link
                              to="#0"
                              onClick={() =>
                                setShowCopyTraderScroll(!showCopyTraderScroll)
                              }
                              className={`${
                                location.pathname.includes("/copy-trading")
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_copytrading}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Copy Trading
                              <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </Link>
                            <ul
                              className={`${
                                location.pathname.includes("/copy-trading") ||
                                showCopyTraderScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/copy-trading/join-copy-trader"
                                  className={`${
                                    location.pathname ===
                                    "/copy-trading/join-copy-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Join as Copy Trader
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/copy-trading/view-copy-trader-list"
                                  className={`${
                                    location.pathname ===
                                    "/copy-trading/view-copy-trader-list"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Copy Traders
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/copy-trading/view-copy-trader-signal"
                                  className={`${
                                    location.pathname ===
                                    "/copy-trading/view-copy-trader-signal"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Copy Signal
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-menu">
                            <Link
                              to="#0"
                              className={`${
                                location.pathname.includes("/signal-provider/")
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() =>
                                setShowSignalTradingScroll(
                                  !showSignalTradingScroll
                                )
                              }
                            >
                              <img
                                src={sb_signaltrading}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Signal Provider
                              <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </Link>
                            <ul
                              className={`${
                                location.pathname.includes(
                                  "/signal-provider/"
                                ) || showSignalTradingScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/signal-provider/join-signal-trader"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/join-signal-trader"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Join as Signal Provider
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/signal-provider/view-signal-provider"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/view-signal-provider"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Signal Provider
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/signal-provider/view-provider-signal"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/view-provider-signal"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  View Provider Signal
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/signal-provider/create-signal"
                                  className={`${
                                    location.pathname ===
                                    "/signal-provider/create-signal"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Create New Signal
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/price-comparison"
                              className={`${
                                location.pathname === "/price-comparison"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_pricecomparison}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Price Comparison
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/trade-terminal"
                              className={`${
                                location.pathname === "/trade-terminal"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_tradeterminal}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Trade Terminal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/portfolio-performance"
                              className={`${
                                location.pathname === "/portfolio-performance"
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_portolioperformance}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Portfolio Performance
                            </Link>
                          </li>
                          <li className="sub-menu">
                            <Link
                              to="#0"
                              onClick={() =>
                                setShowReportsScroll(!showReportsScroll)
                              }
                              className={`${
                                location.pathname.includes("/reports")
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_reports}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Reports
                              <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </Link>
                            <ul
                              className={`${
                                location.pathname.includes("/reports") ||
                                showReportsScroll
                                  ? "showScrollMenu"
                                  : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/reports/trade-signals"
                                  className={`${
                                    location.pathname ===
                                    "/reports/trade-signals"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Trade Signals
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/reports/my-trades"
                                  className={`${
                                    location.pathname === "/reports/my-trades"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  My Trades
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-menu">
                            <Link
                              to="#0"
                              onClick={() =>
                                setShowExchangeScroll(!showExchangeScroll)
                              }
                              className={`${
                                location.pathname.includes("/exchange-account")
                                  ? "active"
                                  : ""
                              } `}
                            >
                              <img
                                src={sb_exchangeaccount}
                                alt=""
                                className="img-fluid menu-icon"
                              />
                              Exchange Account
                              <span className="float-right">
                                <img
                                  src={sb_arrowdown}
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </Link>
                            <ul
                              className={`${
                                showExchangeScroll ? "showScrollMenu" : ""
                              }`}
                            >
                              <li>
                                <Link
                                  to="/exchange-account/exchange-account"
                                  className={`${
                                    location.pathname ===
                                    "/exchange-account/exchange-account"
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  Update Account Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="simplebar-placeholder"></div>
          </div>
          <div className="simplebar-track simplebar-horizontal">
            <div className="simplebar-scrollbar"></div>
          </div>
          <div className="simplebar-track simplebar-vertical">
            <div className="simplebar-scrollbar"></div>
          </div>
        </div>
      </nav>
    </>
  );
};
