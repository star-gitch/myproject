import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function TopicList() {
    const [topicList, setTopicList] = useState([]);
    const history = useHistory();
    let { id } = useParams();
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        const MeetingInfo = require(`../json/sample_${meetingId}.json`);
        const keyTopicList = Object.entries(MeetingInfo)[6][1];
        const valueTopicList = Object.values(keyTopicList);
        setTopicList(valueTopicList);
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

    const topicArgument = (index) => {
        var cntCard = topicList[index]["cardIds"].length;

        if (cntCard) {
            var cardType = topicList[index]["cardIds"][0].item_id;
            if (cardType === "../../proposteintervento/") {
                history.push({
                    pathname: "/topic-sub-list/" + index,
                });
            } else {
                history.push({
                    pathname: "/topic-argument/" + index,
                });
            }
        } else {
            history.push("topic-list");
        }
    };

    return (
        <div className="content">
            {topicList.map((item, index) => (
                <div
                    className="common-list"
                    key={index}
                    onClick={() => topicArgument(index)}
                >
                    <p
                        style={{
                            paddingLeft: "40px",
                            fontSize: "18px",
                            fontWeight: "bold",
                        }}
                    >
                        {item.label}
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
                                height: "63px",
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
