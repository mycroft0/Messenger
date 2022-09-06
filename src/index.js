import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessagesProvider from "./contexts/MessagesProvider";
import {BrowserRouter} from "react-router-dom";
import RouteProvider from "./contexts/RouteProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <RouteProvider>
            <MessagesProvider>
                <App/>
            </MessagesProvider>
        </RouteProvider>
    </BrowserRouter>
);

