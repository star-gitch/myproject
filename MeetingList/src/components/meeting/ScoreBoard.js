import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#f5f5f5",
        padding: "30px 13%",
        minHeight: "calc(100vh - 136px)",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "100%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ScoreBoard() {
    let { id } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [scoreBoard, setScoreBoard] = useState([]);
    const history = useHistory();
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const meetingId = useSelector((state) => state.meetingId);

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor:
                theme.palette.grey[theme.palette.type === "light" ? 300 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: "#5cb85c",
        },
    }))(LinearProgress);

    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const keyValuScores = Object.entries(jsonData)[4][1];
        var subScores = [];
        for (var i = 0; i < keyValuScores[id].scoreboard.scores.length; i++) {
            var subScore = [];
            var parentScoreName =
                keyValuScores[id].scoreboard.scores[i]["items1Level"][0][
                    "label"
                ];
            var parentScoreMark =
                keyValuScores[id].scoreboard.scores[i]["items1Level"][0][
                    "number"
                ];
            var childScores = [];
            for (
                var j = 0;
                j <
                keyValuScores[id].scoreboard.scores[i]["items2Level"].length;
                j++
            ) {
                var childScore = {
                    childScoreName:
                        keyValuScores[id].scoreboard.scores[i]["items2Level"][
                            j
                        ]["label"],
                    childScoreMark:
                        keyValuScores[id].scoreboard.scores[i]["items2Level"][
                            j
                        ]["number"],
                };
                childScores.push(childScore);
            }
            subScore = {
                parentScoreName: parentScoreName,
                parentScoreMark: parentScoreMark,
                child: childScores,
            };
            subScores.push(subScore);
        }
        setScoreBoard(subScores);
        setPageRouter({
            router: history.location.pathname,
            homecolor: "#879497",
            settingcolor: "#FF5A60",
            homebordercolor: "#FFFFFF",
            settingbordercolor: "#FF5A60",
            hometitlecolor: "#879497",
            settingtitlecolor: "black",
        });
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.root}>
            {scoreBoard.map((item, index) => (
                <Accordion
                    expanded={expanded === item.parentScoreName}
                    onChange={handleChange(item.parentScoreName)}
                    key={index}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alingItems: "center",
                                }}
                            >
                                <p>{item.parentScoreName}</p>
                                <p>{item.parentScoreMark}/10</p>
                            </div>
                            <BorderLinearProgress
                                variant="determinate"
                                value={item.parentScoreMark * 10}
                            />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.child.map((subitem, index) => (
                                <div key={index}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alingItems: "center",
                                        }}
                                    >
                                        <p>{subitem.childScoreName}</p>
                                        <p>{subitem.childScoreMark}/10</p>
                                    </div>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        value={subitem.childScoreMark * 10}
                                    />
                                </div>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
