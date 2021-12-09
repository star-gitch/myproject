import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import logoImg from "../../images/logo1.png";
import keyImg from "../../images/key.png";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { AiFillPlusCircle } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import "./index.css";
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "28px",
    backgroundColor: "#F5F6F9",
    "&:hover": {
        backgroundColor: "#F5F6F9",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "380px",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "380px",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
export default function ProjectHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => {
        setOpenModal(true);
    };
    const handleModalClose = () => setOpenModal(false);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <Grid className="pro-header" container xs={12} sm={12} md={12}>
            <Grid className="header-left">
                <img
                    src={logoImg}
                    alt="logo"
                    // style={{ width: "auto", height: "auto", maxWidth: "20%" }}
                />
                <Typography>Projects</Typography>
                <Typography>Settings</Typography>
            </Grid>
            <Grid className="header-right">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
                <Modal
                    open={openModal}
                    onClose={handleModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ mb: 2 }}
                        >
                            Enter Project
                        </Typography>
                        <TextField fullWidth label="Content" id="fullWidth" />
                    </Box>
                </Modal>
                <AiFillPlusCircle
                    style={{ fontSize: "40px", color: "#EC4D61" }}
                    onClick={handleModalOpen}
                />
                <img
                    src="https://eu.ui-avatars.com/api/?rounded=true&size=40"
                    alt="logo"
                    onClick={handleClick}
                    aria-describedby={id}
                />
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Typography
                        sx={{
                            p: 2,
                            alignItems: "center",
                            display: "flex",
                            paddingBottom: "0px",
                        }}
                    >
                        <SettingsOutlinedIcon />
                        Settings
                    </Typography>
                    <Grid sx={{ p: 2, display: "flex", alignItems: "center" }}>
                        <img src={keyImg} alt="logo" />
                        <Typography>Logout</Typography>
                    </Grid>
                </Popover>
            </Grid>
        </Grid>
    );
}
