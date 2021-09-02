import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import InfoIcon from "@material-ui/icons/Info";
import { useSelector } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

export default function SpecificCard() {
    let { id } = useParams();
    const [score, setScore] = useState([]);
    const [homeData, setHomeData] = useState([]);
    const history = useHistory();
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const meetingId = useSelector((state) => state.meetingId);

    var dateStyle = {
        display: "flex",
        paddingLeft: "25px",
    };
    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const keyValuScores = Object.entries(jsonData)[4][1];
        const homeFieldsItem = Object.entries(
            keyValuScores[id].components.home.fields
        );
        // Setting store for home
        var homeItems = [];

        for (var i = 0; i < homeFieldsItem.length; i++) {
            var firstItemCss = "0px";
            var itemBorderColor = "";

            if (i === 0) {
                firstItemCss = "8px";
            }
            if (
                homeFieldsItem[i][1]["componentRef"] ||
                (homeFieldsItem[i][1]["style"] === 0 &&
                    !homeFieldsItem[i][1]["secondValue"] &&
                    !homeFieldsItem[i][1]["comment"])
            ) {
                itemBorderColor = "1px solid #EFEFEF";
            }

            var item = {
                componentRef: homeFieldsItem[i][1]["componentRef"],
                label: homeFieldsItem[i][1]["label"],
                value: homeFieldsItem[i][1]["value"],
                style: homeFieldsItem[i][1]["style"],
                second: homeFieldsItem[i][1]["secondValue"],
                comment: homeFieldsItem[i][1]["comment"],
                table: homeFieldsItem[i][1]["table"],
                itemcss: firstItemCss,
                bordercss: itemBorderColor,
            };
            homeItems.push(item);
        }

        setHomeData(homeItems);

        // Setting store for score
        var keyExist = keyValuScores[id].hasOwnProperty("scoreboard");
        if (keyExist) {
            setScore(keyValuScores[id].scoreboard.score1Level);
        }
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

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor:
                theme.palette.grey[theme.palette.type === "light" ? 300 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: "#5cb85c",
        },
    }))(LinearProgress);

    const openScoreBoard = (id) => {
        history.push({
            pathname: "/scoreboard/" + id,
        });
    };

    const goFinalInfo = (refname) => {
        if (refname) {
            history.push({
                pathname: "/final-end/" + id + "/" + refname,
            });
        }
    };

    return (
        <div className="content">
            <div>
                {homeData.length > 0 &&
                    homeData.map((item, index) => (
                        <div
                            className="common-list"
                            key={index}
                            style={{
                                margin: "0px",
                                borderRadius: "0px",
                                borderTopLeftRadius: item.itemcss,
                                borderTopRightRadius: item.itemcss,
                                borderBottom: item.bordercss,
                            }}
                            onClick={() => goFinalInfo(item.componentRef)}
                        >
                            {item.componentRef && !item.comment ? (
                                item.label === "Executive Summary" ? (
                                    <div
                                        style={{
                                            textAlign: "left",
                                            paddingLeft: "25px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: "#879497",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.label}:
                                        </p>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.value,
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        style={dateStyle}
                                        onClick={() =>
                                            goFinalInfo(item.componentRef)
                                        }
                                    >
                                        <p
                                            style={{
                                                color: "#879497",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.label}:
                                        </p>
                                        <p
                                            style={{
                                                marginLeft: "15px",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                )
                            ) : !item.componentRef &&
                              !item.comment &&
                              item.style === 0 ? (
                                item.label === "Executive Summary" ? (
                                    <div
                                        style={{
                                            textAlign: "left",
                                            paddingLeft: "25px",
                                            paddingRight: "25px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: "#879497",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.label}:
                                        </p>
                                        <div
                                            style={{ paddingBottom: "20px" }}
                                            dangerouslySetInnerHTML={{
                                                __html: item.value,
                                            }}
                                        />
                                        {item.table &&
                                            item.table.map(
                                                (extraitem, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            paddingBottom:
                                                                "20px",
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                extraitem[3],
                                                        }}
                                                    />
                                                )
                                            )}
                                    </div>
                                ) : item.label === "Descrizione" ? (
                                    <div
                                        style={{
                                            textAlign: "left",
                                            padding: "0px 15px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: "#FEADB0",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.label}:
                                        </p>
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                color: "#4B0307",
                                                textAlign: "justify",
                                            }}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                ) : (
                                    <div style={{ paddingLeft: "25px" }}>
                                        <p
                                            style={{
                                                color: "#FEADB0",
                                                fontWeight: "bold",
                                                textAlign: "left",
                                            }}
                                        >
                                            {item.label}:
                                        </p>
                                        <p
                                            style={{
                                                marginLeft: "0px",
                                                fontWeight: "bold",
                                                color: "#4B0307",
                                                textAlign: "left",
                                                paddingRight: "25px",
                                            }}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                )
                            ) : item.style && item.second ? (
                                <div
                                    style={{
                                        background: "#FEADB0",
                                        color: "#4B0307",
                                        textAlign: "left",
                                        padding: "0px 25px",
                                    }}
                                    className="company-info"
                                >
                                    <Accordion
                                        style={{
                                            background: "rgb(254, 173, 176)",
                                            boxShadow: "unset",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <InfoIcon
                                                    style={{
                                                        color: "rgb(75, 3, 7)",
                                                        top: "-32px !important",
                                                        background:
                                                            "unset !important",
                                                    }}
                                                />
                                            }
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{
                                                padding: "0px",
                                                flexDirection: "unset",
                                            }}
                                        >
                                            <Typography>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.label}:
                                                    </p>
                                                </div>
                                                <p style={{ marginTop: "0px" }}>
                                                    {item.value}
                                                </p>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            style={{ padding: "0px" }}
                                        >
                                            <Typography>
                                                <p
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.label}
                                                </p>
                                                <p
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Ruolo della compagnia:
                                                </p>
                                                <p> {item.second}</p>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ) : item.comment ? (
                                <div
                                    style={{
                                        textAlign: "left",
                                        padding: "0px 25px",
                                    }}
                                >
                                    <div>
                                        <p style={{ color: "#FEADB0" }}>
                                            {item.label}:
                                        </p>
                                        <p
                                            style={{
                                                color: "#4B0307",
                                            }}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            color: "#879497",
                                            padding: "0px 25px",
                                            border: "1px solid #FEADB0",
                                            borderRadius: "20px",
                                            margin: "40px 0px",
                                        }}
                                    >
                                        <p style={{ fontWeight: "bold" }}>
                                            Commento:
                                        </p>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            ) : item.style &&
                              !item.comment &&
                              !item.secondValue &&
                              !item.componentRef ? (
                                <div
                                    style={{
                                        background: "#FEADB0",
                                        color: "#4B0307",
                                        textAlign: "left",
                                        padding: "0px 25px",
                                        border: "1px solid rgb(239, 239, 239)",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.label}:
                                        </p>
                                    </div>
                                    <p>{item.value}</p>
                                </div>
                            ) : (
                                <></>
                            )}
                            {item.componentRef ? (
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
                            ) : (
                                <></>
                            )}
                        </div>
                    ))}

                {score.length ? (
                    <div
                        className="scoreboard"
                        onClick={() => openScoreBoard(id)}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <p style={{ fontWeight: "bold" }}>Scoreboard:</p>
                            <div
                                style={{
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
                        {score.map((item, index) => (
                            <div key={index}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alingItems: "center",
                                    }}
                                >
                                    <p>{item.label}</p>
                                    <p>{item.number}/10</p>
                                </div>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={item.number * 10}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
