import React, { useState } from "react";
import DataTable from "../DataTable";
import FilterTag from "../FilterTag";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./index.css";

export default function DataBlock() {
    return (
        <>
            <Grid className="data-list">
                <Grid className="top-list" container>
                    <Typography className="data-size">
                        Data (1,382 records)
                    </Typography>
                    <Button
                        variant="outlined"
                        className="btn-export"
                        startIcon={<CloudDownloadOutlinedIcon />}
                    >
                        Export
                    </Button>
                </Grid>
                <Grid className="data-tbl">
                    <DataTable />
                </Grid>
            </Grid>
            <Grid className="filter">
                <Grid>
                    <Typography>Filters</Typography>
                    <Grid className="filter-date">
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
