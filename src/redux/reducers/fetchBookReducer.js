import {
  FETCH_BOOK_BEGIN,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
} from '../types';

const initialState = {
  book: {
    isbn: 'xxxxxxxxxxxxx',
    title: '',
    description: '',
    authors: [],
    publisher: '',
    pageCount: '',
    publishedDate: '',
    imageUrl: '',
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
      };
    default:
      return state;
  }
};

export default fetchBookReducer;
