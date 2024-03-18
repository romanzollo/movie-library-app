import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Movies/reducer';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

export default store;
