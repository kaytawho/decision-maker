import { Button, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Typography } from "@mui/material";
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

    const handleDishChange = (event: SelectChangeEvent) => {
        setDishType(event.target.value as string);
    };

    const handleDietChange = (event: SelectChangeEvent) => {
        setDiet(event.target.value as string);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                    <Paper style={{ height: 360, width: 400, background: "white", color: "black", padding: 20 }}>
                        <Typography variant="h5">I want:</Typography><br />
                            <FormControl fullWidth size="medium">
                                <InputLabel id="dishType">Meal</InputLabel>
                                <Select 
                                    sx={{ input: { color: 'black' }}}
                                    value={dishType}
                                    labelId="dishType"
                                    id="dishType"
                                    label="Meal"
                                    onChange={handleDishChange}>
                                    <MenuItem value="breakfast">Breakfast</MenuItem>
                                    <MenuItem value="lunch">Lunch</MenuItem>
                                    <MenuItem value="dinner">Dinner</MenuItem>
                                    <MenuItem value="dessert">Dessert</MenuItem>
                                
                                </Select>
                            </FormControl><br />
                                <Typography variant="h5" style={{ paddingTop: 20, paddingBottom: 20}}>Pick me a recipe that is:</Typography>
                                    <FormControl fullWidth size="medium">
                                        <InputLabel id="diet">Diet</InputLabel>
                                                <Select 
                                                    value={diet}
                                                    labelId="diet"
                                                    label="diet"
                                                    id="diet"
                                                    onChange={handleDietChange}>
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
                                                    >Choose my meal</Button>
                                    </FormControl>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ height: "100%", width: 500, background: "white", color: "black", padding: 20}}>
                        <ShowFood dishType={currentDishType} diet={currentDiet} />
                    </Paper>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    );
}
