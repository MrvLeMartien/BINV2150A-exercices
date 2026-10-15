import {
    Card,
    Chip,
    CardContent,
    CardMedia,
    Rating,
    Typography,
    Stack,
} from "@mui/material";
import type { Recipe } from "../models/recipe";
import { categories } from "../data/categories";

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
                width="200"
                height="150"
                image={recipe.imageUrl}
                alt={recipe.title}
            />
            <CardContent>
                <Typography variant="h6" component="h2">
                    {recipe.title}
                </Typography>

                {recipe.description && (
                    <Typography variant="body2" color="text.secondary">
                        {recipe.description}
                    </Typography>
                )}

                <Typography variant="body2" color="text.secondary">
                    {recipe.prepTime} min
                </Typography>

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
                <Rating value={recipe.difficulty} max={5} readOnly />
            </CardContent>
        </Card>
    );
};

export default RecipeCard;
