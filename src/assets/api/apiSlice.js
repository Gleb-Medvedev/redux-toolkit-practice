import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ //получение данных 'GET' с помощью метода fetch
        baseUrl: 'https://jsonplaceholder.typicode.com/', //ОСНОВНАЯ ссылка. БАЗОВАЯ. Полный адрес будет 'https://jsonplaceholder.typicode.com/todos', т.к. это указано в endpoints в поле getTodos и его методе query: () =>
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos',
        })
    })
})

export const { useGetTodosQuery } = apiSlice;