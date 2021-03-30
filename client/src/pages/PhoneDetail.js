import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import PhoneProfileDetail from 'src/components/phone/detail/PhoneProfileDetail';

const PhoneDetail = () => (
  <>
    <Helmet>
      <title>Phone Detail | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <PhoneProfileDetail />
    </Box>
  </>
);

export default PhoneDetail;
