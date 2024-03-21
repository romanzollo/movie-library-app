import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
    reducer: {
        movies: movieReducer,
        filter: filterReducer,
    },
});

export default store;
