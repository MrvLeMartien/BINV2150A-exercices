import {
    Card,
    Chip,
    CardContent,
    CardMedia,
    Rating,
    Typography,
    Stack,
    CardActions,
} from "@mui/material";
import type { Recipe } from "../models/recipe";
import { categories } from "../data/categories";
import FavoriteButton from "./FavoriteButton";

export interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const categoryName = categories.find(
        (cat) => cat.id === recipe.categoryId,
    )?.name;

    return (
        <Card>
            <CardMedia
                component="img"
                width={200}
                height={150}
                image={recipe.imageUrl}
                alt={recipe.title}
            />
            <CardContent>
                <Typography variant="h6" component="h2">
                    {recipe.title}
                </Typography>

                {recipe.description && (
                    <Typography variant="body2">
                        {recipe.description}
                    </Typography>
                )}

                <Typography variant="body2">{recipe.prepTime} min</Typography>

                <Stack>
                    {categoryName && (
                        <Chip
                            label={categoryName}
                            color="primary"
                            size="small"
                        />
                    )}
                    {recipe.tags?.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            variant="outlined"
                            size="small"
                        />
                    ))}
                </Stack>

                <Typography variant="body2">Difficulté</Typography>
                <Rating value={recipe.difficulty} max={5} readOnly />
            </CardContent>

            <CardActions>
                <FavoriteButton />
            </CardActions>
            
        </Card>
    );
};

export default RecipeCard;
