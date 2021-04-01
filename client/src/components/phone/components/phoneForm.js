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
  CardMedia,
  Input
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

const screens = [
  {
    value: '4,7 inch IPS',
    label: '4,7 inch IPS'
  },
  {
    value: '5,7 inch IPS',
    label: '4,7 inch IPS'
  },
  {
    value: '6,7 inch IPS',
    label: '4,7 inch IPS'
  }
];

const PhoneForm = ({ phone }) => {
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
                  image={phone.avatarUrl || '/static/images/avatars/galery.png'}
                  style={{ height: '300px', backgroundSize: 'contain' }}
                />
              </CardActionArea>
            </CardContent>
            <Divider />
            <CardActions>
              <Input type="file" id="upload" style={{ display: 'none' }} />
              <label htmlFor="upload" fullWidth color="primary" variant="text">
                Upload
              </label>
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
              name: Yup.string().typeError('name must be string!').max(50).required('name is required'),
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
                  {phone.name ? (
                    <CardHeader
                      subheader="The information can be edited"
                      title="Detail"
                    />
                  ) : (
                    <CardHeader
                      title="Create new phone"
                    />
                  )}
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
                          error={Boolean(touched.manufacturer && errors.manufacturer)}
                          fullWidth
                          helperText={touched.manufacturer && errors.manufacturer}
                          label="manufacturer"
                          name="manufacturer"
                          onBlur={handleBlur}
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
                          error={Boolean(touched.color && errors.color)}
                          fullWidth
                          helperText={touched.color && errors.color}
                          label="Color"
                          name="color"
                          onBlur={handleBlur}
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
                          error={Boolean(touched.description && errors.description)}
                          fullWidth
                          helperText={touched.description && errors.description}
                          label="Description"
                          name="description"
                          onBlur={handleBlur}
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
                          onBlur={handleBlur}
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
                          error={Boolean(touched.processor && errors.processor)}
                          fullWidth
                          helperText={touched.processor && errors.processor}
                          label="Processor"
                          name="processor"
                          onBlur={handleBlur}
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
                          error={Boolean(touched.ram && errors.ram)}
                          fullWidth
                          helperText={touched.ram && errors.ram}
                          label="Ram"
                          name="ram"
                          onBlur={handleBlur}
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
                      type="submit"
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

PhoneForm.propTypes = {
  phone: PropTypes.object.isRequired
};
export default PhoneForm;
