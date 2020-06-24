import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './components/header';
import UserData from '././dummyComponents/userData';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Switch>
                <Route exact path="/" component={Header} />
                <Route exact path="/user-data" component={UserData} />
            </Switch>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
