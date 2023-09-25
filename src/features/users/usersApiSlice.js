import { apiSlice } from "../../app/api/appSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUserQuery } = usersApiSlice;
