import PhoneForm from 'src/features/phone/components/PhoneForm';
import { usePhoneDetailPage } from './PhoneDetailContext';

const PhoneProfileDetail = () => {
  const { phone, handleUpdate } = usePhoneDetailPage();
  const onUpdate = (values) => {
    handleUpdate(values);
  };
  return (
    <PhoneForm phone={phone} onSubmit={onUpdate} />
  );
};

export default PhoneProfileDetail;
