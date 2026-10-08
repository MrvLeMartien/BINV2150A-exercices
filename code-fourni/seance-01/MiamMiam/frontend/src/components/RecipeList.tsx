import RecipeCard from "./RecipeCard";

const recipeList = () => {
    return (
        <>
        <RecipeCard 
            title="Crêpes"
            imageUrl="https://img.cuisineaz.com/660x495/2015/01/29/i113699-photo-de-crepe-facile.jpeg"
            description="Crêpe maison" 
            duration={20}
            difficulty={2}
        />
        <RecipeCard 
            title="Pizza"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi43gPU_J-KkObOospt176sCdYaVfuxiLnL301coHMA&s=10"
            duration={40}
            difficulty={5}
        />
        <RecipeCard 
            title="Chips"
            imageUrl="https://www.allrecipes.com/thmb/3P-EKRlbrYktC4bWbVUy4-4hiO0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73135-homestyle-potato-chips-ddmfs-0349-1x2-hero-8838cc09fb7845f3ab41db3ac58e41ac.jpg"
            description="Chips au sel maison" 
            duration={10}
            difficulty={1}
        />
        <RecipeCard 
            title="Tarte"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-kxlqJI0FcHYDBcbeVEe7a0k_kLl6CxX82TRX61Kqg&s=10"
            description="Tarte au pomme" 
            duration={10}
            difficulty={1}
        />
        <RecipeCard 
            title="Steak"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQ8YkcpwnpDWJAcqh7B-DbowYHdg2Ebi4SYDXxTEleQ&s=10"
            duration={45}
            difficulty={5}
        />
        <RecipeCard 
            title="Confiture"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSxD5Y0NBR_YnRxidq67qg6A9_BLVn5JIFPfspRdhew&s=10"
            description="Confiture à la cerise" 
            duration={40}
            difficulty={4}
        />
        </>
)};

export default recipeList;