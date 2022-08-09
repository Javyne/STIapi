import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        userActive: null,
        errorMessage: undefined
    },
    reducers: {
        onLoadingUsers: (state) => {
            state.users = [];
            state.userActive = null;
            state.errorMessage = undefined;
        },
        onLoadUsers: (state, {payload}) => {
            state.users = payload;
            state.userActive = null;
            state.errorMessage = undefined;
        },
        onError: (state, { payload }) => {
            state.errorMessage = payload;
        },

    }
});

export const { onLoadingUsers, onError, onLoadUsers } = usersSlice.actions;