import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from "@mui/material";
import { textAlign } from '@mui/system';


export function Home() {
    return (
        <div>
            <Paper>
                <Grid container padding={5} justifyContent="center">
                    <Grid item sx={{ height: "50%", width: 450 }}>
                        <Typography variant="h1" textAlign="left">Decision fatigue?</Typography>
                            <Typography variant="h4" textAlign="left">Let's do the heavy lifting for you.</Typography>
                                    <Button variant="outlined" href="/decide-food" sx={{ mt: 2, backgroundColor: '#009688', color: 'white' }}>Get started </Button>
                                        </Grid>
                                            <Grid item sx={{ height: "50%", width: 400, alignItems: 'center'}} >
                                                <img src={require("./static/people-decisions.png")} alt="illustration of four people" width="400" height="400" />
                                            </Grid>
                                        </Grid>
            </Paper>
    </div>
    );
}

