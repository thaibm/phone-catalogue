import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import PhoneCreation from './pages/PhoneCreation';
import DashboardLayout from './templates/DashboardLayout';

function App() {
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
            <PhoneCreation />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;
