import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./components/App";
import './App.css';
import Connection from "./components/Connection";

ReactDOM.render((
        <Router>
            <div>
                <Route exact  path="/" component={Connection}/>
                <Route path="/pseudo/:pseudo" component={App}/>
            </div>
        </Router>
    ),
    document.getElementById('root')
);
registerServiceWorker();
