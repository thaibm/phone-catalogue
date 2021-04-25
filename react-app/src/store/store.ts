import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PhonesReducer, PhonesState } from './phones/phoneReducer';
import { PhonesAction } from './phones/phoneAction';

export interface RootState {
  readonly phones: PhonesState;
}

const rootReducer = combineReducers<RootState>({
  phones: PhonesReducer,
});

export type RootActions = PhonesAction; // | CommentsAction | etc.

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
  )
);
