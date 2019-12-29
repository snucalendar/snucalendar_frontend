import * as actionTypes from '../actions/actionTypes';


const initialState = {
    date_calendar: {},
    month_calendar: [],
};

const CalendarReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type) {
        case actionTypes.GET_CALENDAR_DATE:
            return { ...state, date_calendar: action.target };
        case actionTypes.GET_CALENDAR_MONTH:
            return { ...state, month_calendar: action.target };
        default:
            break;
    }
    return { ...state };
};

export default CalendarReducer;