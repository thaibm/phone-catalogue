import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { fetchPhones } from '../store/phones/phoneAction';
import { Phone } from '../store/phones/phoneReducer';
import PhoneItem from '../components/PhoneItem';
import { Grid } from '@material-ui/core';
import { isArray } from 'lodash';

interface IPhonesContainerProps {
  phones: Phone[];
  loading: boolean;
  fetchPhones: () => any;
}
const PhonesContainer = ({ phones, fetchPhones }: IPhonesContainerProps) => {
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  return (
    <Grid container spacing={3}>
      {isArray(phones) && phones.map((phone) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={phone.id}>
          <PhoneItem phone={phone} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    phones: state.phones.items,
    loading: state.phones.loading,
  };
};

export default connect(mapStateToProps, { fetchPhones })(PhonesContainer);
