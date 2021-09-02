import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function TopicDeepList() {
    let { id, index } = useParams();
    const [listData, setListData] = useState({
        title: "assas",
        url: "",
        color: "",
    });
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const history = useHistory();
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const keyJsonData = Object.entries(jsonData)[6][1];
        const valueJsonData = Object.values(keyJsonData);
        var item_card_id = valueJsonData[id]["cardIds"][index].item_id;
        var item_container_id = "";

        for (
            var i = 0;
            i < Object.entries(valueJsonData[id]["containers"]).length;
            i++
        ) {
            var item = Object.entries(valueJsonData[id]["containers"])[i];

            var item_id = item[0];
            if (item_card_id === item_id) {
                item_container_id = item[1]["cardIds"][0].item_id;
            }
        }

        let temp_item = {
            title: "",
            url: "",
            color: "",
        };
        for (
            var i = 0;
            i < Object.entries(valueJsonData[id]["premesse"]).length;
            i++
        ) {
            var item = Object.entries(valueJsonData[id]["premesse"])[i];
            var item_premesse_id = item[0];
            if (item_container_id === item_premesse_id) {
                temp_item.title = item[1].label;
                temp_item.url = item[1].url;
                temp_item.color = valueJsonData[id]["color"];
            }
        }
        setListData(temp_item);
        setPageRouter({
            router: history.location.pathname,
            homecolor: "#FF5A60",
            settingcolor: "#879497",
            homebordercolor: "#FF5A60",
            settingbordercolor: "#FFFFFF",
            hometitlecolor: "black",
            settingtitlecolor: "#879497",
        });
    }, []);

    const openPdf = (url) => {
        window.open(url);
    };

    return (
        <div className="content">
            <div className="common-list" onClick={() => openPdf(listData.url)}>
                <p style={{ paddingLeft: "20px", fontSize: "20px" }}>
                    {listData.title}
                </p>
                <div
                    style={{
                        color: "#879497",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            paddingRight: "25px",
                            color: "#879497",
                            display: "flex",
                        }}
                    >
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <span
                                class="dot"
                                style={{ marginBottom: "5px" }}
                            ></span>
                            <span class="dot"></span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span
                                class="dot"
                                style={{ marginLeft: "3px" }}
                            ></span>
                        </div>
                    </div>
                    <div
                        style={{
                            marginLeft: "10px",
                            width: "10px",
                            height: "63px",
                            background: listData.color,
                            borderBottomRightRadius: "8px",
                            borderTopRightRadius: "8px",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
