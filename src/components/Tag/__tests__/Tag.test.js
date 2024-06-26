import React from 'react';
import { render } from '@testing-library/react';
import Tag from '..';

describe('<Tag /> Tests', () => {
  it('Should render the children', () => {
    const { getByText } = render(<Tag>Test</Tag>);
    const tagContent = getByText('Test');
    expect(tagContent).toBeTruthy();
  });
});
