import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import PageLayout from "./components/PageLayout";
import RecipeList from "./components/RecipeList";

const theme = createTheme({
    palette:{
        primary: {
            main: "#e65100"
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <PageLayout title="MiamMiam">
                    <RecipeList />
                </PageLayout>
        </ThemeProvider>
    );
};

export default App;