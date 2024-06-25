import React from 'react';
import { render } from '@testing-library/react';
import Modal from '..';

describe('<Modal /> Tests', () => {
  it('Should be closed while isOpen is false', () => {
    const { queryByTestId } = render(<Modal isOpen={false} onClose={() => {}} title="Test Modal">Test Content</Modal>);
    const modal = queryByTestId('modal');

    expect(modal.open).toBe(false);
  });

  it('Should be open while isOpen is true', () => {
    const { queryByTestId } = render(<Modal isOpen onClose={() => {}} title="Test Modal">Test Content</Modal>);
    const modal = queryByTestId('modal');

    expect(modal.open).toBe(true);
  });

  it('Should call onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    const { queryByTestId } = render(
      <Modal isOpen onClose={onClose} title="Test Modal">Test Content</Modal>
    );
    const closeButton = queryByTestId('modal-close-button');

    expect(onClose).not.toHaveBeenCalled();

    closeButton.click();

    expect(onClose).toHaveBeenCalled();
  });

  it('Should render the children', () => {
    const { queryByText } = render(<Modal isOpen onClose={() => { }} title="Test Modal">Test Content</Modal>);
    const content = queryByText('Test Content');
    expect(content).toBeTruthy();
  });
});
