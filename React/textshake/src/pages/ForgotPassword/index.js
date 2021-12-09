import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/common.css";
import "./index.css";

export default function ForgotPassword() {
    const email = useSelector((state) => state.email.currentEmail);
    const history = useHistory();
    const resetPassword = () => {
        history.push("/reset-password");
    };
    return (
        <Grid
            id="forgotform"
            xs={12}
            sm={12}
            md={3}
            style={{ margin: "auto", marginTop: "3%" }}
        >
            <Typography mb={3} className="p-forget">
                Forgot Password
            </Typography>
            <Typography className="p-address" mb={3}>
                Provide your email address to reset your password
            </Typography>
            <Grid container className="email-form" direction="column">
                <Typography>Email Address</Typography>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        placeholder="Enter your email"
                        sx={{ width: "100%" }}
                        value={email}
                    />
                </FormControl>
            </Grid>
            <Button
                variant="outlined"
                onClick={resetPassword}
                className="btn-reset"
            >
                Reset Password
            </Button>
            <Grid container alignItems="center" className="pass-remember">
                <Typography>Remember your password?</Typography>
                <Link to="/" underline="none">
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
