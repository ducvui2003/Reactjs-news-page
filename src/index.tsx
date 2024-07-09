import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { BrowserRouter } from 'react-router-dom';
import 'nprogress/nprogress.css';

import {
    CssBaseline,
    Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material';
import { CustomToastContainer } from './config/ReactToastify';
import theme from './config/theme';
import React from 'react';
import GlobalCSS from './config/GlobalCSS';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <CssVarsProvider theme={theme}>
                    <GlobalCSS />
                    <CssBaseline />
                    <App />
                    <CustomToastContainer />
                </CssVarsProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
