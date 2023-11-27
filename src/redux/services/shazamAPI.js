import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api6.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "37004310c7mshc6d9eb6fe5a41a0p1c0a77jsn554b78aa9864"
      );

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSongsByCountry: builder.query({
      query: (countryCode) =>
        `/shazam/top_tracks_country?country_code=${countryCode}`,
    }),
  }),
});

export const { useGetSongsByCountryQuery } = shazamApi;
