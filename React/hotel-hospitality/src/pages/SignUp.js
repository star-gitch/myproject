import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    makeStyles,
    OutlinedInput,
    Typography,
} from "@material-ui/core";
import {
    Email,
    EmailOutlined,
    MailOutlined,
    MailTwoTone,
    Person,
    PersonAddOutlined,
    PersonOutlined,
    PhoneEnabled,
    PhoneEnabledOutlined,
    PhoneOutlined,
} from "@material-ui/icons";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useHistory } from "react-router";
import postData from "./postData";
import imgPhone from "../assets/image/phone.png";

const useStyles = makeStyles((theme) => ({
    textInp: {
        borderRadius: "10px",
    },
    title: {
        //     marginTop: theme.spacing(4),
        fontFamily: "SF Pro Display",
        marginTop: "20px",
        fontWeight: "bold",
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
        // marginTop: theme.spacing(4),
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
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
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
}));

export default function SignUp() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [err, setErr] = useState("");
    const [msg, setMsg] = useState("");
    const history = useHistory();
    const handleChange1 = (e) => {
        setName(e.target.value);
    };
    const handleChange2 = (e) => {
        setEmail(e.target.value);
    };

    const registerHandler = async () => {
        let data = new FormData();
        data.append("mobile", phone);
        data.append("email", email);
        data.append("name", name);
        data.append("action", "register");
        setErr("");
        try {
            let response = await postData(data);
            if (response.success == "0") {
                setErr(response.msg);
            } else {
                setMsg("Pls Login..");
                setTimeout(function () {
                    history.push("/signIn");
                }, 2000);
            }
        } catch (e) {
            console.log("error");
        }
    };

    const signIn = () => {
        history.push("signIn");
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
                        <Typography variant="h5" className={classes.title}>
                            {" "}
                            Create an account
                        </Typography>
                    </div>

                    <div className="signUpInp">
                        <div>
                            {err != "" ? <div class="error">{err}</div> : null}
                            {msg != "" ? (
                                <div class="msg-notfication">{msg}</div>
                            ) : null}
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    value={name}
                                    onChange={handleChange1}
                                    fullWidth
                                    id="outlined-adornment-password"
                                    placeholder="Full Name"
                                    startAdornment={
                                        <Typography
                                            style={{ display: "none" }}
                                            variant="body1"
                                        >
                                            +731
                                        </Typography>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                classes={{
                                                    edgeEnd: classes.edgeEnd,
                                                }}
                                                aria-label="toggle password visibility"
                                                edge="end"
                                            >
                                                {name ? (
                                                    <Person color="error" />
                                                ) : (
                                                    <PersonOutlined color="error" />
                                                )}{" "}
                                                {/* <PersonOutlined color="error" /> */}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    classes={{ root: classes.textInp }}
                                />
                            </FormControl>
                        </div>
                        <br />
                        <div>
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    fullWidth
                                    value={email}
                                    onChange={handleChange2}
                                    id="outlined-adornment-password"
                                    placeholder="Email"
                                    type="email"
                                    startAdornment={
                                        <Typography
                                            style={{ display: "none" }}
                                            variant="body1"
                                        >
                                            +731
                                        </Typography>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                classes={{
                                                    edgeEnd: classes.edgeEnd,
                                                }}
                                                aria-label="toggle password visibility"
                                                edge="end"
                                            >
                                                {email ? (
                                                    <Email color="error" />
                                                ) : (
                                                    <EmailOutlined color="error" />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    classes={{ root: classes.textInp }}
                                />
                            </FormControl>
                        </div>
                        <br />
                        <div className="sign-up-phone">
                            <FormControl variant="outlined">
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="AE"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={setPhoneNumber}
                                />
                                <img className="phone" src={imgPhone} />
                            </FormControl>
                        </div>
                        <br />
                        <div>
                            <Button
                                variant="contained"
                                color="#FD6D6D"
                                classes={{ root: classes.button }}
                                fullWidth
                                onClick={registerHandler}
                            >
                                Sign In
                            </Button>
                        </div>

                        <div className={classes.btTitle}>
                            <Typography className={classes.btnSign}>
                                Already have a account?
                            </Typography>
                            <Button
                                className={classes.textBtn}
                                variant="text"
                                onClick={signIn}
                            >
                                {" "}
                                Sign In
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
