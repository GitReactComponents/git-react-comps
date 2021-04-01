import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Login from './Components/Auth/Login'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Favorites from './Components/Views/Favorites'
import Home from './Components/Views/Home'
import Payment from './Components/Views/Payment'
import Subscribe from './Components/Views/Subscribe'
import Upload from './Components/Views/Upload'
import User from './Components/Views/User'
import ComponentCategories from './Components/CompDisplay/ComponentCategories'

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
            <Route path='/payment' component={Payment}/>
            <Route path="/upload" component={Upload} />
            <Route path="/user" component={User} />
            <Route path="/component_category" component={ComponentCategories}/>
        </Switch>
    </HashRouter>
)






