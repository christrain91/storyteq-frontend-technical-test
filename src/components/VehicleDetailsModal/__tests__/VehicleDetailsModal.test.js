import React from 'react';
import { render } from '@testing-library/react';
import VehicleDetailsModal from '..';

const sampleVehicle = {
  id: 'ftype',
  description: 'Pulse-quickening, pure Jaguar sports car.',
  price: '£60,000',
  media: [
    {
      name: 'vehicle',
      url: '/images/16x9/fpace_k17.jpg'
    },
    {
      name: 'vehicle',
      url: '/images/1x1/fpace_k17.jpg'
    }
  ],
  meta: {
    passengers: 2,
    drivetrain: [
      'AWD',
      'RWD'
    ],
    bodystyles: [
      'COUPÉ',
      'CONVERTIBLE'
    ],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 234
    }
  }
};

describe('<VehicleDetailsModal /> Tests', () => {
  it('Should not render a modal when no vehicle is passed', () => {
    const { queryByTestId } = render(<VehicleDetailsModal isOpen={false} vehicle={null} />);
    const modal = queryByTestId('vehicle-details-modal');
    expect(modal).toBeFalsy();
  });

  it('Should render a closed modal when a vehicle is passed but isOpen is false', () => {
    const { queryByTestId } = render(<VehicleDetailsModal isOpen={false} vehicle={sampleVehicle} />);
    const modal = queryByTestId('vehicle-details-modal');
    expect(modal).toBeTruthy();
    expect(modal.open).toBe(false);
  });

  it('Should render an open modal containing the vehicle details when a vehicle is passed and isOpen is true', () => {
    const { queryByTestId } = render(<VehicleDetailsModal isOpen vehicle={sampleVehicle} />);
    const modal = queryByTestId('vehicle-details-modal');
    expect(modal).toBeTruthy();
    expect(modal.open).toBe(true);
  });
});
