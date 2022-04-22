import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface MusicQueryProps {
    musicQuery: string;
}

export function ShowMusic(props: MusicQueryProps) {
    const [musicQuery, setMusicQuery] = useState<any>(null);

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
