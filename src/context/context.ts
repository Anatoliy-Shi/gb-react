import {createContext} from "react";


export const themes = {
    light: {
        background: '#fff',
        textColor: '#000'
    },
    dark: {
        background: '#000',
        textColor: '#fff'
    }
}


export const ThemeContext = createContext({ theme: themes.light, toggleTheme: () => {}})