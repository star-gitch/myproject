import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import ProgressBar from "react-bootstrap/ProgressBar";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import FilterTag from "../FilterTag";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Frequency() {
    return (
        <>
            <Grid className="frequency">
                <Grid className="status-bar">
                    <Grid className="top">
                        <Typography>Word Frequency</Typography>
                        <Button
                            sx={{
                                color: "#EC4D61",
                                textTransform: "none",
                                border: "none",
                            }}
                            variant="outlined"
                            startIcon={<CloudDownloadOutlinedIcon />}
                        >
                            Export
                        </Button>
                    </Grid>
                    <Grid className="status-progress">
                        <Grid>
                            <Typography>830</Typography>
                            <Typography>microstation</Typography>
                            <ProgressBar variant="danger" now={830} max={830} />
                        </Grid>

                        {/* <Typography>830</Typography>
                        <Typography>microstation</Typography>
                        <ProgressBar variant="danger" now={830} max={830} /> */}
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="filter">
                <Typography>Filters</Typography>
                <Grid className="filter-date">
                    <Typography>By Sentiment</Typography>
                    <FormGroup className="fre-opt">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#EC4D61",
                                        },
                                    }}
                                />
                            }
                            label="Positive"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#EC4D61",
                                        },
                                    }}
                                />
                            }
                            label="Negative"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#EC4D61",
                                        },
                                    }}
                                />
                            }
                            label="Neutral"
                        />
                    </FormGroup>
                    <Typography>By Topics</Typography>
                    <FormGroup className="fre-opt">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#EC4D61",
                                        },
                                    }}
                                />
                            }
                            label="ui"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#EC4D61",
                                        },
                                    }}
                                />
                            }
                            label="easy-to-use"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#EC4D61",
                                        },
                                    }}
                                />
                            }
                            label="interface"
                        />
                    </FormGroup>
                    <Typography>By Dates</Typography>
                    <DatePickerComponent
                        id="datepicker"
                        placeholder="Select a Date"
                    />
                    <FilterTag />
                    <Button
                        style={{
                            background: "#EC4D61",
                            boxShadow: " 0px 1px 2px rgba(0, 0, 0, 0.12)",
                            borderRradius: "4px",
                            color: "white",
                            fontSize: "14px",
                            textTransform: "none",
                            width: "100%",
                            marginTop: "25px",
                        }}
                    >
                        Apply Filters
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
