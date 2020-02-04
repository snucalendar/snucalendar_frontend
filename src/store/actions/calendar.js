import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getCalendarDate_ = (date) => ({
    type: actionTypes.GET_CALENDAR_DATE,
    target: date,
});

export const getCalendarDate = (year, month, date) => (dispatch) => axios.get(`/api/calendar/${year}/${month}/${date}/`)
    .then((res) => {
        dispatch(getCalendarDate_(res.data));
        return res;
    });

export const getCalendarMonth_ = (month) => ({
    type: actionTypes.GET_CALENDAR_MONTH,
    target: month,
});

export const getCalendarMonth = (year, month) => (dispatch) => axios.get(`/api/calendar/${year}/${month}/`)
    .then((res) => {
        dispatch(getCalendarMonth_(res.data));
        return res;
    });

const changeMonth_ = (increment) => ({
    type: actionTypes.CHANGE_MONTH,
    target: increment,
});

export const changeMonth = (increment, newYear, newMonth) => (dispatch) => { // 뭔가 이렇게 하는 거 맞나..ㅠㅠ
    dispatch(changeMonth_(increment));
    return increment;
}

const toggleEventListModal_ = (isClicked) => ({
    type: actionTypes.TOGGLE_EVENT_LIST_MODAL,
    target: isClicked,
});

export const toggleEventListModal = (isClicked) => (dispatch) => {
    dispatch(toggleEventListModal_());
    return isClicked;
}

const showEventDetail_ = () => ({
    type: actionTypes.SHOW_EVENT_DETAIL,
    target: '',
});

export const showEventDetail = () => (dispatch) => {
    dispatch(showEventDetail_());
    return;
}
