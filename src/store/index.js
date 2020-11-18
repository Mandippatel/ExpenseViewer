import  { applyMiddleware,createStore} from 'redux';

import thunk from 'redux-thunk';

// reducer
import rootReducer from './reducers';

const initialState ={};

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
)

export default store;