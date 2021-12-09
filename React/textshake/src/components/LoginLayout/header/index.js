import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import logoImg from "../../../images/logo.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "./index.css";

const logoStyle = {
    width: "auto",
    height: "auto",
    maxWidth: "20%",
};

export default function Header() {
    const pageUrl = window.location.pathname;
    const history = useHistory();

    const login = () => {
        history.push("/");
    };
    const signup = () => {
        history.push("/signup");
    };
    return (
        <Grid className="header" container spacing={2} p={3}>
            <Grid item alignItems="center" container xs={12} sm={6}>
                <img src={logoImg} style={logoStyle} alt="logo" />
            </Grid>
            <Grid item container xs={12} sm={6} className="new-shake">
                {pageUrl === "/" ? (
                    <>
                        <Typography pr={1} className="newShakeStyle">
                            New to Textshake?
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={signup}
                            className="btnStyle"
                        >
                            Create an account
                        </Button>
                    </>
                ) : pageUrl === "/signup" || pageUrl === "/signup/plan" ? (
                    <>
                        <Typography pr={1} className="newShakeStyle">
                            Already have an account?
                        </Typography>
                        <Button
                            className="btnStyle"
                            variant="outlined"
                            onClick={login}
                        >
                            Login
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography pr={1} className="newShakeStyle">
                            Remember your password?
                        </Typography>
                        <Button
                            className="btnStyle"
                            variant="outlined"
                            onClick={login}
                        >
                            Login
                        </Button>
                    </>
                )}
            </Grid>
        </Grid>
    );
}
