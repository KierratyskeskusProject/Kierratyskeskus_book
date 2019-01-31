import {
  FETCH_BOOK_BEGIN,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE, FETCH_TEXT_BEGIN, FETCH_TEXT_FAILURE, FETCH_TEXT_SUCCESS,
} from '../types';

const initialState = {
  book: {
    isbn: '',
    title: '',
    authors: [],
    publisher: '',
    physicalDescriptions: [],
    publishedDate: '',
    msg: 'No book found',

  },
  loading: false,
  error: null,
};

const fetchBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload.book,
        error: null,
      };
    case FETCH_TEXT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TEXT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_TEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        description: action.payload.text,
        error: null,
      };
    default:
      return initialState;
  }
};


export default fetchBookReducer;
