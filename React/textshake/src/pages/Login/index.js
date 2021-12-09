import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Actions from "../../redux/action";
import "./index.css";
import "../css/common.css";

export default function Login() {
    const dispatch = useDispatch();
    const sendEmail = (e) => {
        let email = e.target.value;
        dispatch(Actions.saveEmail(email));
    };
    return (
        <Grid id="loginform" xs={12} sm={12} md={3}>
            <Typography mb={3} className="p-welcome">
                Welcome back
            </Typography>
            <Button variant="outlined">Login with Google</Button>
            <div className="emailLogin">
                <div className="left"></div>
                <Typography>or login with your email</Typography>
                <div className="right"></div>
            </div>
            <Grid container direction="column" className="email-form">
                <Typography>Email Address</Typography>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        placeholder="Enter your email"
                        sx={{ width: "100%" }}
                        onChange={(e) => sendEmail(e)}
                    />
                </FormControl>
            </Grid>
            <Grid container className="pass-form" direction="column">
                <Grid container>
                    <Typography>Password</Typography>
                    <Link to="/forgot-password" underline="none">
                        Forgot Password?
                    </Link>
                </Grid>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        placeholder="Enter your password"
                        sx={{ width: "100%" }}
                        type="password"
                    />
                </FormControl>
            </Grid>
            <Button variant="outlined" className="btn-login">
                Login
            </Button>
            <Grid container alignItems="center" className="new-account">
                <Typography>Need an account?</Typography>
                <Link to="signup" underline="none">
                    Sign Up
                </Link>
            </Grid>
        </Grid>
    );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
        border: "1px solid #ced4da",
        fontSize: 14,
        width: "100%",
        padding: "8px 14px",
        transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
            "border-width",
        ]),
        "&:focus": {
            borderColor: "rgb(236, 77, 97)",
            borderWidth: "2px",
        },
    },
}));
