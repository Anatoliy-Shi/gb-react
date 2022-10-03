import React, {useContext} from 'react';
import {Button} from "@mui/material";
import {ThemeContext} from "../../context/context";

export const SwitchTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <Button sx={{'width': '120px', 'margin-left': '20px', 'border': '1px solid', height: '50px'}}
                onClick={toggleTheme}>
            сменить тему
        </Button>
    )
};
