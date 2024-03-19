import * as a from './actionTypes';

export const addMovie = (movie) => {
    return {
        type: a.ADD_MOVIE,
        payload: movie,
    };
};

export const deleteMovie = (id) => {
    return {
        type: a.DELETE_MOVIE,
        payload: id,
    };
};

export const toggleFavorite = (id) => {
    return {
        type: a.TOGGLE_FAVORITE,
        payload: id,
    };
};
