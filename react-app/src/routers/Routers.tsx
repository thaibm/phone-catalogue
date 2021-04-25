import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import PhoneCreationContainer from '../containers/PhoneCreationContainer';
import DashboardLayout from '../templates/DashboardLayout';
import PhoneUpdateContainer from '../containers/PhoneUpdateContainer';
import PhoneDetailsContainer from '../containers/PhoneDetailsContainer';

function Routers() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/phone/create">
            <PhoneCreationContainer />
          </Route>
          <Route path="/phone/update/:id">
            <PhoneUpdateContainer />
          </Route>
          <Route path="/phone/details/:id">
            <PhoneDetailsContainer />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default Routers;
