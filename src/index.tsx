import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {ThemeProvider} from '@mui/material/styles';
import {themeUI} from "./lib/theme";
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={themeUI}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

