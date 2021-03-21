import Header from './Components/Header/Header'
import Routes from './Routes'

import './App.scss';
import {BrowserRouter as Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Route>
      <Switch>
      <Header />
        {Routes}
      </Switch>
    </Route>
  );
}

export default App;