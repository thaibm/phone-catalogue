import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import logo from '../logo.svg';

// TODO update navbar props types
const DashboardNavbar = ({ onMobileNavOpen, ...rest }: any) => {
  const [notifications] = useState([]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
