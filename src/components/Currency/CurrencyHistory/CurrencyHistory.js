import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../Shared/Header/Header';
import CurrencyHistoryView from './CurrencyHistoryView';

const CurrencyHistory = props => {
    return (
        <Fragment>
            <Header title="History" />
            <CurrencyHistoryView
                currencyConversionHistory={props.currencyConversionHistory}
            />
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        currencyConversionHistory: state.home.currencyConversionHistory,
    };
};

export default connect(mapStateToProps)(CurrencyHistory);

CurrencyHistory.propTypes = {
    currencyConversionHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
};
