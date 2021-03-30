import {
  Box,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Grid,
  TextField,
  Container,
  CardActionArea,
  CardMedia
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

const phone = {
  avatarUrl: '/static/images/avatars/iphone7.jpg',
  name: 'iPhone 7',
  manufacturer: 'Apple',
  description: 'lorem ipsum dolor sit amet consectetur.',
  color: 'black',
  price: 769,
  imageFileName: 'IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2,
};

const screens = [
  {
    value: '4,7 inch IPS',
    label: '4,7 inch IPS'
  },
  {
    value: '4,7 inch IPS',
    label: '4,7 inch IPS'
  },
  {
    value: '4,7 inch IPS',
    label: '4,7 inch IPS'
  }
];

const PhoneProfileDetail = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <Card>
            <CardContent>
              <CardActionArea>
                <CardMedia
                  image={phone.avatarUrl}
                  style={{ height: '300px', backgroundSize: 'contain' }}
                />
              </CardActionArea>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                color="primary"
                fullWidth
                variant="text"
              >
                Upload picture
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <Formik
            initialValues={phone}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(50).required('name is required'),
              description: Yup.string().max(255).required('Description is required'),
              manufacturer: Yup.string().max(255).required('Manufacturer is required'),
              color: Yup.string().max(255).required('Color is required'),
              price: Yup.string().max(255).required('Price is required'),
              processor: Yup.string().max(255).required('Processor is required'),
              ram: Yup.string().max(255).required('Ram is required'),
              screen: Yup.string().max(255).required('Screen is required'),
            })}
            onSubmit={() => {
              navigate('/app/phones', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Card>
                  <CardHeader
                    subheader="The information can be edited"
                    title="Detail"
                  />
                  <Divider />
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.name && errors.name)}
                          fullWidth
                          helperText={touched.name && errors.name}
                          label="name"
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="manufacturer"
                          name="manufacturer"
                          onChange={handleChange}
                          required
                          value={values.manufacturer}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Color"
                          name="color"
                          onChange={handleChange}
                          required
                          value={values.color}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.price && errors.price)}
                          fullWidth
                          helperText={touched.price && errors.price}
                          label="price"
                          name="price"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="number"
                          value={values.price}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Description"
                          name="description"
                          onChange={handleChange}
                          required
                          value={values.description}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Select Screen"
                          name="screen"
                          onChange={handleChange}
                          required
                          select
                          SelectProps={{ native: true }}
                          value={values.screen}
                          variant="outlined"
                        >
                          {screens.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Processor"
                          name="processor"
                          onChange={handleChange}
                          required
                          value={values.processor}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Ram"
                          name="ram"
                          onChange={handleChange}
                          required
                          value={values.ram}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2
                    }}
                  >
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      variant="contained"
                    >
                      Save details
                    </Button>
                  </Box>
                </Card>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PhoneProfileDetail;
