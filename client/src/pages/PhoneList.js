import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PhoneListResults from 'src/components/phone/PhoneListResults';
import PhoneListToolbar from 'src/components/phone/PhoneListToolbar';
import customers from 'src/__mocks__/customers';

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
          <PhoneListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default PhoneList;
