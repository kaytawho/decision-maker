import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from "@mui/material";
import { textAlign } from '@mui/system';


export function Home() {
    return (
        <div>
            <Paper>
                <Grid container padding={10} justifyContent="center">
                    <Grid item sx={{ height: "50%", width: 450 }}>
                        <Typography variant="h1" textAlign="left">Decision fatigue?</Typography>
                    </Grid>
                    <Grid item sx={{ height: "50%", width: 400, alignItems: 'center'}} >
                        <Typography variant="h3" textAlign="left">Let's do the heavy lifting for you.</Typography>
                        <Typography variant="h6" textAlign="left" sx={{ mt: 2}}>This is where life's most important decisions are made.</Typography>
                        <Button variant="outlined" href="/decide-food" sx={{ mt: 2, backgroundColor: '#009688', color: 'white' }}>Get started </Button>
                    </Grid>
                </Grid>
            </Paper>
    </div>
    );
}

