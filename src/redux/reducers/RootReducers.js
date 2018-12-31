import { combineReducers } from 'redux';
import fetchBookReducer from './fetchBookReducer';

export default combineReducers({
  book: fetchBookReducer,
});
