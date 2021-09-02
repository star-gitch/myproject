import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import RouterContext from "../../context/RouterContext";
import { useSelector } from "react-redux";
import "../../final.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function FinalEnd() {
    let { id, refname } = useParams();
    const [finalInfo, setFinalInfo] = useState([]);
    const history = useHistory();
    const { pageRouter, setPageRouter } = useContext(RouterContext);
    const meetingId = useSelector((state) => state.meetingId);
    const [filterOption, setFilterOption] = React.useState({
        acq: true,
        ipo: true,
        comp: true,
    });
    const [showOption, setShowOption] = React.useState({
        acq: "",
        ipo: "",
        comp: "",
    });

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (event) => {
        var selectedOption = event.target.name;
        var checkedStatus = event.target.checked;
        setFilterOption({
            ...filterOption,
            [selectedOption]: checkedStatus,
        });

        // Display column according to selected option.
        var showStatus = checkedStatus ? "" : "none";
        setShowOption({ ...showOption, [selectedOption]: showStatus });
    };
    useEffect(() => {
        var jsonData = require(`../json/sample_${meetingId}.json`);
        const cardList = Object.entries(jsonData)[4][1][id]["components"][
            refname
        ]["fields"];
        const finalList = Object.entries(cardList);

        var items = [];
        for (var i = 0; i < finalList.length; i++) {
            var item = {
                label: finalList[i][1]["label"],
                value: finalList[i][1]["value"],
                reftype: refname,
                table: finalList[i][1]["table"],
            };
            items.push(item);
        }

        setFinalInfo(items);

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

    return (
        <div className="content">
            {finalInfo.map((item, index) =>
                item.reftype !== "relazioneannotazioni" ? (
                    item.table && item.label !== "Allegati" ? (
                        item.label === "Budget dell'iniziativa Entrate" ? (
                            <>
                                <div
                                    style={{
                                        textAlign: "right",
                                        padding: "20px",
                                        background: "white",
                                    }}
                                >
                                    <Button
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        variant="contained"
                                        onClick={handleClick}
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Open Menu
                                    </Button>
                                    <StyledMenu
                                        id="customized-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <StyledMenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={
                                                            filterOption.acq
                                                        }
                                                        onChange={handleChange}
                                                        name="acq"
                                                        color="#90caf9"
                                                    />
                                                }
                                                label="Acquisite"
                                            />
                                        </StyledMenuItem>
                                        <StyledMenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={
                                                            filterOption.ipo
                                                        }
                                                        onChange={handleChange}
                                                        name="ipo"
                                                        color="#90caf9"
                                                    />
                                                }
                                                label="Ipotizzate"
                                            />
                                        </StyledMenuItem>
                                        <StyledMenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={
                                                            filterOption.comp
                                                        }
                                                        onChange={handleChange}
                                                        name="comp"
                                                        color="#90caf9"
                                                    />
                                                }
                                                label="Complessive"
                                            />
                                        </StyledMenuItem>
                                    </StyledMenu>
                                </div>
                                <table className={item.label}>
                                    <tr>
                                        <td colspan="4">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: item.label,
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    {item.table.map((subitem, index) =>
                                        index !== 0 ? (
                                            <tr>
                                                <td>{subitem[3]}</td>
                                                <td
                                                    style={{
                                                        display: showOption.acq,
                                                    }}
                                                >
                                                    {subitem[4]}
                                                </td>
                                                <td
                                                    style={{
                                                        display: showOption.ipo,
                                                    }}
                                                >
                                                    {subitem[5]}
                                                </td>
                                                <td
                                                    style={{
                                                        display:
                                                            showOption.comp,
                                                    }}
                                                >
                                                    {subitem[6]}
                                                </td>
                                            </tr>
                                        ) : (
                                            <></>
                                        )
                                    )}
                                </table>
                            </>
                        ) : (
                            <table className={item.label}>
                                <tr>
                                    <td colspan="4">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.label,
                                            }}
                                        />
                                    </td>
                                </tr>
                                {item.table.map((subitem, index) =>
                                    index !== 0 ? (
                                        <tr>
                                            <td>{subitem[3]}</td>
                                            <td>{subitem[4]}</td>
                                            <td>{subitem[5]}</td>
                                            <td>{subitem[6]}</td>
                                        </tr>
                                    ) : (
                                        <></>
                                    )
                                )}
                            </table>
                        )
                    ) : item.label === "Allegati" ? (
                        <div
                            style={{
                                textAlign: "left",
                                paddingLeft: "25px",
                                paddingRight: "25px",
                                background: "white",
                                paddingTop: "20px",
                                borderBottom: "1px solid rgb(239, 239, 239)",
                            }}
                            key={index}
                        >
                            <p
                                style={{
                                    color: "rgb(254, 173, 176)",
                                    fontWeight: "bold",
                                    marginTop: "0px",
                                }}
                            >
                                {item.label}:
                            </p>
                            <div
                                style={{
                                    paddingBottom: "20px",
                                    color: "rgb(75, 3, 7)",
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: item.value,
                                }}
                            />
                            {item.table ? (
                                item.table.map((extraitem, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            paddingBottom: "20px",
                                            color: "rgb(75, 3, 7)",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: extraitem[3],
                                        }}
                                    />
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <div
                            style={{
                                textAlign: "left",
                                paddingLeft: "25px",
                                paddingRight: "25px",
                                background: "white",
                                paddingTop: "20px",
                                borderBottom: "1px solid rgb(239, 239, 239)",
                            }}
                            key={index}
                        >
                            <p
                                style={{
                                    color: "rgb(254, 173, 176)",
                                    fontWeight: "bold",
                                    marginTop: "0px",
                                }}
                            >
                                {item.label}:
                            </p>

                            <div
                                style={{
                                    paddingBottom: "20px",
                                    color: "rgb(75, 3, 7)",
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: item.value,
                                }}
                            />
                        </div>
                    )
                ) : (
                    <div
                        style={{
                            textAlign: "left",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            background: "white",
                            paddingTop: "20px",
                            borderBottom: "1px solid rgb(239, 239, 239)",
                        }}
                        key={index}
                    >
                        <p
                            style={{
                                color: "rgb(254, 173, 176)",
                                fontWeight: "bold",
                                marginTop: "0px",
                            }}
                        >
                            {item.label}:
                        </p>
                        <div
                            style={{
                                paddingBottom: "20px",
                                color: "rgb(75, 3, 7)",
                            }}
                            dangerouslySetInnerHTML={{
                                __html: item.value,
                            }}
                        />
                        {item.table ? (
                            item.table.map((extraitem, index) => (
                                <div
                                    key={index}
                                    style={{ paddingBottom: "20px" }}
                                    dangerouslySetInnerHTML={{
                                        __html: extraitem[3],
                                    }}
                                />
                            ))
                        ) : (
                            <></>
                        )}
                    </div>
                )
            )}
        </div>
    );
}
