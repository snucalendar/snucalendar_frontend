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
