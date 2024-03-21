import { createSlice } from '@reduxjs/toolkit';

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

export const selectMovies = (state) => state.movies;

export default movieSlice.reducer;
