import { ThemeProvider } from "@emotion/react";
import { Button, Grid, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ShowMusic } from "./ShowMusic";
import theme from "./Theme";
import FormControl from '@mui/material/FormControl';


export function DecideMusic() {
    const [musicQuery, setMusicQuery] = useState("disco");
    const [currentMusicQuery, setCurrentMusicQuery] = useState("disco");


    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                    <Paper style={{ height: 210, width: 400, background: "white", color: "black", padding: 20}}>
                        <Typography variant="h5" style={{ paddingBottom: 20}}>Pick me an playlist tagged: </Typography>
                            <FormControl fullWidth size="medium">
                                <InputLabel id="music-query"></InputLabel>
                                    <TextField 
                                        sx={{ input: { color: 'black' }}}
                                        name="music-query" 
                                        onChange={(event: any) => {
                                        setMusicQuery(event.target.value);
                                    }}></TextField>
                                    <Button 
                                        sx={{ mt: 2, backgroundColor: '#536DFE'  }}
                                        variant="contained"
                                        onClick={(event: any) => {
                                                setCurrentMusicQuery(musicQuery)
                                    }}>Decide</Button>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ height: "100%", width: 500, background: "white", color: "black", padding: 20}}>
                        <ShowMusic musicQuery={currentMusicQuery}/>
                    </Paper>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}