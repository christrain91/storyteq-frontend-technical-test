/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} VehicleDetailsState
 * @property {VehicleSummaryPayload} selectedVehicle The selected vehicle to display
 * @property {boolean} isOpen Whether the modal is open
 */

/**
 * @typedef {Object} ShowVehicleDetailsAction
 * @property {VehicleSummaryPayload} payload The vehicle to display
 */

export const vehicleDetailsSlice = createSlice({
  name: 'vehicleDetails',
  initialState: {
    selectedVehicle: null,
    isOpen: false
  },
  reducers: {
    /**
     * Show the vehicle details modal
     *
     * @param {VehicleDetailsState} state The current state
     * @param {ShowVehicleDetailsAction} action The action to apply
    */
    show: (state, action) => {
      state.selectedVehicle = action.payload;
      state.isOpen = true;
    },
    /**
     * Hide the vehicle details modal
     *
     * @param {VehicleDetailsState} state The current state
     */
    hide: (state) => {
      state.isOpen = false;
    }
  }
});

export const { show, hide } = vehicleDetailsSlice.actions;

export default vehicleDetailsSlice.reducer;
