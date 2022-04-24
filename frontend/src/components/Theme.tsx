import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        background: {
        default: 'black',
        paper: 'black',
        },
        secondary: {
            main: '#536DFE',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    }
});

export default theme;