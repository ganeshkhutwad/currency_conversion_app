/**
 * Action Creators For Home Page.
 * @author Ganesh Khutwad.
 */
import axios from 'axios';
import * as fx from 'money';

import * as types from './actionTypes';
import { getCurrencyOperationHistory } from '../../utils/currency';
import { APP_ID, CURRENCIES_LIST, ERROR_MSG } from '../../constants/currency';

// convertCurrency() Action Creator.
export const convertCurrency = obj => {
    // redux-thunk middleware to handle asynchronous operation.
    return (dispatch, getState) => {
        dispatch({
            type: types.CURRENCY_CONVERSION_INPROCESS,
            isError: false,
        });

        // API call.
        axios
            .get(
                `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}&&symbols=${CURRENCIES_LIST}`
            )
            .then(response => {
                const data = response.data;

                // loading config for `money` lib.
                fx.base = data.base;
                fx.rates = data.rates;

                // convert source currency amount to ouput currency amount.
                const convertedCurrencyValue = fx
                    .convert(obj.sourceAmount, {
                        from: obj.sourceCurrency,
                        to: obj.outputCurrency,
                    })
                    .toFixed(2);

                // read previous history from the redux state.
                // not using store object here because reading from store object
                // directly is not a good practice.
                const prevCurrencyHistory = getState().home
                    .currencyConversionHistory;

                // get new currency history based on previous history and new record.
                const currencyConversionHistory = getCurrencyOperationHistory(
                    obj,
                    prevCurrencyHistory,
                    convertedCurrencyValue
                );

                // dispatch an action with converted currency value and currency converstion history
                // so reducer will handle it and update the state.
                dispatch({
                    type: types.LOAD_CURRENCY_CONVERSION_SUCCESS,
                    convertedCurrencyValue,
                    currencyConversionHistory,
                    isError: false,
                });
            })
            .catch(error =>
                dispatch({
                    type: types.LOAD_CURRENCY_CONVERSION_FAILED,
                    isError: true,
                    errorMessage: ERROR_MSG,
                })
            );
    };
};
