import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import "./../../assets/css/logged-user-styles.scss";

export const PagesLayout = ({
  children,
  collapseSidebar,
  handleHamburguerClick,
}) => {
  return (
    <>
      <div className="wrapper">
        <Sidebar collapseSidebar={collapseSidebar} />
        <div className="main">
          <Header handleHamburguerClick={handleHamburguerClick} />
          <main className="content">{children}</main>
        </div>
      </div>
    </>
  );
};
