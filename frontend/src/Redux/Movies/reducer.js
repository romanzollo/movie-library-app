import * as a from './actionTypes';

const initialState = [];

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case a.ADD_MOVIE:
            return [...state, action.payload];

        case a.DELETE_MOVIE:
            return state.filter((movie) => movie.id !== action.payload);

        case a.TOGGLE_FAVORITE:
            return state.map((movie) =>
                movie.id === action.payload
                    ? { ...movie, isFavorite: !movie.isFavorite }
                    : movie
            );

        default:
            return state;
    }
};

export default moviesReducer;
