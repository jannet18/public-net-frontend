import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  reducerPath: "publicnetApi",
  tagTypes: ["Places", "Internet Speeds"],

  endpoints: (build) => ({
    getPublicPlaces: build.query({
      query: (searchTerm = "") =>
        `/v1/places${searchTerm ? `search=${searchTerm}` : ""}`,
      // `v1/places?search_term=${searchTerm}`,
      providesTags: ["Places"],
    }),
    getNewInternetSpeed: build.query({
      query: () => "",
      providesTags: ["Internet Speeds"],
    }),
  }),
});

export const { useGetPublicPlacesQuery } = Api;
