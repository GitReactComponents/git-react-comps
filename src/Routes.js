import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Auth/Login'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Home from './Components/Views/Home'
import Subscribe from './Components/Views/Subscribe'
import User from './Components/Views/User'

// import Landing from './Components/Landing'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/user" component={User} />
    </Switch>
)