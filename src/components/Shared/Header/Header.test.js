import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('Snapshot For Header Component', () => {
    const { asFragment } = render(<Header title="Test Header" />);
    expect(asFragment()).toMatchSnapshot();
});
