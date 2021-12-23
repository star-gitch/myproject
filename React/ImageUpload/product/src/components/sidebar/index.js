import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CategoryIcon from "@mui/icons-material/Category";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import InventoryIcon from "@mui/icons-material/Inventory";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./custom.scss";
import "./index.css";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };
  const history = useHistory();
  const goOwnPage = (sort) => {
    if (sort === "cat") {
      history.push("/admin");
    }
    if (sort === "sub") {
      history.push("/admin/subcat");
    }
    if (sort === "pro") {
      history.push("/admin/goods");
    }
    if (sort === "blog") {
      history.push("/admin/blog");
    }
  };
  return (
    <>
      <div className="btn-toggle" onClick={handleToggleSidebar}>
        <DehazeIcon />
      </div>
      <ProSidebar
        toggled={toggle}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          ></div>
        </SidebarHeader>

        <SidebarContent>
          <Menu>
            <MenuItem icon={<CategoryIcon />} onClick={() => goOwnPage("cat")}>
              {" "}
              Category
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem icon={<SubtitlesIcon />} onClick={() => goOwnPage("sub")}>
              {" "}
              Sub-category
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem icon={<InventoryIcon />} onClick={() => goOwnPage("pro")}>
              {" "}
              Product
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem icon={<EmailIcon />} onClick={() => goOwnPage("blog")}>
              {" "}
              Blog
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
}
