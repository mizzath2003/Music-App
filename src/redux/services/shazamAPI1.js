import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi1 = createApi({
  reducerPath: "shazamApi1",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "37004310c7mshc6d9eb6fe5a41a0p1c0a77jsn554b78aa9864"
      );

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSongsByGenre: builder.query({
      query: (genre) =>
        `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=50`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?id=${songid}`,
    }),
  }),
});

export const { useGetSongRelatedQuery, useGetSongsByGenreQuery } = shazamApi1;
