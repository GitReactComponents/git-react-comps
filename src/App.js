import React from 'react'
import routes from './Routes'
import Header from './Components/Header/Header'
import CreateComponent from './Components/CompDisplay/CreateComponent'

import './App.scss';
import {BrowserRouter as Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <CreateComponent />
      <Route>
        <Switch>
          {routes}
        </Switch>
      </Route>
    </div>
  );
}

export default App;