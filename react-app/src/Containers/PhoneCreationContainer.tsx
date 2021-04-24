import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import PhoneForm from '../components/PhoneForm';
import { Phone } from '../store/phones/phoneReducer';
import { createPhone } from '../store/phones/phoneAction';

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
  return (
    <>
      <PageHeader title="Create New Phone"></PageHeader>
      <PhoneForm phone={initialPhone} onSubmit={createPhone}></PhoneForm>
    </>
  );
};

export default connect(null, { createPhone })(PhoneCreationContainer);
