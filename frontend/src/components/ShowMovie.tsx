import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieQuery, setMovieQuery] = useState<any>("");

    function getMovie() {
        axios
            .get(`http://localhost:3000/api/themoviedb/3/search/movie/&query=${props.movieQuery}`)
            .then((response) => {
                setMovieQuery(response.data);
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
                    <Typography> Movie stuff here </Typography>
                    <Typography>{movieQuery.results} </Typography>
                </div>
            ) : (
                <div>No movie here </div>
            )}
        </div>
    )
}