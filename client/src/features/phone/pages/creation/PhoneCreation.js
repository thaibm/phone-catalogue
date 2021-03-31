import PhoneForm from 'src/features/phone/components/PhoneForm';

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
