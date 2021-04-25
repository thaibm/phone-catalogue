import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { fetchPhone } from '../store/phones/phoneAction';
import { useParams } from 'react-router';
import { RootState } from '../store/store';
import { NavLink as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import PhoneDetails from '../components/PhoneDetails';
import Loading from '../components/Loading';

const PhoneDetailsContainer = ({ phone, fetchPhone, loading }: any) => {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    fetchPhone(id);
  }, [fetchPhone, id]);

  if (loading || !phone) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader title='Phone Details'>
        <Button
          component={RouterLink}
          color='primary'
          variant='contained'
          to={'/phone/update/' + phone?.id}
        >
          <Edit sx={{ marginRight: '5px' }}></Edit>
          <Typography variant='button'>Edit Phone</Typography>
        </Button>
      </PageHeader>
      <PhoneDetails phone={phone}></PhoneDetails>
    </>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    phone: state.phones.currentItem,
    loading: state.phones.loading,
  };
};
export default connect(mapStateToProps, { fetchPhone })(PhoneDetailsContainer);
