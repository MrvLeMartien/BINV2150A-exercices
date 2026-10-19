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
                <Toolbar>
                    <img
                        src={miammiam}
                        alt="Logo MiamMiam"
                        style={{ width: "auto", height: 150 }}
                    />
                    <Typography
                        sx={{
                            width: { xs: "100%", sm: "50%", md: "33%" },
                        }}
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
