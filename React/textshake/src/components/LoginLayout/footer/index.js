import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./index.css";

export default function Footer() {
    return (
        <footer>
            <div>
                <Grid item alignItems="center" container xs={12} sm={12} md={6}>
                    <Typography pl={1} className="copyright-date">
                        Textshake © 2021
                    </Typography>
                </Grid>
                <Grid item container className="policy" xs={12} sm={6}>
                    <Link href="#" underline="none">
                        Privacy
                    </Link>
                    <Link href="#" underline="none">
                        Security
                    </Link>
                    <Link href="#" underline="none">
                        Get in Touch
                    </Link>
                </Grid>
            </div>
        </footer>
    );
}
