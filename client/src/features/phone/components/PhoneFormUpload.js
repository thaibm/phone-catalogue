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
import { useState } from 'react';

const PhoneFormUpload = ({ avatar, handleChangeFile }) => {
  const [file, setFile] = useState(null);
  const handleUpload = (event) => {
    handleChangeFile(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]));
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
              image={file !== null ? file : avatar || '/static/images/avatars/phone.png'}
              style={{ height: '300px', backgroundSize: 'contain' }}
            />
          </CardActionArea>
        </CardContent>
        <Divider />
        <CardActions>
          <label htmlFor="upload" style={{ margin: '0 auto' }}>
            <Input type="file" id="upload" style={{ display: 'none' }} onChange={handleUpload} />
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
        </CardActions>
      </Card>
    </Grid>
  );
};

PhoneFormUpload.propTypes = {
  avatar: PropTypes.string,
  handleChangeFile: PropTypes.any
};
export default PhoneFormUpload;
