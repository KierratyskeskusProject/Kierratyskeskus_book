import {
    FETCH_TEXT_FAILURE,
    FETCH_TEXT_SUCCESS,
    FETCH_TEXT_BEGIN
} from '../types';

const initialState = {
    text: '',
    loading: false,
    error: null,
};

export const fetchTextReducer = (state = initialState, action) => {
    switch (action.type) {
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
                book: action.payload.text,
                error: null,
            };
        default:
            return initialState;
    }
};
