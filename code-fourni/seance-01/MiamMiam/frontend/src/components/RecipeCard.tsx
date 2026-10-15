import { Card,Chip, CardContent, CardMedia, Rating, Typography } from "@mui/material";

interface RecipeCardProps {
    title : string;
    imageUrl: string;
    description?: string;
    duration: number;
    difficulty: number;
}

const RecipeCard = ({title, imageUrl, description, duration, difficulty} : RecipeCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <CardMedia component="img" width="200" height="150" image={imageUrl} alt={title}/>
                <Typography variant="body2" color="text.secondary">
                    {description && <p>{description}</p>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {duration} min
                </Typography>
                <Typography>
                    <Chip label="Plat" color="primary" size="small" />
                    <Rating value={difficulty} max={5} readOnly/>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RecipeCard;