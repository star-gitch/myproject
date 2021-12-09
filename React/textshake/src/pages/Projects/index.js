import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectHeader from "../../components/ProjectHeader/index";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProjectList from "../../json/project.json";
import { useHistory } from "react-router-dom";
import "./index.css";

export default function Projects() {
    const [projectList, setProjectList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        setProjectList(ProjectList["project"]);
    }, []);
    const goSingleProject = () => {
        history.push("/single-project");
    };
    return (
        <Grid className="content" md={11}>
            <ProjectHeader />
            <Grid md={8} className="pro-list" xs={12} sm={12}>
                <Typography>Projects you are working on</Typography>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 650 }}
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableBody>
                            {projectList.map((row, index) => (
                                <TableRow key={index} onClick={goSingleProject}>
                                    <TableCell>
                                        <img src={row["symbol"]} alt="logo" />
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        Created{row.publish}ago
                                    </TableCell>
                                    <TableCell align="right">
                                        <MoreVertIcon
                                            sx={{ color: "#EC4D61" }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
