/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const vehicleDetailsSlice = createSlice({
  name: 'vehicleDetails',
  initialState: {
    selectedVehicle: null,
    isOpen: false
  },
  reducers: {
    show: (state, action) => {
      state.selectedVehicle = action.payload;
      state.isOpen = true;
    },
    hide: (state) => {
      state.isOpen = false;
    }
  }
});

export const { show, hide } = vehicleDetailsSlice.actions;

export default vehicleDetailsSlice.reducer;
