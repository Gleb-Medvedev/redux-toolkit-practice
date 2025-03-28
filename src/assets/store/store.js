import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './todoSlice'
import { apiSlice } from '../api/apiSlice';


export const store = configureStore({
    reducer: {
        todos: todoSliceReducer, //мой редьюсер ТУДУШЕК
        // [apiSlice.reducerPath]: apiSlice.reducer, // редьюсер для RTK Query. "[apiSlice.reducerPath]" - значит, что из объекта apiSlice берется поле reducerPath и устанавливается в качестве значения поля для объекта reducer'a stor'а. Результат на следующей строке. Так это будет выглядеть
        api: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})