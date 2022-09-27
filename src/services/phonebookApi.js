// import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phoneBookApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://633208cba54a0e83d24b0871.mockapi.io/' }),
  tagTypes: ['Contacts'],
  endpoints : (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts/',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts/',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phoneBookApi;