import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

test('Snapshot For PageNotFound Component', () => {
    const { asFragment } = render(<PageNotFound />);
    expect(asFragment()).toMatchSnapshot();
});
