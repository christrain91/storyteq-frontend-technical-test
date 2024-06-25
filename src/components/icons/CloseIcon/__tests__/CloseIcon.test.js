import React from 'react';
import { render } from '@testing-library/react';
import CloseIcon from '..';

describe('<CloseIcon /> Tests', () => {
  it('Should render the close icon with size 24 by default', () => {
    const { queryByRole } = render(<CloseIcon />);
    const closeIcon = queryByRole('img');
    expect(closeIcon).toBeTruthy();
    expect(closeIcon.getAttribute('width')).toBe('24');
    expect(closeIcon.getAttribute('height')).toBe('24');
  });

  it('Should render the close icon with a custom size', () => {
    const { queryByRole } = render(<CloseIcon size={32} />);
    const closeIcon = queryByRole('img');
    expect(closeIcon).toBeTruthy();
    expect(closeIcon.getAttribute('width')).toBe('32');
    expect(closeIcon.getAttribute('height')).toBe('32');
  });

  it('Should render the close icon with a custom color', () => {
    const { queryByRole } = render(<CloseIcon color="red" />);
    const closeIcon = queryByRole('img');
    expect(closeIcon).toBeTruthy();
    expect(closeIcon.getAttribute('stroke')).toBe('red');
  });
});
