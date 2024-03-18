import * as a from './actionTypes';

const initialState = [];

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case a.ADD_MOVIE:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default moviesReducer;
