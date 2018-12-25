import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'; // middleware
import rootReducer from './reducers/RootReducers';

export default function configureStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
   composeEnhancers(applyMiddleware(thunk),)
  );
}
