import * as a from './actionTypes';

export const addMovie = (movie) => ({
    type: a.ADD_MOVIE,
    payload: movie,
});
