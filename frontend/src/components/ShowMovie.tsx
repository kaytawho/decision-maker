import { ThemeProvider } from "@emotion/react";
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import theme from "./Theme";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieResult, setmovieResult] = useState<any>("");
    console.log(movieResult)

    function getMovie() {
        axios
            .get(`/api/omdb/?s=${props.movieQuery}`)
            .then((response) => {
                setmovieResult(response.data);
                console.log('show movie:', response.data);
            });
    }

    useEffect(() => {
        if (props.movieQuery !== '') {
            getMovie()
    }
    }, [props.movieQuery]);

    return (
        <div>
            { movieResult ? (
                <div>
                    <ThemeProvider theme={theme}>
                        <Card>
                            <CardMedia 
                                component="img"
                                height="100%"
                                image={movieResult.Poster}
                                alt={movieResult.Poster}
                            />
                            <CardContent>
                                <Typography variant="h5"> {movieResult.Title} </Typography>
                                <Typography variant="body1">🎥 Released in {movieResult.Year} </Typography>
                            </CardContent>
                            <CardActions>
                                <Box m="auto">
                                    <Button
                                        sx={{ my: 1, mx: 1, backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        href={`https://www.imdb.com/title/${movieResult.imdbID}`}
                                        target="_blank"
                                    > Visit IMDB</Button>
                                    <Button
                                        sx={{ my: 1, mx: 1, backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        onClick={getMovie}
                                    > Next movie</Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </ThemeProvider>
                </div>
            ) : (
                <div>
                    <Box sx={{ display: "flex", justifyContent: "center"}}>
                        <CircularProgress sx={{ color: '#536DFE' }} /> 
                    </Box>
                </div>
            )}
        </div>
    )
}