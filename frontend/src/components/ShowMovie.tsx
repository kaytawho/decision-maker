import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieResult, setmovieResult] = useState<any>("");
    console.log(movieResult)

    function getMovie() {
        axios
            .get(`http://localhost:3000/api/omdb/?s=${props.movieQuery}`)
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
                    <Typography variant="h5"> {movieResult.Title} </Typography>
                    <img src="" height={250} width={460} alt={movieResult.Poster}/><br />
                </div>
            ) : (
                <div>No movie here </div>
            )}
        </div>
    )
}