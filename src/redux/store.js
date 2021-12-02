import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {TimeReducer} from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  TimeReducer,
  composeEnhancers(applyMiddleware(thunk))
);
