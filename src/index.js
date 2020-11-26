import React from 'react';
import ReactDOM from "react-dom";
import './index.css'
import store from "./redux/store";
import App from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


    ReactDOM.render(
        <BrowserRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));