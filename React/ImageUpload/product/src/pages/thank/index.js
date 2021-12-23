import { Helmet } from "react-helmet";
import thankImg from "../../images/thanks.jpg";

export default function Thank() {
  return (
    <div>
      <Helmet>
        <title>Welcome to Sonamandhira</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${thankImg})` }}
        ></div>
      </section>

      <div className="medisebb">
        <div className="container-fluid paddesl">
          <h2>Thank You</h2>
        </div>
      </div>

      <div className="cl"></div>
    </div>
  );
}
