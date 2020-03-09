import * as actionTypes from '../actions/actionTypes';

const initialState = {
    event: {},
    pageName: '',
};

const EventReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_EVENT:
            return { ...state, event: action.target };
        case actionTypes.KEEP_PAGE:
            return { ...state, pageName: action.target };
        default:
            break;
    }
    return { ...state };
};

export default EventReducer;