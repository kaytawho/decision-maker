import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "black",
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "white",
}));


export function Home() {
    return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        <Grid item xs>
        <Item>
            <h1>Decision fatigue?</h1>
            <p>Let's do the heavy lifting for you</p>
        </Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
            <Link to="decide-food">
                <button>Decide what to cook</button>
            </Link><br />
            <Link to="/">
                <button>Decide on another button</button>
            </Link><br />
            <Link to="/">
                <button>Third button</button>
            </Link>
        </Item>
        </Grid>
        </Grid>
        </Box>
    </div>
    );
}