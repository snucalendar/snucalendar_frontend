import * as actionTypes from '../actions/actionTypes';

const initialState = {
    keyword: '',
    event_list: [],
    myEvent_list: [],
    searchEvent_list: [],
    posting_event_list: [],
};

const EventListReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_EVENT_LIST:
            return { ...state, event_list: action.target };
        case actionTypes.GET_MYEVENT_LIST:
            return { ...state, myEvent_list: action.target };
        case actionTypes.GET_EVENT_SEARCH_LIST:
            return { ...state, searchEvent_list: action.target };
        case actionTypes.GET_POSTING_EVENT_LIST:
            return { ...state, posting_event_list: action.target };
        case actionTypes.KEEP_KEYWORD:
            return { ...state, keyword: action.target };
        default:
            break;
    }
    return { ...state };
};

export default EventListReducer;
