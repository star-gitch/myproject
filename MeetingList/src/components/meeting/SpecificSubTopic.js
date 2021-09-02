import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function SpecificSubTopic() {
    let { id } = useParams();
    const [subMeetingTopic, setSubMeetingTopic] = useState([]);
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const history = useHistory();
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const keySubArgument = Object.entries(jsonData)[5][1];
        const valueSubArgument = Object.values(keySubArgument);
        const subTopics = valueSubArgument[id].cardIds;
        var arrSubTopics = [];
        var arrSubTopic = [];
        for (var i = 0; i < subTopics.length; i++) {
            var subTopicType = subTopics[i].type;
            var subTopicId = subTopics[i].item_id;
            if (subTopicType === "premessa") {
                arrSubTopic = {
                    label: valueSubArgument[id].premesse[subTopicId]["label"],
                    url: valueSubArgument[id].premesse[subTopicId]["url"],
                    color: valueSubArgument[id].color,
                    type: "premessa",
                };
                arrSubTopics.push(arrSubTopic);
            } else if (subTopicType === "scheda") {
                const cardData = Object.entries(jsonData)[4][1][subTopicId][
                    "index"
                ]["fields"];

                var argomento = "";
                var sotto = "";
                var init = "";
                var local = "";
                var price = "";
                var tableItems = [];
                for (var j = 0; j < cardData.length; j++) {
                    if (cardData[j]["label"] === "Obiettivo") {
                        argomento = cardData[j]["value"];
                    }
                    if (cardData[j]["label"] === "Missione") {
                        sotto = cardData[j]["value"];
                    }
                    if (cardData[j]["label"] === "Denominazione iniziativa") {
                        init = cardData[j]["value"];
                    }
                    if (cardData[j]["label"] === "Localizzazione") {
                        local = cardData[j]["value"];
                    }
                    if (cardData[j]["label"] === "Importo proposto") {
                        price = cardData[j]["value"];
                    }
                    if (cardData[j]["label"] === "così ripartito") {
                        for (var t = 0; t < cardData[j]["table"].length; t++) {
                            var tableItem = [];
                            tableItem = {
                                title: cardData[j]["table"][t][3],
                                content: cardData[j]["table"][t][4],
                            };
                            tableItems.push(tableItem);
                        }
                    }
                }
                var schedaItem = {
                    argomento: argomento,
                    sotto: sotto,
                    init: init,
                    local: local,
                    price: price,
                    color: valueSubArgument[id].color,
                    table: tableItems,
                    id: subTopicId,
                    type: "scheda",
                };
                arrSubTopics.push(schedaItem);
            } else {
                arrSubTopic = {
                    label: valueSubArgument[id].containers[subTopicId]["label"],
                    value: valueSubArgument[id].containers[subTopicId]["value"],
                    price:
                        valueSubArgument[id].containers[subTopicId][
                            "totale_complessivo"
                        ],
                    cnt:
                        valueSubArgument[id].containers[subTopicId][
                            "numero_schede"
                        ],
                    color: valueSubArgument[id].color,
                    type: "container",
                    item_id: subTopicId,
                };
                arrSubTopics.push(arrSubTopic);
            }
        }
        setSubMeetingTopic(arrSubTopics);
        setPageRouter({
            router: history.location.pathname,
            homecolor: "#879497",
            settingcolor: "#FF5A60",
        });
        setPageRouter({
            router: history.location.pathname,
            homecolor: "#879497",
            settingcolor: "#FF5A60",
            homebordercolor: "#FFFFFF",
            settingbordercolor: "#FF5A60",
            hometitlecolor: "#879497",
            settingtitlecolor: "black",
        });
    }, []);

    const openPdf = (type, url, item_id) => {
        if (type === "premessa") {
            window.open(url);
        }
        if (type === "container") {
            history.push({
                pathname: "/specific-extra/" + id + "/" + type + "/" + item_id,
            });
        }
    };

    const openScheda = (id) => {
        history.push({
            pathname: "/specific-card/" + id,
        });
    };
    return (
        <div className="content">
            {subMeetingTopic.map((item, index) =>
                item.type === "premessa" ? (
                    <div
                        className="common-list"
                        style={{ position: "relative" }}
                        key={index}
                        onClick={() => openPdf(item.type, item.url)}
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
                                    paddingLeft: "20px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.label}
                            </p>
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
                ) : item.type === "scheda" ? (
                    <div
                        className="scheda-item"
                        style={{ borderRightColor: item.color }}
                        key={index}
                        onClick={() => openScheda(item.id)}
                    >
                        <div
                            className="common-list"
                            key={index}
                            style={{
                                position: "relative",
                                alignItems: "unset",
                                display: "unset",
                                position: "unset",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            paddingLeft: "30px",
                                            textAlign: "left",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                color: "#879497",
                                                paddingLeft: "20px",
                                                marginBottom: "0px",
                                            }}
                                        >
                                            Obiettivo:{" "}
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                }}
                                            >
                                                {item.argomento}
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                color: "#879497",
                                                paddingLeft: "20px",
                                                marginBottom: "0px",
                                            }}
                                        >
                                            Missione:{" "}
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                }}
                                            >
                                                {item.sotto}
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            textAlign: "left",
                                            paddingRight: "100px",
                                            paddingLeft: "50px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "#879497",
                                                    marginBottom: "0px",
                                                }}
                                            >
                                                Denominazione iniziativa:&nbsp;
                                            </p>
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    marginBottom: "0px",
                                                }}
                                            >
                                                {item.init}
                                            </p>
                                        </div>
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                color: "#879497",
                                                textAlign: "left",
                                            }}
                                        >
                                            Localizzazione:{" "}
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                }}
                                            >
                                                {item.local}
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                color: "#879497",
                                                textAlign: "left",
                                            }}
                                        >
                                            Importo proposto:{" "}
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                }}
                                            >
                                                {item.price}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        color: "#879497",
                                        display: "flex",
                                        alignItems: "center",
                                        height: "100%",
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
                                </div>
                            </div>
                        </div>

                        {item.table.length ? (
                            <p
                                style={{
                                    fontWeight: "bold",
                                    color: "black",
                                    textAlign: "left",
                                    paddingLeft: "50px",
                                }}
                            >
                                Cosi Ripartito:
                            </p>
                        ) : (
                            <></>
                        )}
                        {item.table.map((itemlist, index) =>
                            index % 2 === 0 ? (
                                <div
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: "50px",
                                        color: "#879497",
                                        fontWeight: "bold",
                                        background: "#EFEFF6",
                                    }}
                                >
                                    <p
                                        style={{
                                            display: "inline-block",
                                            width: "20%",
                                        }}
                                    >
                                        {itemlist.title}
                                    </p>
                                    <p style={{ display: "inline-block" }}>
                                        {itemlist.content}
                                    </p>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: "50px",
                                        color: "#879497",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <p
                                        style={{
                                            display: "inline-block",
                                            width: "20%",
                                        }}
                                    >
                                        {itemlist.title}
                                    </p>
                                    <p style={{ display: "inline-block" }}>
                                        {itemlist.content}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    <div
                        className="common-list"
                        style={{ position: "relative" }}
                        key={index}
                        onClick={() =>
                            openPdf(item.type, item.url, item.item_id)
                        }
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                paddingLeft: "30px",
                                paddingBottom: "16px",
                            }}
                        >
                            <p
                                style={{
                                    paddingLeft: "20px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.label}
                            </p>
                            <p
                                style={{
                                    paddingLeft: "20px",
                                    fontSize: "18px",
                                    margin: "0px",
                                }}
                            >
                                {item.value}
                            </p>
                            {item.cnt ? (
                                <p
                                    style={{
                                        marginBottom: "0px",
                                        color: "#879497",
                                        paddingLeft: "20px",
                                    }}
                                >
                                    Numero Schede:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                        }}
                                    >
                                        {item.cnt}
                                    </span>
                                </p>
                            ) : (
                                <></>
                            )}
                            {item.price ? (
                                <p
                                    style={{
                                        marginLeft: "0px",
                                        color: "#879497",
                                        paddingLeft: "20px",
                                        marginBottom: "0px",
                                    }}
                                >
                                    Totale Complessivo:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                        }}
                                    >
                                        {item.price}
                                    </span>
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
                )
            )}
        </div>
    );
}
