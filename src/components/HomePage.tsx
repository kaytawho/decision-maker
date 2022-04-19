import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'white',
}));


export function Home() {
    return (
        <div>
            <Typography variant="h1">Decision fatigue?</Typography>
            <Typography variant="h4">Let's do the heavy lifting for you</Typography>
            <Link to="decide-food">
                <button>Decide what to cook</button>
            </Link><br />
            <Link to="decide-music">
                <button>Decide what to listen to</button>
            </Link><br />
            <Link to="/">
                <button>Third button</button>
            </Link>
    </div>
    );
}