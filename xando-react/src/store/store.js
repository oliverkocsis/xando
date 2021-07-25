import { createStore as createStoreRedux } from 'redux';
import { reducer } from './reducers'

export function createStore() {
  return createStoreRedux(reducer);
}