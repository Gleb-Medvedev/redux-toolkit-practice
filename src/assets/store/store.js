import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './todoSlice'
import { apiSlice } from '../api/apiSlice';


export const store = configureStore({
    reducer: {
        todos: todoSliceReducer, //мой редьюсер ТУДУШЕК
        [apiSlice.reducerPath]: apiSlice.reducer, // Новый редюсер для RTK Query
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})