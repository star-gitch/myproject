import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function TopicSubList() {
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const [topicSubList, setTopicSubList] = useState([]);
    const history = useHistory();
    const meetingId = useSelector((state) => state.meetingId);
    let { id } = useParams();

    useEffect(() => {
        const jsonData = require(`../json/sample_${meetingId}.json`);
        const keyTopicSubList = Object.entries(jsonData)[6][1];
        const valueTopicSubList = Object.values(keyTopicSubList);
        var subList = valueTopicSubList[id]["cardIds"];
        var items = [];

        const entireSpecificList = Object.entries(jsonData)[5][1];
        const valueSpecificList = Object.values(entireSpecificList);
        for (var i = 0; i < subList.length; i++) {
            var item = [];
            if (subList[i].type === "container") {
                var total_pratiche = 0;
                for (var j = 0; j < valueSpecificList.length; j++) {
                    if (valueSpecificList[j].hasOwnProperty("macro")) {
                        total_pratiche +=
                            valueSpecificList[j].numero_pratiche_totali;
                    }
                }
                item = {
                    label:
                        valueTopicSubList[id]["containers"][subList[i].item_id]
                            .label,
                    value: total_pratiche,
                    type: "container",
                    url: "",
                    color: valueTopicSubList[id]["color"],
                };
            } else {
                item = {
                    label:
                        valueTopicSubList[id]["premesse"][subList[i].item_id]
                            .label,
                    type: "premessa",
                    url:
                        valueTopicSubList[id]["premesse"][subList[i].item_id]
                            .url,
                    color: valueTopicSubList[id]["color"],
                };
            }
            items.push(item);
        }
        setTopicSubList(items);
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

    const openNextPage = (type, url) => {
        if (type === "container") {
            history.push("/specific-list");
        } else {
            window.open(url);
        }
    };
    return (
        <div className="content">
            {topicSubList.map((item, index) => (
                <div
                    className="common-list"
                    style={{ position: "relative" }}
                    key={index}
                    onClick={() => openNextPage(item.type, item.url)}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingLeft: "30px",
                        }}
                    >
                        <p
                            style={{
                                marginLeft: "10px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "left",
                            }}
                        >
                            {item.label}
                        </p>
                        {item.type === "container" ? (
                            <p
                                style={{
                                    marginTop: "0px",
                                    paddingLeft: "10px",
                                    fontWeight: "bold",
                                }}
                            >
                                Numero Pratiche: {item.value}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div
                        style={{
                            color: "#879497",
                            display: "flex",
                            alignItems: "center",
                            position: "absolute",
                            height: "100%",
                            right: "0px",
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
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <span
                                    class="dot"
                                    style={{ marginBottom: "5px" }}
                                ></span>
                                <span class="dot"></span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
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
                                height: "100%",
                                background: item.color,
                                borderBottomRightRadius: "8px",
                                borderTopRightRadius: "8px",
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
