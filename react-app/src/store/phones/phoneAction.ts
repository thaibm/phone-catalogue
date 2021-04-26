import { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import API from '../../api/index';
import { RootActions, RootState } from '../store';
import { Phone } from './phoneReducer';
import { Dispatch } from 'redux';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum PhonesActionTypes {
  FETCH_PHONES = 'FETCH_PHONES',
  FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS',
  FETCH_PHONES_FAIL = 'FETCH_PHONES_FAIL',

  FETCH_PHONE = 'FETCH_PHONE',
  FETCH_PHONE_SUCCESS = 'FETCH_PHONE_SUCCESS',
  FETCH_PHONE_FAIL = 'FETCH_PHONE_FAIL',

  CREATE_PHONE = 'CREATE_PHONE',
  CREATE_PHONE_SUCCESS = 'CREATE_PHONE_SUCCESS',
  CREATE_PHONE_FAIL = 'CREATE_PHONE_FAIL',

  EDIT_PHONE = 'EDIT_PHONE',
  EDIT_PHONE_SUCCESS = 'EDIT_PHONE_SUCCESS',
  EDIT_PHONE_FAIL = 'EDIT_PHONE_FAIL',
  
  DELETE_PHONE = 'DELETE_PHONE',
  DELETE_PHONE_SUCCESS = 'DELETE_PHONE_SUCCESS',
  DELETE_PHONE_FAIL = 'DELETE_PHONE_FAIL',
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

export const fetchPhones = (): ThunkResult<void> => async (dispatch) => {
  handleFetchPhones(dispatch);
  try {
    const response: AxiosResponse<{ data: Phone[] }> = await API.get(
      'v1/phones'
    );
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
    payload: response,
  });
};

export const handleFetchPhonesFail = (
  dispatch: Dispatch<IFetchPhonesFail>,
  error: any
) => {
  dispatch({
    type: PhonesActionTypes.FETCH_PHONES_FAIL,
    error,
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

export const createPhone = (
  payload: Phone,
  successCallback: () => void
): ThunkResult<void> => async (dispatch) => {
  handleCreatePhone(dispatch);
  try {
    const response: AxiosResponse<Phone> = await API.post(`v1/phones`, payload);
    handleCreatePhoneSuccess(dispatch, response.data);
    successCallback();
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

const handleCreatePhoneFail = (
  dispatch: Dispatch<ICreatePhoneFail>,
  error: any
) => {
  dispatch({ type: PhonesActionTypes.CREATE_PHONE_FAIL, error });
};

// DELETE Phone

interface IDeletePhone {
  type: PhonesActionTypes.DELETE_PHONE;
}

interface IDeletePhoneSuccess {
  type: PhonesActionTypes.DELETE_PHONE_SUCCESS;
  payload: number;
}

interface IDeletePhoneFail {
  type: PhonesActionTypes.DELETE_PHONE_FAIL;
}

export const deletePhone = (
  deletedId: number,
  successCallback: () => void
): ThunkResult<void> => async (dispatch) => {
  dispatch({ type: PhonesActionTypes.DELETE_PHONE });
  try {
    await API.delete(`v1/phones/${deletedId}`);
    dispatch({
      type: PhonesActionTypes.DELETE_PHONE_SUCCESS,
      payload: deletedId,
    });
    successCallback();
  } catch (e) {
    dispatch({ type: PhonesActionTypes.DELETE_PHONE_FAIL });
  }
};

// FETCH Phone

interface IFetchPhone {
  type: PhonesActionTypes.FETCH_PHONE;
}

interface IFetchPhoneSuccess {
  type: PhonesActionTypes.FETCH_PHONE_SUCCESS;
  payload: Phone;
}

interface IFetchPhoneFail {
  type: PhonesActionTypes.FETCH_PHONE_FAIL;
  error: any;
}

export const fetchPhone = (id: number): ThunkResult<void> => async (
  dispatch
) => {
  handleFetchPhone(dispatch);
  try {
    const response: AxiosResponse<{ data: Phone }> = await API.get(
      `v1/phones/${id}`
    );
    handleFetchPhoneSuccess(dispatch, response.data.data);
  } catch (e) {
    handleFetchPhoneFail(dispatch, e);
  }
};

export const handleFetchPhone = (dispatch: Dispatch<IFetchPhone>) => {
  dispatch({ type: PhonesActionTypes.FETCH_PHONE });
};

const handleFetchPhoneSuccess = (
  dispatch: Dispatch<IFetchPhoneSuccess>,
  response: Phone
) => {
  dispatch({
    type: PhonesActionTypes.FETCH_PHONE_SUCCESS,
    payload: response,
  });
};

const handleFetchPhoneFail = (
  dispatch: Dispatch<IFetchPhoneFail>,
  error: any
) => {
  dispatch({
    type: PhonesActionTypes.FETCH_PHONE_FAIL,
    error,
  });
};

// EDIT Phone

interface IEditPhone {
  type: PhonesActionTypes.EDIT_PHONE;
}

interface IEditPhoneSuccess {
  type: PhonesActionTypes.EDIT_PHONE_SUCCESS;
  payload: Phone;
}

interface IEditPhoneFail {
  type: PhonesActionTypes.EDIT_PHONE_FAIL;
  error: any;
}

export const editPhone = (
  editedPhone: Phone,
  successCallback: () => void
): ThunkResult<void> => async (dispatch) => {
  handleEditPhone(dispatch);
  try {
    const response: AxiosResponse<Phone> = await API.put(
      `v1/phones/${editedPhone.id}`,
      editedPhone
    );
    handleEditPhoneSuccess(dispatch, response.data);
    successCallback();
  } catch (e) {
    handleEditPhoneFail(dispatch, e);
  }
};

const handleEditPhone = (dispatch: Dispatch<IEditPhone>): void => {
  dispatch({ type: PhonesActionTypes.EDIT_PHONE });
};

const handleEditPhoneSuccess = (
  dispatch: Dispatch<IEditPhoneSuccess>,
  editedPhone: Phone
) => {
  dispatch({
    type: PhonesActionTypes.EDIT_PHONE_SUCCESS,
    payload: editedPhone,
  });
};

const handleEditPhoneFail = (
  dispatch: Dispatch<IEditPhoneFail>,
  error: any
) => {
  dispatch({ type: PhonesActionTypes.EDIT_PHONE_FAIL, error });
};

// Phones Action type
export type PhonesAction =
  | IFetchPhones
  | IFetchPhonesSuccess
  | IFetchPhonesFail
  | ICreatePhone
  | ICreatePhoneSuccess
  | ICreatePhoneFail
  | IDeletePhone
  | IDeletePhoneSuccess
  | IDeletePhoneFail
  | IFetchPhone
  | IFetchPhoneSuccess
  | IFetchPhoneFail
  | IEditPhone
  | IEditPhoneFail;
