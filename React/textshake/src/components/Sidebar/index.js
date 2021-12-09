import React, { useState, useEffect } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
} from "react-pro-sidebar";
import { FaBars } from "react-icons/fa";
// import { AiFillSignal } from "react-icons/ai";
// import { BsServer } from "react-icons/bs";
// import { BsListUl } from "react-icons/bs";
// import { BsCloud } from "react-icons/bs";
// import { BiBarChart } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";

import { useDispatch } from "react-redux";
import * as Actions from "../../redux/action";
import dataicon from "../../images/data_icon.png";
import sentimenticon from "../../images/sentiment_icon.png";
import topicicon from "../../images/topic_icon.png";
import frequencyicon from "../../images/frequency_icon.png";
import cloudicon from "../../images/cloud_icon.png";
import "./custom.scss";
import "./index.css";

export default function Sidebar() {
    const [toggle, setToggle] = useState(false);
    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    const dispatch = useDispatch();
    const goSentiment = () => {
        dispatch(Actions.selData("sentiment"));
    };
    const goData = () => {
        dispatch(Actions.selData("data"));
    };
    const goFrequency = () => {
        dispatch(Actions.selData("frequency"));
    };
    return (
        <>
            <div className="btn-toggle" onClick={handleToggleSidebar}>
                <FaBars />
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
                    >
                        <img
                            src="https://eu.ui-avatars.com/api/?name=Sed+ut&size=34&background=F6A300"
                            alt="logo"
                            style={{ borderRadius: "5px" }}
                        />
                        <p style={{ paddingLeft: "8px", margin: "0px" }}>
                            CAD Software Project
                        </p>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu>
                        <MenuItem
                            icon={<img src={dataicon} alt="icon" />}
                            onClick={goData}
                        >
                            {" "}
                            Data
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem
                            icon={<img src={sentimenticon} alt="logo" />}
                            onClick={goSentiment}
                        >
                            {" "}
                            Sentiment
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={topicicon} alt="logo" />}>
                            {" "}
                            Topics
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem
                            icon={<img src={frequencyicon} alt="logo" />}
                            onClick={goFrequency}
                        >
                            {" "}
                            Frequency
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={cloudicon} alt="logo" />}>
                            {" "}
                            Word Clouds
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </>
    );
}
