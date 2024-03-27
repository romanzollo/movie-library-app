import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createMovieWithID from '../../utils/createMovieWithID';
import { setError } from './errorSlice';

const initialState = {
    movies: [],
    isLoadingViaAPI: false,
};

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
            state.movies.push(action.payload);
        },
        deleteMovie: (state, action) => {
            return {
                ...state,
                movies: state.movies.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        },
        toggleFavorite: (state, action) => {
            // через мутацию
            state.movies.forEach((movie) => {
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
        builder.addCase(fetchMovie.pending, (state) => {
            state.isLoadingViaAPI = true;
        });
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.isLoadingViaAPI = false;
            if (action.payload.title && action.payload.director) {
                state.movies.push(createMovieWithID(action.payload, 'API'));
            }
        });

        builder.addCase(fetchMovie.rejected, (state) => {
            state.isLoadingViaAPI = false;
        });
    },
});

export const { addMovie, deleteMovie, toggleFavorite } = movieSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectIsLoadingViaAPI = (state) => state.movies.isLoadingViaAPI;

export default movieSlice.reducer;
