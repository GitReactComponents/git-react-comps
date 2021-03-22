import React from 'react'
import routes from './Routes'
import Header from './Components/Header/Header'

import './App.scss';
import {BrowserRouter as Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route>
        <Switch>
          {routes}
        </Switch>
      </Route>
    </div>
  );
}

export default App;