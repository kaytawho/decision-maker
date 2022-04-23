import { useState } from "react";

interface MovieQueryProps {
    movieQuery: string;
}

export function ShowMovie(props: MovieQueryProps) {
    const [movieQuery, setMovieQuery] = useState<any>(null);
    console.log('Show movie:', movieQuery)
    return (
        <div>
            <p>Movie shown here</p>
        </div>
    )
}