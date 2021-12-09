import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import "../css/common.css";
import "./index.css";

export default function ForgotPassword() {
    return (
        <Grid id="resetform" xs={12} sm={12} md={3}>
            <Typography mb={3}>Reset Password</Typography>
            <Typography mb={3}>
                Enter a new password and retype the same to reset your password.
            </Typography>
            <Grid container direction="column" className="new-pass">
                <Typography>New Password</Typography>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        sx={{ width: "100%" }}
                        type="password"
                    />
                </FormControl>
            </Grid>
            <Grid container direction="column" className="confirm-pass">
                <Typography>Confirm Password</Typography>
                <FormControl sx={{ width: "100%" }}>
                    <BootstrapInput
                        id="bootstrap-input"
                        sx={{ width: "100%" }}
                        type="password"
                    />
                </FormControl>
            </Grid>
            <Button variant="outlined" className="btn-reset">
                Reset Password
            </Button>
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
