import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface MusicQueryProps {
    musicQuery: string;
}

export function ShowMusic(props: MusicQueryProps) {
    const [musicQuery, setMusicQuery] = useState<any>(""); // change to musicResult
    console.log(musicQuery)

    function getPlaylist() {
        axios
            .get(`http://localhost:3000/api/deezer/search/playlist?q=${props.musicQuery}`)
            .then((response) => {
                setMusicQuery(response.data);
                console.log('the response on ShowMusic', response.data)
            });
    }
    useEffect(() => {
        if (props.musicQuery !== '') {
            getPlaylist()
        }

    }, [props.musicQuery]);

    return (
        <div>
            {musicQuery ? (
                <div>
                    <Typography variant="h5">{musicQuery.title}</Typography>
                    <img src={musicQuery.picture_big} height={250} width={460} alt={musicQuery.title}/><br />
                    <a href={musicQuery.link} target="_blank" rel="noopener noreferrer">Listen</a><br />
                    <button onClick={getPlaylist}> Next playlist</button>
                </div>
            ) : (
                <div>No playlist here</div>
            )}
        </div>
    )
}
