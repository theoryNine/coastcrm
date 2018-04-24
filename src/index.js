import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultTheme = {
    coastPrimary: 'rgb(38,47,77)',
    coastSecondary: 'rgb(232,233,235)',
    coastOrange: 'rgb(240,101,67)',
    primaryFont: 'Open Sans',
}

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>, 
    document.getElementById('root'));

registerServiceWorker();
