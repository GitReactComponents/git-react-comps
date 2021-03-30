import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Login from './Components/Auth/Login'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Favorites from './Components/Views/Favorites'
import Home from './Components/Views/Home'
import Subscribe from './Components/Views/Subscribe'
import Upload from './Components/Views/Upload'
import User from './Components/Views/User'
import CategoryLibrary from './Components/CompDisplay/CategoryLibrary'


// import Landing from './Components/Landing'

export default (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/upload" component={Upload} />
            <Route path="/user" component={User} />
            <Route path="/components" component={CategoryLibrary} />
        </Switch>
    </HashRouter>
)






