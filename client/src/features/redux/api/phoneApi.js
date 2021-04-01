import * as yup from 'yup';
import axiosAPI from './axiosAPI';

export async function getPhoneList() {
  const response = axiosAPI.get('v1/phones');
  return response;
}

export async function getPhoneDetail(id) {
  yup.number().integer().validate(id);
  const response = axiosAPI.get(`v1/phones/${id}`);
  return response;
}

export async function deletePhone(id) {
  const response = axiosAPI.delete(`v1/phones/${id}`);
  return response;
}
export async function createPhone(payload) {
  const response = axiosAPI.post('v1/phones', payload);
  return response;
}

export async function updatePhone({ id, payload }) {
  const response = axiosAPI.put(`v1/phones/${id}`, payload);
  return response;
}
