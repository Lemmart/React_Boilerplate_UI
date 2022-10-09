import { CLEAR_EXAMPLE_REDUX_STORE, SET_EXAMPLE_DATA } from '../action-types/exampleTypes';

const initialState = {
    data: {},
};

// eslint-disable-next-line default-param-last
function exampleReducer(state = initialState, action) {
    switch (action.type) {
    case SET_EXAMPLE_DATA:
        return {
            ...state,
            data: action.payload,
        };
    case CLEAR_EXAMPLE_REDUX_STORE:
        return {
            ...initialState,
        };
    default:
        return state;
    }
}

export default exampleReducer;
