import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
    primary: {
        main: '#000000',
        light: '#536dfe',
        dark: '#7022f1',
    },
    secondary: {
        main: '#0b00f5',
        light: '#2a21ef',
    },
    background: {
        default: '#000000',
        paper: '#000000',
    },
    text: {
        primary: '#ffffff',
        secondary: '#000000',
    },
    divider: '#ffffff',
    },
    typography: {
        fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    }
});

export default theme;