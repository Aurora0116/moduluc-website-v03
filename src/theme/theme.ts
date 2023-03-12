import { createTheme, Theme } from "@mui/material/styles";
import "@fontsource/inter";

declare module "@mui/material/styles" {
    interface Theme {
        // Define your custom properties here
        customProperty: string;
    }
    // Allow configuration using `createTheme`
    interface ThemeOptions {
        customProperty?: string;
    }
}

const theme: Theme = createTheme({
    palette: {
        text: {
            primary: "#0B1418",
            secondary: "#F1F2F3"
        },
        primary: {
            main: "#0070f3",
        },
        secondary: {
            main: "#ffcc00",
        },
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
});

export default theme;
