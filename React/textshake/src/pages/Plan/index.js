import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import checkImg from "../../images/check.png";
import planinfo from "../../json/plan";
import "./index.css";

export default function Plan() {
    const [premiumInfo, setPremiumInfo] = useState([]);
    const [freeInfo, setFreeInfo] = useState([]);
    const [premiumPrice, setPremiumPrice] = useState(19.99);
    const [planPeriod, setPlanPeriod] = useState("/month");

    useEffect(() => {
        setPremiumInfo(planinfo["premium"]);
        setFreeInfo(planinfo["free"]);
    }, []);
    const setAnnually = () => {
        setPremiumPrice(215);
        setPlanPeriod("/year");
    };
    const setMonthly = () => {
        setPremiumPrice(19.99);
        setPlanPeriod("/month");
    };
    return (
        <Grid className="plan" xs={12} sm={12} md={5} lg={5}>
            <Grid className="plan-sel" xs={12} sm={12}>
                <Typography>Pick your plan</Typography>
                <Grid>
                    <Button
                        xs={12}
                        sm={12}
                        className="monthly-btn"
                        variant="outlined"
                        onClick={setMonthly}
                    >
                        Monthly
                    </Button>
                    <Button
                        xs={12}
                        sm={12}
                        className="annually-btn"
                        variant="outlined"
                        onClick={setAnnually}
                    >
                        Annually(Save 10%)
                    </Button>
                </Grid>
            </Grid>
            <Grid className="plan-detail" container>
                <Grid className="premium" xs={12} sm={12} md={12} lg={6}>
                    <Typography>Premium</Typography>
                    <Typography>
                        $<span className="special-price">{premiumPrice}</span>
                        {planPeriod}
                    </Typography>
                    <Typography>Start your 14 day free trial</Typography>
                    <Grid className="item-block">
                        {premiumInfo.map((value, index) => (
                            <Grid className="item" key={index}>
                                <img src={checkImg} alt="check" />
                                <Typography>{value}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid className="free" xs={12} sm={12} md={12} lg={6}>
                    <Typography>Free</Typography>
                    <Typography>
                        $<span className="special-price">0.00</span>
                        /month
                    </Typography>
                    <Typography>Start your 14 day free trial</Typography>
                    <Grid className="item-block">
                        {freeInfo.map((value, index) => (
                            <Grid className="item" key={index}>
                                <img src={checkImg} alt="check" />
                                <Typography>{value}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="action-btn">
                <Button
                    className="get-monthly"
                    variant="outlined"
                    xs={12}
                    sm={12}
                >
                    Get Premium
                </Button>
                <Button className="get-free" variant="outlined" xs={12} sm={12}>
                    Get Free
                </Button>
            </Grid>
            <Grid className="trial">
                <Typography>
                    <Link to="#">Terms and conditions apply.</Link> 14-day trial
                    not available for users
                </Typography>
                <Typography>who have already tried Premium.</Typography>
            </Grid>
        </Grid>
    );
}
