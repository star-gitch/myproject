import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function SpecificArgument() {
    let { id } = useParams();
    const [subArgu, setSubArgu] = useState([]);
    const [schedaCard, setSchedaCard] = useState([]);
    const history = useHistory();
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const keySubArgument = Object.entries(jsonData)[5][1];
        const valueSubArgument = Object.values(keySubArgument);
        const macroLabel = valueSubArgument[id].macro;

        if (
            macroLabel === "ai" ||
            macroLabel === "in_evidenza" ||
            !macroLabel
        ) {
            var itemLength = valueSubArgument[id].cardIds.length;
            var items = [];
            var schedaItems = [];

            for (var i = 0; i < itemLength; i++) {
                var itemType = valueSubArgument[id].cardIds[i].type;
                var itemID = valueSubArgument[id].cardIds[i].item_id;
                var item = [];
                if (itemType === "premessa") {
                    var arrPremesse = Object.entries(
                        valueSubArgument[id].premesse
                    );
                    var premesseLength = arrPremesse.length;

                    for (var j = 0; j < premesseLength; j++) {
                        if (itemID === arrPremesse[j][0]) {
                            item = {
                                label: arrPremesse[j][1].label,
                                url: arrPremesse[j][1].url,
                                color: valueSubArgument[id].color,
                                type: "premessa",
                            };
                        }
                    }
                    items.push(item);
                } else if (itemType === "container") {
                    var arrContainer = Object.entries(
                        valueSubArgument[id].containers
                    );
                    var containLength = arrContainer.length;

                    for (var k = 0; k < containLength; k++) {
                        if (itemID === arrContainer[k][0]) {
                            item = {
                                label: arrContainer[k][1].label,
                                color: valueSubArgument[id].color,
                                price: arrContainer[k][1].totale_complessivo,
                                subsize: arrContainer[k][1].numero_schede,
                                type: "container",
                            };
                        }
                    }
                    items.push(item);
                } else {
                    var objCard = Object.entries(jsonData)[4][1];
                    var arrCard = Object.entries(objCard);
                    var cardLength = arrCard.length;
                    var schedaItem = [];

                    for (var m = 0; m < cardLength; m++) {
                        if (itemID === arrCard[m][0]) {
                            var arrSearchCard = Object.entries(arrCard[m][1]);
                            var finalCard = Object.entries(
                                arrSearchCard[arrSearchCard.length - 1][1]
                            );
                            var finalCardItemSize = finalCard[0][1].length;
                            var argomento = "";
                            var sotto = "";
                            var init = "";
                            var local = "";
                            var price = "";
                            var tableItems = [];

                            for (var h = 0; h < finalCardItemSize; h++) {
                                if (
                                    finalCard[0][1][h].label === "Argomento" ||
                                    finalCard[0][1][h].label === "Obiettivo"
                                ) {
                                    argomento = finalCard[0][1][h].value;
                                    console.log("kkk=", argomento);
                                } else if (
                                    finalCard[0][1][h].label ===
                                        "Sotto-Argomento" ||
                                    finalCard[0][1][h].label === "Missione"
                                ) {
                                    sotto = finalCard[0][1][h].value;
                                } else if (
                                    finalCard[0][1][h].label === "Iniziativa"
                                ) {
                                    init = finalCard[0][1][h].value;
                                } else if (
                                    finalCard[0][1][h].label ===
                                    "Localizzazione"
                                ) {
                                    local = finalCard[0][1][h].value;
                                } else if (
                                    finalCard[0][1][h].label ===
                                    "Importo proposto"
                                ) {
                                    price = finalCard[0][1][h].value;
                                } else {
                                    if (finalCard[0][1][h].table) {
                                        for (
                                            var t = 0;
                                            t < finalCard[0][1][h].table.length;
                                            t++
                                        ) {
                                            var tableItem = [];
                                            tableItem = {
                                                title:
                                                    finalCard[0][1][h].table[
                                                        t
                                                    ][3],
                                                content:
                                                    finalCard[0][1][h].table[
                                                        t
                                                    ][4],
                                            };
                                            tableItems.push(tableItem);
                                        }
                                    }
                                }
                            }
                            schedaItem = {
                                argomento: argomento,
                                sotto: sotto,
                                init: init,
                                local: local,
                                price: price,
                                color: valueSubArgument[id].color,
                                table: tableItems,
                                id: itemID,
                            };
                        }
                    }
                    schedaItems.push(schedaItem);
                }
            }
            setSubArgu(items);
            setSchedaCard(schedaItems);
        }

        //Topic that has sub list.
        if (macroLabel === "macro") {
            const subArguLabel = valueSubArgument[id].label;
            var topicIndex = subArguLabel.match(/(\d+)/)[0];
            var matchStyle = topicIndex + "-";
            var subTopics = [];

            for (var i = 0; i < valueSubArgument.length; i++) {
                if (valueSubArgument[i]["label"].indexOf(matchStyle) != -1) {
                    var subTopic = {
                        label: valueSubArgument[i].label,
                        color: valueSubArgument[i].color,
                        price: valueSubArgument[i].totale_complessivo,
                        subsize: valueSubArgument[i].numero_pratiche,
                        subTopicIndex: i,
                        type: "sub-topic",
                    };
                    subTopics.push(subTopic);
                }
            }
            setSubArgu(subTopics);
        }

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

    const openPdf = (type, url, index) => {
        if (type === "premessa") {
            window.open(url);
        }
        if (type === "sub-topic") {
            history.push({
                pathname: "/specific-subtopic/" + index,
            });
        }
        if (type === "container") {
            history.push({
                pathname: "/specific-extra/" + id + "/" + type,
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
            {subArgu.map((item, index) => (
                <div
                    className="common-list"
                    style={{ position: "relative" }}
                    key={index}
                    onClick={() =>
                        openPdf(item.type, item.url, item.subTopicIndex)
                    }
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
                        {item.subsize ? (
                            <p style={{ margin: "10px", color: "#879497" }}>
                                Numero Sotto - Argomenit:{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                >
                                    {item.subsize}
                                </span>
                            </p>
                        ) : (
                            <></>
                        )}
                        {item.price ? (
                            <p
                                style={{
                                    margin: "10px",
                                    marginBottom: "20px",
                                    color: "#879497",
                                }}
                            >
                                Totale Costi:{" "}
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
            ))}
            {schedaCard.map((item, index) => (
                <div
                    className="scheda-item"
                    style={{ borderRightColor: item.color }}
                    key={index}
                    onClick={() => openScheda(item.id)}
                >
                    <div
                        className="common-list"
                        key={index}
                        style={{ position: "relative", alignItems: "unset" }}
                    >
                        <div style={{ paddingLeft: "30px", textAlign: "left" }}>
                            <p
                                style={{
                                    fontWeight: "bold",
                                    color: "#879497",
                                    paddingLeft: "20px",
                                }}
                            >
                                Argomento:{" "}
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
                                Sotto-Argomento:{" "}
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
                                width: "65%",
                                paddingLeft: "80px",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        color: "#879497",
                                        paddingRight: "100px",
                                    }}
                                >
                                    Iniziativa:{" "}
                                </p>
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                >
                                    {item.init}
                                </span>
                            </div>
                            <p style={{ fontWeight: "bold", color: "#879497" }}>
                                Costo:{" "}
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
                        <div
                            style={{
                                color: "#879497",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                height: "100%",
                                right: "8px",
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
                    <p
                        style={{
                            fontWeight: "bold",
                            color: "#879497",
                            textAlign: "left",
                            paddingLeft: "50px",
                        }}
                    >
                        Localizzazione:{" "}
                        <span style={{ fontWeight: "bold", color: "black" }}>
                            {item.local}
                        </span>
                    </p>
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
            ))}
        </div>
    );
}
