import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

render(
    <Router history={customHistory}>
        <App />
    </Router>, document.getElementById('root')
);

serviceWorker.unregister();
