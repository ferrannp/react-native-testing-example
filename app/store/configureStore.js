import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

export default configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}