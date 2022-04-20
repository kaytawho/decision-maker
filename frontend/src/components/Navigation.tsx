import { Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "black",
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "white",
}));

export function Navigation() {
    return (
        <div>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
                m: 1,
                borderRadius: 1,
                }}>
                <Item><a href="/">Home</a></Item>
                <Item><a href="/decide-food">Eat</a></Item>
                <Item><a href="/decide-music">Listen</a></Item>
                <Item>Watch</Item>
        </Box>
        </div>
    )
}
