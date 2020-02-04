import { combineReducers } from 'redux';
import * as actionTypes from './actions/actionTypes';

const today = new Date();
const initialMainState = {
    date_calendar: [],
    month_calendar: [],
    event_list: [],
    currentYear: today.getFullYear(),
    currentMonth: today.getMonth() + 1,
    isAnyDayClicked: false, // 이거는 여기로 가져올지말지 좀더생각해보기
    clickedEvent: null,
};

function main(state=initialMainState, action=actionTypes.DEFAULT) {
    switch (action.type) {
        case actionTypes.GET_CALENDAR_DATE: // 이거 지금 안 쓰고 있음! 없애도 될 듯
            return {
                ...state,
                date_calendar: action.target
            };
        case actionTypes.GET_CALENDAR_MONTH:
            return {
                ...state,
                month_calendar: action.target
            };
        case actionTypes.CHANGE_MONTH:
            let newYear = state.currentYear;
            let newMonth = state.currentMonth + action.target;
            if (newMonth > 12) {
                newYear++;
                newMonth = newMonth - 12;
            } else if (newMonth < 1) {
                newYear--;
                newMonth = newMonth + 12;
            }
            return {
                ...state,
                currentYear: newYear,
                currentMonth: newMonth,
            };
        case actionTypes.TOGGLE_EVENT_LIST_MODAL:
            return {
                ...state,
                isAnyDayClicked: action.target, // ?
            };
        case actionTypes.SHOW_EVENT_DETAIL:
            return {
                ...state,
                clickedEvent: {},
            };
        default:
            return state;
    }
}

//calendar
const initialCalendarState = {
    date_calendar: {},
    month_calendar: [],
};

function calendar (state = initialCalendarState, action = actionTypes.DEFAULT) {
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

//event list
const initialEventListState = {
    event_list: [],
    myEvent_list: [],
    searchEvent_list: [],
};

function eventList (state = initialEventListState, action = actionTypes.DEFAULT) {
    switch (action.type) {
        case actionTypes.GET_EVENT_LIST:
            return { ...state, event_list: action.target };
        case actionTypes.GET_MYEVENT_LIST:
            return { ...state, myEvent_list: action.target };
        case actionTypes.GET_EVENT_SEARCH_LIST:
            return { ...state, searchEvent_list: action.target };
        default:
            break;
    }
    return { ...state };
};

//event
const initialEventState = {
    event: {},
};

function event (state = initialEventState, action = actionTypes.DEFAULT) {
    switch (action.type) {
        case actionTypes.GET_EVENT:
            return { ...state, event: action.target };
        default:
            break;
    }
    return { ...state };
};

//post list
const initialPostListState = {
    post_list_due: [
        {},
    ],
    post_list_post: [
        {},
    ],
};

function postList (state = initialPostListState, action = actionTypes.DEFAULT) {
    switch (action.type) {
        case actionTypes.GET_POST_LIST_DUE:
            return { ...state, post_list_due: action.target };
        case actionTypes.GET_POST_LIST_POST:
            return { ...state, post_list_post: action.target };
        default:
            break;
    }
    return { ...state };
};

//post
const initialPostState = {
    post: {},
    src: '',
};

function post (state = initialPostState, action = actionTypes.DEFAULT) {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return { ...state };
        case actionTypes.GET_POST:
            return { ...state, post: action.target };
        case actionTypes.GET_IMAGE:
            return { ...state, src: action.target };
        default:
            break;
    }
    return { ...state };
};

//user
const initialUserState = {
    username: '',
    email: '',
    info: {
      username: ''
    },
  };

  function user (state = initialUserState, action = actionTypes.DEFAULT) {
    switch (action.type) {
      case actionTypes.GET_USER:
        return {
          ...state,
          username: action.target.username,
          email: action.target.email,
        };
      case actionTypes.GET_USER_INFO:
        return {
          ...state,
          info: action.target,
        };
      default:
        break;
    }
    return { ...state };
  };

  export default combineReducers({
    main,
    calendar,
    eventList,
    event,
    postList,
    post,
    user,
})
