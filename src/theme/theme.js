import {createTheme} from "@material-ui/core/styles";

const theme = createTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#10A75F'
        },
        common: {
            white: 'white'
        },
        secondary: {
            main: '#E53935'
        }
    }, spacing: 10
});

export default theme;