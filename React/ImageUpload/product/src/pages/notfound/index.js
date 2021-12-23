import { Helmet } from "react-helmet";
import notfoundImg from "../../images/404.jpg";

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Welcome to Sonamandhira</title>
      </Helmet>
      <section className="inner_dedsd">
        <div
          className="inner_banner"
          style={{ background: `url(${notfoundImg})` }}
        ></div>
      </section>

      <div className="medisebb">
        <div className="container-fluid paddesl"></div>
      </div>

      <div className="cl"></div>
    </div>
  );
}
