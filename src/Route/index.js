import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from '../App';
import Detail from '../detail';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
