import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import PageLayout from "./components/PageLayout";
import RecipeList from "./components/RecipeList";
import { recipes } from "./data/recipes";
import RecipeDetail from "./components/RecipeDetail";

const theme = createTheme({
    palette: {
        primary: {
            main: "#8A3324",
        },
    },
});
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageLayout title="MiamMiam">
                <RecipeList />
                <RecipeDetail recipe={recipes[0]} />
            </PageLayout>
        </ThemeProvider>
    );
};

export default App;
