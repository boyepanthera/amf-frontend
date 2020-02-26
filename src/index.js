import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {BrowserRouter} from 'react-router-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

render(
    <Router history={customHistory}>
        <App />
    </Router>, document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
