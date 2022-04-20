import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Grid, Typography } from "@mui/material";


export function Home() {
    return (
        <div>
            <Paper>
                <Grid container spacing={2} padding={2} justifyContent="center">
                    <Grid item style={{ height: 240, width: 400, padding: 20}}>
                        <Typography variant="h1" textAlign="right">Decision fatigue?</Typography>
                        <Typography variant="h4" textAlign="right">Let's do the heavy lifting for you.</Typography>
                    </Grid>
                    <Grid item style={{ height: 240, width: 400, padding: 20}}>
                        <Link to="decide-food">
                            <button>Decide what to cook</button>
                            </Link><br />
                        <Link to="decide-music">
                            <button>Decide what to listen to</button>
                        </Link><br />
                        <Link to="/">
                            <button>Third button</button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
    </div>
    );
}