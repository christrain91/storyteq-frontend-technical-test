import { configureStore } from '@reduxjs/toolkit';
import { vehicleDetailsSlice } from './slices/vehicleDetailsSlice';

export default function setupStore () {
  return configureStore({
    reducer: {
      vehicleDetails: vehicleDetailsSlice.reducer
    }
  });
}
