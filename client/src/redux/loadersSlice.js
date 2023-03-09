import {createSlice} from '@reduxjs/toolkit';

export const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {
        loading : false,
    },
    reducers: {
         SetLoader: (state, action) => {
            state.loading = action.payload;
        },
    }
});

export const { SetLoader } = loadersSlice.actions;