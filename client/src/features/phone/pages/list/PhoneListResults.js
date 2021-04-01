import React, { useState } from 'react';
import {
  NavLink as RouterLink
} from 'react-router-dom';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Trash2 as DeleteIcon,
} from 'react-feather';
import getInitials from 'src/utils/getInitials';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loading from 'src/components/loading';
import { usePhoneListPage } from './phoneListContext';

const PhoneListResults = ({ ...rest }) => {
  const [phoneId, setPhoneId] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);
  const { phones, isLoading } = usePhoneListPage();

  const handleClose = () => {
    setOpen(false);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenDialog = (id) => {
    setOpen(true);
    setPhoneId(id);
  };

  const handleDelete = () => {
    setOpen(false);
    console.log(phoneId);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Card {...rest}>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Name
                    </TableCell>
                    <TableCell>
                      Manufacturer
                    </TableCell>
                    <TableCell>
                      Color
                    </TableCell>
                    <TableCell>
                      Price
                    </TableCell>
                    <TableCell>
                      Screen
                    </TableCell>
                    <TableCell>
                      Processor
                    </TableCell>
                    <TableCell>
                      Ram
                    </TableCell>
                    <TableCell align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {phones ? (
                    phones.map((phone) => (
                      <TableRow
                        key={phone.id}
                      >
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: 'center',
                              display: 'flex'
                            }}
                          >
                            <Avatar
                              src={phone.avatarUrl}
                              sx={{ mr: 2 }}
                            >
                              {getInitials(phone.name)}
                            </Avatar>
                            <Typography
                              color="textPrimary"
                              variant="body1"
                            >
                              {phone.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {phone.manufacturer}
                        </TableCell>
                        <TableCell>
                          {phone.color}
                        </TableCell>
                        <TableCell>
                          {phone.price}
                        </TableCell>
                        <TableCell>
                          {phone.screen}
                        </TableCell>
                        <TableCell>
                          {phone.processor}
                        </TableCell>
                        <TableCell>
                          {phone.ram}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            component={RouterLink}
                            color="primary"
                            to={`/detail/${phone.id}`}
                          >
                            <EditIcon />
                          </Button>
                          <Button
                            color="secondary"
                            onClick={() => handleOpenDialog(phone.id)}
                          >
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (<></>)}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={phones?.length || 0}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Card>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete it, Are you sure.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Make sure you want to delete it. You can not undo!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>

  );
};

PhoneListResults.propTypes = {
  phones: PropTypes.any
};

export default PhoneListResults;
