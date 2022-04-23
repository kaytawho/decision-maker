import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface MusicQueryProps {
    musicQuery: string;
}

export function ShowMusic(props: MusicQueryProps) {
    const [musicQuery, setMusicQuery] = useState<any>(null);
    console.log(musicQuery)


    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/deezer/search/playlist?q=${props.musicQuery}`)
            .then((response) => {
                setMusicQuery(response.data);
                console.log(response.data)
            });
    }, [props.musicQuery]);

    return (
        <div>
            {musicQuery ? (
                <div>
                    <Typography variant="h5">{musicQuery.title}</Typography>
                    <img src={musicQuery.picture_big} height={250} width={460} alt={musicQuery.title}/><br />
                    <a href={musicQuery.link} target="_blank" rel="noopener noreferrer">Listen</a><br />
                    <button> Next playlist</button>
                </div>
            ) : (
                <div>No playlist here</div>
            )}
        </div>
    )
}
