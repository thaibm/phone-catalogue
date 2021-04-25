import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import PhoneForm from '../components/PhoneForm';
import { Phone } from '../store/phones/phoneReducer';
import { createPhone } from '../store/phones/phoneAction';
import { useHistory } from 'react-router';

const initialPhone = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: null,
  imageFileName: '',
  screen: '',
  processor: '',
  ram: null,
};

const PhoneCreationContainer = ({ createPhone }: any) => {
  const history = useHistory();

  const handleSubmit = (value: Phone) => {
    createPhone(value, () => {
      history.push('/');
    });
  };

  return (
    <>
      <PageHeader title='Create New Phone'></PageHeader>
      <PhoneForm phone={initialPhone} onSubmit={handleSubmit}></PhoneForm>
    </>
  );
};

export default connect(null, { createPhone })(PhoneCreationContainer);
