import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IconButton from '..';
import CloseIcon from '../../../icons/CloseIcon';

describe('<IconButton /> Tests', () => {
  it('Should render the button with the correct icon', () => {
    const { getByRole } = render(<IconButton><CloseIcon /></IconButton>);
    const icon = getByRole('img');
    expect(icon).toBeTruthy();
  });

  it('Should trigger the onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<IconButton onClick={onClick}><CloseIcon /></IconButton>);
    const icon = getByRole('img');
    fireEvent.click(icon);
    expect(onClick).toHaveBeenCalled();
  });

  it('Should render the button with the correct test id', () => {
    const { getByTestId } = render(<IconButton testId="close-button"><CloseIcon /></IconButton>);
    const button = getByTestId('close-button');
    expect(button).toBeTruthy();
  });

  it('Should render the button with the correct accessibility label', () => {
    const { getByTestId } = render(<IconButton testId="close-button" label="Close"><CloseIcon /></IconButton>);
    const button = getByTestId('close-button');
    expect(button.getAttribute('aria-label')).toBe('Close');
  });
});
