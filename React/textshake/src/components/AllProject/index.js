import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import vecImg from "../../images/Vector.png";
import calendarImg from "../../images/calendar.png";
import projectData from "../../json/project.json";
import "./index.css";

export default function AllProject() {
    const proData = projectData["summary"];
    return (
        <Grid className="all-pro">
            <Grid className="all-size">
                <Typography>Sentiment for All Records (1,382)</Typography>
                <Button
                    sx={{
                        border: "1px solid #EC4D61",
                        color: "#EC4D61",
                    }}
                    variant="outlined"
                    startIcon={<CloudDownloadOutlinedIcon />}
                >
                    Export
                </Button>
            </Grid>
            <Grid className="all-list">
                {proData.map((item, inex) => (
                    <Grid className="each-pro">
                        <Grid className={`${item["sort"]}`}>
                            <Typography>{item["review"]}</Typography>
                        </Grid>
                        <Typography className="detail">
                            {item["detail"]}
                        </Typography>
                        <Typography className="more">Read more...</Typography>
                        <Grid className="vector">
                            <img src={vecImg} alt="vectory" />
                            <Typography>{item["tag"]}</Typography>
                        </Grid>
                        <Grid className="calendar">
                            <img src={calendarImg} alt="vectory" />
                            <Typography>{item["date"]}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
