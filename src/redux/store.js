import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { favoritesReducer } from './favorites/slice';
import { carsReducer } from './adverts/slice';

const rootReducer = combineReducers({
  adverts: carsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
