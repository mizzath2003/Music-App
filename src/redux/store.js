import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamCoreApi } from "./services/shazamCore";
import { shazamApi } from "./services/shazamAPI";
import { shazamApi1 } from "./services/shazamAPI1";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
    [shazamApi1.reducerPath]: shazamApi1.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi1.middleware),
});
