import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api6.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        /* "Your_API_key_here" */
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
