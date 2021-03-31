import React, {useState, useEffect} from 'react'
import {BrowserRouter as Route, Switch, withRouter} from 'react-router-dom';
import routes from './Routes'
import Header from './Components/Header/Header'

import './App.scss';



function App() {


  return (
    <>
      <Header />
        <Route>
          <Switch>
            {routes}
          </Switch>
        </Route>
    </>
  );
}

export default withRouter(App);