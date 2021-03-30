import PhoneForm from 'src/components/phone/components/phoneForm';

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
const PhoneCreation = () => (
  <PhoneForm phone={initialValue} />
);

export default PhoneCreation;
