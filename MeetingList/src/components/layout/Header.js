import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import RouterContext from "../../context/RouterContext";

export default function Header() {
    const history = useHistory();
    const { pageRouter, setPageRouter } = useContext(RouterContext);

    const prevPage = () => {
        history.goBack();
    };

    return (
        <div
            className="header"
            style={{
                width: "73%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            {pageRouter.router === "/" ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        visibility: "hidden",
                    }}
                    onClick={prevPage}
                >
                    <div>
                        <i
                            class="fa fa-long-arrow-left"
                            aria-hidden="true"
                            style={{ paddingRight: "10px" }}
                        ></i>
                    </div>
                    <p className="prev">Indietro</p>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={prevPage}
                >
                    <div>
                        <i
                            class="fa fa-long-arrow-left"
                            aria-hidden="true"
                            style={{ paddingRight: "10px" }}
                        ></i>
                    </div>

                    <p className="prev" style={{ cursor: "pointer" }}>
                        Indietro
                    </p>
                </div>
            )}
            <div
                style={{
                    color: "#ff5a60",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                }}
            >
                Organizzazione A
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0px",
                        borderBottom: "2px solid" + pageRouter.homebordercolor,
                    }}
                >
                    <div>
                        <i
                            class="fa fa-home"
                            aria-hidden="true"
                            style={{ color: pageRouter.homecolor }}
                        ></i>
                    </div>
                    <p
                        style={{
                            paddingLeft: "10px",
                            fontWeight: "bold",
                            color: pageRouter.hometitlecolor,
                        }}
                    >
                        Homepage
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0px",
                        borderBottom:
                            "2px solid" + pageRouter.settingbordercolor,
                    }}
                >
                    <div>
                        <i
                            style={{
                                paddingLeft: "30px",
                                paddingRight: "10px",
                                color: pageRouter.settingcolor,
                            }}
                            class="fa fa-cog"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <p
                        style={{
                            fontWeight: "bold",
                            color: pageRouter.settingtitlecolor,
                        }}
                    >
                        Settings
                    </p>
                </div>
            </div>
        </div>
    );
}
