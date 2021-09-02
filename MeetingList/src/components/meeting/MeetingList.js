import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import MeetingData from "../json/sedute";
import RouterContext from "../../context/RouterContext";
import { useDispatch } from "react-redux";
import * as Actions from "../../redux/action";

export default function MeetingList() {
    var dateStyle = {
        display: "flex",
        paddingLeft: "25px",
        fontSize: "18px",
    };

    const [meetingData, setMeetingData] = useState([]);
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        var entireMeeting = Object.entries(MeetingData);
        var orderMeeting = [];
        for (var i = entireMeeting.length - 1; i >= 0; i--) {
            var eachMeeting = {
                id: entireMeeting[i][0],
                date: entireMeeting[i][1]["dataSeduta"],
            };
            orderMeeting.push(eachMeeting);
        }

        setMeetingData(orderMeeting);
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

    const topicList = (id) => {
        dispatch(Actions.setMeeting(id));
        history.push("/topic-list");
    };

    return (
        <div className="content">
            {meetingData.map((item, index) => (
                <div
                    className="common-list"
                    key={index}
                    onClick={() => topicList(item.id)}
                >
                    <div style={dateStyle}>
                        <p style={{ color: "#879497", fontWeight: "bold" }}>
                            Seduta Del:
                        </p>
                        <p style={{ marginLeft: "15px", fontWeight: "bold" }}>
                            {item.date}
                        </p>
                    </div>
                    <div
                        style={{
                            paddingRight: "25px",
                            color: "#879497",
                            display: "flex",
                        }}
                    >
                        {index === 0 ? (
                            <div
                                style={{
                                    background: "#ff5a60",
                                    marginRight: "40px",
                                    padding: "8px 10px",
                                    color: "white",
                                    borderRadius: "30px",
                                    fontSize: "13px",
                                }}
                            >
                                Nuova
                            </div>
                        ) : (
                            <></>
                        )}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
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
                </div>
            ))}
        </div>
    );
}
