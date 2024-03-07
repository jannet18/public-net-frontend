import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: "publicnetApi",
  tagTypes: [],
  endpoints: (build) => ({
    getPublicPlaces: build.query({
      query: () => "/pu",
    }),
  }),
});
