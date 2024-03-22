import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createMovieWithID from '../../utils/createMovieWithID';
import { setError } from './errorSlice';

const initialState = [];

export const fetchMovie = createAsyncThunk(
    'movies/fetchMovie',
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

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
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.director) {
                state.push(createMovieWithID(action.payload, 'API'));
            }
        });
    },
});

export const { addMovie, deleteMovie, toggleFavorite } = movieSlice.actions;

export const selectMovies = (state) => state.movies;

export default movieSlice.reducer;
