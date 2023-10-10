import { createSlice } from '@reduxjs/toolkit';

const getFavorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return storedFavorites;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: getFavorites(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      const newFavorites = action.payload;
      const updateFavorites = [...state.favorites, newFavorites];
      localStorage.setItem('favorites', JSON.stringify(updateFavorites));
      state.favorites = updateFavorites;
    },
    removeFavorites: (state, action) => {
      const removedId = action.payload;
      const filteredFavorites = state.favorites.filter(
        advert => advert.id !== removedId
      );
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      state.favorites = filteredFavorites;
    },
  },
});

export const { addToFavorites, removeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export default favoritesSlice.reducer;
