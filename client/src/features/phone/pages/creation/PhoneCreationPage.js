import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import PhoneCreation from 'src/features/phone/pages/creation/PhoneCreation';
import { PhoneCreatePageProvider } from './phoneCreationContext';

const PhoneCreatePage = () => (
  <>
    <Helmet>
      <title>Phone Creation | Phone Catalogue</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <PhoneCreatePageProvider>
        <PhoneCreation />
      </PhoneCreatePageProvider>
    </Box>
  </>
);

export default PhoneCreatePage;
