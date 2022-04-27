import { ThemeProvider } from "@emotion/react";
import { Button, Grid, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import theme from "./Theme";
import FormControl from '@mui/material/FormControl';
import { ShowMovie } from "./ShowMovie";

export function DecideMovie() {
    const [movieQuery, setMovieQuery] = useState("moonlight");
    const [currentMovieQuery, setCurrentMovieQuery] = useState("moonlight");

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                    <Paper style={{ height: 210, width: 400, background: "white", color: "black", padding: 20}}>
                        <Typography variant="h5" style={{ paddingBottom: 20}}>Pick me an movie tagged: </Typography>
                            <FormControl fullWidth size="medium">
                                <InputLabel id="movie-query"></InputLabel>
                                <TextField 
                                    sx={{ input: { color: 'black' }}}
                                    name="movie-query" 
                                    onChange={(event: any) => {
                                    setMovieQuery(event.target.value);
                                }}></TextField>
                                <Button 
                                    sx={{ mt: 2 }}
                                    style={{ backgroundColor: '#536DFE' }}
                                    variant="contained"
                                    onClick={(event: any) => {
                                        setCurrentMovieQuery(movieQuery)
                                }}>Decide</Button>
                            </FormControl>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ height: "100%", width: 500, background: "white", color: "black", padding: 20}}>
                        <ShowMovie movieQuery={currentMovieQuery}/>
                    </Paper>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}