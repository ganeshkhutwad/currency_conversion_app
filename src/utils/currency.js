/**
 * Currency related utils.
 * @author Ganesh Khutwad.
 */
import { HISTORY_THRESHOLD } from '../constants/currency';

/**
 * To maintain last 10 currency conversions.
 * @param {*} obj
 * @param {*} prevCurrencyHistory
 * @param {*} outputAmount
 */
export const getCurrencyOperationHistory = (
    obj,
    prevCurrencyHistory,
    outputAmount
) => {
    const { sourceCurrency, sourceAmount, outputCurrency } = obj;
    const conversionRecord = {
        sourceCurrency,
        sourceAmount,
        outputCurrency,
        outputAmount,
    };

    if (prevCurrencyHistory.length === HISTORY_THRESHOLD) {
        const history = prevCurrencyHistory.slice(1);
        history.push(conversionRecord);

        return history;
    } else {
        return [...prevCurrencyHistory, conversionRecord];
    }
};
