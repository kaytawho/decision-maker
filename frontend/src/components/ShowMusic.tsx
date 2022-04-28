import { ThemeProvider } from "@emotion/react";
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import theme from "./Theme";

interface MusicQueryProps {
    musicQuery: string;
}

export function ShowMusic(props: MusicQueryProps) {
    const [musicQuery, setMusicQuery] = useState<any>(""); // change to musicResult

    function getPlaylist() {
        axios
            .get(`/api/deezer/search/playlist?q=${props.musicQuery}`)
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
                    <ThemeProvider theme={theme}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={musicQuery.picture_big}
                                alt={musicQuery.picture_big}
                            />
                            <CardContent>
                                <Typography variant="h5">{musicQuery.title}</Typography>
                            </CardContent>
                            <CardActions>
                                <Box m="auto">
                                    <Button
                                        sx={{ my: 1, mx: 1 }}
                                        style={{ backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        href={musicQuery.link}
                                        target="_blank"
                                    >Listen</Button>
                                    <Button
                                        sx={{ my: 1, mx: 1 }}
                                        style={{ backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        onClick={getPlaylist}
                                    >Next playlist</Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </ThemeProvider>
                </div>
            ) : (
                <div>
                    <Box sx={{ display: "flex", justifyContent: "center"}}>
                        <CircularProgress sx={{ color: '#536DFE' }} /> 
                    </Box>
                </div>
            )}
        </div>
    )
}
