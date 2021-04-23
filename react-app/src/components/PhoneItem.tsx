import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Phone } from '../store/phones/phoneReducer';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PhoneItem = ({ phone }: { phone: Phone }) => {
  return (
    <Card sx={{ cursor: 'pointer' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={phone.name}
        subheader={phone.manufacturer}
      />
      
      <CardMedia
        sx={{ height: 210 }}
        image="/static/images/phone-default.jpg"
        title="Phone"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {phone.price}&#36;
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {phone.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhoneItem;
