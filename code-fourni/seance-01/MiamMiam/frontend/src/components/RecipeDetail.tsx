import { useState } from "react";
import { Button, CardMedia, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import type { Recipe } from "../models/recipe";

interface RecipeDetailProps {
    recipe: Recipe;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
    const [servings, setServings] = useState(recipe.servings);
    const increment = () => setServings((prev) => prev + 1);
    const decrement = () => setServings((prev) => prev - 1);

    return (
        <div>
            {recipe.imageUrl && (
                <CardMedia
                    component="img"
                    image={recipe.imageUrl}
                    alt={recipe.title}
                    sx={{
                        width: "100%",
                        height: { xs: 180, sm: 240, md: 300 },
                        objectFit: "cover",
                        mb: 2,
                    }}
                />
            )}

            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.1rem" },
                }}
            >
                {recipe.title}
            </Typography>

            {recipe.description && (
                <Typography variant="body1" color="text.secondary">
                    {recipe.description}
                </Typography>
            )}

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {recipe.prepTime + recipe.cookTime} min
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", mb: 3 }}
            >
                <Typography sx={{ fontWeight: 600 }}>
                    Portion : {servings} personnes
                </Typography>

                <Button onClick={decrement} disabled={servings <= 1}>
                    <Remove />
                </Button>
                <Button onClick={increment}>
                    <Add />
                </Button>
            </Stack>

            <Typography variant="h5" component="h2" gutterBottom>
                Ingrédients
            </Typography>

            <ul>
                {recipe.ingredients.map((ing) => (
                    <li key={ing.name}>
                        <Typography component="span" variant="body1">
                            {ing.quantity} {ing.unit} {ing.name}
                        </Typography>
                    </li>
                ))}
            </ul>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
                Étapes
            </Typography>

            <ol>
                {recipe.steps.map((step, index) => (
                    <li key={index}>
                        <Typography variant="body1" sx={{ mb: 0.5 }}>
                            {step}
                        </Typography>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;
