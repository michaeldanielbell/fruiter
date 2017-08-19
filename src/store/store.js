import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from  '../reducers';

// @TODO Remove DevTools extension
// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default(initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
            ),
        )
    );
}
