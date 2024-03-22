import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import filterReducer from './slices/filterSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
    reducer: {
        movies: movieReducer,
        filter: filterReducer,
        error: errorReducer,
    },
});

export default store;
