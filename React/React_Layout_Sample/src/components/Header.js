import icon_search from "./../assets/img/icons/search-icon.svg";
import icon_notification from "./../assets/img/icons/notification.svg";
import icon_message from "./../assets/img/icons/message.svg";
import icon_user from "./../assets/img/icons/user.svg";
import avatar_2 from "./../assets/img/avatars/avatar-2.jpg";
import avatar_3 from "./../assets/img/avatars/avatar-3.jpg";
import avatar_4 from "./../assets/img/avatars/avatar-4.jpg";
import avatar_5 from "./../assets/img/avatars/avatar-5.jpg";

import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const Header = ({ handleHamburguerClick }) => {
  const [notificationShow, setNotificationShow] = useState(false);
  const [inboxShow, setInboxShow] = useState(false);
  const [profileOptionsShow, setProfileOptionsShow] = useState(false);

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <button
        onClick={handleHamburguerClick}
        className="sidebar-toggle js-sidebar-toggle hamburguer-button"
      >
        <i className="hamburger align-self-center"></i>
      </button>
      <div className="form-group has-search search-main-bar d-none d-sm-block">
        <span className="fa fa-search form-control-feedback">
          <img src={icon_search} alt="" className="img-fluid" />
        </span>
        <input
          type="text"
          className="form-control text-center"
          placeholder="Search TraderPro"
        />
      </div>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a
              className={`nav-icon dropdown-toggle ${
                notificationShow ? "show pe-none" : ""
              }`}
              onClick={() => setNotificationShow(!notificationShow)}
              href="#0"
              id="alertsDropdown"
              data-bs-toggle="dropdown"
            >
              <div className="position-relative">
                <img src={icon_notification} alt="" className="img-fluid" />
                <span className="indicator">4</span>
              </div>
            </a>
            <OutsideClickHandler
              onOutsideClick={() => setNotificationShow(false)}
            >
              <div
                className={`dropdown-menu dropdown-menu-lg dropdown-menu-end py-0 header-notification-modal ${
                  notificationShow ? "show" : ""
                }`}
                aria-labelledby="alertsDropdown"
              >
                <div className="dropdown-menu-header">4 New Notifications</div>
                <div className="list-group">
                  <a href="#0" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-alert-circle text-danger"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Update completed</div>
                        <div className="text-muted small mt-1">
                          Restart server 12 to complete the update.
                        </div>
                        <div className="text-muted small mt-1">30m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-bell text-warning"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Lorem ipsum</div>
                        <div className="text-muted small mt-1">
                          Aliquam ex eros, imperdiet vulputate hendrerit et.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home text-primary"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Login from 192.186.1.8</div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user-plus text-success"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                      <div className="col-10">
                        <div className="text-dark">New connection</div>
                        <div className="text-muted small mt-1">
                          Christina accepted your request.
                        </div>
                        <div className="text-muted small mt-1">14h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="/" className="text-muted">
                    Show all notifications
                  </a>
                </div>
              </div>
            </OutsideClickHandler>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-icon dropdown-toggle ${
                inboxShow ? "show pe-none" : ""
              }`}
              onClick={() => setInboxShow(!inboxShow)}
              href="#0"
              id="messagesDropdown"
              data-bs-toggle="dropdown"
            >
              <div className="position-relative">
                <img src={icon_message} alt="" className="img-fluid" />
              </div>
            </a>

            <OutsideClickHandler onOutsideClick={() => setInboxShow(false)}>
              <div
                className={`dropdown-menu dropdown-menu-lg dropdown-menu-end py-0 header-notification-modal ${
                  inboxShow ? "show" : ""
                }`}
                aria-labelledby="messagesDropdown"
              >
                <div className="dropdown-menu-header">
                  <div className="position-relative">4 New Messages</div>
                </div>
                <div className="list-group">
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar_5}
                          className="avatar img-fluid rounded-circle"
                          alt="Vanessa Tucker"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">Vanessa Tucker</div>
                        <div className="text-muted small mt-1">
                          Nam pretium turpis et arcu. Duis arcu tortor.
                        </div>
                        <div className="text-muted small mt-1">15m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar_2}
                          className="avatar img-fluid rounded-circle"
                          alt="William Harris"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">William Harris</div>
                        <div className="text-muted small mt-1">
                          Curabitur ligula sapien euismod vitae.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar_4}
                          className="avatar img-fluid rounded-circle"
                          alt="Christina Mason"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">Christina Mason</div>
                        <div className="text-muted small mt-1">
                          Pellentesque auctor neque nec urna.
                        </div>
                        <div className="text-muted small mt-1">4h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src={avatar_3}
                          className="avatar img-fluid rounded-circle"
                          alt="Sharon Lessman"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">Sharon Lessman</div>
                        <div className="text-muted small mt-1">
                          Aenean tellus metus, bibendum sed, posuere ac, mattis
                          non.
                        </div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="/" className="text-muted">
                    Show all messages
                  </a>
                </div>
              </div>
            </OutsideClickHandler>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${
                profileOptionsShow ? "show pe-none" : ""
              }`}
              onClick={() => setProfileOptionsShow(!profileOptionsShow)}
              href="#0"
              data-bs-toggle="dropdown"
            >
              <img src={icon_user} className="img-fluid" alt="User pic" />
            </a>
            <OutsideClickHandler
              onOutsideClick={() => setProfileOptionsShow(false)}
            >
              <div
                className={`dropdown-menu dropdown-menu-end header-notification-modal ${
                  profileOptionsShow ? "show" : ""
                }`}
              >
                <a className="dropdown-item" href="profile.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user align-middle me-1"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile
                </a>
                <a className="dropdown-item" href="change-password.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-lock align-middle me-1"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Change Password
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="authentication.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-settings align-middle me-1"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Authentication
                </a>
                <div className="dropdown-divider"></div>
                <a href="/" className="dropdown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-out align-middle me-1"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Log out
                </a>
              </div>
            </OutsideClickHandler>
          </li>
        </ul>
      </div>
    </nav>
  );
};
