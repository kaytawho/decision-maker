import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { ShowFood } from "./ShowFood";

export function DecideFood() {
    const [dishType, setDishType] = useState("breakfast");
    const [currentDishType, setCurrentDishType] = useState("breakfast");
    const [diet, setDiet] = useState("vegetarian");
    const [currentDiet, setCurrentDiet] = useState("vegetarian");
    
    return (
        <div>
            <Grid container spacing={2} padding={2} justifyContent="center">
                <Grid item>
                    <Paper style={{ height: 240, width: 400, background: "white", color: "black", padding: 20}}>
                        <Typography variant="h5">I want: </Typography>
                        <select name="dishType"
                                onChange={(event: any) => {
                                setDishType(event.target.value);
                            }}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                        </select>

                        <Typography variant="h5">Pick me a recipe that is: </Typography>
                        <select name="diet" 
                                onChange={(event: any) => {
                                setDiet(event.target.value);
                            }}>
                            <option value="gluten Free">Gluten Free</option>
                            <option value="ketogenic">Ketogenic</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                            <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="paleo">Paleo</option>
                            <option value="primal">Primal</option>
                            <option value="low FODMAP">Low FODMAP</option>
                            <option value="whole30">Whole30</option>     
                        </select>
                        <br />
                        <button
                            onClick={(event: any) => {
                                setCurrentDishType(dishType);
                                setCurrentDiet(diet);
                            }}
                        >Choose my meal
                        </button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ height: 400, width: 500, background: "white", color: "black", padding: 20}}>
                        <ShowFood dishType={currentDishType} diet={currentDiet} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
