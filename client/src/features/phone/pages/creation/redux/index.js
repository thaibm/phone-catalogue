import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import phoneCreation, { createNewPhone } from './phoneCreation';

export default combineReducers({
  phoneCreation,
});

const selectSelf = (state) => state;

const selectPhoneCreation = createSelector(
  selectSelf,
  (state) => state.phoneCreation
);

const selectPhoneCreateForm = createSelector(
  selectPhoneCreation,
  (state) => state.phoneCreation
);

const selectPhoneCreationError = createSelector(
  selectPhoneCreation,
  (state) => state.phoneCreation.error
);

const selectPhoneCreationLoading = createSelector(
  selectPhoneCreation,
  (state) => state.phoneCreation.loading
);

export const phoneActions = {
  createNewPhone,
};

export const phoneSelectors = {
  selectPhoneCreation,
  selectPhoneCreateForm,
  selectPhoneCreationError,
  selectPhoneCreationLoading
};
