import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PhoneListResults from 'src/features/phone/pages/list/PhoneListResults';
import PhoneListToolbar from 'src/features/phone/pages/list/PhoneListToolbar';
import { PhoneListPageProvider } from './phoneListContext';

const PhoneList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <PhoneListToolbar />
        <Box sx={{ pt: 3 }}>
          <PhoneListPageProvider>
            <PhoneListResults />
          </PhoneListPageProvider>
        </Box>
      </Container>
    </Box>
  </>
);

export default PhoneList;
