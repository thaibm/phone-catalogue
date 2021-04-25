import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { fetchPhones, deletePhone } from '../store/phones/phoneAction';
import { Phone } from '../store/phones/phoneReducer';
import PhoneItem from '../components/PhoneItem';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import Loading from '../components/Loading';

interface IPhonesContainerProps {
  phones: Phone[];
  loading: boolean;
  fetchPhones: () => void;
  deletePhone: (id: number, successCallback: () => void) => void;
}
const PhonesContainer = ({
  phones,
  loading,
  fetchPhones,
  deletePhone,
}: IPhonesContainerProps) => {
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  const history = useHistory();
  const editPhone = (id: number) => {
    history.push('/phone/update/' + id);
  };

  const viewDetails = (id: number) => {
    history.push('/phone/details/' + id);
  };

  if (loading) return <Loading></Loading>;

  return (
    <Grid container spacing={3}>
      {phones.map((phone) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={phone.id}>
          <PhoneItem
            phone={phone}
            onDelete={(id: number) =>
              deletePhone(id, () => {
                history.push('/');
              })
            }
            onEdit={editPhone}
            onClick={viewDetails}
          />
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

export default connect(mapStateToProps, { fetchPhones, deletePhone })(
  PhonesContainer
);
