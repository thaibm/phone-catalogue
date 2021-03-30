import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import PhoneCreation from 'src/components/phone/creation/PhoneCreation';

const PhoneDetail = () => (
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

export default PhoneDetail;
