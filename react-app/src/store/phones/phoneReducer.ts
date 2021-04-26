import { PhonesAction, PhonesActionTypes } from './phoneAction';
import { Reducer } from 'redux';

export interface Phone {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number | null;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number | string | null;
}

export interface PhonesState {
  items: Phone[];
  currentItem?: Phone;
  loading: boolean;
  error: String | null;
}

const initialState = {
  items: [],
  currentItem: {} as Phone,
  loading: false,
  error: null,
};

export const PhonesReducer: Reducer<PhonesState, PhonesAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PhonesActionTypes.FETCH_PHONES:
    case PhonesActionTypes.CREATE_PHONE:
    case PhonesActionTypes.FETCH_PHONE:
    case PhonesActionTypes.EDIT_PHONE:
      return { ...state, loading: true };

    case PhonesActionTypes.FETCH_PHONES_FAIL:
    case PhonesActionTypes.CREATE_PHONE_FAIL:
    case PhonesActionTypes.FETCH_PHONE_FAIL:
    case PhonesActionTypes.EDIT_PHONE_FAIL:
      return { items: [], loading: false, error: action.error };

    case PhonesActionTypes.CREATE_PHONE_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };

    case PhonesActionTypes.FETCH_PHONE_SUCCESS:
      return {
        ...state,
        currentItem: action.payload,
        loading: false,
      };

    case PhonesActionTypes.FETCH_PHONES_SUCCESS:
      return {
        items: [...action.payload],
        loading: false,
        error: null,
      };

    case PhonesActionTypes.DELETE_PHONE_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
