import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    makeStyles,
    OutlinedInput,
    Typography,
} from "@material-ui/core";
import { PhoneEnabledOutlined } from "@material-ui/icons";
import Visibility from "@material-ui/icons/Visibility";
import React, { useState } from "react";
import { useHistory } from "react-router";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import postData from "./postData";
import imgPhone from "../assets/image/phone.png";
const useStyles = makeStyles((theme) => ({
    textInp: {
        borderRadius: "10px",
    },
    button: {
        background: "#FD6D6D",
        color: "white",
        padding: theme.spacing(2),
        textTransform: "none",
        borderRadius: "10px",
        boxShadow: "unset",
        "&:hover": {
            backgroundColor: "#496179",
        },
    },
    btTitle: {
        marginTop: theme.spacing(4),
        fontFamily: "SF Pro Display",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textBtn: {
        color: "#FD6D6D",
        textTransform: "none",
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
    },
    edgeEnd: {
        marginRight: 0,
    },
    btnSign: {
        color: "#979797",
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
    },
    phoneStyle: {
        border: "1px solid #D9D9D9",
        padding: "11px 15px 11px 25px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: " space-between",
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const [err, setErr] = useState("");
    const [msg, setMsg] = useState("");
    const [phone, setPhoneNumber] = useState("");

    const loginHandler = async () => {
        let data = new FormData();
        data.append("action", "login");
        data.append("mobile", phone);

        setErr("");
        try {
            let response = await postData(data);
            if (response.success == "0") {
                setErr(response.msg);
            } else {
                history.push({
                    pathname: "/signInCode",
                    state: phone,
                });
            }
        } catch (e) {
            console.log("error");
        }
    };

    const goSignUp = () => {
        history.push("signUp");
    };
    return (
        <div>
            <div className="signIn">
                <div className="frame">
                    <div className="signLogo"></div>
                    <div className="signContent">
                        <div className="sign-froms">
                            <div className="sign-forms-title">
                                <div className="tit1">Welcome</div>
                                <div className="tit2">
                                    You will receive a 4 digital code
                                </div>
                            </div>
                            {err != "" ? <div class="error">{err}</div> : null}
                            <br />
                            <div className={classes.phoneStyle}>
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="AE"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={setPhoneNumber}
                                />
                                <img className="phone" src={imgPhone} />
                            </div>

                            <div className="signBtn">
                                <Button
                                    variant="contained"
                                    color="#FD6D6D"
                                    classes={{ root: classes.button }}
                                    fullWidth
                                    onClick={loginHandler}
                                >
                                    Sign In
                                </Button>
                            </div>
                            <div className={classes.btTitle}>
                                <Typography className={classes.btnSign}>
                                    Don't have an account?
                                </Typography>
                                <Button
                                    className={classes.textBtn}
                                    variant="text"
                                    onClick={goSignUp}
                                >
                                    {" "}
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sign-indicator"></div>
            </div>
        </div>
    );
}
