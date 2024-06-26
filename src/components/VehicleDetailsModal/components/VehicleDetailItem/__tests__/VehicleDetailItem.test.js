import React from 'react';
import { render } from '@testing-library/react';
import VehicleDetailItem from '..';

describe('<VehicleDetailItem /> Tests', () => {
  it('Should render the label and each value with title case applied', () => {
    const { getByText } = render(<VehicleDetailItem label="My Label" values={['one', 'Two', 'three']} />);
    const label = getByText('My Label');
    const one = getByText('One');
    const two = getByText('Two');
    const three = getByText('Three');

    expect(label).toBeTruthy();
    expect(one).toBeTruthy();
    expect(two).toBeTruthy();
    expect(three).toBeTruthy();
  });
});
