import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";

import locationLogo from "../../assets/image/home/location.png";
import calendarLogo from "../../assets/image/home/calendar.png";
import checkLogo from "../../assets/image/home/checkbox-circle.png";
import uploadLogo from "../../assets/image/home/upload.png";
import timerLogo from "../../assets/image/home/timer.png";
import postData from "../postData";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "react-google-autocomplete";
import moment from "moment";
import Geocode from "react-geocode";
import ReactLoading from "react-loading";
import { useHistory } from "react-router";
import { checkLogin } from "../common.modules";
import "./index.css";

Geocode.setApiKey("AIzaSyAl4WNOpYCOs4IT8FN4Kukr9ohd9PQkKb4");
const Home = (props) => {
    const classes = makeStyles();
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
    const [time, setTime] = useState(moment().format("HH:mm"));
    const [proof, setProof] = useState([]);
    const [emirates, setEmirate] = useState([]);
    const [msg, setMsg] = useState("");
    const [err, setErr] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");

    const options = {
        enableHighAccuracy: true,
        timeout: 0,
        maximumAge: 60000,
    };

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("h_auth_token")) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    let latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    console.log(latitude, longitude);

                    let googleUrl =
                        "https://maps.google.com/maps?q=" +
                        latitude +
                        "," +
                        longitude +
                        "&hl=en&z=14&output=embed";
                    Geocode.fromLatLng(latitude, longitude).then(
                        (response) => {
                            const address =
                                response.results[0].formatted_address;
                            console.log(address);
                            setUrl(googleUrl);
                        },
                        (error) => {
                            console.error(error);
                        }
                    );
                },
                null,
                options
            );
        }
        }
        else {
            checkLogin(history);
        }
    }, []);

    const changeHandlerProof = (event) => {
        setProof(event.target.files);
    };

    const changeHandlerEmirate = (event) => {
        setEmirate(event.target.files);
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    };
    const timeHandler = (event) => {
        setTime(event.target.value);
    };

    const webCheckinHandler = async () => {
        setMsg("");
        setErr("");
        setLoading(true);
        var data = new FormData();
        data.append("action", "webCheckins");
        data.append("hotel_id", "2");
        data.append("reservation_id", "1");
        data.append("expected_date_time", date + " " + time);
        data.append("location", location);

        console.log("location", location);

        for (let i in proof) {
            data.append(`proof_documents[${i}]`, proof[i]);
        }

        for (let i in emirates) {
            data.append(`emirate_id[${i}]`, emirates[i]);
        }

        let response = await postData(data);
        if (response.success == "1") {
            setMsg("Webcheck in Done...");
            setLocation("");
            setDate(moment(new Date()).format("YYYY-MM-DD"));
            setTime(moment().format("HH:mm"));
            setProof([]);
            setEmirate([]);
            setLoading(false);
        } else {
            setLoading(false);

            setErr("Error while adding webcheckin..");
        }
    };

    const placeHandler = (place) => {
        console.log(place.formatted_address);
        setLocation(place.formatted_address);
        console.log(location);
        Geocode.fromAddress(place.formatted_address).then(
            (response) => {
                console.log("lat and lang");
                const { lat, lng } = response.results[0].geometry.location;
                let googleUrl =
                    "https://maps.google.com/maps?q=" +
                    lat +
                    "," +
                    lng +
                    "&hl=en&z=14&output=embed";
                console.log(googleUrl);
                setUrl(googleUrl);
                console.log(lat, lng);
            },
            (error) => {
                console.error(error);
            }
        );
    };
    return (
        <Layout>
            <div className="home-body">
                <div className="row no-margin">
                    <p className="description">
                        You can still agree on the datails after sending the
                        booking request
                    </p>
                </div>
                <div>
                    <iframe
                        className="home-map"
                        src={url}
                        width="345"
                        height="388"
                    ></iframe>
                    <div
                        className="row no-margin location-block"
                        style={{ height: "75px", width: "313px" }}
                    >
                        <div className="col-2 no-padding image-block">
                            <img className="item-logo" src={locationLogo} />
                        </div>
                        <div className="col-10 no-padding">
                            <span className="home-item-descrition1">
                                Location
                            </span>
                            <br />
                            <span className="home-item-descrition2">
                                <Autocomplete
                                    className="form form-control"
                                    apiKey="AIzaSyAl4WNOpYCOs4IT8FN4Kukr9ohd9PQkKb4"
                                    onPlaceSelected={(place) => {
                                        placeHandler(place);
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="row no-margin">
                        <div className="no-padding date-block">
                            <div className="row no-margin">
                                <div className="col-4 no-padding image-block">
                                    <img
                                        className="item-logo"
                                        src={calendarLogo}
                                    />
                                </div>
                                <div className="col-8 no-padding">
                                    <span className="home-item-descrition1">
                                        Check in date
                                    </span>
                                    <br />
                                    <span className="home-item-descrition2">
                                        {" "}
                                        <TextField
                                            style={{ width: "100%" }}
                                            id="date"
                                            className={classes.textField}
                                            type="date"
                                            value={date}
                                            onChange={dateHandler}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="no-padding time-block">
                            <div className="row no-margin">
                                <div className="col-4 no-padding image-block">
                                    <img
                                        className="item-logo"
                                        src={timerLogo}
                                    />
                                </div>
                                <div className="col-8 no-padding">
                                    <span className="home-item-descrition1">
                                        Check in time
                                    </span>
                                    <br />
                                    <span className="home-item-descrition2">
                                        <TextField
                                            id="time"
                                            onChange={timeHandler}
                                            type="time"
                                            value={time}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row no-margin">
                    <div
                        className="col-5 no-padding home-block"
                        style={{ height: "60px" }}
                    >
                        <div className="row no-margin">
                            <div className="col-4 no-padding image-block">
                                <img className="item-logo" src={calendarLogo} />
                            </div>
                            <div className="col-8 no-padding">
                                <span className="home-item-descrition1">
                                    {" "}
                                    <label for="files" style={{ margin: 0 }}>
                                        Upload
                                    </label>
                                    <input
                                        id="files"
                                        style={{ display: "none" }}
                                        type="file"
                                        onChange={changeHandlerProof}
                                        multiple
                                    />
                                </span>
                                <br />
                                <span className="home-item-descrition2">
                                    ID proof
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 no-padding home-or">Or</div>
                    <div
                        className="col-5 no-padding home-block"
                        style={{ height: "60px" }}
                    >
                        <div className="row no-margin">
                            <div className="col-4 no-padding image-block">
                                <img className="item-logo" src={checkLogo} />
                            </div>
                            <div className="col-8 no-padding">
                                <span className="home-item-descrition1">
                                    <label for="files1" style={{ margin: 0 }}>
                                        Upload
                                    </label>
                                    <input
                                        id="files1"
                                        style={{ display: "none" }}
                                        type="file"
                                        onChange={changeHandlerEmirate}
                                        multiple
                                    />
                                </span>
                                <br />
                                <span className="home-item-descrition2">
                                    Emirates ID
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row home-bottom">
                    {err != "" ? <div class="error">{err}</div> : null}
                    {msg != "" ? (
                        <div class="msg-notfication">{msg}</div>
                    ) : null}
                    {loading ? (
                        <div
                            style={{
                                width: "26%",
                                margin: "auto",
                                marginTop: "10px",
                            }}
                        >
                            <ReactLoading
                                type="spin"
                                color="#FD6D6D"
                                height={50}
                                width={50}
                                className="text-center"
                            />
                        </div>
                    ) : null}
                    <button className="btn-submit" onClick={webCheckinHandler}>
                        Submit WebCheckIn
                    </button>
                </div>
            </div>
        </Layout>
    );
};
export default Home;
