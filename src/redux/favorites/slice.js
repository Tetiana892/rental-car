import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    adverts: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.adverts.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.adverts = state.adverts.filter(({ id }) => id !== payload);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
export const { addToFavorites, removeFavorites } = favoritesSlice.actions;
