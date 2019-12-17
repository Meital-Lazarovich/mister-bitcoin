import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    , document.getElementById('root')
);

serviceWorker.unregister();
