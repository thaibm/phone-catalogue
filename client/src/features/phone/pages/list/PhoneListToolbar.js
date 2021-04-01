import {
  Box,
  Button,
} from '@material-ui/core';
import {
  NavLink as RouterLink
} from 'react-router-dom';

const PhoneListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '10px'
      }}
    >
      <Button
        component={RouterLink}
        color="primary"
        variant="contained"
        to="/create"
      >
        Add phone
      </Button>
    </Box>
  </Box>
);

export default PhoneListToolbar;
