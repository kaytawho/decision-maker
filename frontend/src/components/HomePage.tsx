import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from "@mui/material";


export function Home() {
    return (
        <div>
            <Paper>
                <Grid container padding={5} justifyContent="center">
                    <Grid item sx={{ height: "100%", width: 450 }}>
                        <Typography variant="h1" textAlign="left">Decision fatigue?</Typography>
                            <Typography variant="h4" textAlign="left">Let's do the heavy lifting for you.</Typography>
                                    <Button variant="contained" href="/decide-food" sx={{ mt: 1, backgroundColor: '#536DFE' }}>Get started </Button>
                                        </Grid>
                                            <Grid item sx={{ height: "50%", width: 400, alignItems: 'center'}} >
                                                <img src={require("./static/people-decisions.png")} alt="illustration of four people" width="400" height="400" />
                                            </Grid>
                                        </Grid>
            </Paper>
    </div>
    );
}

