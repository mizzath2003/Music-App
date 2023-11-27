import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8eb3e4c348msh6a6cd4a79e4085ap1eec94jsn046a7082c51a",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

fetch("https://shazam.p.rapidapi.com/charts/track", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err)); */

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "37004310c7mshc6d9eb6fe5a41a0p1c0a77jsn554b78aa9864"
      );

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
    getArtistSongs: builder.query({
      query: (artistId) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
