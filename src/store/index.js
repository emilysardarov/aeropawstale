import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
import products from './products';
import orders from './order';
import user from './user';

const reducer = combineReducers({
  auth,
  cart,
  products,
  orders,
  user
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './user';
export * from './auth';
export * from './cart';
export * from './products';
export * from './order';
