import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import About from './pages/About';
import Home from './pages/Home';
import PhoneCreation from './pages/PhoneCreation';
import DashboardLayout from './templates/DashboardLayout';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <DashboardLayout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/phone/create">
            <PhoneCreation />
          </Route>
        </Switch>
      </DashboardLayout>
    </ConnectedRouter>
  );
}

export default App;
