import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch';
import phoneListReducer from 'src/features/phone/pages/list/redux';
import phoneDetailReducer from 'src/features/phone/pages/detail/redux';
import phoneCreationReducer from 'src/features/phone/pages/creation/redux';

const reducer = {
  phones: phoneListReducer,
  phoneDetail: phoneDetailReducer,
  phoneCreation: phoneCreationReducer
};

const preloadedState = {};

// const ENV_MIDDLE_WARES =
//   process.env.NODE_ENV === 'production' ? PROD_MIDDLE_WARES : DEV_MIDDLE_WARES;

// const ALL_MIDDLE_WARES = [...COMMON_MIDDLE_WARES, ...ENV_MIDDLE_WARES];

/* eslint-disable import/prefer-default-export */
export const store = configureStore({
  reducer,
  preloadedState,
  enhancers: [reduxBatch],
  middleware: [...getDefaultMiddleware(), logger]
});
