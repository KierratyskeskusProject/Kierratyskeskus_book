export const FETCH_BOOK_BEGIN = 'FETCH_BOOK_BEGIN';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';


export const fetchBookBegin = () => ({
  type: FETCH_BOOK_BEGIN,
});

export const fetchBookSuccess = book => ({
  type: FETCH_BOOK_SUCCESS,
  payload: { book },
});

export const fetchBookFailure = error => ({
  type: FETCH_BOOK_FAILURE,
  payload: { error },
});
