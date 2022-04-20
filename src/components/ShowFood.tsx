import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_SPOONACULAR_KEY

interface FoodProps {
    diet: string;
    dishType: string;
}


export function ShowFood(props: FoodProps) {
    const [recipe, setRecipe] = useState<any>(null);

    useEffect(() => {
        axios
            .get(`https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${props.diet},${props.dishType}&=1&apiKey=${API_KEY}`)
            .then((response) => {
                setRecipe(response.data);
            });
    }, [props.diet, props.dishType]);

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