import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import PhoneProfileDetail from 'src/features/phone/pages/detail/PhoneProfileDetail';
import { PhoneDetailPageProvider } from './PhoneDetailContext';

const PhoneDetail = () => (
  <>
    <Helmet>
      <title>Phone Detail | Phone Catalogue</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <PhoneDetailPageProvider>
        <PhoneProfileDetail />
      </PhoneDetailPageProvider>
    </Box>
  </>
);

export default PhoneDetail;
