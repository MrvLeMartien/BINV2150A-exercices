import { type ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import miammiam from "../assets/miammiam.png";

interface PageLayoutProps {
    title: string;
    children: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
    return (
        <>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <img
                        src={miammiam}
                        alt="Logo MiamMiam"
                        style={{ width: "auto", height: 150 }}
                    />
                    <Typography
                        variant="h6"
                        component="h1"
                        sx={{ fontWeight: 700, letterSpacing: 1.2 }}
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
                {children}
            </Container>

            <footer>&copy; 2026 MIAMMIAM</footer>
        </>
    );
};

export default PageLayout;
