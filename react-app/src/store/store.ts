import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PhonesReducer, PhonesState } from './phones/phoneReducer';
import { PhonesAction } from './phones/phoneAction';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import { RouterState } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export interface RootState {
  readonly phones: PhonesState;
  readonly router: RouterState;
}

const rootReducer = (history: History) => combineReducers<RootState>({
  phones: PhonesReducer,
  router: connectRouter(history)
});

export type RootActions = PhonesAction; // | CommentsAction | etc.

export const history = createBrowserHistory()

export const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>, routerMiddleware(history))
  )
);
