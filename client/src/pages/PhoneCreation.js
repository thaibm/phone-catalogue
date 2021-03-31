import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import PhoneCreation from 'src/components/phone/creation/PhoneCreation';
import { Phone } from 'react-feather';

const PhoneCreate = () => (
  <>
    <Helmet>
      <title>Phone Creation | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <PhoneCreation />
    </Box>
  </>
);

export default PhoneCreate;
