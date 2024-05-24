import { combineReducers } from "@reduxjs/toolkit";
import { filmsReducer } from "./reducers/filmsSlice.js";
import { singleFilmReducer } from "./reducers/singleFilmSlice.js";

export const rootReducer = combineReducers({
  films: filmsReducer,
  singleFilm: singleFilmReducer,
});
