import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultTheme = {
    coastblue: 'rgb(38,47,77)',
    coastwhite: 'rgb(232,233,235)',
    coastorange: 'rgb(240,101,67)',
}

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>, 
    document.getElementById('root'));

registerServiceWorker();
