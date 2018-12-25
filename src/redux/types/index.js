export const FETCH_BOOK_BEGIN = 'FETCH_BOOK_BEGIN';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';

export const FETCH_WEIGHT_BEGIN = 'FETCH_WEIGHT_BEGIN';
export const FETCH_WEIGHT_SUCCESS = 'FETCH_WEIGHT_SUCCESS';
export const FETCH_WEIGHT_FAILURE = 'FETCH_WEIGHT_FAILURE';

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


export const fetchWeightBegin = () => ({
  type: FETCH_WEIGHT_BEGIN,
});

export const fetchWeightSuccess = weight => ({
  type: FETCH_WEIGHT_SUCCESS,
  payload: { weight },
});

export const fetchWeightFailure = error => ({
  type: FETCH_WEIGHT_FAILURE,
  payload: { error },
});
