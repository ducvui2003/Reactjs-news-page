import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {store} from "./features/store";
import {BrowserRouter} from "react-router-dom";
import "nprogress/nprogress.css"
import "./assets/sass/custom-nprogress.scss"
// Cấu hình react-toastify
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {reactToastifyConfig, theme} from "./config";
import {CssBaseline} from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <CssVarsProvider theme={theme}>
                <CssBaseline/>
                <App/>
                <ToastContainer {...reactToastifyConfig}/>
            </CssVarsProvider>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
