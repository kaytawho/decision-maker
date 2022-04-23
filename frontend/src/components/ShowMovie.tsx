import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieQuery, setMovieQuery] = useState<any>("");
    console.log(movieQuery)

    // http://localhost:3000/api/themoviedb/3/search/movie?api_key=bdd2d7954699bd994d5dba7a8665e5ce&query=jaws

    function getMovie() {
        axios
            .get(`http://localhost:3000/api/themoviedb/3/search/movie?query=${props.movieQuery}`)
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
                    <Typography variant="h5"> {movieQuery.title} </Typography>
                    <img src="" height={250} width={460} alt={movieQuery.title}/><br />
                    <Typography variant="body1"> {movieQuery.overview}</Typography>
                </div>
            ) : (
                <div>No movie here </div>
            )}
        </div>
    )
}