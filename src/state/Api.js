import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: window.reactAppBaseUrl,
  }),
  reducerPath: "publicnetApi",
  tagTypes: ["Places"],
  endpoints: (build) => ({
    getPublicPlaces: build.query({
      query: () => "api/v1/places",
      providesTags: ["Places"],
    }),
  }),
});

export const { useGetPublicPlacesQuery } = Api;
