import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import PhoneCreation from 'src/features/phone/pages/creation/PhoneCreation';

const PhoneCreatePage = () => (
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

export default PhoneCreatePage;
