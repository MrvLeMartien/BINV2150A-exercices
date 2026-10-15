import type { ReactNode } from "react";
import logo from "../assets/miammiam.png";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";

interface PageLayoutProps {
    title : string;
    children : ReactNode;
};

const PageLayout = ({title, children} : PageLayoutProps) => {
    return <AppBar>
        <img src={logo} alt="Logo MiamMiam"/>
        <header><h1>{title}</h1></header>
        <Container>{children}</Container>
        <footer>&copy; : 2026 MiamMiam</footer>
    </AppBar>;
};

export default PageLayout;