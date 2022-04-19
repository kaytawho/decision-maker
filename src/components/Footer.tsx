import { Paper, Typography } from "@mui/material";

export function Footer() {
    return (
        <div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
            <Typography>Created by Kayta, 2022</Typography>
            </Paper>
        </div>
    )
}