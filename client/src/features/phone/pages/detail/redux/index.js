import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import phoneDetail, { fetchPhoneDetail, phoneDetailSlice, UpdatePhone } from './phoneDetail';

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

const selectPhoneDetailProjectId = createSelector(
  selectPhone,
  (state) => state.phoneDetail.projectId
);

export const phoneDetailActions = {
  fetchPhoneDetail,
  UpdatePhone,
  resetDetail: phoneDetailSlice.actions.resetDetail
};

export const phoneDetailSelectors = {
  selectPhoneDetail,
  selectPhoneDetailError,
  selectPhoneDetailLoading,
  selectPhoneDetailProjectId,
};
