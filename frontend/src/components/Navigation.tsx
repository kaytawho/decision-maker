import * as React from 'react';
import { AppBar, Button, Paper, Toolbar, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";

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
                            <Item><Link to="/">Home</Link></Item>
                            <Item><Link to="/decide-food">Eat</Link></Item>
                            <Item><Link to="/decide-music">Listen</Link></Item>
                            <Item><Link to="/decide-movie">Watch</Link></Item>
                        </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
