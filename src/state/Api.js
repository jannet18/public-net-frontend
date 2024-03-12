import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  reducerPath: "publicnetApi",
  tagTypes: ["Places"],
  endpoints: (build) => ({
    getPublicPlaces: build.query({
      query: (searchTerm = "") =>
        // `/v1/places${searchTerm ? `search=${searchTerm}` : ""}`,
        `v1/places?search_term=${searchTerm}`,
      providesTags: ["Places"],
    }),
  }),
});

export const { useGetPublicPlacesQuery } = Api;
