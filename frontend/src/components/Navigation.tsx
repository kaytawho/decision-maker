import * as React from 'react';
import { AppBar, Paper, Toolbar, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#000000',
}));

export function Navigation() {
    return (
        <div>
            <AppBar
                position="static"
                color="default"
                sx={{ color: 'white'}}
            >
                <Toolbar sx={{ flexWrap: 'wrap', backgroundColor: 'black', padding: 3}}>
                    <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        DECISI🤔N MAKER
                        <Typography variant="body2">Created by Kayta, 2022</Typography>
                    </Typography>
                        <Box 
                            sx={{
                                display: 'inline-flex',
                                justifyItems: 'flex-end',
                            }}>
                            <Item><a href="/">Home</a></Item>
                            <Item><a href="/decide-food">Eat</a></Item>
                            <Item><a href="/decide-music">Listen</a></Item>
                            <Item><a href="/decide-movie">Watch</a></Item>
                        </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
