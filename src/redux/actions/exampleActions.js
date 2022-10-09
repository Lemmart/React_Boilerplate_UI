import { CLEAR_EXAMPLE_REDUX_STORE, SET_EXAMPLE_DATA } from '../action-types/exampleTypes';

export const SetExampleData = (data) => ({
    type: SET_EXAMPLE_DATA,
    payload: data,
});

export const ClearExampleData = () => ({
    type: CLEAR_EXAMPLE_REDUX_STORE,
    payload: true,
});
