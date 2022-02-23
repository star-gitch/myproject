import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ppImg from "../../images/pp.jpg";

export default function Policy() {
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
          style={{ background: `url(${ppImg})` }}
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
                    <Link to="/policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>

      <div className="wrapper-sona-manishira-company-details">
        <div className="container">
          <h2>Privacy Policy</h2>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="wrapper-about-text">
                <p>
                  This Website is operated by “Sona Mandhira Private Limited”
                  (hereinafter referred to as “We/ Our/ Us”). We consider the
                  privacy of the information of the users of utmost importance.
                  Personal information collected from the users of our website
                  is valuable to us, and is collected and processed in
                  accordance with the provisions of the Information Technology
                  Act, 2000 and other applicable laws of India.
                </p>

                <p>
                  This policy describes the way we use, share, and protect the
                  information provided by the users/ Visitors to the Website
                  (hereinafter referred to as “You/Your). By using our website,
                  you agree to the various terms and conditions of our privacy
                  policy and the amendments made from time to time. We advise
                  you to read this policy very carefully. In case you object to
                  the use of your information, as mentioned in this policy, we
                  recommend you not to use this platform.
                </p>
                <h3>PURPOSE OF COLLECTING INFORMATION-</h3>

                <p>
                  We collect the information from our customers for the
                  following purposes-
                </p>
                <p>
                  To communicate with you about our present products/ services.
                  To help us improve our products/ services continuously. To
                  share the information about the promotional and special
                  offers. To share the information about the new products/
                  services introduced. WHAT KIND OF PERSONAL INFORMATION DO WE
                  GATHER ABOUT OUR CUSTOMERS- We collect the following kinds of
                  personal information from our customers:
                </p>

                <h3>Information provided by you-</h3>
                <ol>
                  <li>
                    We collect and store the following information provided by
                    you-
                  </li>
                  <li>Your first and last name</li>
                  <li>Your e-mail id</li>
                  <li>Your contact number</li>
                </ol>
                <h3>INFORMATION COLLECTED AUTOMATICALLY-</h3>
                <p>
                  We receive and collect certain information automatically when
                  you access our website obtained from cookies, through our web
                  server. This may include information, such as the operating
                  systems on your device, IP Address, browser type, network
                  type, location, etc. We may also collect and store information
                  received from the links of advertisement or marketing
                  activities or other content on our website.
                </p>
                <h3>SHARING OF INFORMATION COLLECTED FROM YOU</h3>
                <p>
                  Personal information of our customers is important to us and
                  we don’t believe in selling your information to third parties.
                  We share your personal information only with the following
                  parties-
                </p>
                <h3>THIRD PARTIES-</h3>
                <p>
                  We may share your personal information with our business
                  associates, affiliates, subsidiaries, vendors, service
                  providers, etc., parties for the purpose of research, reviews,
                  feedback, marketing, and promotional activities.
                </p>
                <h3>COMPLIANCE WITH APPLICABLE LAW-</h3>
                <p>
                  We may disclose your personal information, if required, to
                  comply with the applicable laws; or if any such disclosure is
                  required as per any court order, or other legal process. We
                  may also disclose your personal information, if it is
                  necessary, to enforce or apply our Terms of Use or Privacy
                  Policy or any valid legal agreement.
                </p>
                <h3>BUSINESS RESTRUCTURING-</h3>
                <p>
                  If we plan to reorganize our business through merger,
                  amalgamation, takeover, acquisition, purchase or sale of
                  business, customer information is one of the assets required
                  to be transferred. But this transfer or sharing of customer’s
                  information shall be subject to the condition that the new
                  entity formed after restructuring shall be liable to follow
                  this privacy policy, or any of the amended privacy policy as
                  disclosed on the website.
                </p>
                <h3>HOW DO WE KEEP YOUR INFORMATION SECURE-</h3>
                <p>
                  We take utmost care to protect your information. We take all
                  the technical measures to prevent the unauthorized access to
                  the information shared by you on this website. However, it is
                  apparent that no cyber security method is absolutely secure.
                  We constantly work on securing your information using all the
                  required methods for security. But it’s not possible to
                  guarantee its absolute security. By agreeing to use our
                  website and sharing your personal information with us, you
                  take the responsibility and risk arising due to unauthorized
                  access.
                </p>
                <h3>
                  CHOICES AVAILABLE TO CUSTOMERS REGARDING SHARING THEIR
                  PERSONAL INFORMATION-
                </h3>
                <h4>Not to provide information-</h4>

                <p>
                  Providing the personal information on our website isn’t
                  mandatory. Customer may choose not to provide their
                  information on our website.
                </p>

                <h3>Decline cookies-</h3>
                <p>
                  Customers have the option to accept or decline the cookies.
                  Data used by browser add-ons can also be deleted by disabling
                  add-ons. Though acceptance of cookies are required to take
                  benefit of many of the website’s features, like improvement of
                  browsing experience, etc., it’s customer’s choice to accept or
                  decline cookies. Even if the customer accepts the cookies, the
                  same will be removed within 15 days of acceptance of cookies.
                </p>
                <h3>GOVERNING LAW AND JURISDICTION-</h3>
                <p>
                  This privacy policy shall be governed by and construed in
                  accordance with the laws of India. All disputes arising shall
                  be subject to the exclusive jurisdiction of the courts
                  situated at Gurgaon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cl"></div>
    </div>
  );
}
