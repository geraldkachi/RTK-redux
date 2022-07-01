import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://jsonplaceholder.typicode.com` }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<[], void>({
            query: () => `users`,
            transformResponse: (res: any) => res.sort((a: any, b: any) => b.id - a.id),
            providesTags: ['Users']
        }),
        getUser: builder.query<{}, string | number>({
            query: (id) => `/user/${id}`,
            providesTags: ['Users']
        }),
        addUser: builder.mutation<any, any>({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation<void, {}>({
            query: ({ id, ...body }: any) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation<void, {}>({
            query: ({ id }: any) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: { id },
            }),
            invalidatesTags: ['Users']
        })
    }),
})
export const { useGetUsersQuery } = usersApi