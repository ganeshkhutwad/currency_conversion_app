import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

const CurrencyHistoryView = ({ currencyConversionHistory }) => {
    if (currencyConversionHistory.length) {
        return (
            <Table striped bordered hover data-testid="historyRecords">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Source Currency</th>
                        <th>Source Amount</th>
                        <th>Output Currency</th>
                        <th>Output Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {currencyConversionHistory.map((record, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{record.sourceCurrency}</td>
                            <td>{record.sourceAmount}</td>
                            <td>{record.outputCurrency}</td>
                            <td>{record.outputAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    } else {
        return (
            <div data-testid="noRecords" style={{ textAlign: 'center' }}>
                No records yet...
            </div>
        );
    }
};

export default CurrencyHistoryView;

CurrencyHistoryView.propTypes = {
    currencyConversionHistory: PropTypes.arrayOf(
        PropTypes.shape({
            sourceCurrency: PropTypes.string.isRequired,
            sourceAmount: PropTypes.string.isRequired,
            outputCurrency: PropTypes.string.isRequired,
            outputAmount: PropTypes.string.isRequired,
        })
    ).isRequired,
};
