import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('name must be string!')
    .max(50)
    .required('name is required'),
  description: Yup.string().max(1000).required('Description is required'),
  manufacturer: Yup.string().max(255).required('Manufacturer is required'),
  color: Yup.string().max(255).required('Color is required'),
  price: Yup.string().max(255).required('Price is required'),
  processor: Yup.string().max(255).required('Processor is required'),
  ram: Yup.string().max(255).required('Ram is required'),
  screen: Yup.string().max(255).required('Screen is required'),
});

const PhoneForm = ({ phone, onSubmit }: any) => {
  const onHandleSubmit = (values: any) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={phone}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onHandleSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <form autoComplete='off' onSubmit={handleSubmit}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label='name'
                    name='name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.name || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.manufacturer && errors.manufacturer)}
                    fullWidth
                    helperText={touched.manufacturer && errors.manufacturer}
                    label='manufacturer'
                    name='manufacturer'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.manufacturer || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.color && errors.color)}
                    fullWidth
                    helperText={touched.color && errors.color}
                    label='Color'
                    name='color'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.color || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.price && errors.price)}
                    fullWidth
                    helperText={touched.price && errors.price}
                    label='price'
                    name='price'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type='number'
                    value={values?.price || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.description && errors.description)}
                    fullWidth
                    helperText={touched.description && errors.description}
                    label='Description'
                    name='description'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.description || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.screen && errors.screen)}
                    fullWidth
                    helperText={touched.screen && errors.screen}
                    label='Screen'
                    name='screen'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.screen || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.processor && errors.processor)}
                    fullWidth
                    helperText={touched.processor && errors.processor}
                    label='Processor'
                    name='processor'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.processor || ''}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.ram && errors.ram)}
                    fullWidth
                    helperText={touched.ram && errors.ram}
                    label='Ram'
                    name='ram'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values?.ram || ''}
                    variant='outlined'
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
            }}
          >
            <Button color='primary' variant='contained' type='submit'>
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default PhoneForm;
