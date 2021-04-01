import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  CardActionArea,
  CardMedia,
  Input,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';

const PhoneFormUpload = ({ avatar }) => {
  const handleUpload = () => {

  };
  return (
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
              image={avatar || '/static/images/avatars/galery.png'}
              style={{ height: '300px', backgroundSize: 'contain' }}
            />
          </CardActionArea>
        </CardContent>
        <Divider />
        <CardActions>
          <label htmlFor="upload" style={{ margin: '0 auto' }}>
            <Input type="file" id="upload" style={{ display: 'none' }} />
            <Button variant="contained" component="span" onClick={handleUpload}>
              Upload Image
            </Button>
          </label>
        </CardActions>
      </Card>
    </Grid>
  );
};

PhoneFormUpload.propTypes = {
  avatar: PropTypes.string
};
export default PhoneFormUpload;
