// const recipe = {
//     title: "Pâtes Carbonara",
//     imageUrl: "https:/images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
//     duration: 20,
//     difficulty: "Facile",
// };

interface RecipeCardProps {
    title : string;
    imageUrl: string;
    description?: string;
    duration: number;
    difficulty: number;
}

const RecipeCard = ({title, imageUrl, description, duration, difficulty} : RecipeCardProps) => {
    return (
        <div className="recipe-card">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} style={{ width: "200px", height: "150px", objectFit: "cover" }} />
            {description && <p>{description}</p>}
            <p>
                <strong>Durée: </strong> {duration} minutes
            </p>
            <p>
                <strong>Difficulté: </strong> {difficulty}/5
            </p>
        </div>
    );
};

export default RecipeCard;