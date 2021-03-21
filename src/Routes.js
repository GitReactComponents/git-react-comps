import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth'
import Header from './Components/Header'
import Landing from './Components/Landing'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/auth" component={Auth} />
        <Route path="/header" component={Header} />
    </Switch>
)