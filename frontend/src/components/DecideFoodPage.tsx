import { Button, Grid, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useState } from "react";
import { ShowFood } from "./ShowFood";
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@emotion/react';
import theme from "./Theme";

export function DecideFood() {
    const [dishType, setDishType] = useState("breakfast");
    const [currentDishType, setCurrentDishType] = useState("breakfast");
    const [diet, setDiet] = useState("vegetarian");
    const [currentDiet, setCurrentDiet] = useState("vegetarian");
    
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                    <Paper style={{ height: "100%", width: 400, background: "white", color: "black", padding: 20 }}>
                        <FormControl fullWidth size="medium"></FormControl>
                            <InputLabel id="dishType">What type of meal are you after?</InputLabel>
                                <Typography variant="h5">I want: </Typography>
                                <Select 
                                    value={dishType}
                                    label="dishType"
                                    onChange={(event: any) => {
                                        setDishType(event.target.value)
                                    }}>
                                    <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                                    <MenuItem value={"lunch"}>Lunch</MenuItem>
                                    <MenuItem value={"dinner"}>Dinner</MenuItem>
                                    <MenuItem value={"dessert"}>Dessert</MenuItem>
                                </Select>
                    
                    <FormControl fullWidth size="medium"></FormControl>
                            <InputLabel id="dishType">Any dietary requirements?</InputLabel>
                                <Typography variant="h5">Pick me a recipe that is: </Typography>
                                    <Select 
                                        value={diet}
                                        label="diet"
                                        onChange={(event: any) => {
                                            setDiet(event.target.value);
                                        }}>
                                        <MenuItem value="gluten Free">Gluten Free</MenuItem>
                                        <MenuItem value="ketogenic">Ketogenic</MenuItem>
                                        <MenuItem value="vegetarian">Vegetarian</MenuItem>
                                        <MenuItem value="lacto-vegetarian">Lacto-Vegetarian</MenuItem>
                                        <MenuItem value="ovo-vegetarian">Ovo-Vegetarian</MenuItem>
                                        <MenuItem value="vegan">Vegan</MenuItem>
                                        <MenuItem value="paleo">Paleo</MenuItem>
                                        <MenuItem value="primal">Primal</MenuItem>
                                        <MenuItem value="low FODMAP">Low FODMAP</MenuItem>
                                        <MenuItem value="whole30">Whole30</MenuItem>     
                                    </Select>
                                    <br />
                                        <Button
                                            sx={{ mt: 2 }}
                                            style={{ backgroundColor: '#536DFE' }}
                                            variant="contained"
                                                onClick={(event: any) => {
                                                    setCurrentDishType(dishType);
                                                    setCurrentDiet(diet);
                                                }}
                                        >Choose my meal
                                        </Button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ height: 400, width: 500, background: "white", color: "black", padding: 20}}>
                        <ShowFood dishType={currentDishType} diet={currentDiet} />
                    </Paper>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    );
}
