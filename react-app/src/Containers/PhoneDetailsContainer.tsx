import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import PhoneForm from '../components/PhoneForm';
import { fetchPhone } from '../store/phones/phoneAction';
import { useParams } from 'react-router';
import { RootState } from '../store/store';

const PhoneDetailsContainer = ({ phone, fetchPhone }: any) => {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    fetchPhone(id);
  }, [])

  return (
    <>
      <PageHeader title="Phone Details"></PageHeader>
      <PhoneForm phone={phone} onSubmit={() => { }}></PhoneForm>
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
