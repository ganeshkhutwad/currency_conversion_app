import React from 'react';
import { render } from '@testing-library/react';
import CurrencyHistoryView from './CurrencyHistoryView';

test('Snapshot For CurrencyHistoryView Component', () => {
    const currencyConversionHistory = [
        {
            sourceCurrency: 'USD',
            sourceAmount: '200',
            outputCurrency: 'EUR',
            outputAmount: '181.40',
        },
    ];
    const { asFragment } = render(
        <CurrencyHistoryView
            currencyConversionHistory={currencyConversionHistory}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});
