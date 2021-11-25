import {
    Button,
    Grid,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import postData from "./postData";
import OtpInput from "react-otp-input";

const useStyles = makeStyles((theme) => ({
    //   textInp: {
    //     borderRadius: "10px",
    //   },
    title: {
        //     marginTop: theme.spacing(4),
        fontFamily: "SF Pro Display",
    },
    button: {
        background: "#FD6D6D",
        color: "white",
        padding: theme.spacing(2),
        textTransform: "none",
        borderRadius: "10px",
        boxShadow: "unset",
        fontFamily: "SF Pro Display",
        fontWeight: "bold",
        fontSize: "16px",
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
    input: {
        borderRadius: "10px",
    },
    inputContent: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    pCode: {
        fontWeight: "bold",
        color: "#4F4F4F",
        fontSize: "18px",
        fontFamily: "SF Pro Display",
    },
    caption: {
        color: "#979797",
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
    },
    btnSign: {
        color: "#979797",
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
    },
}));
export default function SignInCode(props) {
    const classes = useStyles();
    const history = useHistory();
    const phone = props.location.state;

    const [err, setErr] = useState("");
    const [msg, setMsg] = useState("");
    const [otp, setOtp] = useState("");

    const handleChange = (otp) => {
        setOtp(otp);
    };

    const otpHandler = async () => {
        var data = new FormData();
        data.append("action", "verifyLoginOTP");
        data.append("mobile", phone);
        data.append("otp", otp);

        setErr("");
        try {
            let response = await postData(data);
            if (response.success == "0") {
                setErr(response.msg);
            } else {
                setMsg("Correct Login..");
                localStorage.setItem("h_auth_token", response.token);
                setTimeout(function () {
                    history.push("/food");
                }, 2000);
            }
        } catch (e) {
            console.log("error");
        }
    };

    return (
        <div>
            <div className="signIn">
                <div className="frame">
                    <div className="signLogo"></div>
                    <div className="signCodeContent">
                        {/* <div className="sign-froms"> */}
                        {/* <div className="sign-forms-title">
                <div className="tit1">Welcome</div>
                <div className="tit2">You will receive a 4 digital code</div>
              </div> */}
                        <div className={classes.title}>
                            <Typography className={classes.pCode}>
                                Enter 4 digit verification code{" "}
                            </Typography>
                            <Typography className={classes.pCode}>
                                sent to your number{" "}
                            </Typography>
                            {/* </div> */}
                        </div>
                        {err != "" ? <div class="error">{err}</div> : null}
                        {msg != "" ? (
                            <div class="msg-notfication">{msg}</div>
                        ) : null}
                        <div className={classes.inputContent} id="otp">
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                separator={<span></span>}
                            />
                        </div>

                        <div className="signBtn">
                            <Button
                                variant="contained"
                                classes={{ root: classes.button }}
                                fullWidth
                                onClick={otpHandler}
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
                                onClick={() => history.push("/signUp")}
                            >
                                {" "}
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
