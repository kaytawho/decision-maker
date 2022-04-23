import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { ShowMovie } from "./ShowMovie";

export function DecideMovie() {
    const [movieQuery, setMovieQuery] = useState("");
    const [currentMovieQuery, setCurrentMovieQuery] = useState("moonlight");

    return (
        <div>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                <Paper style={{ height: 240, width: 400, background: "white", color: "black", padding: 20}}>
                    <Typography variant="h5">Pick me an movie tagged: </Typography>
                    <input name="movie-query" onChange={(event: any) => {
                        setMovieQuery(event.target.value);
                        console.log(event.target.value)
                    }}></input>
                    <button onClick={(event: any) => {
                        setCurrentMovieQuery(movieQuery)
                    }}>Decide</button>
                </Paper>
                </Grid>
                <Grid item>
                <Paper style={{ height: 400, width: 500, background: "white", color: "black", padding: 20}}>
                    <ShowMovie movieQuery={currentMovieQuery}/>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}