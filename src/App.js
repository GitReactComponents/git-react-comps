import React from 'react'
import {BrowserRouter as Route, Switch, withRouter} from 'react-router-dom';
import routes from './Routes'
import Header from './Components/Header/Header'

import './App.scss';
import {AuthProvider} from './Context/AuthContext';



function App() {

  return (
    <AuthProvider>
      <Header />
        <Route>
          <Switch>
            {routes}
          </Switch>
        </Route>
    </AuthProvider>
  );
}

export default withRouter(App);