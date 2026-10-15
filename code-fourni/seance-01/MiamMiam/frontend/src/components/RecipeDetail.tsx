import { CardMedia } from "@mui/material";
import type { Recipe } from "../models/recipe";

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
        <div>
            {recipe.imageUrl && (
                <CardMedia component="img"width="200"height="150"image={recipe.imageUrl}alt={recipe.title}/>
            )}

            <h2>{recipe.title}</h2>

            {recipe.description && <p>{recipe.description}</p>}

            <p>{recipe.prepTime + recipe.cookTime} min</p>

            <p>Portions : {recipe.servings}</p>

            <h3>Ingrédients</h3>

            <ul>
            {recipe.ingredients.map((ing) => (
                <li key={ing.name}>
                    {ing.quantity}
                    {ing.unit}
                    {ing.name}
                </li>
                ))}
            </ul>

            <h3>Étapes</h3>
            <ol>
                {recipe.steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;