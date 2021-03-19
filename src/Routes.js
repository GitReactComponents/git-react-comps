import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth'
import Header from './Components/Header'
import Landing from './Components/Landing'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/components" component={Components} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/auth/" component={Auth} />
        <Route path="/menu/" component={Menu} />
        <Route path="/input" component={Input} />
        <Route path="/button" component={Button} />
        <Route path="/nav" component={Nav} />
        <Route path="/header" component={Header} />
        <Route path="/link" component={Link} />
        <Route path="/mobile" component={Mobile} />
        <Route path="/footer" component={Footer} />
        <Route path="/lists" component={Lists} />
    </Switch>
)