import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface FoodProps {
    diet: string;
    dishType: string;
}


export function ShowFood(props: FoodProps) {
    const [recipe, setRecipe] = useState<any>(null);

    return (
        <div>
            {recipe ? (
                <div>
                    <Typography variant="h5">{recipe.recipes[0]["title"]}</Typography>
                    <img src={recipe.recipes[0]["image"]} height={250} width={460} alt={recipe.recipes[0]["image"]}/><br />
                    <a href={recipe.recipes[0]["spoonacularSourceUrl"]} target="_blank" rel="noopener noreferrer">Make this recipe</a><br />
                    <button> Next recipe</button>
                </div>
            ) : (
                <div>No recipe here</div>
            )}
        </div>
    )
}