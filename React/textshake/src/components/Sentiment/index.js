import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import ProgressBar from "react-bootstrap/ProgressBar";
import Graph from "../Graph";
import AllProject from "../AllProject";
import FilterTag from "../FilterTag";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Sentiment() {
    return (
        <>
            <Grid className="sentiment">
                <Grid className="overrall">
                    <Grid className="top">
                        <Typography>Overrall Sentiment</Typography>
                        <Button
                            variant="outlined"
                            className="btn-export"
                            startIcon={<CloudDownloadOutlinedIcon />}
                        >
                            Export
                        </Button>
                    </Grid>
                    <Grid className="progress-sort">
                        <Typography>Positive</Typography>
                        <Typography>Neutral</Typography>
                        <Typography>Negative</Typography>
                    </Grid>
                    <Grid className="progress">
                        <ProgressBar style={{ width: "100%" }}>
                            <ProgressBar variant="success" now={60} key={1} />
                            <ProgressBar variant="warning" now={40} key={2} />
                            <ProgressBar variant="danger" now={20} key={3} />
                        </ProgressBar>
                    </Grid>
                    <Grid className="progress-status">
                        <Typography>830 (60%)</Typography>
                        <Typography>604 (40%)</Typography>
                        <Typography>320 (20%)</Typography>
                    </Grid>
                </Grid>
                <Grid className="overtime">
                    <Grid className="top">
                        <Typography>Sentiment over time</Typography>
                        <Button
                            variant="outlined"
                            startIcon={<CloudDownloadOutlinedIcon />}
                        >
                            Export
                        </Button>
                    </Grid>
                    <Graph />
                </Grid>
                <AllProject />
            </Grid>
            <Grid className="filter">
                <Grid>
                    <Typography>Filters</Typography>
                    <Grid className="filter-date">
                        <Typography>By Sentiment</Typography>
                        <FormGroup className="sen-opt">
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
                        <Typography>By Dates</Typography>
                        <DatePickerComponent
                            id="datepicker"
                            placeholder="Select a Date"
                        />
                        <FilterTag />
                        <Button className="btn-filter">Apply Filters</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
