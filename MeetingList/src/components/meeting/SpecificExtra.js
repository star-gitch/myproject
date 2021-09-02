import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function SpecificExtra() {
    let { id, type, item_id } = useParams();
    const [extraData, setExtraData] = useState([]);
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const history = useHistory();
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const keySubArgument = Object.entries(jsonData)[5][1];
        const valueSubArgument = Object.values(keySubArgument);
        const arrExactData = Object.entries(valueSubArgument[id]);
        const arrCardData = arrExactData[11][1][item_id]["cardIds"];

        var itemIds = [];

        if (type == "container") {
            for (var ii = 0; ii < arrCardData.length; ii++) {
                var itemId = {
                    type: arrCardData[ii]["type"],
                    item_id: arrCardData[ii]["item_id"],
                };
                itemIds.push(itemId);
            }
        } else {
            for (var i = 0; i < arrExactData.length; i++) {
                if (arrExactData[i][0] === "cardIds") {
                    for (var j = 0; j < arrExactData[i][1].length; j++) {
                        itemIds.push(arrExactData[i][1][j]["item_id"]);
                    }
                }
            }
        }

        var objCard = Object.entries(jsonData)[4][1];
        var arrCard = Object.entries(objCard);
        var cardLength = arrCard.length;
        var schedaItems = [];

        for (var k = 0; k < itemIds.length; k++) {
            var schedaItem = [];
            if (itemIds[k]["type"] === "scheda") {
                for (var m = 0; m < cardLength; m++) {
                    if (itemIds[k]["item_id"] == arrCard[m][0]) {
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
                        var schedaID = arrCard[m][0];
                        var tableItems = [];
                        for (var h = 0; h < finalCardItemSize; h++) {
                            if (
                                finalCard[0][1][h].label === "Argomento" ||
                                finalCard[0][1][h].label === "Obiettivo"
                            ) {
                                argomento = finalCard[0][1][h].value;
                            }
                            if (
                                finalCard[0][1][h].label ===
                                    "Sotto-Argomento" ||
                                finalCard[0][1][h].label === "Missione"
                            ) {
                                sotto = finalCard[0][1][h].value;
                            }
                            if (
                                finalCard[0][1][h].label === "Iniziativa" ||
                                finalCard[0][1][h].label ===
                                    "Denominazione iniziativa"
                            ) {
                                init = finalCard[0][1][h].value;
                            }
                            if (finalCard[0][1][h].label === "Localizzazione") {
                                local = finalCard[0][1][h].value;
                            }
                            if (
                                finalCard[0][1][h].label ===
                                    "Importo proposto" ||
                                finalCard[0][1][h].label === "Costo"
                            ) {
                                price = finalCard[0][1][h].value;
                            }
                            if (finalCard[0][1][h].label === "così ripartito") {
                                for (
                                    var t = 0;
                                    t < finalCard[0][1][h].table.length;
                                    t++
                                ) {
                                    var tableItem = [];
                                    tableItem = {
                                        title: finalCard[0][1][h].table[t][3],
                                        content: finalCard[0][1][h].table[t][4],
                                    };
                                    tableItems.push(tableItem);
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
                            id: schedaID,
                            table: tableItems,
                            type: "scheda",
                        };
                        schedaItems.push(schedaItem);
                    }
                }
            } else {
                schedaItem = {
                    value: arrExactData[12][1][itemIds[k]["item_id"]].value,
                    url: arrExactData[12][1][itemIds[k]["item_id"]].url,
                    type: "premesse",
                    color: valueSubArgument[id].color,
                    table: [],
                };
                schedaItems.push(schedaItem);
            }
        }
        setExtraData(schedaItems);
        console.log("kch=", schedaItems);
        console.log("Extra=", extraData);
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

    const onScheda = (id, type, url) => {
        if (type === "scheda") {
            history.push({
                pathname: "/specific-card/" + id,
            });
        } else {
            window.open(url);
        }
    };
    return (
        <div className="content">
            {extraData.map((item, index) => (
                <div
                    className="scheda-item"
                    style={{
                        borderRightColor: item.color,
                        paddingBottom: "1px",
                    }}
                    key={index}
                    onClick={() => onScheda(item.id, item.type, item.url)}
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
                                {item.type === "premesse" ? (
                                    <p
                                        style={{
                                            paddingLeft: "50px",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.value}
                                    </p>
                                ) : (
                                    <>
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
                                            <div>
                                                <p
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#879497",
                                                        paddingRight: "100px",
                                                    }}
                                                >
                                                    Denominazione iniziativa:{" "}
                                                    <span
                                                        style={{
                                                            fontWeight: "bold",
                                                            color: "black",
                                                        }}
                                                    >
                                                        {item.init}
                                                    </span>
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
                                    </>
                                )}

                                {/*  */}
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
            ))}
        </div>
    );
}
