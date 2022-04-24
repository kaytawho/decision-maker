import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieQuery, setMovieQuery] = useState<any>("");
    console.log(movieQuery)

    function getMovie() {
        axios
            .get(`http://localhost:3000/api/omdb/?s=${props.movieQuery}`)
            .then((response) => {
                setMovieQuery(response.data);
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
            { movieQuery ? (
                <div>
                    <Typography variant="h5"> {movieQuery.Title} </Typography>
                    <img src="" height={250} width={460} alt={movieQuery.Poster}/><br />
                </div>
            ) : (
                <div>No movie here </div>
            )}
        </div>
    )
}