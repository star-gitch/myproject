import React, { useState, useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import Sidebar from "../../components/Sidebar";
import Grid from "@mui/material/Grid";
import DataBlock from "../../components/DataBlock";
import Sentiment from "../../components/Sentiment";
import Frequency from "../../components/Frequency";
import "./index.css";
import { useSelector } from "react-redux";

export default function SingleProject() {
    const selBlock = useSelector((state) => state.data.currentData);

    return (
        <Grid className="content" md={11}>
            <ProjectHeader />
            <Grid className="data-part" md={12}>
                <Sidebar />
                {selBlock === "data" && <DataBlock />}
                {selBlock === "sentiment" && <Sentiment />}
                {selBlock === "frequency" && <Frequency />}
            </Grid>
        </Grid>
    );
}
