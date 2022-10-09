import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import combinedReducers from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
    combinedReducers,
    composedEnhancer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
