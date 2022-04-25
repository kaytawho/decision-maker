import { ThemeProvider } from "@emotion/react";
import { Button, Card, CardActions, CardContent, CardMedia, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import theme from "./Theme";

interface FoodProps {
    diet: string;
    dishType: string;
}

export function ShowFood(props: FoodProps) {
    const [recipe, setRecipe] = useState<any>(null);

    function getRecipe() {
        axios
            .get(`/api/spoonacular/recipes/random?limitLicense=true&tags=${props.diet},${props.dishType}&number=1`)
            .then((response) => {
                setRecipe(response.data);
            });
    }

    useEffect(() => {
        if (props.diet && props.dishType !== '') {
            getRecipe()
        }
    }, [props.diet, props.dishType]);

    return (
        <div>
            {recipe ? (
                <div>
                    <ThemeProvider theme={theme}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={recipe.recipes[0]["image"]}
                                alt={recipe.recipes[0]["image"]}
                                />
                                <CardContent>
                                    <Typography variant="h5">{recipe.recipes[0]["title"]}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Box m="auto">
                                        <Button
                                            sx={{ my: 1, mx: 1 }}
                                            style={{ backgroundColor: '#536DFE' }}
                                            variant="contained"
                                            href={recipe.recipes[0]["spoonacularSourceUrl"]}
                                            target="_blank"
                                        > Make recipe</Button>
                                        <Button
                                            sx={{ my: 1, mx: 1 }}
                                            style={{ backgroundColor: '#536DFE' }}
                                            variant="contained"
                                            onClick={getRecipe}
                                        > Next recipe</Button>
                                    </Box>
                                </CardActions>
                        </Card>
                    </ThemeProvider>
                </div>
            ) : (
                <div>No recipe here</div>
            )}
        </div>
    )
}