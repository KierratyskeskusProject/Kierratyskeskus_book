import {combineReducers} from 'redux';
import fetchBookReducer from './fetchBookReducer';
import {fetchTextReducer} from './fetchTextReducer'

export default combineReducers({
    book: fetchBookReducer,
    text: fetchTextReducer,
});
