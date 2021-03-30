import PhoneForm from 'src/components/phone/components/phoneForm';

const phone = {
  avatarUrl: '/static/images/avatars/iphone7.jpg',
  name: 'iPhone 7',
  manufacturer: 'Apple',
  description: 'lorem ipsum dolor sit amet consectetur.',
  color: 'black',
  price: 769,
  imageFileName: 'IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2,
};

const PhoneProfileDetail = () => (
  <PhoneForm phone={phone} />
);

export default PhoneProfileDetail;
