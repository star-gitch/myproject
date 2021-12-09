import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/common.css";
import "./index.css";

export default function SignUp() {
    const history = useHistory();
    const goPlan = () => {
        history.push("signup/plan");
    };
    return (
        <Grid id="signform" xs={12} sm={12} md={3}>
            <Typography className="p-account" mb={3}>
                Create an account
            </Typography>
            <Button variant="outlined" className="btn-google">
                Sign up with Google
            </Button>
            <div className="emailLogin">
                <div className="left"></div>
                <Typography>or sign up with your email</Typography>
                <div className="right"></div>
            </div>
            <Grid container direction="column" className="company">
                <Typography>Company Name</Typography>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        placeholder="Enter your company name"
                        sx={{ width: "100%" }}
                    />
                </FormControl>
            </Grid>
            <Grid container direction="column">
                <Grid container>
                    <Typography className="p-fullname">Full Name</Typography>
                </Grid>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        placeholder="Enter your full name"
                        sx={{ width: "100%" }}
                    />
                </FormControl>
            </Grid>
            <Grid container className="div-email" direction="column">
                <Grid container>
                    <Typography>Email Address</Typography>
                </Grid>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        placeholder="Enter your email"
                        sx={{ width: "100%" }}
                    />
                </FormControl>
            </Grid>
            <Grid container className="div-pass" direction="column">
                <Grid container>
                    <Typography>Password</Typography>
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
            <Grid container className="div-agree">
                <Typography>By signing up, you agree to our</Typography>
                <Link to="signup" underline="none">
                    terms
                </Link>
            </Grid>
            <Button variant="outlined" onClick={goPlan} className="btn-signup">
                Sign Up
            </Button>
            <Grid container className="div-account">
                <Typography className="p-already">
                    Already have an account?
                </Typography>
                <Link to="/" underline="none" className="a-login">
                    Login
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
