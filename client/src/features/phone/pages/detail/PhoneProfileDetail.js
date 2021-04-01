import PhoneForm from 'src/features/phone/components/PhoneForm';
import { usePhoneDetailPage } from './PhoneDetailContext';

const PhoneProfileDetail = () => {
  const { phone } = usePhoneDetailPage();

  return (
    <PhoneForm phone={phone} />
  );
};

export default PhoneProfileDetail;
