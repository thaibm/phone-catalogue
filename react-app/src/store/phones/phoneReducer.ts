import { PhonesAction, PhonesActionTypes } from './phoneAction';
import { Reducer } from 'redux';

export interface Phone {
  id?: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number | null;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number | null;
}

export interface PhonesState {
  items: Phone[];
  loading: boolean;
  error: String | null
}

const initialState = {
  items: [],
  loading: false,
  error: null
};

export const PhonesReducer: Reducer<PhonesState, PhonesAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    // case PhonesActionTypes.FETCH_Phone:
    case PhonesActionTypes.FETCH_PHONES:
    case PhonesActionTypes.CREATE_PHONE:
      // case PhonesActionTypes.EDIT_Phone:
      return { ...state, loading: true };

    // case PhonesActionTypes.FETCH_Phone_FAIL:
    case PhonesActionTypes.FETCH_PHONES_FAIL:
    case PhonesActionTypes.CREATE_PHONE_FAIL:
      return { items: [], loading: false, error: action.error };

    // case PhonesActionTypes.FETCH_Phone_SUCCESS:
    case PhonesActionTypes.CREATE_PHONE_SUCCESS:
      console.log(`action`, action);
      return {
        ...state,
        items: { ...state.items, action },
        loading: false
      };

    case PhonesActionTypes.FETCH_PHONES_SUCCESS:
      return {
        items: [...action.payload],
        loading: false,
        error: null
      };

    // case PhonesActionTypes.DELETE_Phone_SUCCESS:
    //   return {
    //     ...state,
    //     items: { ..._.omit(state.items, action.payload) }
    //   };

    default:
      return state;
  }
};
