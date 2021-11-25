import React from "react";
import { Container, Row, Col } from "reactstrap";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";
import { HomeIcon, ServicesIcon, NotificationIcon, ProfileIcon } from "../../svgComponents";
import { useTranslation } from 'react-multi-lang'

const Footer = (props) => {
  let url_slug = "location";
  const t = useTranslation();
  const history = useHistory();
  const { pathname } = history.location;
  const tabs = [
    {
      icon: <HomeIcon />,
      name: `Home`,
      link: "/",
    },

    {
      icon: <ServicesIcon />,
      name: 'Services',
      link: "/",
    },

    {
      icon: <NotificationIcon />,
      name: 'Notification',
      link: "/",
    },

    {
      icon: <ProfileIcon />,
      name: 'Profile',
      link: `/profile`,
    },

  ];

  return (
    <footer id="footer">
      <Container>
        <Row form>
          {tabs.map(({ icon, name, className = "", link = "/" }, index) => (
            <Col key={index} className={cx("text-center", className)}>
              <Link className={cx({ active: pathname === link })} to={link}>
                <div className="icon">{icon}</div>
                {name}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;