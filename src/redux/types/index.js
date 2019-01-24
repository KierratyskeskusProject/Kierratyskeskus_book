export const FETCH_BOOK_BEGIN = 'FETCH_BOOK_BEGIN';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';

export const FETCH_TEXT_BEGIN = 'FETCH_TEXT_BEGIN';
export const FETCH_TEXT_SUCCESS = 'FETCH_TEXT_SUCCESS';
export const FETCH_TEXT_FAILURE = 'FETCH_TEXT_FAILURE';


export const fetchBookBegin = () => ({
    type: FETCH_BOOK_BEGIN,
});

export const fetchBookSuccess = book => ({
    type: FETCH_BOOK_SUCCESS,
    payload: {book},
});

export const fetchBookFailure = error => ({
    type: FETCH_BOOK_FAILURE,
    payload: {error},
});


export const fetchTextBegin = () => ({
    type: FETCH_TEXT_BEGIN,
});

export const fetchTextSuccess = text => ({
    type: FETCH_TEXT_SUCCESS,
    payload: text,
});

export const fetchTextFailure = error => ({
    type: FETCH_TEXT_FAILURE,
    payload: {error},
});
