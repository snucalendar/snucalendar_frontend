import * as actionTypes from '../actions/actionTypes';

const initialState = {
    event_list: [],
    myEvent_list: [],
};

const EventListReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_EVENT_LIST:
            return { ...state, event_list: action.target };
        case actionTypes.GET_MYEVENT_LIST:
            return { ...state, myEvent_list: action.target };
        default:
            break;
    }
    return { ...state };
};

export default EventListReducer;
