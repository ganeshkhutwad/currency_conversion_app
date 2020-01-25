import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

import { render } from '@testing-library/react';
import App from './App';

const store = configureStore();

test('renders app header', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
    const linkElement = getByText('Currency Conversion App');
    expect(linkElement).toBeInTheDocument();
});
