import { configureStore } from '@reduxjs/toolkit';
import { vehicleDetailsSlice } from './slices/vehicleDetailsSlice';

/**
 * Setup the Redux store
 *
 * @returns {import('@reduxjs/toolkit').Store}
 */
export default function setupStore () {
  return configureStore({
    reducer: {
      vehicleDetails: vehicleDetailsSlice.reducer
    }
  });
}
