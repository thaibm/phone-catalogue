import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Phone } from '../store/phones/phoneReducer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';

const PhoneItem = ({
  phone,
  onDelete,
  onEdit,
  onClick,
}: {
  phone: Phone;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onClick: (id: number) => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleClose();
    onDelete(phone.id);
  };

  const handleEdit = () => {
    handleClose();
    onEdit(phone.id);
  }

  const handleClickCard = () => {
    handleClose();
    onClick(phone.id);
  }

  return (
    <Card sx={{ cursor: 'pointer' }} onClick={handleClickCard}>
      <CardHeader
        action={
          <>
            <IconButton aria-label="settings" onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem sx={{ color: 'red' }} onClick={handleDelete}>
                Delete
              </MenuItem>
            </Menu>
          </>
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
