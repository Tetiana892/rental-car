import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operation';

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected);
  },
});

export const carsReducer = carsSlice.reducer;
