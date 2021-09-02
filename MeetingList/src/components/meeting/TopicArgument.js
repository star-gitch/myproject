import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TopicArgument() {
    let { id } = useParams();
    const [topicInfo, setTopicInfo] = useState([]);
    const history = useHistory();
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        var TopicArgumentInfo = require(`../json/sample_${meetingId}.json`);
        const keyTopicArgumentInfo = Object.entries(TopicArgumentInfo)[6][1];
        const valueTopicArgumentInfo = Object.values(keyTopicArgumentInfo);
        var cardSize = valueTopicArgumentInfo[id].cardIds.length;

        var arrTopicArguments = [];

        for (var i = 0; i < cardSize; i++) {
            var item = [];
            var title = "";
            var url = "";
            var type = "";

            if (valueTopicArgumentInfo[id].cardIds[i].type === "premessa") {
                var arrPremesse = Object.entries(
                    valueTopicArgumentInfo[id].premesse
                );
                title = arrPremesse[i][1].label;
                url = arrPremesse[i][1].url;
                type = "premessa";
            } else {
                var arrContainer = Object.entries(
                    valueTopicArgumentInfo[id].containers
                );
                title = arrContainer[i][1].label;
                type = "container";
            }
            item = {
                total: valueTopicArgumentInfo[id].numero_pratiche_totali,
                title: title,
                url: url,
                color: valueTopicArgumentInfo[id].color,
                type: type,
            };
            arrTopicArguments.push(item);
        }
        setTopicInfo(arrTopicArguments);
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

    const openPdf = (index, url) => {
        if (topicInfo[index].type === "premessa") {
            window.open(url);
        } else {
            history.push({
                pathname: "/topic-deep-list/" + id + "/" + index,
            });
        }
    };

    return (
        <div className="content">
            {topicInfo.map((item, index) => (
                <div
                    className="common-list"
                    key={index}
                    onClick={() => openPdf(index, item.url)}
                >
                    <p
                        style={{
                            paddingLeft: "20px",
                            fontSize: "18px",
                            fontWeight: "bold",
                        }}
                    >
                        {item.title}
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
