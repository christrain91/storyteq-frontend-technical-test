import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import LoadingSpinner from '../LoadingSpinner';
import VehicleDetailsModal from '../VehicleDetailsModal';
import { show, hide } from '../../state/slices/vehicleDetailsSlice';

import './style.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const { selectedVehicle, isOpen } = useSelector((state) => state.vehicleDetails);
  const dispatch = useDispatch();

  if (loading) {
    return <div data-testid="loading"><LoadingSpinner /></div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <section>
      <VehicleDetailsModal isOpen={isOpen} vehicle={selectedVehicle} onClose={() => dispatch(hide())} />
      <ul className="VehicleList" data-testid="results">
        {vehicles.map((vehicle) => (
          <VehicleCard onSelect={() => dispatch(show(vehicle))} vehicle={vehicle} key={vehicle.id} />
        ))}
      </ul>
    </section>
  );
}
