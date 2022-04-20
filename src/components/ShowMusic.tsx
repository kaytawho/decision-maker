import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

// const api_key = process.env.REACT_APP_DEEZER_KEY


interface MusicQueryProps {
    musicQuery: string;
}

export function ShowMusic(props: MusicQueryProps) {
    const [musicQuery, setMusicQuery] = useState<any>(null);

    useEffect(() => {
        axios
            .get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/playlist?q=${props.musicQuery}`)
            .then((response) => {
                setMusicQuery(response.data);
                console.log(response.data)
            });
    }, [props.musicQuery]);

    return (
        <div>
            {musicQuery ? (
                <div>
                    <Typography variant="h5">{musicQuery.data[0].title}</Typography>
                    <img src={musicQuery.data[0].picture_big} height={250} width={460} alt={musicQuery.data[0].title}/><br />
                    <a href={musicQuery.data[0].link} target="_blank" rel="noopener noreferrer">Listen</a><br />
                    <button> Next playlist</button>
                </div>
            ) : (
                <div>No playlist here</div>
            )}
        </div>
    )
}
