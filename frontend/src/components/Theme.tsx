import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
        default: 'black',
        paper: 'black',
        },
        text: {
            primary: 'white',
        }
    },
    typography: {
        fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    }
});

export default theme;