import PhoneForm from 'src/features/phone/components/PhoneForm';
import { usePhoneCreatePage } from './phoneCreationContext';

const initialValue = {
  avatarUrl: null,
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: '',
  imageFileName: '',
  screen: '',
  processor: '',
  ram: '',
};

const PhoneCreation = () => {
  const { createPhone } = usePhoneCreatePage();
  const onCreate = (values) => {
    createPhone(values);
  };
  return (
    <PhoneForm phone={initialValue} onSubmit={onCreate} />
  );
};

export default PhoneCreation;
