import { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import API from '../../api/index'
import { RootActions, RootState } from '../store';
import { Phone } from './phoneReducer';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum PhonesActionTypes {
  FETCH_PHONES = 'FETCH_PHONES',
  FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS',
  FETCH_PHONES_FAIL = 'FETCH_PHONES_FAIL',
  // FETCH_PHONE = 'FETCH_PHONE',
  // FETCH_PHONE_SUCCESS = 'FETCH_PHONE_SUCCESS',
  // FETCH_PHONE_FAIL = 'FETCH_PHONE_FAIL',
  CREATE_PHONE = 'CREATE_PHONE',
  CREATE_PHONE_SUCCESS = 'CREATE_PHONE_SUCCESS',
  CREATE_PHONE_FAIL = 'CREATE_PHONE_FAIL',
  // EDIT_PHONE = 'EDIT_PHONE',
  // EDIT_PHONE_SUCCESS = 'EDIT_PHONE_SUCCESS',
  // EDIT_PHONE_FAIL = 'EDIT_PHONE_FAIL',
  // DELETE_PHONE = 'DELETE_PHONE',
  // DELETE_PHONE_SUCCESS = 'DELETE_PHONE_SUCCESS',
  // DELETE_PHONE_FAIL = 'DELETE_PHONE_FAIL'
}

// Fetch Phones
interface IFetchPhones {
  type: PhonesActionTypes.FETCH_PHONES;
}

interface IFetchPhonesSuccess {
  type: PhonesActionTypes.FETCH_PHONES_SUCCESS;
  payload: Phone[];
}

interface IFetchPhonesFail {
  type: PhonesActionTypes.FETCH_PHONES_FAIL;
  error: any;
}

export const fetchPhones = (): ThunkResult<void> => async dispatch => {
  handleFetchPhones(dispatch);
  try {
    const response: AxiosResponse<{ data: Phone[] }> = await API.get('v1/phones');
    handleFetchPhonesSuccess(dispatch, response.data.data);
  } catch (error) {
    handleFetchPhonesFail(dispatch, error);
  }
};

export const handleFetchPhones = (dispatch: Dispatch<IFetchPhones>) => {
  dispatch({ type: PhonesActionTypes.FETCH_PHONES });
};

export const handleFetchPhonesSuccess = (
  dispatch: Dispatch<IFetchPhonesSuccess>,
  response: Phone[]
) => {
  dispatch({
    type: PhonesActionTypes.FETCH_PHONES_SUCCESS,
    payload: response
  });
};

export const handleFetchPhonesFail = (dispatch: Dispatch<IFetchPhonesFail>, error: any) => {
  dispatch({
    type: PhonesActionTypes.FETCH_PHONES_FAIL,
    error
  });
};

// Create new Phone

interface ICreatePhone {
  type: PhonesActionTypes.CREATE_PHONE;
}

interface ICreatePhoneSuccess {
  type: PhonesActionTypes.CREATE_PHONE_SUCCESS;
  payload: Phone;
}

interface ICreatePhoneFail {
  type: PhonesActionTypes.CREATE_PHONE_FAIL;
  error: any;
}

export const createPhone = (payload: Phone): ThunkResult<void> => async dispatch => {
  handleCreatePhone(dispatch);
  try {
    const response: AxiosResponse<{ data: Phone }> = await API.post(`v1/phones`, payload);
    handleCreatePhoneSuccess(dispatch, response.data.data);
  } catch (error) {
    handleCreatePhoneFail(dispatch, error);
  }
};

const handleCreatePhone = (dispatch: Dispatch<ICreatePhone>) => {
  dispatch({ type: PhonesActionTypes.CREATE_PHONE });
};

const handleCreatePhoneSuccess = (
  dispatch: Dispatch<ICreatePhoneSuccess>,
  response: Phone
) => {
  dispatch({ type: PhonesActionTypes.CREATE_PHONE_SUCCESS, payload: response });
};

const handleCreatePhoneFail = (dispatch: Dispatch<ICreatePhoneFail>, error: any) => {
  dispatch({ type: PhonesActionTypes.CREATE_PHONE_FAIL, error });
};


// Phones Action type
export type PhonesAction = IFetchPhones | IFetchPhonesSuccess | IFetchPhonesFail
  | ICreatePhone | ICreatePhoneSuccess | ICreatePhoneFail;
  