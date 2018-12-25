import { combineReducers } from 'redux';
import fetchBookReducer from './fetchBookReducer';
import fetchWeightReducer from './fetchWeightReducer';

export default combineReducers({
  book: fetchBookReducer,
  weight: fetchWeightReducer,
});
