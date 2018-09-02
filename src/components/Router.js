import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Enter from './Enter';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Enter} />
            <Route path="/store/E-Cards" component={App} />
        </Switch>
    </BrowserRouter>
)

export default Router;
