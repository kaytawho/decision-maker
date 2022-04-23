import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { ShowMusic } from "./ShowMusic";

export function DecideMusic() {
    const [musicQuery, setMusicQuery] = useState("disco");
    const [currentMusicQuery, setCurrentMusicQuery] = useState("");


    return (
        <div>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                <Paper style={{ height: 240, width: 400, background: "white", color: "black", padding: 20}}>
                    <Typography variant="h5">Pick me an playlist tagged: </Typography>
                    <input name="music-query" onChange={(event: any) => {
                        setMusicQuery(event.target.value);
                    }}></input>
                    <button onClick={(event: any) => {
                        setCurrentMusicQuery(musicQuery)
                    }}>Decide</button>
                </Paper>
                </Grid>
                <Grid item>
                <Paper style={{ height: 400, width: 500, background: "white", color: "black", padding: 20}}>
                    <ShowMusic musicQuery={currentMusicQuery}/>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}