import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

export default function TopicList() {
    const [specificArgument, setSpecificArgument] = useState([]);
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const history = useHistory();
    const meetingId = useSelector((state) => state.meetingId);

    useEffect(() => {
        var SpecificArgument = require(`../json/sample_${meetingId}.json`);
        const entireSpecificList = Object.entries(SpecificArgument)[5][1];
        const valueSpecificList = Object.values(entireSpecificList);

        var arrItem = [];
        for (var i = 0; i < valueSpecificList.length; i++) {
            var item = [];
            if (valueSpecificList[i].hasOwnProperty("macro")) {
                if (valueSpecificList[i].macro === "macro") {
                    item = {
                        label: valueSpecificList[i].label,
                        numero_pratiche_totali:
                            valueSpecificList[i].numero_pratiche_totali,
                        totale_complessivo:
                            valueSpecificList[i].totale_complessivo,
                        numero_pratiche: valueSpecificList[i].numero_pratiche,
                        no: i,
                        color: valueSpecificList[i].color,
                        macro: valueSpecificList[i].macro,
                        cardIds: valueSpecificList[i].cardIds,
                        containsMinigrant:
                            valueSpecificList[i].containsMinigrant,
                    };
                } else {
                    item = {
                        no: i,
                        label: valueSpecificList[i].label,
                        sub_cnt: valueSpecificList[i].cardIds.length,
                        numero_pratiche: valueSpecificList[i].numero_pratiche,
                        macro: valueSpecificList[i].macro,
                        color: valueSpecificList[i].color,
                    };
                }
                arrItem.push(item);
            }
        }

        setSpecificArgument(arrItem);
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

    const subArgument = (index, macro, label, cardIds) => {
        if (macro === "macro") {
            history.push({
                pathname: "/specific-argument/" + index,
            });
        } else {
            history.push({
                pathname: "/specific-argument/" + index,
            });
        }
    };

    return (
        <div className="content">
            {specificArgument.map((item, index) => (
                <div
                    className="common-list"
                    style={{ position: "relative" }}
                    key={index}
                    onClick={() =>
                        subArgument(
                            item.no,
                            item.macro,
                            item.label,
                            item.cardIds
                        )
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
                                marginLeft: "10px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "left",
                            }}
                        >
                            {item.label}
                        </p>
                        {item.macro != "macro" ? (
                            <p
                                style={{
                                    marginTop: "0px",
                                    paddingLeft: "10px",
                                    fontWeight: "bold",
                                }}
                            >
                                Numero Pratiche: {item.sub_cnt}
                            </p>
                        ) : (
                            <></>
                        )}
                        {item.numero_pratiche_totali ? (
                            <p
                                style={{
                                    color: "#879497",
                                    fontWeight: "bold",
                                    margin: "0px 0px 0px 10px",
                                }}
                            >
                                Numero Pratiche:{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                >
                                    {item.numero_pratiche}
                                </span>
                            </p>
                        ) : (
                            <></>
                        )}
                        {item.totale_complessivo ? (
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "20px",
                                    color: "#879497",
                                    fontWeight: "bold",
                                }}
                            >
                                Totale Complessivo:{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                >
                                    {item.totale_complessivo}
                                </span>
                            </p>
                        ) : (
                            <></>
                        )}
                        {item.containsMinigrant ? (
                            <p
                                style={{
                                    margin: "0px 0px 20px 10px",
                                    color: "#879497",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.containsMinigrant}
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
