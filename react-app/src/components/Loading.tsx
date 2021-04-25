import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }} justifyContent='center' alignItems='center'>
      <CircularProgress></CircularProgress>
    </Box>
  );
};

export default Loading;
