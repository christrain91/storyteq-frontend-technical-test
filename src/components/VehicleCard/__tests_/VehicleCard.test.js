import React from 'react';
import { render } from '@testing-library/react';
import VehicleCard from '..';

describe('<VehicleCard /> Tests', () => {
  it('Should display the vehicle information', () => {
    const vehicle = {
      id: 'ftype', price: '£36,000', media: [{ url: 'http://sample.com/image', name: 'name' }], description: 'description'
    };
    const { queryByTestId } = render(<VehicleCard vehicle={vehicle} />);

    expect(queryByTestId('vehicle-image-container').querySelector('img').src).toBe('http://sample.com/image');
    expect(queryByTestId('vehicle-name').innerHTML).toBe('FTYPE');
    expect(queryByTestId('vehicle-pricing').innerHTML).toBe('From £36,000');
    expect(queryByTestId('vehicle-description').innerHTML).toBe('description');
  });
});
