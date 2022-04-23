import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieQuery, setMovieQuery] = useState<any>("");
    // const [movieImage, setMovieImage] = useState<any>("") // TODO
    console.log(movieQuery)

    function getMovie() {
        axios
            .get(`http://localhost:3000/api/themoviedb/3/search/movie?query=${props.movieQuery}`)
            .then((response) => {
                setMovieQuery(response.data);
            });
    }

    // TODO
    // function getMovieImage() {
    //     axios
    //         .get(`http://localhost:3000/api/themoviedb/3/configuration`)
    //         .then((response) => {
    //             setMovieImage(response.data);
    //         });
    // }

    useEffect(() => {
        if (props.movieQuery !== '') {
            getMovie()
            // getMovieImage()
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