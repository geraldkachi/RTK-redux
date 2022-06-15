import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Todos {
    userId?: number,
    id?: number | string,
    title: string,
    completed: boolean
}

console.log(`http://localhost:3500`, "http://localhost:3500")

export const todosSlice = createApi({
    reducerPath: 'todosSlice',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3500`}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<Todos[], void>({
            query: () => '/todos',
            transformResponse: (res: any) => res.sort((a: any,b: any) => b.id - a.id),
            providesTags: [`Todos`]  // providesTags for query  
        }),
        addTodo: builder.mutation<{}, Todos>({
            query: (todo)  => ({
                url: '/todos',
                method: "POST",
                body: todo
            }),
            invalidatesTags: [`Todos`]  //invalidatesTags form mutation
        }),
        // updateTodo: builder.mutation<void, Todos>({
        //     query: (todo)  => ({
        //         url: `/todos/${todo.id}`,
        //         method: "PUT",
        //         body: todo
        //     }),
        //     invalidatesTags: [`Todos`]
        // }),
        updateTodo: builder.mutation<void, Todos>({
            query: ({id, ...todo})  => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: todo
            }),
            invalidatesTags: [`Todos`]
        }),
        deleteTodo: builder.mutation< void, { id: number }>({
            query: ({ id })  => ({
                url: `/todos/${id}`,
                method: "DELETE",
                body: id
            })
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todosSlice