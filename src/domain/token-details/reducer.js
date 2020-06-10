import {
    GET_TOKEN_DETAILS_REQUESTED,
    GET_TOKEN_DETAILS_SUCCEEDED,
    GET_TOKEN_DETAILS_ERROR,
} from './action-types'

export const initialState = {
    model: [],
    meta: {
        loading: false,
        error: null,
        pageId: '',
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_DETAILS_REQUESTED:
            return {
                ...state,
                meta: {
                    loading: true,
                    error: null,
                }
            };

        case GET_TOKEN_DETAILS_SUCCEEDED:
            return {
                ...state,
                model: action.payload.id,
                meta: {
                    loading: false,
                    error: null,
                }
            };

        case GET_TOKEN_DETAILS_ERROR:
            return {
                ...state,
                model: {},
                meta: {
                    loading: false,
                    error: action.payload,
                }
            };

        default:
            return state;
    }
}