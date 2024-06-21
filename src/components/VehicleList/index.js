import React from 'react';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import './style.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <section className="VehicleList" data-testid="results">
      {vehicles.map((vehicle) => (
        <VehicleCard vehicle={vehicle} key={vehicle.id} />
      ))}
    </section>
  );
}
