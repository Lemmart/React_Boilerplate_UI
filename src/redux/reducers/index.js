import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const combinedReducers = combineReducers({
    Example: exampleReducer,
});

export default combinedReducers;
