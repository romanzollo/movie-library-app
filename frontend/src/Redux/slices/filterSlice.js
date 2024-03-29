// импортируем функцию createSlice для генерации редьюсера и действия к нему
import { createSlice } from '@reduxjs/toolkit';

// создаем начальное состояние
const initialState = {
    title: '',
    director: '',
    onlyFavorite: false,
};

// создаем саму функцию генератор
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            /* создаем НОВЫЙ объект из текущего состояния т.к. изменять текущее состояние в redux нельзя */
            // return { ...state, title: action.payload };

            /* НО!!! */

            /* в redux-slices менять текущее состояние(state) можно, т.к. эта возможность предоставляется благодаря библиотеке Immer (встроенна в @reduxjs/toolkit) которая внутри формирует новый объект из измененного текущего состояния. return не нужен т.к. Immer отслеживает изменения объекта state */
            state.title = action.payload;
        },
        setDirectorFilter: (state, action) => {
            state.director = action.payload;
        },
        setOnlyFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        resetFilters: () => {
            return initialState;
        },
    },
});

export const {
    setTitleFilter,
    setDirectorFilter,
    setOnlyFavoriteFilter,
    resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectDirectorFilter = (state) => state.filter.director;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
