import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import phoneDetail, { fetchPhoneDetail } from './phoneDetail';

export default combineReducers({
  phoneDetail,
});

const selectSelf = (state) => state;

const selectPhone = createSelector(
  selectSelf,
  (state) => state.phoneDetail
);

const selectPhoneDetail = createSelector(
  selectPhone,
  (state) => state.phoneDetail.phone
);

const selectPhoneDetailError = createSelector(
  selectPhone,
  (state) => state.phoneDetail.error
);

const selectPhoneDetailLoading = createSelector(
  selectPhone,
  (state) => state.phoneDetail.loading
);

export const phoneDetailActions = {
  fetchPhoneDetail,
};

export const phoneDetailSelectors = {
  selectPhoneDetail,
  selectPhoneDetailError,
  selectPhoneDetailLoading
};
