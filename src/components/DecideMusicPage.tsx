import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

export function DecideMusic() {
    const [album, setAlbum] = useState("");
    const [currentAlbum, setCurrentAlbum] = useState("disco");


    return (
        <div>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                <Paper style={{ height: 240, width: 400, background: "white", color: "black", padding: 20}}>
                    <Typography variant="h5">Pick me an album tagged: </Typography>
                    <input name="album" onChange={(event: any) => {
                        setAlbum(event.target.value);
                    }}></input>
                    <button onClick={(event: any) => {
                            setCurrentAlbum(album)
                            console.log(album)
                        }}>Decide</button>
                </Paper>
                </Grid>
                <Grid item>
                <Paper style={{ height: 400, width: 500, background: "white", color: "black"}}></Paper>
                </Grid>
            </Grid>
        </div>
    )
}