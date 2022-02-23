import { Helmet } from "react-helmet";
import notfoundImg from "../../images/404.jpg";

export default function NotFound() {
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
