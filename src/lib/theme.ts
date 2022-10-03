import { createTheme } from '@mui/material/styles';

export const themeUI = createTheme({
    palette: {
        primary: {
            main: '#1a237e',
            light: '#534bae',
            dark: '#000051'
        },
        secondary: {
            main: '#01579b',
            light: '#4f83cc',
            dark: '#002f6c'
        },
        warning: {
            main: '#c71616'
        }
    },
});