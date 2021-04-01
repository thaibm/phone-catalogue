// import * as yup from 'yup';
import customers from 'src/__mocks__/customers';

export async function getPhoneList() {
  // const response = Promise.resolve(customers);
  // if (typeof response.data !== 'object') {
  //   throw new Error('expected object value but got string');
  // }
  return customers;
}

export async function getPhoneDetail(id) {
  // yup.number().integer().validate(id);
  // const response = await customers.find((phone) => phone.id === id);
  console.log(id);
  return customers[0];
}
