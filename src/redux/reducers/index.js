/**
 * Root reducer.
 * @author Ganesh Khutwad.
 */
import { combineReducers } from 'redux';
import home from './homeReducer';

// combine all reducers...
const rootReducer = combineReducers({
    home,
});

export default rootReducer;
