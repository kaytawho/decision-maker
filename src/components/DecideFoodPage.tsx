import { useState } from "react";
import { ShowFood } from "./ShowFood";

export function DecideFood() {
    const [dishType, setDishType] = useState("breakfast");
    const [currentDishType, setCurrentDishType] = useState("breakfast");
    const [diet, setDiet] = useState("vegetarian");
    const [currentDiet, setCurrentDiet] = useState("vegetarian");
    
    return (
        <div>
            <p>I want: </p>
            <select name="dishType"
                    onChange={(event: any) => {
                    setDishType(event.target.value);
                }}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
            </select>

            <p>Pick me a recipe that is: </p>
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
            <ShowFood dishType={currentDishType} diet={currentDiet} />
        </div>
    );
}
