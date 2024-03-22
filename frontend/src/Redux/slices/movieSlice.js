import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createMovieWithID from '../../utils/createMovieWithID';

const initialState = [];

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload);
        },
        deleteMovie: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },
        toggleFavorite: (state, action) => {
            // через мутацию
            state.forEach((movie) => {
                if (movie.id === action.payload) {
                    movie.isFavorite = !movie.isFavorite;
                }
            });

            /* или  */

            // return state.map((movie) =>
            //     movie.id === action.payload
            //         ? { ...movie, isFavorite: !movie.isFavorite }
            //         : movie
            // );
        },
    },
});

export const { addMovie, deleteMovie, toggleFavorite } = movieSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:4000/random-movie');
        if (
            /* можно и с res.data &&  */ res?.data?.title &&
            res?.data?.director
        ) {
            dispatch(addMovie(createMovieWithID(res.data, 'API')));
        }
    } catch (error) {
        console.log('Error fetching random movie via API: ', error);
    }
};

export const selectMovies = (state) => state.movies;

export default movieSlice.reducer;
