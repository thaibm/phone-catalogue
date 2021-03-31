/*  eslint-env es6  */
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import phoneList, { fetchPhone } from './phoneList';

export default combineReducers({
  phoneList,
});

const selectSelf = (state) => state;

const selectPhonesList = createSelector(
  selectSelf,
  (state) => state.phones
);

const selectPhonesInPhoneList = createSelector(
  selectPhonesList,
  (state) => state.phoneList.phones
);

const selectPhonesError = createSelector(
  selectPhonesList,
  (state) => state.phoneList.error
);

const selectPhonesLoading = createSelector(
  selectPhonesList,
  (state) => state.phoneList.loading
);

export const phonesActions = {
  fetchPhone,
};

export const phonesSelectors = {
  selectPhonesList,
  selectPhonesError,
  selectPhonesLoading,
  selectPhonesInPhoneList
};
