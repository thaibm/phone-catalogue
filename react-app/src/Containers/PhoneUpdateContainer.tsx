import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import PhoneForm from '../components/PhoneForm';
import { fetchPhone, editPhone } from '../store/phones/phoneAction';
import { useParams } from 'react-router';
import { RootState } from '../store/store';
import { useHistory } from 'react-router-dom';
import { Phone } from '../store/phones/phoneReducer';

const PhoneUpdateContainer = ({ phone, fetchPhone, editPhone }: any) => {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    fetchPhone(id);
  }, [fetchPhone, id]);

  const history = useHistory();

  const handleSubmit = (value: Phone) => {
    editPhone(value, () => {
      history.push('/');
    });
  };

  return (
    <>
      <PageHeader title='Update Phone'></PageHeader>
      <PhoneForm phone={phone} onSubmit={handleSubmit}></PhoneForm>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    phone: state.phones.currentItem,
    loading: state.phones.loading,
  };
};

export default connect(mapStateToProps, { fetchPhone, editPhone })(
  PhoneUpdateContainer
);
