import {combineReducers} from 'redux';

import trasationReducer from './Transactions'

export default combineReducers({
    transactions : trasationReducer,
});