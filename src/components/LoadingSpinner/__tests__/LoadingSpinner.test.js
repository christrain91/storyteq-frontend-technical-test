import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '..';

describe('<LoadingSpinner /> Tests', () => {
  it('Should render the loading spinner with a size of 50 and an animation duration of 1s by default', () => {
    const { queryByTestId } = render(<LoadingSpinner />);
    const spinner = queryByTestId('loading-spinner');
    expect(spinner).toBeTruthy();
    expect(spinner.querySelector('svg').getAttribute('width')).toBe('50');
    expect(spinner.querySelector('svg').getAttribute('height')).toBe('50');
    expect(spinner.querySelector('animateTransform').getAttribute('dur')).toBe('1s');
  });

  it('Should render the loading spinner with a custom size', () => {
    const { queryByTestId } = render(<LoadingSpinner size={100} />);
    const spinner = queryByTestId('loading-spinner');
    expect(spinner).toBeTruthy();
    expect(spinner.querySelector('svg').getAttribute('width')).toBe('100');
    expect(spinner.querySelector('svg').getAttribute('height')).toBe('100');
  });

  it('Should render the loading spinner with a custom animation duration', () => {
    const { queryByTestId } = render(<LoadingSpinner duration={2} />);
    const spinner = queryByTestId('loading-spinner');
    expect(spinner).toBeTruthy();
    expect(spinner.querySelector('animateTransform').getAttribute('dur')).toBe('2s');
  });
});
