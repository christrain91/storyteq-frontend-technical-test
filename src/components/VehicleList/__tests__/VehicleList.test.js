import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';
import { renderWithProviders } from '../../../lib/util/testing';

jest.mock('../useData');

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', []]);
    const { queryByTestId } = renderWithProviders(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', []]);
    const { queryByTestId } = renderWithProviders(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    useData.mockReturnValue([false, false, [
      {
        id: 'ftype', price: '£36,000', media: [{ url: 'url', name: 'name' }], description: 'description'
      },
      {
        id: 'xj', price: '£40,000', media: [{ url: 'url', name: 'name' }], description: 'description'
      }
    ]]);
    const { queryByTestId } = renderWithProviders(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });

  it('Should render each of the vehicles in the results', () => {
    useData.mockReturnValue([false, false, [
      {
        id: 'ftype', price: '£36,000', media: [{ url: 'url', name: 'name' }], description: 'description'
      },
      {
        id: 'xj', price: '£40,000', media: [{ url: 'url', name: 'name' }], description: 'description'
      }
    ]]);

    const { queryByTestId, queryAllByTestId } = renderWithProviders(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
    expect(queryAllByTestId('vehicle')).toHaveLength(2);
  });

  it('Should render the vehicle details modal when a vehicle is selected', async () => {
    useData.mockReturnValue([false, false, [
      {
        id: 'ftype',
        price: '£36,000',
        media: [{ url: 'url', name: 'name' }],
        description: 'description',
        meta: {
          bodystyles: ['body1', 'body2'],
          drivetrain: ['drivetrain1', 'drivetrain2'],
          emissions: { template: 'template', value: 'value' }
        }
      }
    ]]);

    const { queryByTestId } = renderWithProviders(<VehicleList />);
    const vehicleCard = queryByTestId('vehicle');

    fireEvent.click(vehicleCard);

    expect(await screen.findByTestId('vehicle-details-modal')).not.toBeNull();
  });
});
