/**
 * Home Page Reducer.
 * @author Ganesh Khutwad.
 */
import * as types from '../actions/actionTypes';

// initial state.
const initialState = {
    convertedCurrencyValue: '',
    currencyConversionHistory: [],
    isError: false,
    errorMessage: '',
};

// switch cases for action types.
export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case types.CURRENCY_CONVERSION_INPROCESS: {
            return {
                ...state,
                isError: action.isError,
            };
        }

        case types.LOAD_CURRENCY_CONVERSION_SUCCESS: {
            return {
                ...state,
                convertedCurrencyValue: action.convertedCurrencyValue,
                currencyConversionHistory: action.currencyConversionHistory,
                isError: action.isError,
            };
        }

        case types.LOAD_CURRENCY_CONVERSION_FAILED: {
            return {
                ...state,
                isError: action.isError,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state;
    }
}
