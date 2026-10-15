import { Grid, Typography } from "@mui/material";
import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";

const recipeList = () => {
    if (recipes.length === 0) {
        return <Typography> Aucune recette pour le moment. </Typography>;
    }

    return (
        <Grid container spacing={2}>
            {recipes.map((recipe) => (
                <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <RecipeCard recipe={recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default recipeList;
