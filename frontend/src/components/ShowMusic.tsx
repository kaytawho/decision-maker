import { ThemeProvider } from "@emotion/react";
import { Button, Card, CardActions, CardContent, CardMedia, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import theme from "./Theme";

interface MusicQueryProps {
    musicQuery: string;
}

export function ShowMusic(props: MusicQueryProps) {
    const [musicResult, setMusicResult] = useState<any>("");

    function getPlaylist() {
        axios
            .get(`http://localhost:3000/api/deezer/search/playlist?q=${props.musicQuery}`)
            .then((response) => {
                setMusicResult(response.data);
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
            {musicResult ? (
                <div>
                    <ThemeProvider theme={theme}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={musicResult.picture_big}
                                alt={musicResult.picture_big}
                            />
                            <CardContent>
                                <Typography variant="h5">{musicResult.title}</Typography>
                            </CardContent>
                            <CardActions>
                                <Box m="auto">
                                    <Button
                                        sx={{ my: 1, mx: 1 }}
                                        style={{ backgroundColor: '#536DFE' }}
                                        variant="contained"
                                        href={musicResult.link}
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
                <div>No playlist here</div>
            )}
        </div>
    )
}
