import React from 'react';
import { Button, Typography } from '@material-ui/core';
import PhonesContainer from '../Containers/PhonesContainer';
import { AddCircle } from '@material-ui/icons';
import { NavLink as RouterLink } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

const Home = () => {
  return (
    <>
      <PageHeader title="Phone List">
        <Button
          component={RouterLink}
          color="primary"
          variant="contained"
          to="/phone/create"
        >
          <AddCircle sx={{ marginRight: '5px' }}></AddCircle>
          <Typography variant="button">Add Phone</Typography>
        </Button>
      </PageHeader>

      <PhonesContainer></PhonesContainer>

      {/* ExampleContainer | etc.. */}
    </>
  );
};

export default Home;
