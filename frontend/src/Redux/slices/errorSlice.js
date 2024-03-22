import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            return action.payload;

            /* другой вариант */
            // state = action.payload;
            // return state;
        },
        clearError: () => {
            return initialState;
        },
    },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMassage = (state) => state.error;

export default errorSlice.reducer;
