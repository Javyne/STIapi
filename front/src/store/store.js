import { configureStore } from '@reduxjs/toolkit'
import { uiSlice, authSlice, usersSlice } from './'


export const store = configureStore ({
    reducer:{
        users: usersSlice.reducer,
        auth: authSlice.reducer,
        ui: uiSlice.reducer
    }
})
