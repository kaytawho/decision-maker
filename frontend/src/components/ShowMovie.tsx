import { ThemeProvider } from "@emotion/react";
import { Button, Card, CardActions, CardContent, CardMedia, Icon, Typography } from "@mui/material";
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
                                height="250"
                                image={movieResult.Poster}
                                alt={movieResult.Poster}
                            />
                            <CardContent>
                                <Typography variant="h5"> {movieResult.Title} </Typography>
                            </CardContent>
                            <CardActions>
                                <Box m="auto">
                                    <Button
                                        sx={{ my: 1, mx: 1 }}
                                        style={{ backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        href={`https://www.imdb.com/title/${movieResult.imdbID}`}
                                        target="_blank"
                                    > Visit IMDB</Button>
                                    <Button
                                        sx={{ my: 1, mx: 1 }}
                                        style={{ backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        onClick={getMovie}
                                    > Next movie</Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </ThemeProvider>
                </div>
            ) : (
                <div>No movie here </div>
            )}
        </div>
    )
}