import React from 'react';

// Disable import/no-extraneous-dependencies rule as we are in a test utility
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import setupStore from '../../state/store';

export function renderWithProviders (ui) {
  const store = setupStore();

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { ...render(ui, { wrapper: Wrapper }), store };
}
